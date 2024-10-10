import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostListComponent } from './post-list.component';
import { HackernewsService } from '../../services/hackernews.service';
import { of } from 'rxjs';
import { ElementRef } from '@angular/core';

// Mock the HackernewsService
class MockHackernewsService {
  getNewPostIds() {
    return of([1, 2, 3, 4, 5]); // Mocking a response for post IDs
  }
  
  getPostsByIds(ids: number[]) {
    // Mocking a response for posts based on the IDs
    return of(ids.map(id => ({ id, title: `Post ${id}` }))); 
  }
}

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let hackernewsService: HackernewsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      providers: [
        { provide: HackernewsService, useClass: MockHackernewsService } // Use the mock service
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    hackernewsService = TestBed.inject(HackernewsService);
  });

  beforeEach(() => {
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create the component', () => {
    expect(component).toBeTruthy(); // Test if the component is created
  });

  it('should fetch post IDs on init', () => {
    spyOn(hackernewsService, 'getNewPostIds').and.callThrough(); // Spy on the method to check if it gets called
    component.ngOnInit(); // Call ngOnInit
    expect(hackernewsService.getNewPostIds).toHaveBeenCalled(); // Expect it to be called
    expect(component.postIds.length).toBeGreaterThan(0); // Check that postIds are populated
  });

  it('should load more posts', () => {
    component.postIds = [1, 2, 3, 4, 5]; // Set mock IDs
    component.loadMorePosts(); // Call loadMorePosts

    expect(component.posts.length).toBe(5); // Expect posts to be loaded
    expect(component.currentIndex).toBe(20); // Check that the current index is updated
  });

  it('should observe the last post', () => {
    const anchor = new ElementRef(document.createElement('div')); // Create a mock anchor element
    component.anchor = anchor; // Assign it to the component
    component.observeLastPost(); // Call observeLastPost

    const observer = component['observer']; // Access the private observer property
    expect(observer).toBeDefined(); // Expect the observer to be defined
  });
});
