import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostItemComponent } from './post-item.component';
import { Post } from '../../models/post.model';
import { By } from '@angular/platform-browser';
import { DomainPipe } from 'src/app/shared/domain.pipe';

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItemComponent,DomainPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    const mockPost: Post = {
      id: 1,
      by: 'testuser',
      descendants: 0,
      kids: [],
      score: 10,
      time: 1609459200,
      title: 'Test Post',
      type: 'story',
      url: 'https://example.com',
    };
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should display the post title', () => {
    const titleElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(titleElement.textContent).toContain('Test Post');
  });

  it('should display the post details', () => {
    const detailsElement = fixture.debugElement.query(By.css('div.post-info')).nativeElement;
    expect(detailsElement.textContent).toContain('by testuser');
    expect(detailsElement.textContent).toContain('Jan 1, 2021');
  });
});
