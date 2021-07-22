#RUN CL
Herramienta para gestionar los run chilenos.

Instalación:
npm i runcl

Uso:

const runcl = require('runcl');

Actualmente contamos con 3 metodos;

runFormatting('123456789') retorna 12.345.678-9

runValidation('12345678-9') retorna true si el digito verificado es valido, tambien se peude enviar asi 12.345.678-9

runClean('12.345.678-9') retorna 123456789

