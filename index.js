
// Define la función para obtener la longitud del contenido actual
const getCurrentContentLength = (content, max) => {
    const maxLength = max;
    return content.length <= maxLength;
  };
  
  // Define la función para validar la longitud del campo de texto
  const textFieldLengthValidator = (textField, counter, maxCount) => {
    textField.onkeyup = function() {
      counter.innerHTML = maxCount - this.value.length;
      if (!getCurrentContentLength(this.value, maxCount - 1)) {
        textField.disabled = true;
      }
    };
  };
  
  // Exporta las funciones
  module.exports = textFieldLengthValidator;
  