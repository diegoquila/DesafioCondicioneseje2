

function calcularCantidadStickers() {
    // Obtener la cantidad de stickers seleccionados
    
    const img1 = parseInt(document.querySelector("#img1").value);
    const img2 = parseInt(document.querySelector("#img2").value);
    const img3 = parseInt(document.querySelector("#img3").value); 
   
    
    // Calcular la suma total de stickers
    const totalStickers = img1 + img2 + img3;
    
    // Mostrar el resultado
    const resultado = document.querySelector("#resultado");
    if (totalStickers <= 10) {
        resultado.textContent = `Llevas ${totalStickers} stickers`;
    } else {
        resultado.textContent = "Llevas demasiados stickers";
    }
}