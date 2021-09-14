window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
// let botonVerde = document.getElementById("theGreen");
// botonVerde.addEventListener("click",(alert("wuju")));

document.getElementById("theGreen").addEventListener("click", function(){
    alert("wuju");
});