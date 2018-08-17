window.onload = ()=>{
    // The following two class adds are for animation purposes
    const element = document.getElementById("nav-bar");
    element.classList.add("nav-expanded");

    const landing = document.getElementById("main");
    landing.classList.add("show-main");


    window.addEventListener('wheel', changeSectionOnWheel);
}


const nav_links = document.getElementById('nav-bar').children
for(let i = 0; i<nav_links.length; i++){
    nav_links[i].onclick = jumpToSection.bind(this, i)
}

//Initalize which nav link is highlighted be default
let current_selection = 0; //Default selection is the first link
updateSideIndicator(current_selection);
nav_links[current_selection].classList.add('selected-link')


// SCREEN CHANGE FUNCTIONS

function jumpToSection(current_selection){
    nav_links[current_selection].click();
    updateCurrentSelection(current_selection);
    updateSideIndicator(current_selection);
}

function changeSectionOnWheel(wheelEvent){
    let dy = wheelEvent.deltaY;
    
    if(dy > 0 && current_selection != nav_links.length-1){ //Prevent wrap
        cycleForward()
    }
    
    else if(dy < 0 && current_selection != 0){  //Prevent wrap
        cycleBack()
    }

    //To prevent constant calling of this function
    window.removeEventListener('wheel', changeSectionOnWheel);
    setTimeout(()=>window.addEventListener('wheel', changeSectionOnWheel) , 200);
}

function cycleForward(){
    current_selection +=1;
    nav_links[current_selection].click();
    updateCurrentSelection(current_selection);
    updateSideIndicator(current_selection)
}


function cycleBack(){
    current_selection -=1;
    nav_links[current_selection].click();
    updateCurrentSelection(current_selection);
    updateSideIndicator(current_selection)
}

// UI UPDATE FUNCTIONS

function updateCurrentSelection(selection){
    for(let i=0; i<nav_links.length; i++){
        nav_links[i].classList.remove('selected-link')
    }
    current_selection = selection;
    nav_links[current_selection].classList.add('selected-link')
}

function updateSideIndicator(selection){
    const scroll_indicator = document.getElementById('scroll-indicator').children;
    for(let i=0; i<scroll_indicator.length; i++){
        scroll_indicator[i].classList.remove('current-indicator-item');
    }
    scroll_indicator[selection].classList.add('current-indicator-item');
}
