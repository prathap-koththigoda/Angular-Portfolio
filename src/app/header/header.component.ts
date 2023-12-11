import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const header = document.getElementById('header');
    const offset = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (offset > 0) {
      header?.classList.add('solid-background');
    } else {
      header?.classList.remove('solid-background');
    }
  }
}
