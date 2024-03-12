document.addEventListener("DOMContentLoaded", function () {
    let nuevaPagina = window.open('', '_blank', 'height=1000, width=750');
        
    nuevaPagina.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Postigo Arévalo Javier</title>
            <script src="src/numeritos.js"></script>
        </head>
        <body>
            <h1>Postigo Arévalo Javier</h1>
            <h2>Numeros a tutiplén desde cero</h2>
            <div id="1"></div>
            <div id="2"></div>
            <div id="3"></div>
            <a href="index.html">Atrás</a>
        </body>
        </html>
    `);
    nuevaPagina.document.close();
});