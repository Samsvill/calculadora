let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora = document.getElementById('valorPorHora').value
        let disenoPorHora = document.getElementById('interfazHoras').value
        let testingPorHora = document.getElementById('interfazTesting').value
        let HTMLPorHora = document.getElementById('interfazHTML').value
        let CSSPorHora = document.getElementById('interfazCSS').value

        let resultado = valorPorHora*(parseInt(disenoPorHora)+parseInt(testingPorHora)+parseInt(HTMLPorHora)+parseInt(CSSPorHora))
        document.getElementById('valorTotal').value = resultado
    })
}

funcionPredeterminada();