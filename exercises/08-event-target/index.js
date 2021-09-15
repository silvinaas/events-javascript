window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	var buttonElm = document.getElementById("btn1");
	
	containerElm.addEventListener("click", function(buttonElm) {
		//you code here
		alert(buttonElm.target);

	});
};
