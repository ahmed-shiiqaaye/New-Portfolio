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