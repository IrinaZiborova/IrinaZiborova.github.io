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
            "Home page, Results page, Item detail page design",
            "white interface with black and green accents",
            "E-commerce design"]
        });

        this.projects.push({
            id: 2,
            photoUrl : ["assets/img/Newsletter.jpg"],
            title: "Subscribtion Form",
            alt: "Subscribtion Form",
            description: "Web-design and full implementation of forms for newsletter subscription. The task was to create attractive for a user and in line with The EU General Data Protection Regulation (GDPR) newsletter subscription form. For the project were designed and developed a full page in the platform, section in the footer and a pop-up both for desktop and mobile.",
            projectTags : ["Newsletter subscription forms",
                "GDPR forced redesign",
                "Responsive web-design",
                "Pink-grey palette in design"]
        });
        

        this.projects.push({
            id: 3,
            photoUrl : ["assets/img/invitation2.jpg", "assets/img/Invitation1.jpg", "assets/img/invitation3.jpg"],
            title: "Water-colour flowers",
            alt: "Water-colour flowers",
            description: "Water-colour flowers printed on a paper board with design fonts were made for a photo-shooting gift card. Made flower print can be also perfect complement to a wedding invitation or a post card with all the best wishes. There are also collection of item with this print available on sosity6/irinaziborova",
            projectTags : ["Water-colour flowers print",
                "Print graphic design",
                "Wedding invitation",
                "Flower print"]
        });

        this.projects.push({
            id: 4,
            photoUrl : ["assets/img/Apps.jpg"],
            title: "Apps promotion page",
            alt: "Apps promotion page",
            description: "Company colours combined together led to a nice Pink-yellow gradients. To reach better readability, typography is performed in white colour. To show the surface of 3 phones and bring the floating effect were used depth and perspective design methods. The image with 3 phones was created out of one frontal positioned phone by using transformation of smart objects in Adobe Photoshop.  Design represents the page on desktop and mobile. Design was fully implemented by designer in front-end.",
            projectTags : ["Typography on a background",
                "Pink yellow gradient",
                "Apps web-page design ",
                "Responsive design",
                "Shadows as depth representation",
                "Smart objects in Photoshop"]
        });

        this.projects.push({
            id: 5,
            photoUrl : ["assets/img/phonetemplate.gif", "assets/img/shoppingquest1.jpg", "assets/img/shoppingquest2.jpg"],
            title: "Interaction design",
            alt: "Interaction design",
            description: "Interaction design played a big role in human-computer interaction. It helps to show the system statuses and reactions which are one of the essentials in usability. The project is a gift finder, that is 4 questions namely gender, occasion, budget, and interests. Design solution preceded a user test and competitor analysis. The name for a project was found with the use of a design thinking methods.",
            projectTags : ["Gift finder design",
                "Interaction design",
                "Design thinking methods",
                "User testing and prototyping"]
        });

        this.projects.push({
            id: 6,
            photoUrl : ["assets/img/filters.jpg"],
            title: "Mobile Filters",
            alt: "Mobile Filters",
            description: "Navigation and filtering among many fashion articles include seasonality, occasion, style filters. Filter panel is designed universally for desktop and smartphone. Front-end implementation also was provided. Filters are always a very interactive section, therefore I liked to work on usability and interaction design at this project. Collapsed/ expanded filters, buttons to increase a list of options to a filter,  active filter status in collapsed and expanded modes and removing active filters globally or from a specific filter. Those behaviors were the biggest things to think about and I like the final result.",
            projectTags : ["Filter’s panel",
                "Interaction design",
                "HTML, CSS, JavaScript",
                "Collapsed filters"
                ]
        });


        this.projects.push({
            id: 7,
            photoUrl : ["assets/img/pionica1.jpg", "assets/img/pionica2.jpg", "assets/img/pionica3.jpg", "assets/img/pionica4.jpg"],
            title: "Brand identity design",
            alt: "Brand identity design",
            description: "Brand identity for a make up stylist. Tender logo represents the power of natural beauty of every customer and inspires the make up artist to create the same fresh and lite looks. As a scope of the work was to create the logo, business cards, certificates for trainings attendance, and gift cards.",
            projectTags : ["Polygraph and print design",
                "Make up stylist logo",
                "Make up stylist business card",
                "Pion in brand intentity"]
        });

        this.projects.push({
            id: 8,
            photoUrl : ["assets/img/Marcopolo.jpg"],
            title: "Marco Polo Hotel site",
            alt: "Marco Polo Hotel site",
            description: "Marco Polo hotel is a small accomodation in the hart of St. Petersburg, Russia. Every suite is unique and made in Classical Russian design. To reflect this interior in my web-design were used red-wine and gold colours and a corporate monogram.",
            projectTags : ["Hotel web-site",
                "Responsive design",
                "Classic style",
                "Booking system",
                "Dynamic pages"]
        });

        this.projects.push({
            id: 9,
            photoUrl : ["assets/img/Andeor.jpg", "assets/img/andeor2.jpg", "assets/img/andeor3.jpg" ],
            title: "Dance School Site",
            alt: "Dance School Site",
            description: "Responsive design and layout for a dancing school. Made in dark colours with the use of black and white photos to stand out the chamber theater atmosphere. You will find the main information on the site about dancing classes, groups and projects, reviews, photos, and a contact form.",
            projectTags : ["Dancing school web-design",
                "Responsive design and layout",
                "Dark interface",
                "One page site",
                "Landing page"]
        });
    }
}
