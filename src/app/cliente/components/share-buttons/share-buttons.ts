import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-share-buttons',
  styleUrl: './share-buttons.scss',
  templateUrl: './share-buttons.html',
})
export class ShareButtons {
  @Input() shareTitle: string = '';
  @Input() shareUrl: string = '';

  printSection() {
    // Esto abre el diálogo nativo del navegador. 
    // El CSS @media print se encargará de ocultar lo que no queremos.
    window.print();
  }

  private openShareWindow(url: string, width = 600, height = 500) {
    // Verificación de seguridad por si window no está disponible
    if (typeof window !== 'undefined') {
      const left = (screen.width - width) / 2;
      const top = (screen.height - height) / 2;
      window.open(url, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
    }
  }

  shareFacebook() {
    this.openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.shareUrl)}`, 600, 400);
  }

  shareLinkedIn() {
    this.openShareWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.shareUrl)}`, 600, 500);
  }

  shareX() {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.shareUrl)}&text=${encodeURIComponent(this.shareTitle)}`;
    this.openShareWindow(url, 600, 400);
  }

}
