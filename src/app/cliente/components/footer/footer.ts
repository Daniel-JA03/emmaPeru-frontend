import { CommonModule } from '@angular/common';
import { Component, computed, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// =====================================================
// INTERFACES
// =====================================================

interface FooterLink {
  label: string;
  route?: string; // Para rutas internas de Angular
  url?: string; // Para URLs externas
  external?: boolean; // true si es enlace externo
}

interface ContactInfo {
  street: string;
  city: string;
  country: string;
  phone: string;
  workPhone: string;
  email: string;
}

interface UpcomingEvent {
  id: number;
  title: string;

  // Fecha completa en formato ISO.
  // Ejemplo: 2026-12-12T09:00:00
  startDate: string;

  location: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// =====================================================
// COMPONENTE FOOTER
// =====================================================

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  // ===================================================
  // 1. LINKS
  // ===================================================

  links: FooterLink[] = [
    { label: 'CarMediaWorld', url: 'https://www.carmediaworld.eu/', external: true },
    { label: 'EMMA España', url: 'https://www.emma-spain.com/', external: true },
    { label: 'EMMA Brasil', url: 'https://emmabrasil.com.br/', external: true },
    { label: 'EMMA Mexico', url: 'https://emmanet.info/', external: true },
  ];

  // ===================================================
  // 2. INFORMACIÓN DE CONTACTO
  // ===================================================

  // TODO: Reemplazar los datos de EMMA Global por los
  // datos oficiales de contacto de EMMA Peru.

  contact: ContactInfo = {
    street: 'Prol. Sánchez Carrión Mz B Lote 12 Urb. Los Portales',
    city: 'Trujillo, La Libertad',
    country: 'Peru',
    workPhone: '+51 992 710 604',
    phone: '+51 937 006 907',
    email: 'cris2293@gmail.com',
  };

  // ===================================================
  // 3. UPCOMING EVENTS
  // ===================================================

  /*
   * DATOS TEMPORALES:
   * Estos eventos son únicamente para desarrollar
   * y visualizar el frontend.
   *
   * FUTURA IMPLEMENTACIÓN:
   * Crear EventService para consumir:
   *
   * GET /api/events/upcoming
   *
   * El backend Spring Boot consultará MySQL y devolverá
   * únicamente los eventos publicados cuya fecha de
   * inicio todavía no haya pasado.
   *
   * Angular recibirá la respuesta y actualizará la
   * sección automáticamente.
   */

  private readonly events = signal<UpcomingEvent[]>([
    {
      id: 1,
      title: 'EMMA Israel',
      startDate: '2026-12-12T09:00:00',
      location: 'Israel',
    },
    {
      id: 2,
      title: 'International Head Judge Training',
      startDate: '2027-03-31T09:00:00',
      location: 'Europe',
    },
    {
      id: 3,
      title: 'EMMA European Championships',
      startDate: '2027-04-02T10:00:00',
      location: 'Europe',
    },
    {
      id: 4,
      title: 'EMMA World Finals',
      startDate: '2027-06-15T09:00:00',
      location: 'International',
    },
  ]);

  /*
   * LÓGICA TEMPORAL DEL FRONTEND:
   *
   * 1. Obtener la fecha actual.
   * 2. Filtrar los eventos cuya fecha no haya pasado.
   * 3. Ordenarlos del más próximo al más lejano.
   * 4. Mostrar solamente los primeros tres.
   *
   * IMPORTANTE:
   * Esta lógica es provisional. En producción,
   * el filtrado y ordenamiento principal se realizarán
   * en el backend.
   */

  readonly upcomingEvents = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.events()
      .filter((event) => {
        const eventDate = new Date(event.startDate);
        return eventDate >= today;
      })
      .sort((a, b) => {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      })
      .slice(0, 3);
  });

  // ===================================================
  // 4. REDES SOCIALES
  // ===================================================

  socials: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'bi bi-facebook',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'bi bi-instagram',
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com',
      icon: 'bi bi-tiktok',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: 'bi bi-youtube',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'bi bi-linkedin',
    },
  ];

  // ===================================================
  // 5. NEWSLETTER
  // ===================================================

  subscriberEmail = signal<string>('');

  isSubmitting = signal<boolean>(false);

  errorMessage = signal<string>('');

  successMessage = signal<string>('');

  /*
   * FUNCIONALIDAD ACTUAL:
   * Validación básica del correo electrónico.
   *
   * FUTURO BACKEND:
   * POST /api/newsletter/subscribe
   *
   * El backend deberá:
   * - Validar el correo.
   * - Comprobar si ya está registrado.
   * - Guardar la suscripción en MySQL.
   * - Devolver una respuesta de confirmación.
   *
   * IMPORTANTE:
   * Actualmente NO se registra ningún correo.
   */

  subscribe(): void {
    const email = this.subscriberEmail().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.errorMessage.set('');
    this.successMessage.set('');

    if (!email) {
      this.errorMessage.set('Please enter your email address.');
      return;
    }

    if (!emailRegex.test(email)) {
      this.errorMessage.set('Please enter a valid email address.');
      return;
    }

    // Pendiente: conectar con NewsletterService.
    // No simular una suscripción exitosa sin backend.

    this.errorMessage.set('Newsletter subscriptions will be available soon.');
  }

  // ===================================================
  // 6. SCROLL TO TOP
  // ===================================================
  showScrollTop = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop.set(window.scrollY > 300);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // ===================================================
  // 7. COPYRIGHT
  // ===================================================

  currentYear = new Date().getFullYear();

  companyName = 'EMMA Peru';
}
