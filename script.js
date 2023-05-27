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


// Validating user email address before submitting
document.querySelector('#submit-btn').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error-message');
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    error.classList.add('show');
    setTimeout(() => {
      error.classList.remove('show');
    }, 4000);



const projectArray = [
  {
    projectImg: 'https://Adesina-Abiodun.github.io/Microverse-Portfolio-Project/assets/Img Placeholder.png',
    projectTitle: 'Professional Art Priting',
    projectDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: 'https://Adesina-Abiodun.github.io/Microverse-Portfolio-Project/Img Placeholder (2).png',
    projectTitle: 'Data Dashboard Healthcare',
    projectDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: 'https://Adesina-Abiodun.github.io/Microverse-Portfolio-Project/assets/dashboard.png',
    projectTitle: 'Website Portfolio',
    projectDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: 'https://Adesina-Abiodun.github.io/Microverse-Portfolio-Project/assets/website.png',
    projectTitle: 'Professional Art Priting',
    projectDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: 'https://Adesina-Abiodun.github.io/Microverse-Portfolio-Project/assets/Img Placeholder (2).png',
    projectTitle: 'Data Dashboard Healthcare',
    projectDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: 'https://Adesina-Abiodun.github.io/Microverse-Portfolio-Project/assets/dashboard.png',
    projectTitle: 'Website Portfolio',
    projectDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    projectTools: ['HTML', 'CSS', 'BOOTSTRAP', 'RUBY'],
  },
  {
    projectImg: 'https://Adesina-Abiodun.github.io/Microverse-Portfolio-Project/assets/website.png',
    projectTitle: 'Professional Art Priting',
    projectDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
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
            <button class=" 0 btn btn-bg 0">See Project</button>
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
        ${project.projectTitle}
       </h2>
       <h2 class="project-title title details sm-none hover-hide">
        ${project.projectTitle}
       </h2>
       <p class="project-details title hover-hide">
       ${project.projectDetails}
       </p>
       <ul class="project-tools others hover-hide">
       ${project.projectTools.map((tool) => `<li class="tools">${tool}</li>`).join('')}
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
  if (e.target.classList.contains('project-btn') || e.target.classList.contains('btn-bg')) {
    const modalBackground = document.createElement('div');
    const projectIndex = e.target.classList[0];
    const project = projectArray[projectIndex];
    if (!project) {
      return; // Exit if the project is not found
    }
    const modalBoxContent = `
      <div class="modal-box">
      <div class="modal-inner">
        <div class="modal-title" >
          <div class="modal-header">
            <h3>${project.projectTitle}</h3>
            <div>
              <img src="./assets/Icon.png" class="close-menu" alt="close-menu" />
            </div>
          </div>
          <br>
          <ul class="modal-list">
          ${project.projectTools.map((tool) => `
            <li class="tools-1">${tool}</li>
           `).join('')}
          </ul>
        </div>
        <div class="modal-img-box">
          <div class="modal-img">
            <img src="${project.projectImg}" alt="" />
          </div>
  
          <div class="modal-details">
           <div class="modal-info">
            <p>
            ${project.projectDetails}
             </p>
           </div>
           
           <div class="modal-btns">
            <div class="see-live">
              <a href="#">See Live</a>
              <img src="/assets/Icon-see live.svg" alt="">
            </div>
            <div class="see-source">
              <a href="#">See Source</a>
              <img src="/assets/Vector.png" alt="">
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
