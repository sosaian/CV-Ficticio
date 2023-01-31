/* TO-DO LIST & Bugs a arreglar */

/* Media-queries para Tablet, Desktop y Smart TV */

/* Modificar botón toggle dark mode para que sea de las mismas dimensiones que el botón back-to-top */

/* Formato Card3 */

const showOnPx = 100;

const backToTopButton = document.querySelector(".back-to-top");

const pageProgressBar = document.querySelector(".progress-bar");

const darkModeButton = document.querySelector(".toggleDarkMode");

const scrollContainer = () =>
{
	return document.documentElement || document.body;
};

const goToTop = () =>
{
	document.body.scrollIntoView(
	{
		behavior: "smooth"
	});
};

document.addEventListener("scroll", () =>
{
  //PARA HACER DEBUGGING
  
  /*
  
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  
  console.log("Client Height: ", scrollContainer().clientHeight);
  
  */
  
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx)
  {
    //Quitar estas clases hacen aparecer el botón Back-To-Top
	backToTopButton.classList.remove("disable");
    backToTopButton.classList.remove("hidden");
	
	//Agregar estas clases hacen desaparecer el botón Toggle Dark Mode
	darkModeButton.classList.add("hidden");
	darkModeButton.classList.add("disable");
  }
  else
  {
    //Agregar estas clases hacen desaparecer el botón Back-To-Top
	backToTopButton.classList.add("hidden");
    backToTopButton.classList.add("disable");
	
	
	//Quitar estas clases hacen aparecer el botón Toggle Darke Mode
	darkModeButton.classList.remove("disable");
	darkModeButton.classList.remove("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);

darkModeButton.addEventListener("click", toggleTheme);




function toggleTheme()
{
	// Obtiene un arreglo de todos los elementos <link>. Tener en cuenta seleccionar el elemento correcto usando el índice.
	
	var theme = document.getElementsByTagName('link')[1];

	// Cambiando el valor del atributo href se alterna entre los distintos css.
	
	if (theme.getAttribute('href') == 'light-theme.css')
	{
		theme.setAttribute('href', 'dark-theme.css');
	} 
	else
	{
		theme.setAttribute('href', 'light-theme.css');
	}
}

function formSnackbar() {
  // Get the form snackbar DIV
  var snackbar = document.getElementById("formSnackbar");

  // Add the "show" class to DIV
  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}