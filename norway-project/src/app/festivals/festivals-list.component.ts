import {Component} from '@angular/core';

@Component ({
  selector:'festivals-list',
  templateUrl: 'festivals-list.component.html',
})

export class FestivalsListComponent{
 festival= [
   {
   id:1,
   name: 'The Peer Gynt Festival',
   date: '31/07/2020',
   time: '4:00PM',
   description:
     'The festival is a celebration of Ibsen’s "Peer Gynt" and the historical person Per Gynt, ' +
     'who lived in the Gudbrandsdalen valley in the 17th century. The tales about Per have been told through ' +
     'generations, and these, together with the nature and culture in the valley, is what inspired Henrik Ibsen ' +
     'to write the dramatic poem.'
   },
   {
   id:2,
  name: 'Nordlysfestivalen',
  date: '30/01/2021',
  time: '5:00PM',
  description:
    'For twenty-five years, the city of Tromsø has been submerged in a musical extravaganza the last week of January.' +
    ' The Northern Lights Festival has each year presented top artists from a wide variety of genres ranging ' +
    'from early music to modern, from opera to jazz, from chamber music to symphonic orchestras.'
    },
   {
     id:3,
  name: 'Gladmat',
  date: '20/07/2020',
  time: '10:00AM',
  description:
    'Gladmat is a food festival in Stavanger Norway that means many things to many people. If you want to sit with ' +
    'friends and have familiar food, you will find it - but you can also find strange and unusual food; many local ' +
    'producers of fish, meats, herbs, breads and other foods that you never knew existed; you can sit and watch master ' +
    'cooks taking part in gastronomic competitions. Ideas for dinner party place settings to parades - Gladmat ' +
    'has it all.'
  },
   {
     id:4,
  name: 'Riddu Riddu Festival',
  date: '31/07/2020',
  time: '10:00AM',
  description:
    'The festival’s history can be traced back to a group of Sami youths gathering for an informal barbecue in Kåfjord. ' +
    'The festival’s name “Riddu Riđđu” means little storm on the coast, which is highly appropriate when more than 5,000' +
    'transform this small village into an international centre for indigenous people from around the world.'
  }
 ]
}
