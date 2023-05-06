const mqDark = window.matchMedia('(prefers-color-scheme: dark)')

const darkModeToggle = document.querySelector("a.dark-mode-toggle")

const darkModeText = darkModeToggle.querySelector("span")
const bodyTag = document.querySelector('body')

const menuToggle = document.querySelector('a.menu-toggle')

const navTag = document.querySelector('nav')

const menuText = menuToggle.querySelector('span')

menuToggle.addEventListener('click', () => {
    bodyTag.classList.toggle('nav-open')
    if(bodyTag.classList.contains('nav-open')) {
        menuText.innerHTML = "Close" 
        gsap.to(".burger-top", {rotation: 45, transformOrigin: "50% 50%", y: 8})
        gsap.to(".burger-bottom", {rotation: -45, transformOrigin: "50% 50%", y: -8})
        gsap.to(".burger-mid", {opacity: 0, width: 0})
    } else {
        menuText.innerHTML = "Menu"
        gsap.to(".burger-top", {rotation: 0, transformOrigin: "50% 50%", y: 0})
        gsap.to(".burger-bottom", {rotation: 0, transformOrigin: "50% 50%", y: 0})
        gsap.to(".burger-mid", {opacity: 1, width: 28})
    }
    
})

darkModeToggle.addEventListener('click', ()=> {
    

    if(bodyTag.classList.contains('dark-mode')) {
        darkModeText.innerHTML = "Light Mode" 
        gsap.to("g.toggle", {x: 43})
    } else {
        darkModeText.innerHTML = "Dark Mode"
        gsap.to("g.toggle", {x: 19})
    }

    const timeline = gsap.timeline()
    timeline
        .set("div.wipe", {height: 0, top: 0})
        .to("div.wipe", {height: "100%", duration: 2})
        .add(() => {
            bodyTag.classList.toggle('dark-mode')
        })
        .to("div.wipe", {height: "0%", top: "100%", duration: 2})
})



const updateDarkMode = () => {

    if(mqDark.matches) {
        bodyTag.classList.add('dark-mode')
        darkModeText.innerHTML = "Light Mode"
        gsap.to("g.toggle", {x: 43})
    } else {
        bodyTag.classList.remove('dark-mode')
        darkModeText.innerHTML = "Dark Mode"
        gsap.to("g.toggle", {x: 19})
    }
}

mqDark.addListener(() => {
    updateDarkMode()
})

const spiralTimeline = gsap.timeline({
    repeat: -1
})

spiralTimeline

    .set("svg,spiral rect", {
        rotation: 0,
        transformOrigin: "50% 50%"
    })

    .set("svg.spiral rect:nth-child(1)", {
        rotation: 15,
        transformOrigin: "50% 50%"
    })

    .set("svg.spiral rect:nth-child(3)", {
        rotation: -15,
        transformOrigin: "50% 50%"
    })

    .to("svg.spiral rect", {

        rotation: "+=90",
        transformOrigin: "50% 50%",
        duration: 4,
        stagger: -0.25
    })

