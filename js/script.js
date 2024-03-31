let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll',function (){
    let scroll = this.document.querySelector('.scrolltop')
        scroll.classList.toggle('scroll', window.scrollY > 350)
})
function backTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance:'60px',
    duration:2500,
    reset:true
})
sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-img',{delay:400, origin:'top'})
sr.reveal ('.about, .services, .cta, .resume, .contact, .copyright',{delay:200, origin:'top'})

