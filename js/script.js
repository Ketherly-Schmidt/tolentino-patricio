const hamburguer = document.querySelector(".hamburguer");

const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));



function menuShow() {
    let mobileMenu = document.querySelector('.mobile-menu')
    if (mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open');
        document.querySelector('.icon').src = "image/menu.svg"
    }

    else{
        mobileMenu.classList.add('open')
        document.querySelector('.icon').src = "image/exit.svg"
    }
}