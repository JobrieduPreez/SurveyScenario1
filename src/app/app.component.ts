import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header>
      <nav>
        <h1>{{ title }}</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <main class="content">
      <section class="intro">
        <h2>Welcome to My Blog</h2>
        <p>Sharing thoughts on technology, coding, and life.</p>
      </section>
      
      <section class="blog-posts">
        <article class="post">
          <h3>Blog Post Title</h3>
          <p>Content here</p>
        </article>
        <article class="post">
          <h3>Another Blog Post</h3>
          <p>Content here</p>
        </article>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 My Blog. All rights reserved.</p>
    </footer>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Blog';
}
