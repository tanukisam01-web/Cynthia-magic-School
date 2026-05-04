// ===============================
// Cynthia Magic School Script
// ===============================


// ===== ระบบทอยเต๋า 2D6 =====

function rollDice(){

let dice1 = Math.floor(Math.random()*6)+1
let dice2 = Math.floor(Math.random()*6)+1

let total = dice1 + dice2

let result = ""

if(total <=6){

result = "ล้มเหลว"

}

else if(total == 7){

result = "ปกติ"

}

else{

result = "สำเร็จ"

}

document.getElementById("diceResult").innerHTML =
"ผลเต๋า : " + dice1 + " + " + dice2 + " = " + total + " (" + result + ")"

}



// ===============================
// Smooth Scroll Menu
// ===============================

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

let target = document.querySelector(this.getAttribute("href"))

target.scrollIntoView({

behavior:"smooth"

})

})

})



// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(".card")

window.addEventListener("scroll", () => {

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top

if(cardTop < window.innerHeight - 100){

card.style.opacity = "1"
card.style.transform = "translateY(0)"

}

})

})



// ตั้งค่าเริ่มต้น animation

cards.forEach(card => {

card.style.opacity = "0"
card.style.transform = "translateY(40px)"
card.style.transition = "0.6s"

})



// ===============================
// Copy Text Button
// ===============================

function copyText(text){

navigator.clipboard.writeText(text)

alert("คัดลอกแล้ว : " + text)

}



// ===============================
// Random Sacred House
// ===============================

const houses = [

"Alveron",
"Serenya",
"Caelwyn",
"Miravelle",

"Noctarnis",
"Umbrelis",
"Veynar",
"Draemir",

"Ignaros",
"Pyrelith",
"Vulcaris",
"Aetherion",

"Lysandra",
"Marivelle",
"Thalorin",
"Aerwyn",

"Branthorn",
"Eryndor",
"Sylveris",
"Duralith",

"Chronalis",
"Orvalis",
"Luthenor",
"Myrravel",

"Kaelthor",
"Dravenor",
"Valcrest",
"Ironveil"

]

function randomHouse(){

let random = houses[Math.floor(Math.random()*houses.length)]

alert("สายเลือดของคุณคือ : House " + random)

}