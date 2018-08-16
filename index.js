window.onload = ()=>{
    const element = document.getElementById("nav-bar");
    element.classList.add("nav-expanded");

    const landing = document.getElementById("main");
    landing.classList.add("show-main");
}

const nav_links = {
    'about': document.getElementById('about-link'),
    'portfolio': document.getElementById('portfolio-link'),
    'education': document.getElementById('education-link')
};

//Initalize which nav link is highlighted be default
let current_selection = 'about'; //Default selection
nav_links[current_selection].classList.add('selected-link')

const updateSelection=(selection)=>{
    if(current_selection != null){
        nav_links[current_selection].classList.remove('selected-link')
    }
    current_selection = selection;
    nav_links[current_selection].classList.add('selected-link')
}