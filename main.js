const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', ()=> {
        navLinks.classList.remove('open');
    })
})

const main = document.querySelector('.main');
const work = document.querySelector('.work');
const skills = document.querySelector('.skills');
const side = document.querySelector('.inner');
const form = document.querySelector('.form');

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
    rootMargin: "-500px 0px 0px 0px"
}

const io = new IntersectionObserver(cb);
io.observe(main);
io.observe(work);
io.observe(skills);
io.observe(side);
io.observe(form);
io.observe(navLinks);

let mic = document.querySelector('.fa-microphone');
let formMessage = document.getElementById('message');



