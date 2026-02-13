import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit{
  @ViewChild('hero', { static: true }) hero!: ElementRef<HTMLElement>;
   email = 'yvonnesunyy@gmail.com';
  linkedin = 'https://www.linkedin.com/in/yvonnesun421/';
  github = 'https://github.com/yvonne-loves-ice-cream';
  instagram = "https://www.instagram.com/yvonnsun/"

  toast = '';
    ngAfterViewInit(): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.bw-reveal'));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('show');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.18 }
    );

    sections.forEach((s) => io.observe(s));
  }

  open(url: string): void {
    window.open(url, '_blank', 'noopener');
  }

  async copy(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      this.toast = 'Copied.';
    } catch {
      this.toast = 'Copy failed.';
    }
    window.setTimeout(() => (this.toast = ''), 1400);
  }

}
