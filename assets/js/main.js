const navs = document.querySelectorAll(".nav a")
const parts = document.querySelectorAll("[class*='part']:not(.parts)")
let target = location.hash.substr(1)

if (target) {
	window.history.pushState("", document.title, window.location.pathname);
}

document.querySelector(".parts").addEventListener("submit", function(e) {
	toast('Form Submitted!');
})

document.querySelector("body").onhashchange = function() {
	window.navigator.vibrate(30)
	target = location.hash.substr(1)
	changeNav()
	changePart()
	// console.log(target)
}

function changeNav() {
	navs.forEach(function(el) {
		el.classList.remove("nav-active")
		if (el.innerText === target) el.classList.add("nav-active")
	})
}

function changePart() {
	parts.forEach(function(el) {
		el.classList.remove("part-active")
		if (el.classList.contains(`part${target}`)) el.classList.add("part-active")
	})
}

function toast(text = "This is Toast!") {
	document.querySelector(".toast").innerHTML += text
	document.querySelector(".toast").style = "display : block"
	setTimeout(function() {
		document.querySelector(".toast").innerHTML = ""
	document.querySelector(".toast").style = "display : none"
	}, 3000)
}