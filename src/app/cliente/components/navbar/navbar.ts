import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  label: string;
  route?: string;
  children?: { label: string; route: string }[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  mobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);

  menuItems: MenuItem[] = [
    { label: 'Hogar', route: '/' },
    {
      label: 'Acerca de EMMAPERU',
      children: [
        { label: 'Sobre nosotros', route: '/about/sobre-nosotros' },
        { label: 'Quién es', route: '/about/quien-es' },
        { label: 'Contacto', route: '/about/contacto' },
      ],
    },
    {
      label: 'Competencia',
      children: [
        { label: 'Reglamento de la competición 2026', route: '/competition/rules' },
        { label: 'Inscripción', route: '/competition/inscription' },
        { label: 'Listas de resultados', route: '/competition/resultlists' },
        { label: 'Informes de eventos', route: '/competition/eventreports' },
        { label: 'Calendario de eventos', route: '/competition/calendar' },
      ],
    },
    { label: 'Noticias', route: '/news' },
    { label: 'Patrocinadores', route: '/sponsors' },
    { label: 'Sección de miembros', route: '/members' },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen.update((val) => !val);
  }

  toggleDropdown(label: string) {
    this.activeDropdown.update((current) => (current === label ? null : label));
  }

  closeMenus() {
    this.mobileMenuOpen.set(false);
    this.activeDropdown.set(null);
  }
}
