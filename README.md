#! RUN CL
Herramienta para gestionar los run chilenos.

Instalación:
npm i runcl

Uso:
```
const runcl = require('runcl');
```
#Actualmente contamos con 3 metodos;
```
runFormatting('123456789') 
return 12.345.678-9

runValidation('12345678-9') 
return true
runValidation('12.345.678-9') 
return true

runClean('12.345.678-9') retorna 123456789
```
