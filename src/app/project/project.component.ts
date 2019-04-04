import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../model/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project;
  id : number;
  tagTtile: 'Project tags';

  

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getProject();
  }

  getProject(): void {
    this.project = this.projectsService.getProject().filter(proj => proj.id === this.id)[0];

  }
}
