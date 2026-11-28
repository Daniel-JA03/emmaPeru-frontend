import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { NewsCard, NewsItem } from '../../components/news-card/news-card';
import { CollaboratorCard, CollaboratorItem } from '../../components/collaborator-card/collaborator-card';
import { SponsorMarca } from '../../components/sponsor-marca/sponsor-marca';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, Hero, NewsCard, CollaboratorCard, SponsorMarca],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  latestNews: NewsItem[] = [
    {
      id: 1,
      title: 'Arranca la Temporada Oficial EMMA Perú 2026 en Lima',
      date: '15 de Noviembre, 2026',
      region: 'EMMA PERÚ',
      category: 'INFORME DEL EVENTO',
      excerpt: 'Conoce las fechas confirmadas, categorías abiertas y requisitos técnicos para participar en la primera válida nacional.',
      image: '/images/noticia-1.jpg',
      route: '/news',
    },
    {
      id: 2,
      title: 'Nuevo Reglamento Técnico y Pistas Oficiales 2026',
      date: '08 de Noviembre, 2026',
      region: 'EMMA GLOBAL',
      category: 'REGLAMENTO',
      excerpt: 'Revisa las actualizaciones de juzgamiento en Sound Quality, ESQL y Multimedia alineadas con EMMA Global.',
      image: '/images/noticia-2.jpg',
      route: '/competition/rules',
    },
    {
      id: 3,
      title: 'Capacitación Oficial para Jueces e Instaladores en Perú',
      date: '02 de Noviembre, 2026',
      region: 'EMMA PERÚ',
      category: 'COMUNIDAD',
      excerpt: 'Certifícate con instructores internacionales y lleva el nivel de tus instalaciones de audio automotriz al siguiente nivel.',
      image: '/images/noticia-3.jpg',
      route: '/about/sobre-nosotros',
    },
  ];

  collaborators: CollaboratorItem[] = [
    {
      id: 1,
      countryLabel: 'Spain',
      name: 'EMMA Spain',
      contact: 'Jose Antonio Fernandez Combarros',
      address: ['EMMA PERFORMANCE GROUP SL', 'Calle Josep Galtes, 22', 'Igualada 08700, Spain'],
      websiteUrl: 'https://emma-spain.com',
      websiteLabel: 'emma-spain.com',
    },
    {
      id: 2,
      countryLabel: 'Brasil',
      name: 'EMMA Brasil',
      contact: 'Lauro Ricardo de Castro',
      address: ['Alameda do Ipe, Qd 7 Lt 6, Res Roses Garden', 'Anápolis GO – Brasil 75103-831', 'Brazil'],
      workPhone: '+55 (64) 99248-8603',
      email: 'contato@emmabrasil.com.br',
      websiteUrl: 'https://emmabrasil.com.br',
      websiteLabel: 'emmabrasil.com.br',
    },
    {
      id: 3,
      countryLabel: 'Mexico',
      name: 'EMMA Mexico',
      address: ['Av Patria # 3120-A', 'Col. Villa Vicente Guerrero', 'Guadalajara, Jalisco 44987, Mexico'],
      workPhone: '5213316102872',
      email: 'admin@emmamx.com',
      websiteUrl: 'https://emmanet.info',
      websiteLabel: 'Red EMMA México',
    },
  ];
}
