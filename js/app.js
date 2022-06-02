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
        id:1,
        title:'Delta tours agency',
        description:'Responsive multiple Page site and toursm online booking for travel single and family',
        img:'./img/delta.png',
        github:'https://github.com/ahmed-shiiqaaye/Delta-tours',
        domain:'https://delta-tours.netlify.app/',
    },
    // weatheer app
    {
        id:2,
        title:'Weather app',
        description:`This weather app allows you to know the weather of any city by writing that city's name in the search bar.`,
        img:'./img/weather.png',
        github:"https://github.com/ahmed-shiiqaaye/weather-app",
        domain:'https://weather-app-of.netlify.app/',
    },
    //fast grow
    {
        id:3,
        title:'Fast grow w.d agency',
        description:`  Responsive multiple page websie & web development and designer agency.`,
        img:'./img/fast.png',
        domain:'https://fast-grow-web-agency.netlify.app/',
        github:"https://github.com/ahmed-shiiqaaye/Fast-Grow-web-development-agency",
    },
    //contact app
    {
        id:4,
        title:'Contact app',
        description:`This contact list creator app allows you to Create your contact list with name, number and random avatar image.`,
        img:`./img/contacts.png`,
        github:"https://github.com/ahmed-shiiqaaye/contact-app",
        domain:`https://nice-contact-app.netlify.app/`
    },
    //Navada Hospital
    {
        id:5,
        title:'Navada Hospital',
        description:` Responsive multiple page website for hospital & an online booking..`,
        img:`./img/Navada.png`,
        github:`https://github.com/ahmed-shiiqaaye/hospital`,
        domain:"https://navada-hospital.netlify.app/",
    },
    //Navada Hospital
    {
        id:6,
        title:'Hana Online Academy',
        description:`Custom responsive site for small academy & an online teaching & consulting.`,
        img:`./img/Hana.png`,
        github:`https://github.com/ahmed-shiiqaaye/Hanakademi`,
        domain:"https://hanakademi-edu.netlify.app/",
    },
]
let projectsGrid = document.getElementById('project-grid');


myProjects.map((project)=>{
    const { title, id, img, description,github, domain } = project
    projectsGrid.innerHTML += `
        <div class="card" data-id='${id}'>
            <div class="image">
            <img src="${img}" alt="" />
            </div>
        <div class="text">
            <h3 class="name">${title}</h3>
            <p>${description}</p>
        <div class="links">
            <a
            href="${domain}"
            target="_blank"
            class="btn"
            >live preview <i class="fa fa-eye"></i
            ></a>
            <a
            href="${github}"
            target="_blank"
            class="btn"
            >see code <i class="fa fa-code"></i
            ></a>
        </div>
        </div>
    </div>
    
    `
})