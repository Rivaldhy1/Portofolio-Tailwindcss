// navbar sticky
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-sticky')
    }else {
        header.classList.remove('navbar-sticky')
    }
}

// Hamburger menu
const navItems = document.querySelector('#nav-items')
const hamburger = document.querySelector('#hamburger')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navItems.classList.toggle('hidden')
})

