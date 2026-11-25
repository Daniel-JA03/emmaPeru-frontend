import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HeroSlide {
  image: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryText: string;
  primaryRoute: string;
  secondaryText: string;
  secondaryRoute: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  currentIndex = signal(0);
  private intervalId: any;

  slides: HeroSlide[] = [
    {
      image: '/images/hero-1.avif',
      badge: 'TEMPORADA OFICIAL 2026',
      title: 'La máxima competencia de',
      highlight: 'Car Audio en Perú',
      description: 'Únete a la red internacional de sonido automotriz, calidad acústica y tuning bajo los estándares oficiales de EMMA Global.',
      primaryText: 'Inscribirme ahora',
      primaryRoute: '/competition/inscription',
      secondaryText: 'Ver calendario 2026',
      secondaryRoute: '/competition/calendar',
    },
    {
      image: '/images/hero-2.avif',
      badge: 'REGLAMENTO 2026',
      title: 'Precisión acústica y',
      highlight: 'Potencia sin límites',
      description: 'Conoce las nuevas categorías de Sound Quality, Multimedia, ESQL y Tuning para la temporada nacional.',
      primaryText: 'Leer reglamento',
      primaryRoute: '/competition/rules',
      secondaryText: 'Resultados oficiales',
      secondaryRoute: '/competition/resultlists',
    },
    {
      image: '/images/hero-3.avif',
      badge: 'COMUNIDAD EMMA PERÚ',
      title: 'Conecta con los mejores',
      highlight: 'Instaladores y jueces',
      description: 'Forma parte de los eventos más importantes del país y representa al Perú en las finales internacionales.',
      primaryText: 'Sobre nosotros',
      primaryRoute: '/about/sobre-nosotros',
      secondaryText: 'Patrocinadores',
      secondaryRoute: '/sponsors',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentIndex.update((i) => (i + 1) % this.slides.length);
  }

  prevSlide() {
    this.currentIndex.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
