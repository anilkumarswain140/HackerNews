import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() post!: Post; // The single post object
  @Input() serialNumber!: number; // The serial number of the post
  @Output() domainClicked: EventEmitter<string> = new EventEmitter<string>(); // Emit the domain name click functionality

  onDomainClick(domain: string): void {
    this.domainClicked.emit(domain);
  }
}
