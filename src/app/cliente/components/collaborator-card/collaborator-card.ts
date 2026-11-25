import { Component, input } from '@angular/core';

export interface CollaboratorItem {
  id: number;
  countryLabel: string;
  name: string;
  contact?: string;
  address: string[];
  workPhone?: string;
  cellPhone?: string;
  email?: string;
  websiteUrl: string;
  websiteLabel: string;
}

@Component({
  selector: 'app-collaborator-card',
  standalone: true,
  imports: [],
  templateUrl: './collaborator-card.html',
  styleUrl: './collaborator-card.scss',
})
export class CollaboratorCard {
  collaborator = input.required<CollaboratorItem>();
}
