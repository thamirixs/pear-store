

const imagens = {
    azul: "img/pear_azul.png.jpg",
    preto: "img/pear_preto.png.png",
    rosa: "img/pear_rosa.png.png",
    vermelho: "img/pear_vermelho.png.jpg"
};

const nomesCores = {
    azul: "Azul",
    preto: "Preto",
    rosa: "Rosa",
    vermelho: "Vermelho"
};

const botoes = document.querySelectorAll(".color-option");

const imagemProduto = document.getElementById("product-image");

const textoCor = document.querySelector("#selected-color strong");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        const cor = botao.dataset.color;

        // Atualiza o nome da cor
        textoCor.textContent = nomesCores[cor];

        // Atualiza o botão selecionado
        botoes.forEach((item) => {
            item.classList.remove("active");
        });

        botao.classList.add("active");

        // Troca a imagem com efeito suave
        imagemProduto.style.opacity = "0";

        setTimeout(() => {

            imagemProduto.src = imagens[cor];

            imagemProduto.alt = `Pear Pro ${nomesCores[cor]}`;

            imagemProduto.style.opacity = "1";

        }, 250);

    });

});

