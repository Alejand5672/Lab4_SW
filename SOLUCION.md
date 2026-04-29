## Luis Alejandro Hernandez Marquez (241424)
# SOLUCIÓN — PARTE 1

---

### Error #1: Uso de import sin configurar ES Modules

**Ubicación:** Línea 1 del archivo laboratorio4_servidor_malo.js

**Tipo de error:** Sintaxis

**Qué estaba mal:**
Se utilizaba la sintaxis `import` pero el proyecto no estaba configurado como ES Module, por lo que Node.js no reconocía esta sintaxis.

**Cómo lo corregí:**

Antes:

import http from "http"

Después (en package.json):

"type": "module"

**Por qué funciona ahora:**
Node.js ahora interpreta los archivos como ES Modules y permite el uso correcto de `import`.

---

### Error #2: Paréntesis faltante en createServer

**Ubicación:** Última línea del archivo laboratorio4_servidor_malo.js

**Tipo de error:** Sintaxis

**Qué estaba mal:**
La función `http.createServer()` no cerraba correctamente el paréntesis, causando un error de sintaxis.

**Cómo lo corregí:**

Antes:

}

Después:

})

**Por qué funciona ahora:**
Se cierra correctamente la llamada a la función, evitando errores de sintaxis.

---

### Error #3: Content-Type incorrecto en ruta /info

**Ubicación:** Ruta `/info`

**Tipo de error:** HTTP

**Qué estaba mal:**
El header `"Content-Type"` estaba mal escrito como `"application-json"` en lugar de `"application/json"`.

**Cómo lo corregí:**

Antes:

{ "Content-Type": "application-json" }

Después:

{ "Content-Type": "application/json" }

**Por qué funciona ahora:**
El cliente reconoce correctamente el tipo de contenido como JSON.

---

### Error #4: Falta de await en fs.readFile

**Ubicación:** Ruta `/api/student`

**Tipo de error:** Asincronía

**Qué estaba mal:**
Se utilizó `fs.readFile` sin `await`, por lo que se devolvía una promesa en lugar del contenido del archivo.

**Cómo lo corregí:**

Antes:

const texto = fs.readFile(filePath, "utf-8")

Después:

const texto = await fs.readFile(filePath, "utf-8")

**Por qué funciona ahora:**
Se espera correctamente la lectura del archivo antes de usar su contenido.

---

### Error #5: Uso incorrecto de JSON.stringify

**Ubicación:** Ruta `/api/student`

**Tipo de error:** Lógica

**Qué estaba mal:**
Se aplicaba `JSON.stringify` a un texto que ya estaba en formato JSON, generando una respuesta incorrecta.

**Cómo lo corregí:**

Antes:

res.end(JSON.stringify(texto))

Después:

res.end(texto)

**Por qué funciona ahora:**
El contenido JSON se envía correctamente sin duplicar la serialización.

---

### Error #6: Código HTTP incorrecto para rutas no encontradas

**Ubicación:** Ruta por defecto

**Tipo de error:** HTTP

**Qué estaba mal:**
Se devolvía código 200 incluso cuando la ruta no existía.

**Cómo lo corregí:**

Antes:

res.writeHead(200)

Después:

res.writeHead(404)

**Por qué funciona ahora:**
Se utiliza el código HTTP adecuado para indicar que la ruta no fue encontrada.

---

### Error #7: Content-Type inconsistente en respuesta 404

**Ubicación:** Ruta por defecto

**Tipo de error:** HTTP

**Qué estaba mal:**
La respuesta de error no tenía formato JSON consistente con el resto del API.

**Cómo lo corregí:**

Antes:

res.end("Ruta no encontrada")

Después:

res.end(JSON.stringify({ error: "Ruta no encontrada" }))

**Por qué funciona ahora:**
Se mantiene consistencia en las respuestas del servidor utilizando formato JSON.

---
