console.log('CodeStarted')

let cookieEl = document.getElementById ('cookieimg')
let extraCookieEl = document.getElementById ('cookieimg2')
let clickCount = 0
let cookieClick = clickCount
let scoreEl = document.getElementById('score')
let doublerButton = document.getElementById('doubler')
let countChange = 1

function clickTheCookie () {
    clickCount = clickCount + countChange
    scoreEl.innerHTML = clickCount
    if (clickCount === 10) {
        if (countChange === 1) {
    doublerButton.classList.remove('remove')
        }
    }
    if (clickCount === 20) {
        if (countChange === 2)
        extraCookie.classList.remove('remove')
    }
    if (clickCount === 21) {
        if (countChange === 2)
        extraCookie.classList.remove('remove')
    }
    if (clickCount % 10 == 0) {
        encourageEl.classList.remove('remove')
    }
    if (clickCount % 10 !== 0) {
    encourageEl.classList.add('remove')
    }
    if (countChange === 1) {
    if (clickCount % 2 == 0) {
    backgroundEl.classList.add('background')
    }
    if (clickCount % 2 !== 0) {
        backgroundEl.classList.remove('background')
    }
}
    if (countChange === 2) {
        if (clickCount % 4 == 0) {
        backgroundEl.classList.add('background')
        }
        if (clickCount % 4 !== 0) {
            backgroundEl.classList.remove('background')
        }
    } 
    if (countChange === 4) {
        if (clickCount % 8 == 0) {
        backgroundEl.classList.add('background')
        }
        if (clickCount % 8 !== 0) {
            backgroundEl.classList.remove('background')
        }
    }
    if (clickCount === 40) {
        if (cookieHelp === 1)
        spacebarEl.classList.remove('remove')
    }
}

cookieEl.addEventListener('click', clickTheCookie)
cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('mouseup', grow)
extraCookieEl.addEventListener('click', clickTheCookie)
extraCookieEl.addEventListener('mousedown', shrink)
extraCookieEl.addEventListener('mouseup', grow)

function shrink() {
cookieEl.classList.add('shrink')
extraCookieEl.classList.add('shrink')
}

function grow() {
cookieEl.classList.remove('shrink')
extraCookieEl.classList.remove('shrink')
}

function shrinkSpace() {
    spaceCookieEl.classList.add('shrink')
}
function growSpace () {
    spaceCookieEl.classList.remove('shrink')
}

let showButton = document.getElementById('show')
let hideButton = document.getElementById('hide')

function showCookie() {
cookieEl.classList.remove('hide')
extraCookieEl.classList.remove('hide')
showButton.classList.add('remove')
hideButton.classList.remove('remove')
}

function hideCookie() {
    cookieEl.classList.add('hide')
    extraCookieEl.classList.add('hide')
    showButton.classList.remove('remove')
    hideButton.classList.add('remove')
}

function buyDoubler() {
    clickCount = clickCount - 10
    scoreEl.innerHTML = clickCount

    doublerButton.classList.add('remove')
    countChange = countChange * 2
}

showButton.addEventListener('click', showCookie)
hideButton.addEventListener('click', hideCookie)
doublerButton.addEventListener('click', buyDoubler)
showButton.classList.add('remove')

let extraCookie = document.getElementById('extraCookie')
let extraCookieImg = document.getElementById('cookieimg2')

function buyExtraCookie() {
    clickCount = clickCount - 20
    scoreEl.innerHTML = clickCount
    extraCookie.classList.add('remove')
    extraCookieImg.classList.remove('remove')
    countChange = countChange * 2
}

extraCookie.addEventListener('click', buyExtraCookie)

let encourageEl= document.getElementById('encourage')

let backgroundEl = document.getElementById('background')

let spacebarEl = document.getElementById('spaceCookie')
let spaceCookieEl = document.getElementById('cookieimg3')
let cookieHelp = 1
spacebarEl.addEventListener('click', spaceCookie)


function spaceCookie() {
    clickCount = clickCount - 40
    scoreEl.innerHTML = clickCount
    spacebarEl.classList.add('remove')
    spaceCookieEl.classList.remove('remove')
    cookieHelp = 2
}












console.log('Code Ended')