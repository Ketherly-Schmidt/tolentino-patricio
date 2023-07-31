/*class MobileNavBar(){
    constructor(burguer, menu, links){
        this.burguer = document.querySelector (burguer);
        this.menu = document.querySelector (menu);
        this.links = document.querySelectorAll (links)
        this.activeClass = "active";
    }

    addClickEvent(){
        this.burguer.addEventListener("click", () => console.log ("Hey"))
    }

    init () {
        if(this.burguer) {
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavBar = new MobileNavBar(

    "#burguer",
    ".menu",
    ".nav-item",

);
*/
/*
const icon = document.querySelector(".icon");

const nav = document.querySelector(".nav");

icon.addEventListener("click", () => nav.classList.toggle("active"));
*/

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}