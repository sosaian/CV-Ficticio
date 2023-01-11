/* KNOWN BUGS TO-DO LIST */

//	goToTop const does not scroll completly to the top; I'll need to adjust HTML or find a more aggressive way to make it reach the top of the document.

/* Back-to-Top button appears on load */

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const nextCardButton = document.querySelector(".next-card");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  /* FOR DEBUGGING PURPUSES
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight); */

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
    nextCardButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
    nextCardButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);

/*
// Get the button
let boton = document.getElementById("boton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
*/