const hamburger = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.close-btn');
const menuLinks = document.querySelectorAll('.menu-links');
const mobileMenu = document.querySelector('.mobile-menu');
const allProjectsContainer = document.querySelector('.all-projects');
const workSection = document.querySelector('.projects');

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
    projectImg: '/assets/Img Placeholder (2).png',
    projectTitle: 'Project Title 1',
    projectDetails: 'Lorem100',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: '/assets/Img Placeholder (2).png',
    projectTitle: 'Project Title 2',
    projectDetails: 'Lorem100',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: '/assets/dashboard.png',
    projectTitle: 'Project Title 1',
    projectDetails: 'Lorem100',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: '/assets/website.png',
    projectTitle: 'Project Title 2',
    projectDetails: 'Lorem100',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: '/assets/Img Placeholder (2).png',
    projectTitle: 'Project Title 2',
    projectDetails: 'Lorem100',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: '/assets/dashboard.png',
    projectTitle: 'Project Title 1',
    projectDetails: 'Lorem100',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: '/assets/website.png',
    projectTitle: 'Project Title 2',
    projectDetails: 'Lorem100',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
];

// To Display Projects
document.addEventListener('DOMContentLoaded', () => {
  const projectDiv = document.createElement('div');
  projectDiv.setAttribute('class', 'projects-container');
  const firstProject = `

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
          <div class="project-btn-1 half">
            <button class="btn btn-bg 0">See Project</button>
          </div>
        </div>
`;
  const project1Container = document.createElement('div');
  project1Container.setAttribute('class', 'project-1');
  project1Container.innerHTML = firstProject;
  allProjectsContainer.appendChild(project1Container);
  projectArray.forEach((project, index) => {
    if (projectArray.indexOf(project) !== 0) {
      const projectContent = `
     <div class="project-inner">
     <div class="project-2" style='background-image:url("${project.projectImg}");'>
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
     <button class="${index} project-btn full-btn bg-none">
       See Project
     </button>
   </div>

     `;

      const projectContainer = document.createElement('div');
      projectContainer.setAttribute('class', 'project-inner innerbg');
      projectContainer.innerHTML = projectContent;
      projectDiv.appendChild(projectContainer);
    }
  });

  allProjectsContainer.appendChild(projectDiv);
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-btn')) {
    const modalBackground = document.createElement('div');
    const modalBoxContent = `
    <div class="modal-box">
    <div class="modal-inner">
      <div class="modal-title" >
        <div class="modal-header">
          <h3>Keeping track of hundreds of components website</h3>
          <div>
            <img src="./assets/Icon.png" class="close-menu" alt="close-menu" />
          </div>
        </div>
        <br>
        <ul class="modal-list">
          <li class="tools-1">HTML</li>
          <li class="tools-1">Boostrap</li>
          <li class="tools-1">Ruby on rails</li>
        </ul>
      </div>
      <div class="modal-img-box">
        <div class="modal-img">
          <img src="/assets/Snapshoot Portfolio.png" alt="" />
        </div>

        <div class="modal-details">
         <div class="modal-info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it 1960s. 
           </p>

           <p>
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it 1960s with
            the releax map lapora verita.
           </p>
         </div>
         
         <div class="modal-btns">
          <div class="see-live">
            <a href="#">See Live  <img src="/assets/Icon-see live.svg" alt=""></a>
          </div>
          <div class="see-source">
            <a href="#">See Source  <img src="/assets/Vector.png" alt=""></a>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
    `;
    modalBackground.setAttribute('class', 'modal-background');
    modalBackground.innerHTML = modalBoxContent;
    workSection.appendChild(modalBackground);
    document.body.style.overflowY = 'hidden';
  }

  if (e.target.classList.contains('btn-bg')) {
    const modalBackground = document.createElement('div');
    const modalBoxContent = `
   <div class="modal-box">
   <div class="modal-inner">
     <div class="modal-title" >
       <div class="modal-header">
         <h3>Keeping track of hundreds of components website</h3>
         <div>
           <img src="./assets/Icon.png" class="close-menu" alt="close-menu" />
         </div>
       </div>
       <br>
       <ul class="modal-list">
         <li class="tools-1">HTML</li>
         <li class="tools-1">Boostrap</li>
         <li class="tools-1">Ruby on rails</li>
       </ul>
     </div>
     <div class="modal-img-box">
       <div class="modal-img">
         <img src="/assets/Snapshoot Portfolio.png" alt="" />
       </div>

       <div class="modal-details">
        <div class="modal-info">
         <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting
           industry. Lorem Ipsum has been the industry's standard dummy text
           ever since the 1500s, when an unknown printer took a galley of
           type and scrambled it 1960s. 
          </p>

          <p>
           Lorem Ipsum is simply dummy text of
           the printing and typesetting industry. Lorem Ipsum has been the
           industry's standard dummy text ever since the 1500s, when an
           unknown printer took a galley of type and scrambled it 1960s with
           the releax map lapora verita.
          </p>
        </div>
        
        <div class="modal-btns">
         <div class="see-live">
           <a href="#">See Live  <img src="/assets/Icon-see live.svg" alt=""></a>
         </div>
         <div class="see-source">
           <a href="#">See Source  <img src="/assets/Vector.png" alt=""></a>
         </div>
        </div>
       </div>
     </div>
   </div>
 </div>
   `;
    modalBackground.setAttribute('class', 'modal-background');
    modalBackground.innerHTML = modalBoxContent;
    workSection.appendChild(modalBackground);
    document.body.style.overflowY = 'hidden';
  }

  if (e.target.classList.contains('close-menu')) {
    const modalBoxContainer = workSection.childNodes[5];
    workSection.removeChild(modalBoxContainer);
    document.body.style.overflowY = 'scroll';
  }
});
