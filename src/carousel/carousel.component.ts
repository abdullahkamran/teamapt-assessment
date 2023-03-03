import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() srcs: string[] = []

  current: number = 0;
  next: number = 1;
  interval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {

    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');

    if (this.srcs.length < 2) { return; }

    const increment = (num: number, length: number) => {
      return (num == length - 1) ? 0 : num + 1;
    }

    this.interval = setInterval(() => {
      img1?.classList.add('slided');
      img2?.classList.add('slided');
      setTimeout(() => {
        this.current = increment(this.current, this.srcs.length);
        this.next = increment(this.next, this.srcs.length);

        img1?.setAttribute('src', this.srcs[this.current]);
        img1?.classList.toggle('animate');
        img2?.classList.toggle('animate');
        img1?.classList.toggle('slided');
        img2?.classList.toggle('slided');
        img2?.setAttribute('src', this.srcs[this.next]);

        setTimeout(() => {
          img1?.classList.toggle('animate');
          img2?.classList.toggle('animate');
        }, 500);
      }, 500);
    }, 2000)
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
   }
  }
}
