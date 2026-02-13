import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
private readonly rawUrl = 'assets/resume/resume_solution.pdf';
resumeSafeUrl: SafeResourceUrl;
  download() {
    const a = document.createElement('a');
    a.href = this.rawUrl;
    a.download = 'Yvonne_Sun_Resume.pdf';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
    constructor(private sanitizer: DomSanitizer) {
    this.resumeSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawUrl);
  }

  openInNewTab() {
    window.open(this.rawUrl, '_blank', 'noopener');
  }

}
