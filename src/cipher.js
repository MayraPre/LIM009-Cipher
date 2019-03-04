window.cipher = {
  encode: (offset, string1) => {
    let resultado = "";
    for (let i = 0; i < string1.length ; i++){
      let posicion = string1.charCodeAt(i);
      if (posicion >= 65  && posicion <= 90) {
        let formula = (posicion - 65 + offset) % 26 + 65;
        let result = String.fromCharCode(formula);
        resultado += result;
      }
      else if (posicion == 32) {
        resultado += " ";
      }
      else if (posicion >= 97 && posicion <= 122) {
        let formula = (posicion - 97 + offset) % 26 + 97;
        let result = String.fromCharCode(formula);
        resultado += result;
      }
     }
    return resultado
},

  decode: (offset, string2) => {
    let resultado = "";
    for (let i = 0; i < string2.length; i++) {
          let posicion = string2.charCodeAt(i);
          if (posicion >= 65 && posicion <= 90) {
            let formula = (posicion + 65 - offset) % 26 + 65;
            let result = String.fromCharCode(formula);
            resultado += result;
          } else if (posicion >= 97 && posicion <= 122) {
            let formula = (posicion - 122 - offset) % 26 + 122;
            let result = String.fromCharCode(formula);
            resultado += result;
          } else if (posicion == 32){
            resultado += " ";
          }
        }
        return resultado
      }
    }
      
    
