const toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = [];
for(let i=0;i<5;i++){
    navbarLinks.push(document.getElementsByClassName('nav-links')[i]);
}
toggleButton.addEventListener('click', () => {
    for(let i=0;i<5;i++){
        navbarLinks[i].classList.toggle('active')
    }
})