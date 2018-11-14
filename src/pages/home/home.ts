import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TimelineElement } from '../../components/horizontal-timeline/timeline-element';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {  
  }

  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;

  timeline: TimelineElement[] = [
    { caption: '16 Jan', date: new Date(1971, 1, 16), selected: true, title: 'Horizontal Timeline', content: this.content },
    { caption: '28 Feb', date: new Date(1973, 2, 28), title: 'Event title here', content: this.content },
    { caption: '20 Mar', date: new Date(1978, 3, 20), title: 'Event title here', content: this.content },
    { caption: '20 May', date: new Date(1979, 5, 20), title: 'Event title here', content: this.content },
    { caption: '09 Jul', date: new Date(1985, 7, 9), title: 'Event title here', content: this.content },
    { caption: '30 Aug', date: new Date(1991, 8, 30), title: 'Event title here', content: this.content },
    { caption: '15 Sep', date: new Date(1994, 9, 15), title: 'Event title here', content: this.content },
    { caption: '01 Nov', date: new Date(1999, 11, 1), title: 'Event title here', content: this.content },
    { caption: '10 Dec', date: new Date(2002, 12, 10), title: 'Event title here', content: this.content },
    { caption: '29 Jan', date: new Date(2009, 1, 19), title: 'Event title here', content: this.content },
    { caption: '3 Mar', date: new Date(2018, 3, 3), title: 'Event title here', content: this.content },
  ];

  // load() {
  //   this.timeline = [
  //     { caption: '16 Jan', date: new Date(1975, 1, 16), selected: true, title: 'Horizontal Timeline', content: this.content },
  //     { caption: '28 Feb', date: new Date(1979, 2, 28), title: 'Event title here', content: this.content },
  //     { caption: '30 Aug', date: new Date(1984, 8, 30), title: 'Event title here', content: this.content },
  //     { caption: '15 Sep', date: new Date(1991, 9, 15), title: 'Event title here', content: this.content },
  //     { caption: '01 Nov', date: new Date(1994, 11, 1), title: 'Event title here', content: this.content },
  //     { caption: '10 Dec', date: new Date(1999, 12, 10), title: 'Event title here', content: this.content },
  //     { caption: '29 Jan', date: new Date(2002, 1, 19), title: 'Event title here', content: this.content },
  //     { caption: '3 Mar', date: new Date(2018, 3, 3), title: 'Event title here', content: this.content },
  //   ];
  // }


}
