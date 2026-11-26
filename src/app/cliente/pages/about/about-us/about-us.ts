import { Component } from '@angular/core';
import { ShareButtons } from '../../../components/share-buttons/share-buttons';

interface Benefit {
  id: number;
  title: string;
  description: string;
}

interface Target {
  letter: string;
  text: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ShareButtons],
  styleUrl: './about-us.scss',
  templateUrl: './about-us.html',
})
export class AboutUs {
  // Propiedad para pasar la URL actual al componente hijo
  currentUrl = window.location.href; 

  pageTitle = "ACERCA DE EMMA";

  basicFacts = {
    title: 'Fechas y datos básicos sobre EMMA',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, vel.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, vel.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, vel.',
    ],
  };
    
  benefits: Benefit[] = [
    {
      id: 1,
      title: 'The Industry',
      description:
        'EMMA provides the industry with a unique platform to present products and innovations directly to the target audience. Through exhibitions, shows and competitions, manufacturers gain visibility and direct feedback from installers and end users across more than 40 countries.',
    },
    {
      id: 2,
      title: 'The Installer',
      description:
        'Installers benefit from EMMA´s educational programs, networking opportunities and the chance to showcase their craftsmanship. EMMA helps develop the quality of installers and installer networks through continuous training and professional recognition.',
    },
    {
      id: 3,
      title: 'The Competitor',
      description:
        'Competitors find in EMMA a fair, neutral and professionally organized competition framework. With standardized judging criteria and international recognition, participants can measure their skills against the best in the world.',
    },
    {
      id: 4,
      title: 'The Media',
      description:
        'EMMA offers media partners exclusive content, access to events and a steady flow of newsworthy stories from the mobile media world. This creates valuable coverage for the entire industry.',
    },
    {
      id: 5,
      title: 'The Exhibitions',
      description:
        'EMMA Shows are held in over 40 nations, always together with Car Shows and always at the same location and date. Since 2011 EMMA offers its Partners also full service packages for exhibitors including booth building. A second advantage of EMMA is that EMMA Shows and competition are also gaining more exhibitors and more visitors. As an example: in Germany the amount of visitors on Exhibitions and shows have been more than 1 Mio during the Year 2025.',
    },
  ];

  targets: Target[] = [
    {
      letter: 'a',
      text: 'Make Mobile Media more popular',
    },
    {
      letter: 'b',
      text: 'Develop the quality of Installers and Installer Networks by education',
    },
    {
      letter: 'c',
      text: 'Establishing EMMA as the essential world-wide platform for the Mobile Media Industry',
    },
  ];

  contactEmail = 'info@emmanet.com';

  sponsors = [
    'Alphasonic', 'Accuton', 'Art in Motion', 'Audiocircle', 'AudioControl',
    'Audison', 'Comfort', 'Dragster', 'Focal', 'Four', 'For-X',
    'GAS', 'Ground Zero', 'Helix', 'Hifonics', 'JL Audio', 'Kicker',
    'Match', 'Maestro', 'Morel', 'Musway', 'Nertz', 'Paramat',
    'Phoenix Gold', 'Pioneer', 'Quattrogo', 'Rebec', 'Reiss Audio',
    'RS Audio', 'Silent Coat', 'SoundDigital', 'Standartplast', 'Stinger',
    'Vibe', 'Vibrofiltr',
  ];


    onImageError(event: Event) {
      const imgElement = event.target as HTMLImageElement;

      // Evitar que se vuelva a ejecutar el evento
      imgElement.onerror = null;

      // Imagen predeterminada
      imgElement.src = '/images/default.jpg';
    }
  
}

 