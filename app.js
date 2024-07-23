document.getElementById('botonEncriptar').addEventListener('click', function() {
    const campoTexto = document.getElementById('campoTexto').value;
    
    
    const encryptedText = encrypt(campoTexto);
    
    
    document.getElementById('salidaTexto').value = encryptedText;
    limpiarCaja1();
    
});





document.getElementById('botonDesencriptar').addEventListener('click', function() {
    const campoTexto = document.getElementById('campoTexto').value;
    const decryptedText = decrypt(campoTexto);
    document.getElementById('salidaTexto').value = decryptedText;
    limpiarCaja1();
    
    
   
});

document.getElementById('botonCopiar').addEventListener('click', function() {
    const salidaTexto = document.getElementById('salidaTexto').value;

    if (salidaTexto) {
        navigator.clipboard.writeText(salidaTexto).then(function() {
            alert('Texto copiado al portapapeles');

            document.getElementById('limpiarCampo').removeAttribute('disabled');
            
            }, function(err) {
            alert('Error al copiar el texto');
        });
    } else {
        alert('No hay texto para copiar');
}
        limpiarCaja1();
        

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



function limpiarCaja1(){
    let valorCaja = document.getElementById('campoTexto');
    valorCaja.value='';

}    

function limpiarCaja2(){
    let valorCaja = document.getElementById('salidaTexto');
    valorCaja.value='';

}  



function reiniciarTodo() {
    limpiarCaja1();
    limpiarCaja2();
    document.querySelector('#limpiarCampo').setAttribute('disabled','true');
    
    
}
    


