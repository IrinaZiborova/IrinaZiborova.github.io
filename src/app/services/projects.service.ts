import { Injectable } from "@angular/core";
import { Project } from "../model/project.model";
import { of, Observable } from "rxjs";

@Injectable()
export class ProjectsService {
  getProject() {
    return this.projects;
  }
    
    projects: Project[] = [];
    
    constructor() {
        
        this.projects.push({
            id: 1,
            photoUrl : ["assets/img/1.png","assets/img/4.jpg", "assets/img/3.jpg","assets/img/2.jpg"],
            title: "E-commerce site Nicetop",
            alt: "E-commerce site Nicetop photo",
            description: "Nicetop.ru is a Russian e-commerce site for a woman, man, and children fashion. The site is made in white, black and light green colors. The design foresees a desktop and a mobile layout. The design solution is based on the project prescription from a stakeholder and consists of all core elements and site pages namely Home page, Results page, Brand page, Item detail page, and others. Many complementary sectors like delivery, payment, personal account sections, and a page with size tables were also developed during the project.",
            projectTags : ["Design language development",
            "Responsive design",
            "Core components design", 
            "Mobile Filters",
            "Grid Item and a quick view",
            "Home page, Results page, Item detail page design"]
        });

        this.projects.push({
            id: 2,
            photoUrl : ["assets/img/Newsletter.jpg"],
            title: "Subscribtion Form",
            alt: "Subscribtion Form",
            description: "here should be the text for the page",
            projectTags : null
        });
        

        this.projects.push({
            id: 3,
            photoUrl : ["assets/img/invitation2.jpg"],
            title: "Post Card",
            alt: "Post Card",
            description: "here should be the text for the page",
            projectTags : []
        });

        this.projects.push({
            id: 4,
            photoUrl : ["assets/img/Apps.jpg"],
            title: "Application's page",
            alt: "Application's page",
            description: "here should be the text for the page",
            projectTags : []
        });

        this.projects.push({
            id: 5,
            photoUrl : ["assets/img/phonetemplate.jpg"],
            title: "Gif animation",
            alt: "Gif animation",
            description: "here should be the text for the page",
            projectTags : []
        });

        this.projects.push({
            id: 6,
            photoUrl : ["assets/img/filters.jpg"],
            title: "Mobile Filters",
            alt: "Mobile Filters",
            description: "here should be the text for the page",
            projectTags : []
        });


        this.projects.push({
            id: 7,
            photoUrl : ["assets/img/pionica4.jpg"],
            title: "Logo",
            alt: "Logo",
            description: "here should be the text for the page",
            projectTags : []
        });

        this.projects.push({
            id: 8,
            photoUrl : ["assets/img/Marcopolo.jpg"],
            title: "Marco Polo Hotel site",
            alt: "Marco Polo Hotel site",
            description: "here should be the text for the page",
            projectTags : []
        });

        this.projects.push({
            id: 9,
            photoUrl : ["assets/img/Andeor.jpg"],
            title: "Dance School Site",
            alt: "Dance School Site",
            description: "here should be the text for the page",
            projectTags : []
        });
    }
}