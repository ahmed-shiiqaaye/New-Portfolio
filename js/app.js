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

// Fixed navbar
// let navbar = document.querySelector('header');
// window.addEventListener('scroll',()=>{
//     let headerHeight = navbar.getBoundingClientRect().height;
//     let scrHi = window.pageYOffset;
//     console.log(headerHeight)
//     if(scrHi >= headerHeight){
//         navbar.classList.add('fixed');
//     }else{
//         navbar.classList.remove('fixed');
//     }
// })