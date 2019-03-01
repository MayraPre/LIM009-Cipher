/*Boton que encripta con las constantes*/
btnEncode = document.getElementById("buttonEncode");
btnEncode.addEventListener("click", () => {
	const string1 = document.getElementById("txt_ingresado").value;
	const offset = parseInt(document.getElementById("txt_offset").value);
	const resultado = cipher.encode(offset,string1);
	document.getElementById("txt_resultado").value = resultado;
});

/*Boton que des-encripta con las constantes*/
  btnDecode = document.getElementById("buttonDecode")
  btnDecode.addEventListener("click", function () {
  	const string = document.getElementById("txt_ingresado").value;
  	const offset = parseInt(document.getElementById("txt_offset").value);
  	const resultado = cipher.decode(offset, string);
  	document.getElementById("txt_resultado").value = resultado;
  });
