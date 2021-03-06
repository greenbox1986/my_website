let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelector(".nav-links");
let pageLink = document.querySelector(".link");

let atmosfera = document.querySelector("#atmosfera");
let mdd = document.querySelector("#mdd");
let iopixi = document.querySelector("#iopixi");
let markitso = document.querySelector("#markitso");
let cloud = document.querySelector("#cloud");


let goToTop = document.querySelector("#goToTop");
let navSkill = document.querySelector(".skill-links");



console.log(navLinks.children)

// Mouse movement
window.addEventListener('mousemove', cursor);

function cursor(e) {

	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
}


// nav menu
Array.from(navLinks.children).forEach(link => {
	link.addEventListener("mouseleave", () => {
		mouseCursor.classList.remove("link-effect");
		link.classList.remove("hoverred-link");
	});
	link.addEventListener("mouseover", () => {
		mouseCursor.classList.add("link-effect");
		link.classList.add("hoverred-link");
	});
});


// nav skill
Array.from(navSkill.children).forEach(skillLink => {
	skillLink.addEventListener("mouseleave", () => {
		mouseCursor.classList.remove("link-effect");
		link.classList.remove("hoverred-link");
	});
	skillLink.addEventListener("mouseover", () => {
		mouseCursor.classList.add("link-effect");
		link.classList.add("hoverred-link");
	});
});


// links
pageLink.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("link-effect");
});
pageLink.addEventListener("mouseover", () => {
	mouseCursor.classList.add("link-effect");
});

// atmosfera
atmosfera.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("link-effect");
});
atmosfera.addEventListener("mouseover", () => {
	mouseCursor.classList.add("link-effect");
});


// mdd
mdd.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("link-effect");
});
mdd.addEventListener("mouseover", () => {
	mouseCursor.classList.add("link-effect");
});


// iopixi
iopixi.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("link-effect");
});
iopixi.addEventListener("mouseover", () => {
	mouseCursor.classList.add("link-effect");
});


// markitso
markitso.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("link-effect");
});
markitso.addEventListener("mouseover", () => {
	mouseCursor.classList.add("link-effect");
});



// cloud
cloud.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("link-effect");
});
cloud.addEventListener("mouseover", () => {
	mouseCursor.classList.add("link-effect");
});


// goToTop
goToTop.addEventListener("mouseleave", () => {
	mouseCursor.classList.remove("link-effect");
});
goToTop.addEventListener("mouseover", () => {
	mouseCursor.classList.add("link-effect");
});