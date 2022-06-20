let menuIcon = document.querySelector('.menu_icon');
let headerUl = document.querySelector('header .container .nav_links');
let headerAnchorTAg = document.querySelectorAll('header .container ul li a');


menuIcon.addEventListener('click',()=>{
    headerUl.classList.toggle('active')
    if(headerUl.classList.contains('active')){
        menuIcon.innerHTML = `<i class="i fa fa-times"></i>`
    }else{
        menuIcon.innerHTML = `<i class="i fa fa-bars"></i>`
    }
});
headerAnchorTAg.forEach(link =>{
    link.addEventListener('click',()=>{
        headerUl.classList.remove('active')
        menuIcon.innerHTML = `<i class="i fa fa-bars"></i>`
    })
});

let date = new Date().getFullYear();
document.querySelector('.date').textContent = date;

//projects
let myProjects =[
    //Delta tours
    {
        id:'development all',
        title:'Delta tours agency',
        description:'Responsive multiple Page site and toursm online booking for travel single and family',
        img:'./img/delta.png',
        github:'https://github.com/ahmed-shiiqaaye/Delta-tours',
        domain:'https://delta-tours.netlify.app/',
    },
    // shaqeste app
    {
        id:'development all',
        title:'Photographer app',
        description:`This personal photographer website for my client allows you to know the weather of any city by writing that city's name in the search bar.`,
        img:'./img/shaqeste.png',
        github:"https://github.com/ahmed-shiiqaaye/Mohamed-photographer",
        domain:'https://shaqeste.netlify.app/',
    },
    {
        id:'design all',
        title:'Najma Interior design',
        description:`Custom responsive site for small academy & an online teaching & consulting.`,
        img:`./img/najma.png`,
        github:`https://github.com/ahmed-shiiqaaye/my-interior-design`,
        domain:"https://najmainterior.netlify.app/",
    },
    // weatheer app
    {
        id:'development all',
        title:'Weather app',
        description:`This weather app allows you to know the weather of any city by writing that city's name in the search bar.`,
        img:'./img/weather.png',
        github:"https://github.com/ahmed-shiiqaaye/weather-app",
        domain:'https://weather-app-of.netlify.app/',
    },
    //fast grow
    {
        id:'design all',
        title:'Fast grow w.d agency',
        description:`  Responsive multiple page websie & web development and designer agency.`,
        img:'./img/fast.png',
        domain:'https://fast-grow-web-agency.netlify.app/',
        github:"https://github.com/ahmed-shiiqaaye/Fast-Grow-web-development-agency",
    },
    //contact app
    {
        id:'development all',
        title:'Contact app',
        description:`This contact list creator app allows you to Create your contact list with name, number and random avatar image.`,
        img:`./img/contacts.png`,
        github:"https://github.com/ahmed-shiiqaaye/contact-app",
        domain:`https://nice-contact-app.netlify.app/`
    },
    //Navada Hospital
    {
        id:'design all',
        title:'Navada Hospital',
        description:` Responsive multiple page website for hospital & an online booking..`,
        img:`./img/Navada.png`,
        github:`https://github.com/ahmed-shiiqaaye/hospital`,
        domain:"https://navada-hospital.netlify.app/",
    },
    //Navada Hospital
    {
        id:'design all',
        title:'Hana Online Academy',
        description:`Custom responsive site for small academy & an online teaching & consulting.`,
        img:`./img/Hana.png`,
        github:`https://github.com/ahmed-shiiqaaye/Hanakademi`,
        domain:"https://hanakademi-edu.netlify.app/",
    },
]
let projectsGrid = document.getElementById('project-grid');


myProjects.map((project)=>{
    const {img, id, github, domain } = project
    projectsGrid.innerHTML += `
    <div class="card ${id}">
    <div class="image">
      <img src="${img}" alt="">
    </div>
    <div class="details">
      <a href="${domain}" target="_blank">Live Preview</a>
      <a href="${github}" target="_blank">see code</a>
    </div>
  </div>
    `
})

// let allFilterbtns = document.querySelectorAll('.filter-btn');
// let allProjects = document.querySelectorAll('#project-grid .card');

// allFilterbtns.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
//         let btnDataName = e.target.getAttribute('data-name')
//         showProjects(btnDataName);
//     });
// });

// function showProjects(btn){
//     allProjects.forEach((project)=>{
//         if(project.classList.contains(btn)){
//             project.style.display = 'block'
//         }else{
//             project.style.display = 'none'
//         }
//     })
// }