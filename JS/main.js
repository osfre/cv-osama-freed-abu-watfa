let btn0 = document.querySelector("a .btn-top")
btn0.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}
function scrollToTop() {
    if (window.scrollY >= 400) {
        btn0.style.display = "block";
    }
    else {
        btn0.style.display = "none";
    }
}



let btn = document.querySelector("div");
let spans = document.querySelectorAll("span");
let ulElement = document.querySelector("nav ul")
let links = document.querySelectorAll("ul li")


btn.onclick = function () {
    spans.forEach(span => {
        span.classList.toggle("show");
    });
    ulElement.classList.toggle("show");
}
links.forEach(link => {
    link.onclick = function () {
        ulElement.classList.remove('show');
        spans.forEach(span => {
        span.classList.remove("show");
    });
    }
    
});
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul li a");

    function navScroll() {
	sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 600) {
		navlinks.forEach((a) => {
    	a.classList.remove("active");
    if (a.getAttribute('href') == "#" + section.getAttribute("id")) {
		a.classList.add("active");
    }
	});
    }
});
}
window.onscroll = () => {
    navScroll();
    scrollToTop();
    progressBar();
}


let section = document.querySelector("#about");
let progress = document.querySelectorAll(".skill .progress div"); 

function progressBar() {
    if (window.scrollY >= section.offsetTop - 300) { 
		progress.forEach((prog) => {
			prog.style.width = prog.dataset.width;
		})
	}
}

ScrollReveal().reveal(".experiance-card-one", {
    origin: "bottom",
    distance: "250px",
    opacity: 0,
    duration: 2000,
    ease: "ease-in-out",
    reset: true,
    delay:300,
  });
ScrollReveal().reveal(".experiance-card-two", {
    origin: "top",
    distance: "250px",
    opacity: 0,
    duration: 2000,
    ease: "ease-in-out",
    reset: true,
    delay:300,
  });
ScrollReveal().reveal(".experiance-card-three", {
    origin: "bottom",
    distance: "250px",
    opacity: 0,
    duration: 2000,
    ease: "ease-in-out",
    reset: true,
    delay:300,
  });