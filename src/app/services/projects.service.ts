import { Injectable } from "@angular/core";
import { Project } from "../model/project.model";

@Injectable()
export class ProjectsService {
    
    projects: Project[] = [];
    
    constructor() {
        
        this.projects.push({
            photoUrl : "assets/img/1.png",
            linkUrl: "kjvkjs",
            title: "E-commerce site Nicetop",
            alt: "E-commerce site Nicetop photo"
        });

        this.projects.push({
            photoUrl : "assets/img/invitation2.jpg",
            linkUrl: "kjvkjs",
            title: "Subscribtion form",
            alt: "Subscribtion form"
        });
        

        this.projects.push({
            photoUrl : "assets/img/dindin3.png",
            linkUrl: "kjvkjs",
            title: "Mobile Filters",
            alt: "Mobile Filters"
        });

        

        this.projects.push({
            photoUrl : "assets/img/3phone.gif",
            linkUrl: "kjvkjs",
            title: "Gif animation",
            alt: "Gif animation"
        });
        this.projects.push({
            photoUrl : "assets/img/2Marcopolo.png",
            linkUrl: "kjvkjs",
            title: "Marco Polo Hotel site",
            alt: "Marco Polo Hotel site"
        });

        this.projects.push({
            photoUrl : "assets/img/pionica4.jpg",
            linkUrl: "kjvkjs",
            title: "App landing",
            alt: "App landing"
        });


    }

}