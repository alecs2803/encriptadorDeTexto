document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText').value;
    if (outputText) {
        navigator.clipboard.writeText(outputText).then(function() {
            alert('Texto copiado al portapapeles');
        }, function(err) {
            alert('Error al copiar el texto');
        });
    } else {
        alert('No hay texto para copiar');
    }
    

});

function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}



function limpiarTodoCampo(){
    let valorCaja = document.querySelector('#limpiarCampo');
    valorCaja.value = '';

}
    


