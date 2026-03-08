import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
      <main>
        <header class="brand-name">
          <a [routerLink]="['/']">
            <img class="brand-logo" src="/logo.svg" alt="logo" aria-hidden="true" />
          </a>
        </header>
        <section class="content">
         <router-outlet />
        </section>
      </main>
    `,
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('first-app-pmg');
}
