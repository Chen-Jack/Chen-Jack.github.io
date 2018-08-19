function throttle(fn, wait) {
    var time = Date.now();
    return function(e) {
        
      if ((time + wait - Date.now()) < 0) {
        fn(e);
        time = Date.now();
      }
    }
  }

window.onload = ()=>{
    console.log("Shout out to my love, SHelLY HuANG <3");

    // The following two class adds are for animation purposes
    const element = document.getElementById("nav-bar");
    element.classList.add("nav-expanded");

    const landing = document.getElementById("main");
    landing.classList.add("show-main");

    document.addEventListener('wheel', lethargicWheelchange);
    document.addEventListener('keydown', changeSectionOnKey);
}

const nav_links = document.getElementById('nav-bar').children
const scroll_indicator = document.getElementById('scroll-indicator').children;

for(let i = 0; i<nav_links.length; i++){
    nav_links[i].onclick = jumpToSection.bind(this, i)
    scroll_indicator[i].onclick = jumpToSection.bind(this,i)
}


let current_selection = 0; //Default selection is the first link
updateSideIndicator(current_selection);
updateCurrentSelection(current_selection);


// SCREEN CHANGE FUNCTIONS
function jumpToSection(current_selection){
    nav_links[current_selection].click();
    updateCurrentSelection(current_selection);
    updateSideIndicator(current_selection);
}

function changeSectionOnKey(keyEvent){
    //To prevent constant calling of this function
    document.removeEventListener('keydown', changeSectionOnKey);
    if(keyEvent.key === "ArrowRight" || keyEvent.key === "ArrowDown"){
        cycleForward()
    }
    else if(keyEvent.key === "ArrowLeft" || keyEvent.key === "ArrowUp"){
        cycleBack()
    }
    setTimeout(()=>document.addEventListener('keydown', changeSectionOnKey) , 300);
}


//==========    These functions are important for one another =======
const lethargy = new Lethargy();
const throttledEvent = throttle(changeSectionOnWheel,300)//Lethargic only determines if something is inertia scrolling, you still need to throttle it
function lethargicWheelchange(e){   //A lethargic wrapper on my changeSectionOnWheel function to detect inertia scrolling
    e.preventDefault()
    e.stopPropagation();
    if(lethargy.check(e) !== false) {
        throttledEvent(e);      
    }
}
function changeSectionOnWheel(e){
    let dy = e.deltaY;
    if(dy > 0) 
        cycleForward()
    else if(dy < 0) 
        cycleBack()
}
//===========    End of Region ==========

function cycleForward(){
    if(current_selection != nav_links.length-1){
        current_selection +=1;
        nav_links[current_selection].click();
        updateCurrentSelection(current_selection);
        updateSideIndicator(current_selection)
    }
}

function cycleBack(){
    if(current_selection != 0){
        current_selection -=1;
        nav_links[current_selection].click();
        updateCurrentSelection(current_selection);
        updateSideIndicator(current_selection)
    }
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
    for(let i=0; i<scroll_indicator.length; i++){
        scroll_indicator[i].classList.remove('current-indicator-item');
    }
    scroll_indicator[selection].classList.add('current-indicator-item');
}
