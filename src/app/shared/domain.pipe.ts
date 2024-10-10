import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    try {
      const url = new URL(value);
      // Remove 'www.' prefix if present
      return url.hostname.replace(/^www\./, '');
    } catch (error) {
      // Handle invalid URLs gracefully
      console.error(`Invalid URL: ${value}`);
      return value;
    }
  }
}