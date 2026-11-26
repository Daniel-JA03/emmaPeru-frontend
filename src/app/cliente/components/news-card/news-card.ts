import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  region?: string;
  category: string;
  excerpt: string;
  image: string;
  route: string;
  categoryRoute?: string;
}

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-card.html',
  styleUrl: './news-card.scss',
})
export class NewsCard {
  news = input.required<NewsItem>();
}
