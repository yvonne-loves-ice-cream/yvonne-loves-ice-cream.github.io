import { AfterViewInit, Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Route } from '@angular/router';

type BeyondItem = {
  key: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {


 heroImage = 'assets/image/matisse-dance.jpeg';
items: BeyondItem[] = [
    {
      key: 'running',
      title: 'RUNNING',
      copy:
        'I run—at least three times a week. Not to prove anything, but to return to myself: steady breath, steady pace, steady mind. (And of course to keep fit.🤫',
      image: 'assets/beyond/running.jpg',
      imageAlt: 'Running',
    },
    {
      key: 'cooking',
      title: 'COOKING',
      reverse: true,
      copy:
        'I trained in French cuisine at George Brown as a serious hobby. I like cooking late at night, sometimes for no reason at all. I enter a kind of flow—hands remember, time disappears, and the world becomes quiet.😄',
      image: 'assets/beyond/cooking.jpg',
      imageAlt: 'Cooking',
    },
      {
    key: 'arts',
    title: 'ARTS',
    copy:
    'I love looking at paintings because they carry an artist’s voice across time. But honestly, I also enjoy recreating their poses—borrowing a little of their world for a moment.🤣',
    image: 'assets/beyond/arts.jpg',
    imageAlt: 'Museum visits',
  },
    {
      key: 'reading-writing',
      title: 'READING & WRITING',
      reverse: true,
      copy:
         'I read constantly and practice writing whenever I can. My long-term dream is to win a Nobel Prize in Literature—mostly so I can bring fourteen people to the banquet, as the rules allow.😋',
      image: 'assets/beyond/reading.jpg',
      imageAlt: 'Reading and writing',
    },
      {
    key: 'stillness',
    title: 'STILLNESS',
    copy:
        'I started yoga because my mom thought I was getting too chubby. Somewhere along the way, I fell in love with it—and yes, I eventually became a certified yoga instructor.😎',
    image: 'assets/beyond/yoga.jpg',
    imageAlt: 'Yoga and stillness',
  },
    {
      key: 'kpop',
      title: 'K-POP',
      reverse: true,
      copy:
        'I love K-pop. Idols are beautiful, yes—but more than that, they make discipline look joyful. They remind me to keep moving forward. After work, I have to watch them, my mood always becomes brighter.😁',
      image: 'assets/beyond/kpop.jpg',
      imageAlt: 'K-pop',
    },
     {
    key: 'friends',
    title: 'FRIENDS',
    copy:
      'Long conversations, long walks, long nights. At 3 a.m. we promise to sleep early tomorrow… and to take CoQ10 together.🤔',
    image: 'assets/beyond/friends.jpg',
    imageAlt: 'Friends and connection',
  },

  {
    key: 'home',
    title: 'HOME',
    reverse: true,
    copy:
      'Mum, dad and I argue regularly—two weeks without a debate is rare. But beneath the noise, there is warmth: chaotic, loud, and deeply alive.😑',
    image: 'assets/beyond/home.jpg',
    imageAlt: 'Family and home',
  },

  ];
  @ViewChild('hero', { static: true }) hero!: ElementRef<HTMLElement>;
  blackpinkUrl = 'https://www.youtube.com/@BLACKPINK';
 ngAfterViewInit(): void {

  const heroEl = this.hero?.nativeElement as HTMLElement | undefined;
  if (heroEl) {
    const heroIO = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroEl.classList.add('reveal--on');
          heroIO.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    heroIO.observe(heroEl);
  }


  const sections = Array.from(document.querySelectorAll<HTMLElement>('.bw-reveal'));
  if (sections.length) {
    const secIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('show');
            secIO.unobserve(e.target);
          }
        }
      },
      { threshold: 0.18 }
    );

    sections.forEach((s) => secIO.observe(s));
  }
}


  openBlackpink(): void {
    window.open(this.blackpinkUrl, '_blank', 'noopener');
  }



  
}
