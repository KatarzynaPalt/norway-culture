import {Component} from '@angular/core';

@Component ({
  selector:'festivals-list',
  templateUrl: 'festivals-list.component.html',
  styles:[`
    h1{font-size:64px;}
  `]
})

export class FestivalsListComponent{
 festival= {
   id:1,
   name: 'The Peer Gynt Festival',
   date: '31/07/2020',
   time: '4:00PM',
   description:
     'The festival is a celebration of Ibsen’s "Peer Gynt" and the historical person Per Gynt, ' +
     'who lived in the Gudbrandsdalen valley in the 17th century. The tales about Per have been told through ' +
     'generations, and these, together with the nature and culture in the valley, is what inspired Henrik Ibsen ' +
     'to write the dramatic poem.'
 }
}
