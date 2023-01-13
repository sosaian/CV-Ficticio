/* TO-DO LIST Bugs a arreglar */

/* Los botones se esconden pero aún son activables... */

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
    backToTopButton.classList.remove("hidden");
	
	darkModeButton.classList.add("hidden");
  }
  else
  {
    backToTopButton.classList.add("hidden");
	
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
	
	if (theme.getAttribute('href') == 'dark-theme.css')
	{
		theme.setAttribute('href', 'light-theme.css');
	} 
	else
	{
		theme.setAttribute('href', 'dark-theme.css');
	}
}