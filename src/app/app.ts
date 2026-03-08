import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/public/image.png" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home />
      </section>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app-pmg');
}
