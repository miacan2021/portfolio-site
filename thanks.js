const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const main = document.querySelector('.main');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', ()=> {
        navLinks.classList.remove('open');
    })
})

const cb = function(entries, observer){
  
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
        }else {
            entry.target.classList.remove('inview');
        }
    })
}
const options = {
    root: null,
    rootMargin: "-300px 0px 0px 0px"
}

const io = new IntersectionObserver(cb);
io.observe(navLinks);
io.observe(main);