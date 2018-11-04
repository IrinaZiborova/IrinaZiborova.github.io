import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myPhotoUrl = "assets/img/me.jpg";
  myStory = "My Story -";
  paragrafs = [
     'Hi, my name is Irina, at 22 years old I understood that I want to become a UI and UX designer. I changed my university, quit my job of a project coordinator and moved to Berlin. ',
     'Of course everything was not so fast and easy as this sentence. And I even have a blog about how I moved to Germany.',
     'What never changes is my love to travelling, photos and ballroom dancing. You can find much more about my life from my instagram.',
     'Here I would like to share with you my works, experience and invite you to an exciting journey around the UX and UI world.'
  ];
  educations = [
    {
      year : '2016',
      name : 'Aalto University, semester abroad'
    },
    {
      year : '2015-2017',
      name : 'ITMO University, M.Sc Computer Grafics & Web-Design'
    },
    {
      year : '2009-2015',
      name : 'Peter the Great St.Petersburg Polytechnic University, B. Managment'
    },
    {
      year : '2014',
      name : 'Learning center Status, Creation and Promotion of Web Sites'
    }
  ];
  experiences = [
    {
      year : '2018 - ND',
      name : 'Visual Meta GmBH, Interaction Engineer'
    },
    {
      year : '2017',
      name : 'Avanta Digital, Web-designer'
    },
    {
      year : '2012-2017',
      name : 'Reksoft, project assistant'
    }
  ];
  skills = "#HTML #CSS #JavaScript #bootstrap #Angular #Java #AdobeCC #AdobePhotoshop #AdobeIllustrator #Sketch #Figma #InVision #UI #UX #GraficDesign #GifAnimation #WebDesign #ResponsiceDesign #CrosBrowserDesign #GitHub #Bitbucket #InteliJ";

}
