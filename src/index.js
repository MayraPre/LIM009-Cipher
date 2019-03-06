/* Acá va tu   código */

/* Funcion  y fórmula para encriptar*/
const btnEncode = document.getElementById("buttonEncode");
btnEncode.addEventListener("click", () => {
	const string1 = document.getElementById("txt_ingresado").value;
	const offset = parseInt(document.getElementById("txt_offset").value);
	const resultado = cipher.encode(offset, string1);
	document.getElementById("txt_resultado").value = resultado;
});

/* Funcion  y fórmula para desencriptar*/
const btnDecode = document.getElementById("buttonDecode")
btnDecode.addEventListener("click", function () {
	const string = document.getElementById("txt_ingresado").value;
	const offset = parseInt(document.getElementById("txt_offset").value);
	const resultado = cipher.decode(offset, string);
	document.getElementById("txt_resultado").value = resultado;
});

