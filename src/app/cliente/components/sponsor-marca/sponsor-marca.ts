import { Component, signal } from '@angular/core';

export interface PartnerMarca {
  id: 'groundzero' | 'pioneer' | 'hertz' | 'jlaudio';
  name: string;
  websiteUrl: string;
  logoUrl?: string; // Opcional: cuando tengas las imágenes reales en /images/partners/...
}

@Component({
  selector: 'app-sponsor-marca',
  standalone: true,
  templateUrl: './sponsor-marca.html',
  styleUrl: './sponsor-marca.scss'
})
export class SponsorMarca {
  readonly partners = signal<PartnerMarca[]>([
    {
      id: 'groundzero',
      name: 'Ground Zero',
      websiteUrl: 'https://ground-zero-audio.com'
    },
    {
      id: 'pioneer',
      name: 'Pioneer',
      websiteUrl: 'https://pioneer-car.eu'
    },
    {
      id: 'hertz',
      name: 'Hertz Audio',
      websiteUrl: 'https://hertz-audio.com'
    },
    {
      id: 'jlaudio',
      name: 'JL Audio',
      websiteUrl: 'https://jlaudio.com'
    }
  ]);
}
