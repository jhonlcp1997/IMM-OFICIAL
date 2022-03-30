// *=============no tiene nada que ver esto que voy a escribir=====
// *=============no tiene nada que ver esto que voy a escribir=====

let script ={
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}

console.log(script[2]);

let texto =" Hola Soy tu amigo y enemigo a la vez guajajajaja";
let texto2= "Página sin contenido";
let texto3 = "what are you doing, what the fuck broo...";

const hablar = (texto)=>speechSynthesis.
speak(new SpeechSynthesisUtterance(texto));

hablar(texto);