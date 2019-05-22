import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// Declara a lib do videojs como externa ao angular
declare let videojs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  // Titulo del componente
  title = 'videoJS';

  // Instancia do video.js.
  vidObj: any;
  // Poster para ser usado no video.js
  poster = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png';
  // URL do video a ser reproduzido.
  video = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4';
  // Acessa o elemento video do html5 via viewchild.
  @ViewChild('myvid') vid: ElementRef;

  ngAfterViewInit() {
    const options = {
      controls: true,
      autoplay: true,
      preload: 'auto',
      techOrder: ['html5']
    };

    this.vidObj = new videojs(this.vid.nativeElement, options, function onPlayerReady() {
      videojs.log('Your player is ready!');
    });
  }
}
