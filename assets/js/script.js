document.addEventListener("DOMContentLoaded", function () {
    // Menu Hambúrguer
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Contador regressivo
    function atualizarContagem() {
        const dataCasamento = new Date("September 27, 2025 00:00:00").getTime();
        const agora = new Date().getTime();
        const diferenca = dataCasamento - agora;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    setInterval(atualizarContagem, 1000);

    // Carrossel de fotos
    let index = 0;
    const imagens = document.querySelectorAll(".carousel img");

    function mostrarImagem(indice) {
        imagens.forEach(img => img.style.display = "none");
        imagens[indice].style.display = "block";
    }
    
    document.querySelector(".prev").addEventListener("click", function () {
        index = (index === 0) ? imagens.length - 1 : index - 1;
        mostrarImagem(index);
    });
    
    document.querySelector(".next").addEventListener("click", function () {
        index = (index === imagens.length - 1) ? 0 : index + 1;
        mostrarImagem(index);
    });
    
    mostrarImagem(index);

    // Mostrar lista de presentes
    document.getElementById("mostrar-presentes").addEventListener("click", function () {
        const listaPresentes = document.getElementById("lista-presentes");
        listaPresentes.style.display = (listaPresentes.style.display === "none" || listaPresentes.style.display === "") ? "block" : "none";
    });

    // Redirecionamento do botão de confirmação
    document.getElementById("confirmar-presenca").addEventListener("click", function () {
        alert("Você está sendo redirecionado ao nosso formulário");
        window.location.href = "https://forms.gle/Wp5WPy8XrNck2sSr6";
    });

    // Ajuste de responsividade do menu ao redimensionar
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            nav.classList.remove("active");
        }
    });

    // Lista de presentes com margem
    const listaPresentes = [
        { 
            nome: "Rack", 
            preco: "R$ 1.130,00", 
            imagem: "Rack.jpg", 
            link: "https://www.exemplo.com/rack"
        },
        { 
            nome: "Mesa de Jantar 6 Cadeiras", 
            preco: "R$ 1.799,00", 
            imagem: "Mesa.jpg"
        },
        { 
            nome: "Cabeceira Queen", 
            preco: "R$ 500,00", 
            imagem: "Cabeceira-Queen .jpg"
        },
        { 
            nome: "Cabideiro de Parede", 
            preco: "R$ 100,00", 
            imagem: "CabideiroParede.jpg"
        },
        { 
            nome: "Furadeira Parafusadeira", 
            preco: "R$ 250,00", 
            imagem: "Furadeira-Parafusadeira.webp"
        },
        { 
            nome: "Guarda-Roupa", 
            preco: "R$ 1.500,00", 
            imagem: "guardaroupa.jpg"
        },
        { 
            nome: "Kit 3 Caixas Organizadoras", 
            preco: "R$ 150,00", 
            imagem: "Kit 3 caixas organizadoras.jpg"
        },
        { 
            nome: "Kit 3 Escovas de Limpeza Multiuso", 
            preco: "R$ 80,00", 
            imagem: "kit 3 escovas de limpeza multiuso.jpg"
        },
        { 
            nome: "Robô Aspirador", 
            preco: "R$ 900,00", 
            imagem: "robo-aspirador-kabum-smart-900-220v-branco-preco1799.webp"
        },
        { 
            nome: "Sofá", 
            preco: "R$ 2.000,00", 
            imagem: "sofa.jpg"
        },
        { 
            nome: "TV Smart", 
            preco: "R$ 2.200,00", 
            imagem: "tvsmart2100.jpg"
        },
        { 
            nome: "Cadeira de Escritório", 
            preco: "R$ 2.200,00", 
            imagem: "cadeira.webp"
        },
        { 
            nome: "Mesa de Escritório", 
            preco: "R$ 900,00", 
            imagem: "MesaEscri.webp"
        },
        { 
            nome: "Batereira ou Liquidificador", 
            preco: "R$ 500,00", 
            imagem: "BateLiqui.webp"
        },
        { 
            nome: "Jogo de Panelas", 
            preco: "R$ 700,00", 
            imagem: "JogoPane.webp"
        },
        { 
            nome: "Aparelho de Jantar", 
            preco: "R$ 600,00", 
            imagem: "AparelhoJantar.webp"
        },
        { 
            nome: "Jogo de Cama", 
            preco: "R$ 600,00", 
            imagem: "ConjuntoEdredom.webp"
        },
        { 
            nome: "Ferro de Passar", 
            preco: "R$ 130,00", 
            imagem: "Ferro.webp"
        },
        { 
            nome: "Cotas para lua de mel (PIX)", 
            preco: "R$ ...", 
            imagem: "ValeM.png"
        },
        { 
            nome: "Vale-presentes de lojas (Tok&Stok, Magazine Luiza, etc.)", 
            preco: "R$ ...", 
            imagem: "ValeP.png"
        }
        ,
        { 
            nome: "Um ano de corte de cabelo para o noivo ✂️", 
            preco: "R$ 910,00", 
            imagem: "noivos.png"
        } ,
        { 
            nome: "Um ano de corte de cabelo para a noiva ✂️", 
            preco: "R$ 1000,00", 
            imagem: "noivos.png"
        },
        { 
            nome: "Um estoque vitalício de paciência para a noiva 😂", 
            preco: "R$ 300,00", 
            imagem: "noivos.png"
        },
        { 
            nome: "Um ano de Netflix pago (porque casal unido maratona junto) 🍿", 
            preco: "R$ 400,00", 
            imagem: "noivos.png"
        },
        { 
            nome: "Kit “Não briga comigo” (chocolate, pizza e flores) 🍫🍕🌹", 
            preco: "R$ 300,00", 
            imagem: "noivos.png"
        },
        { 
            nome: "Vale “hoje é você que lava a louça” 🍽️", 
            preco: "R$ 150,00", 
            imagem: "noivos.png"
        },
        { 
            nome: "Kit Gamer pros Noivos", 
            preco: "R$ 750,00", 
            imagem: "noivos.png"
        }
        
    ];
    
    const containerPresentes = document.getElementById("lista-presentes");
    listaPresentes.forEach(presente => {
        const divPresente = document.createElement("div");
        divPresente.classList.add("presente-item"); // Adicionando a classe para margem
    
        // Se for o Rack, envolve a imagem com um link <a>
        const imagemHtml = (presente.nome === "Rack") 
            ? `<a href="${presente.link}" target="_blank">
                <img src="assets/images/presentes/${presente.imagem}" alt="${presente.nome}" class="presente-img">
              </a>` 
            : `<img src="assets/images/presentes/${presente.imagem}" alt="${presente.nome}" class="presente-img">`;
    
        divPresente.innerHTML = `
            <div class="presente-container">
                ${imagemHtml}
                <div class="presente-info">
                    <h3>${presente.nome}</h3>
                    <p>${presente.preco}</p>
                </div>
            </div>
        `;
    
        containerPresentes.appendChild(divPresente);
    });
});
