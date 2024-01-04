
// utk bagian hamburger
const hamburger = document.querySelector('#hamburger'); //get id yg di-inisialisasi di index
const navMenu = document.querySelector('#nav-menu');
//membuat event
hamburger.addEventListener('click', function() {
    // toggle = dilakukan keduanya antara add/remove
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function() {
    const headerScroll = document.querySelector('header'); // panggil tag elemen-nya
    const fixedNav = headerScroll.offsetTop; //jarak posisi header sm top

    if (window.pageYOffset > fixedNav) {
        headerScroll.classList.add('navbar-fixed');
    } else {
        headerScroll.classList.remove('navbar-fixed');
    }
}