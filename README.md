# IMM-prueba
Primer repositorio del Instituto Médico de la Mujer


***Programador a cargo: JHON LARRY CRUZ PORRAS***

## Estructura de la página "sin las carpetas vacias"

- /css (se encuentran todos los estilos, pero los trabajé en SASS)
- /img **(aqui se encuentran las imágenes simples, que van los header y footer, flechas etc)**
    - image-simple(svg de los primeros -> a estos tendré que cambiarlos para no tener muchas carpetas)
    - image-simple2(aqui se encuentran la mayoria de las imágenes)
    - images-gest(Todo lo agregado despues en gestacional)
    - images-gine(Todo lo agregado despues en ginecológico)
- /images
    - Endocrinólogas **(por el momento solo hay esto)** había xD
- /js
    - carrusel_gen.js
    - carrusel-egi-emi.js
    - content_arrows-gine.js
    - index.js
    - slider.js
    - test.js
    - /others-js
        - slider-endocrinologas.js **Esto va a trabajar como un apartado**
- /sass (todos los archivos originales)
- /views
    - gestacional-antenatal.html
    - gestacional-crecimiento_doppler.html
    - gestacional-genetico.html
    - gestacional-morfologico.html
    - gestacional-premorfologico.html

    - ginecologia_eleccion-egi_emi.html
    - ginecologia-consulta.html
    - ginecologia-egi.html
    - ginecologia-ema.html
    - ginecologia-emi.html

    - index-general.html (indice de todas las paginas en urlPrueba y urlOficial)

    - /others **Esto va a trabajar como un apartado**
        - ginecologia-info_date-consulta.html(fue hecho sin pensar, por la presión de la de procesos y la de marketing)
        - ginecologia-info_date-egi.html(fue hecho sin pensar, por la presión de la de procesos y la de marketing)
        - colocacion_hierro.html 
        - encrinologas.html
        - muestra_de_sangre.html
        - recomendaciones-hierro.html
- ***index.html***  **(por defecto abre el contenido gestacional-viabilidad)**

### ***Pondré a prueba lo que encontré sobre ilustrator a diseño web ("Al final no lo hice")***

### Páginas web alternativas del IMM:
-http://www.immetabolico.com.pe/

### Tengo que hacer algo parecido a esta página para poder avanzar algo
-https://www.scotiabank.com.pe/Acerca-de/default

### Página de prueba

### Página final


Errores que no son errores:
- Uncaught TypeError: Cannot set properties of null (setting 'onclick')
    at content_arrows-gine.js:77:19

- Error de Favicon.ico al cargar la página

## Cómo trabajar este repo

1- Este proyecto esta trabajado con:
 - GIT : instalar git para poder trabajar con el versionado.
 - HTML5, CSS3, JAVASCRIPT(no confundir con JAVA) con EcmaScript 6.
 - SASS: Para mayor detalle en los estilos, puede descargar cualquier preprocezador de sass que guste.
 - Fuentes Inline y/o Local: se utilizaron "Abel" y "Poppins"
 - Editor de código VSCode (Opcional): preferiría que utilizara este editor... tiene muchas funcionalidades que le puede ayudar.
    - Live Server: esta extension le ayudará a ver los cambios del código en tiempo real.
    - Live Sass Compiler: esta extension le ayudará a compilar los archivos SCSS "EL POR QUE SE UTILIZÓ SASS, ES DEBIDO A QUE SE REQUERÍA UN DISEÑO ESPECIFICO PARA CADA CONTENIDO Y/O LANDING PAGE, EL POR QUE NO SE TRABAJO CON ALGÚN FRAMEWORK ES POR LA MISMA RAZÓN Y POR QUE NO SE REQUERIA LÓGICA MUY AVANZADA, SINÓ MÁS DETALLE EN ESTILOS.

2- Como levantar este proyecto:
**hay varias formas de hacerlo, pero por ahora detallaré 2 formas**

- **Primera forma**
    - Una vez inicializado git, subirlo a un repositorio en linea, Github(opcional)
    - Cpanel tiene un "Git Version Control" ingrese y dele a Administrar, desde ahí puede hacer una clonacion a su repositorio subido en Github; una vez hecho la redireccion al repositorio , en la pestaña de Pull or Deploy verifique que todo este en orden, dele a "Update from Remote" espere que cargue sus último commit y luego dele a "Deploy HEAD Commit", espere a que este en verde a la derecha, espere minimo 2 minutos para que ajuste todos y ya estaría.
- **Segunda Forma**
    - El proyecto empaquetelo en un archivo .zip "que no sea .rar"; luego en el directorio en Cpanel suba el archivo comprimido; descomprimalo en la ruta donde se encuentra el nombre de la página. espere minimo 2 minutos para que ajuste todos los cambios, y ya estaría.

3- Comentarios Finales:
- Lamento si algunas cosas se me hayan pasado en los estandares de los estilos, y en la parte reponsiva, solo trabajé yo este proyecto tal vez no me di cuenta de algún error que se me haya pasado.

- Agradecer por haber trabajado en este proyecto, no sabía que podia llegar a hacer esto, por lo que muchas gracias por darme la oportunidad de crecer.