function calc1(mensaje){
	
	switch (mensaje){
	case '+' :
	document.getElementById("caja3").value=parseInt(document.getElementById("caja1").value)+
	parseInt(document.getElementById("caja2").value);
	break;
	case '-' :
	document.getElementById("caja3").value=parseInt(document.getElementById("caja1").value)-
	parseInt(document.getElementById("caja2").value);
	break;

	case 'x' :
	document.getElementById("caja3").value=parseFloat(document.getElementById("caja1").value)*
	parseFloat(document.getElementById("caja2").value);
	break;

	case '/' :
	document.getElementById("caja3").value=parseFloat(document.getElementById("caja1").value)/
	parseFloat(document.getElementById("caja2").value);
	break;

	case 'c' :
	document.getElementById("caja1").value="";
	document.getElementById("caja2").value="";
	document.getElementById("caja3").value="";
	break;


}
}