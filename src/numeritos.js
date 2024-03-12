document.addEventListener("DOMContentLoaded", function () {
    /** 
    Author: Postigo Arévalo Javier
    */
    const generar = () => {
        const generarArrayAleatorio = length => Array.from({ length }, () => Math.floor(Math.random() * 11));
        const obtenerNumerosPares = array => array.filter(num => num % 2 === 0);
        const calcularMedia = array => array.reduce((acc, num) => acc + num, 0) / array.length;

        const arrayAleatorio = generarArrayAleatorio(10);
        document.getElementById('1').innerHTML = '10 enteros aleatorios: <li>' + arrayAleatorio.join('</li><li>') + '</li>';

        const arrayPares = obtenerNumerosPares(arrayAleatorio);
        document.getElementById('2').innerHTML = 'Pares extraidos del anterior: <li>' + arrayPares.join('</li><li>') + '</li>';

        const mediaPares = calcularMedia(arrayPares);
        document.getElementById('3').innerHTML = 'Media del anterior: <li>' + mediaPares.toFixed(2) + '</li>';
    };

    generar();
});
