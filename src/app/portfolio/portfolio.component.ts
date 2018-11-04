import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public projectsService: ProjectsService) { }

  ngOnInit() {
  }

  //   { photoUrl : "string",
  //     linkUrl: "#",
  //     title: "Graphics for Pionica"
  //   },

}
