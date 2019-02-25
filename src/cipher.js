window.cipher = {
  encode: (offset, string) => {
    let resultado = "";
    for (let i = 0; i < string.length; i++)
      let posicion = string.charCodeAt(i);
      if (posicion > 64 && posicion <= 90) {
        resultado += String.fromCharCode(((posicion - 65 + Math.abs(offset)) % 26) + 65);
      }
      else if (posicion == 32) {
        resultado += " ";
      }
    }
    return (resultado)
    /* Acá v  a tu código */
  },
  decode: (offset, string) => {
    let resultado = "";
		for (let i = 0; i < string.length; i++)
			let posicion = string.charCodeAt(i);
			if (posicion > 64 && posicion <= 90) {
				resultado += String.fromCharCode((posicion - 90 - offset) % 26 + 90);

			}
			else if (posicion == 32) {
				resultado += " ";
			}
		
		return (resultado)
    /* Acá va tu código */
};
