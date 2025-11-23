// Seleciona todos os acordeões
const $accordions = document.querySelectorAll(".accordion")

// Adiciona o comportamento de abrir/fechar
$accordions.forEach(accordion => {
    const $accordionBtn = accordion.querySelector('.accordion--btn')
    
    $accordionBtn.addEventListener('click', () => {
        const $icon = accordion.querySelector('.accordion__icon')
        const $answer = accordion.querySelector('.accordion__answer')

        // Troca o ícone entre plus/minus
        $icon.src = $icon.src.includes("icon-plus.svg")
            ? "src/assets/images/icon-minus.svg"
            : "src/assets/images/icon-plus.svg"

        // Alterna a classe que mostra a resposta
        $answer.classList.toggle('actived')
    })
})
