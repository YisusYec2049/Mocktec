import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

interface SlideProps {
  img: string;
  caption: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  private readonly period = 4000;
  
  slides:SlideProps[] = [
    {img: 'images/banner.jpg', caption: 'Caption Text'},
    {img: 'images/many-students.png', caption: 'Caption Two'},
    {img: 'images/banner.jpg', caption: 'Caption Three'},
    {img: 'images/many-students.png', caption: 'Caption Four'},
  ];
  
  slideIndex:number = 1;
  mouseLeave:boolean = false;
  myInterval = interval(this.period);
  
  ngOnInit(): void {
    this.myInterval.subscribe( () => {
      if (!this.mouseLeave) this.plusSlides(1)
    });
  }
  
  plusSlides(n:number):void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n:number):void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    if (n > this.slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = this.slides.length;
  }

  stopInterval():void {
    this.mouseLeave = true;
  }

  playInterval():void{
    this.mouseLeave = false;
    this.myInterval = interval(this.period);
  }

}
