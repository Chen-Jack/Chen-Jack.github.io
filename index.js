window.onload = ()=>{
    // The following two class adds are for animation purposes
    const element = document.getElementById("nav-bar");
    element.classList.add("nav-expanded");

    const landing = document.getElementById("main");
    landing.classList.add("show-main");


    window.onwheel = changeSectionOnWheel
}

const nav_links = {
    'about': document.getElementById('about-link'),
    'portfolio': document.getElementById('portfolio-link'),
    'education': document.getElementById('education-link')
};



const nav_links_arr = [];
for(let i in nav_links){
    nav_links_arr.push(nav_links[i])
}

function changeSectionOnWheel(wheelEvent){
    let dy = wheelEvent.deltaY;
    if(dy > 0){
        console.log("postive");
    }
    else if(dy < 0){
        console.log("neg");
    }
    else{
        //do nothing
    }
}

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


