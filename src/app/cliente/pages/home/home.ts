import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { NewsCard, NewsItem } from '../../components/news-card/news-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, NewsCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  latestNews: NewsItem[] = [
    {
      id: 1,
      title: 'Arranca la Temporada Oficial EMMA Perú 2026 en Lima',
      date: '15 de Noviembre, 2026',
      category: 'Competencia',
      excerpt: 'Conoce las fechas confirmadas, categorías abiertas y requisitos técnicos para participar en la primera válida nacional.',
      image: '/images/noticia-1.jpg',
      route: '/news',
    },
    {
      id: 2,
      title: 'Nuevo Reglamento Técnico y Pistas Oficiales 2026',
      date: '08 de Noviembre, 2026',
      category: 'Reglamento',
      excerpt: 'Revisa las actualizaciones de juzgamiento en Sound Quality, ESQL y Multimedia alineadas con EMMA Global.',
      image: '/images/noticia-2.jpg',
      route: '/competition/rules',
    },
    {
      id: 3,
      title: 'Capacitación Oficial para Jueces e Instaladores en Perú',
      date: '02 de Noviembre, 2026',
      category: 'Comunidad',
      excerpt: 'Certifícate con instructores internacionales y lleva el nivel de tus instalaciones de audio automotriz al siguiente nivel.',
      image: '/images/noticia-3.jpg',
      route: '/about/sobre-nosotros',
    },
  ];
}
