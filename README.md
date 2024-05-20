# Character Counter Module

Este módulo proporciona funciones para validar la longitud del contenido de un campo de texto y deshabilitar el campo si la longitud excede un valor máximo permitido.

## Instalación

Instala el módulo con el siguiente comando:

```bash
npm i charactercountermodule
```
## Uso

Agrega el módulo a tu proyecto JavaScript con el siguiente código:

```bash
import { getCurrentContentLength, textFieldLengthValidator } from 'charactercountermodule'
```

## Funciones Disponibles

### getCurrentContentLength

Esta función verifica si la longitud del contenido es menor o igual a un valor máximo permitido.

- **Parámetros:**
  - `content` (string): El contenido cuyo tamaño se va a verificar.
  - `max` (number): El tamaño máximo permitido.

- **Retorna:**
  - `boolean`: `true` si el tamaño del contenido es menor o igual al máximo permitido, `false` en caso contrario.

### textFieldLengthValidator

Esta función valida la longitud del contenido de un campo de texto (`textField`) y actualiza un contador (`counter`) con la cantidad de caracteres restantes. Si el contenido excede el tamaño máximo permitido, deshabilita el campo de texto.

- **Parámetros:**
  - `textField` (HTMLElement): El campo de texto que se va a validar.
  - `counter` (HTMLElement): El elemento que muestra el contador de caracteres restantes.
  - `maxCount` (number): El tamaño máximo permitido del contenido del campo de texto.

## Contribuir

Si quieres contribuir a este proyecto, por favor abre un issue o envía un pull request en el [repositorio de GitHub](https://github.com/rupi014/CharacterCounterModule).

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.
