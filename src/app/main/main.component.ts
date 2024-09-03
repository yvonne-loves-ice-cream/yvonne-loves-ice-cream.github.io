import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(){
    
  }



  ngOnInit(): void {
    const imageContainer = document.querySelector('.fixed-image-container') as HTMLElement;

    // Hide the image after 3 seconds
    setTimeout(() => {
      if (imageContainer) {
        imageContainer.style.display = 'none';
      }
    }, 3000);

    // Hide the image when clicked
    if (imageContainer) {
      imageContainer.addEventListener('click', function() {
        imageContainer.style.display = 'none';
      });
    }
  }


  
}
