const hamburger = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.close-btn');
const menuLinks = document.querySelectorAll('.menu-links');
const mobileMenu = document.querySelector('.mobile-menu');
const allProjectsContainer = document.querySelector('.all-projects');

// event to show mobile menu links when user clicks on the humberger icon
hamburger.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  mobileMenu.classList.add('openMenu');
});

// event to close mobile menu links when user clicks on the close button
menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('openMenu');
  document.body.style.overflow = 'scroll';
});

// event to close mobile menu links when user clicks on any of the menu links
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    mobileMenu.classList.remove('openMenu');
    document.body.style.overflow = 'scroll';
  });
}


const projectArray = [
  {
    projectImg: "/assets/Img Placeholder (1).png",
    projectTitle: "Project Title 1",
    projectDetails: "Lorem100",
    projectTools: ["HTML", "CSS", "BOOTSTRAP","RUBY"],
    link: "",
    githubLink: ""
  },
  {
    projectImg: "/assets/Img Placeholder (2).png",
    projectTitle: "Project Title 2",
    projectDetails: "Lorem100",
    projectTools: ["HTML", "CSS", "BOOTSTRAP","RUBY"],
    link: "",
    githubLink: ""
  },
  {
    projectImg: "/assets/Img Placeholder (1).png",
    projectTitle: "Project Title 1",
    projectDetails: "Lorem100",
    projectTools: ["HTML", "CSS", "BOOTSTRAP","RUBY"],
    link: "",
    githubLink: ""
  },
  {
    projectImg: "/assets/Img Placeholder (1).png",
    projectTitle: "Project Title 2",
    projectDetails: "Lorem100",
    projectTools: ["HTML", "CSS", "BOOTSTRAP","RUBY"],
    link: "",
    githubLink: ""
  },
  {
    projectImg: "/assets/Img Placeholder (1).png",
    projectTitle: "Project Title 1",
    projectDetails: "Lorem100",
    projectTools: ["HTML", "CSS", "BOOTSTRAP","RUBY"],
    link: "",
    githubLink: ""
  },
  {
    projectImg: "/assets/Img Placeholder (1).png",
    projectTitle: "Project Title 2",
    projectDetails: "Lorem100",
    projectTools: ["HTML", "CSS", "BOOTSTRAP","RUBY"],
    link: "",
    githubLink: ""
  },
  {
    projectImg: "/assets/Img Placeholder (1).png",
    projectTitle: "Project Title 1",
    projectDetails: "Lorem100",
    projectTools: ["HTML", "CSS", "BOOTSTRAP","RUBY"],
    link: "",
    githubLink: ""
  }
]

// To Display Projects
document.addEventListener('DOMContentLoaded', () => {
console.log(projectArray.length)
let projectDiv = document.createElement('div')
projectDiv.setAttribute('class', 'projects-container');
let firstProject = `

        <div class="project-img">
          <img src="./assets//Img Placeholder.png" alt="" class="img-prj" />
        </div>
        <div class="project-info">
          <h3 class="project-title">Multi-Post Stories</h3>
          <p class="project-details">
            A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a standard
            dummy text.
          </p>
          <ul class="project-tools">
            <li class="tools">CSS</li>
            <li class="tools">HTML</li>
            <li class="tools">Boostrap</li>
            <li class="tools">Ruby</li>
          </ul>
          <div class="project-btn half">
            <a href="#" class="btn btn-bg">See Project</a>
          </div>
        </div>
`
let project1Container = document.createElement('div')
project1Container.setAttribute('class','project-1')
project1Container.innerHTML = firstProject
allProjectsContainer.appendChild(project1Container)
projectArray.forEach((project) => {
  if(projectArray.indexOf(project) !== 0) {
     const projectContent = `
     <div class="project-inner">
     <div class="project-2 dashboard ">
       <h2 class="project-title title details bg-none hover-hide">
         Profesional Art Printing Data
       </h2>
       <h2 class="project-title title details sm-none hover-hide">
         Data Dashboard Healthcare
       </h2>
       <p class="project-details title hover-hide">
         A daily selection of privately personalized reads; no accounts
         or sign-ups required. Has been the industry's standard.
       </p>
       <ul class="project-tools others hover-hide">
         <li class="tools title">HTML</li>
         <li class="tools title">Boostrap</li>
         <li class="tools title">Ruby</li>
       </ul>
     </div>
     <button class="project-btn full-btn bg-none">
       See Project
     </button>
   </div>

     `

    
   const projectContainer = document.createElement('div');
   projectContainer.setAttribute('class', 'project-inner innerbg');
   projectContainer.innerHTML = projectContent;
   projectDiv.appendChild(projectContainer);
  }

});

allProjectsContainer.appendChild(projectDiv)
});