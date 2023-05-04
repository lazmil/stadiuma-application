let four = document.getElementById('four');
let onTop = document.getElementById('onTop');
let header = document.getElementById('header');
let menuIcon = document.getElementById('menuIcon');
let headerMenu = document.getElementById('header-menu');
let containerInner = document.getElementById('container-inner');

const arr = [
    {
        icon: 'icon-icon',
        text: "Keep track of stadiums that you have visited. Find out how many stadiums you've been to across the leagues."
    }, {
        icon: 'icon-medal',
        text: "Earn Badges and rewards for each group of stadiums you visit. Compare your numbers on our leaderboard!"
    }, {
        icon: 'icon-massage',
        text: "Leave reviews and hints and tips for fellow users! Read our own guides to make the best of your trip."
    }, {
        icon: 'icon-icon',
        text: "Discover new stadiums across multiple leagues and sports. Find out the latest news on new developments for your clubs!"
    },
]

arr.map(element => {
    let fourContent = document.createElement('div')
    fourContent.className = 'fourContent'
    four.appendChild(fourContent)

    let icon = document.createElement('div')
    icon.className = 'icon'
    icon.classList.add(element.icon)
    fourContent.appendChild(icon)

    let text = document.createElement('p')
    text.className = 'iconText'
    text.innerText = element.text
    fourContent.appendChild(text)
})

let isHeaderOpen = false;

menuIcon.onclick = () => {
    if (!isHeaderOpen) headerMenu.style.display = "block"

    // after adding menu to the DOM, we need to add artificial delay so it will add animation as soon as menu is added to the DOM.\
    setTimeout(() => {
        isHeaderOpen ? containerInner.classList.remove("header-container-active") : containerInner.classList.add("header-container-active")
        isHeaderOpen = !isHeaderOpen
    }, 0)
}

// removing menu
headerMenu.addEventListener("transitionend", () => {
    if (!isHeaderOpen) {
        headerMenu.style.display = "none"
    }
})
