import { Component, OnInit, ElementRef, ViewChild, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { HackernewsService } from '../../services/hackernews.service';
import { finalize } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postIds: number[] = [];
  posts: Post[] = [];
  filteredPosts: Post[] = [];  // Add filtered posts array
  batchSize: number = 20;
  currentIndex: number = 0;
  isLoading: boolean = false;
  private observer!: IntersectionObserver;
  @ViewChild('anchor') anchor!: ElementRef<HTMLElement>;
  selectedDomain: any;  // Add a variable to store the selected domain

  constructor(private hackernewsService: HackernewsService, @Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchPostIds();
  }

  fetchPostIds(): void {
    this.hackernewsService.getNewPostIds().subscribe(ids => {
      this.postIds = ids;
      this.loadMorePosts();  // Load the first batch of posts
    });
  }

  loadMorePosts(): void {
    if (this.isLoading || this.currentIndex >= this.postIds.length) return;  // Prevent loading if already loading or all posts are loaded
    this.isLoading = true;

    const nextBatch = this.postIds.slice(this.currentIndex, this.currentIndex + this.batchSize);
    this.hackernewsService.getPostsByIds(nextBatch)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
        next: (fetchedPosts) => {
          this.posts = [...this.posts, ...fetchedPosts.filter(post => post !== null)];
          this.filteredPosts = this.applyDomainFilter();
          this.currentIndex += this.batchSize;

          // Call observeLastPost only after new posts are added
          this.observeLastPost();
        },
        error: (err) => {
          console.error('Error fetching posts:', err);
        }
      });
  }

  onDomainClick(domain: string): void {
    // Only the domain name should be passed here, e.g., "cnn.com"
    this.selectedDomain = this.extractDomain(domain);
    this.filteredPosts = this.applyDomainFilter();
  }

  applyDomainFilter(): Post[] {
    if (this.selectedDomain) {
      this.posts = this.posts.filter(post => {
        const postDomain = this.extractDomain(post.url);
        return postDomain === this.selectedDomain;
      });
    }
    return this.posts;
  }

  // Function to extract domain from a full URL
  extractDomain(value: string): string {
    try {
      const url = new URL(value);
      return url.hostname.replace(/^www\./, '');
    } catch (error) {
      console.error(`Invalid URL: ${value}`);
      return value;
    }
  }

  observeLastPost(): void {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        root: null,
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.loadMorePosts();
        }
      }, options);

      // Make sure to observe only if anchor is present
      if (this.anchor) {
        observer.observe(this.anchor.nativeElement);
      }
    }
  }

  // Clear the domain filter and posts
  clearDomainFilter(): void {
    this.selectedDomain = null;
    this.filteredPosts = this.applyDomainFilter();
  }
}
