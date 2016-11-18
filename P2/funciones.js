function saludo(){
	var nom=document.getElementById("nombre1").value; /* Rescata la ID de algo del navegador y 
														y recoje el valor*/
	// alert("Bienvenida/o "+nom); /* Instrucción mas primitiva del javascript. Es una ventana de sistema*/
	// document.getElementById("mensaje").value="Bienvenida/o "+nom;
	document.getElementById("vacio").innerHTML="Bienvenida/o "+nom;
}