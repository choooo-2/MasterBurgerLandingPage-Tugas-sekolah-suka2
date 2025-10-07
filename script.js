const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// Bagian Slider

let sliders = document.querySelectorAll(".slider")
let dotscontainer = document.querySelector(".dots-container")
let nextbtn = document.querySelector(".nav.next")
let prevbtn = document.querySelector(".nav.prev")

let currentindex = 0
let autoPlayInterval

function showslider(index){
    // Menghapus Class Active Di Komponen Slider dan Dots-Container
    sliders.forEach((slider, i) =>{
        slider.classList.remove("active")
        if(dotscontainer.children[i]){
            dotscontainer.children[i].classList.remove("active")
        }
    })

    // Tampilkan Slider
    sliders[index].classList.add("active")
    if (dotscontainer.children[index]){
        dotscontainer.children[index].classList.add("active")
    }
}

function nextslider(){
    currentindex = (currentindex + 1) % sliders.length
    showslider(currentindex)
}

function prevslider(){
    currentindex = (currentindex - 1 + sliders.length) % sliders.length
    showslider(currentindex)
}

nextbtn.addEventListener('click', () => {
    nextslider()
    resetautoplay()
})

prevbtn.addEventListener('click', () => {
    prevslider()
    resetautoplay()
})

function startautoplay(){
    autoPlayInterval = setInterval(nextslider, 5000)
}

function resetautoplay(){
    clearInterval(autoPlayInterval)
    startautoplay()
}

function createdots(){
    sliders.forEach((_, i) =>{
        let dot = document.createElement('span')
        dot.classList.add('dot')
        dot.addEventListener('click', ()=>{
            currentindex = i 
            showslider(currentindex)
            resetautoplay()
        })
        dotscontainer.appendChild(dot)
    })
    showslider(currentindex)
}

createdots()
startautoplay()