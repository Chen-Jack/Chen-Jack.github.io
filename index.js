window.onload = ()=>{
    // The following two class adds are for animation purposes
    const element = document.getElementById("nav-bar");
    element.classList.add("nav-expanded");

    const landing = document.getElementById("main");
    landing.classList.add("show-main");


    window.onwheel = changeSectionOnWheel
}

// const nav_links = {
//     'about': document.getElementById('about-link'),
//     'portfolio': document.getElementById('portfolio-link'),
//     'education': document.getElementById('education-link')
// };

const nav_links = document.getElementById('nav-bar').children
for(let i = 0; i<nav_links.length; i++){
    nav_links[i].onclick = updateCurrentSelection.bind(this, i)
}

//Initalize which nav link is highlighted be default
let current_selection = 0; //Default selection is the first link
nav_links[current_selection].classList.add('selected-link')
function updateCurrentSelection(selection){
    console.log("you selected", selection)
    if(current_selection != null){
        nav_links[current_selection].classList.remove('selected-link')
    }
    current_selection = selection;
    nav_links[current_selection].classList.add('selected-link')
}


function changeSectionOnWheel(wheelEvent){
    let dy = wheelEvent.deltaY;
    
    if(dy > 0 && current_selection != nav_links.length-1){ //Prevent wrap
        current_selection +=1;
        nav_links[current_selection].click();
        updateCurrentSelection(current_selection);
    }
    
    else if(dy < 0 && current_selection != 0){  //Prevent wrap
        current_selection -=1;
        nav_links[current_selection].click();
        updateCurrentSelection(current_selection);
    }

    //To prevent constant calling of this function
    window.onwheel = null;
    setTimeout(()=>window.onwheel = changeSectionOnWheel, 200);
}




