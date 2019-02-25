/* Acá va tu   código */
btnEncode = document.getElementById("buttonEncode");
btnEncode.addEventListener("click", () => {
	string = document.getElementById("txt_ingresado").value.toUpperCase();
	offset = parseInt(document.getElementById("txt_offset").value);
	resultado = cipher.encode(offset,string);
	document.getElementById("txt_resultado").innerHTML = resultado;
 })

  btnDecode = document.getElementById("buttonDecode")
  btnDecode.addEventListener("click", function () {
  	string = document.getElementById("txt_ingresado").value;
  	offset = parseInt(document.getElementById("txt_offset").value);
  	resultado = cipher.decode(offset, string);
  	document.getElementById("txt_resultado").innerHTML = resultado;
  });
