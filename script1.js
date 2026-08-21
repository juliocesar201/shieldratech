function converterMaiuscula() {
    let texto = document.getElementById("texto");
    if (texto) texto.value = texto.value.toUpperCase();
}

function converterMinuscula() {
    let texto = document.getElementById("texto");
    if (texto) texto.value = texto.value.toLowerCase();
}

function primeiraLetraMaiuscula() {
    let texto = document.getElementById("texto");
    if (texto) {
        texto.value = texto.value
            .toLowerCase()
            .split(' ')
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join(' ');
    }
}

function maiusculaAposPonto() {
    let elTexto = document.getElementById("texto");
    if (!elTexto) return;

    let texto = elTexto.value.toLowerCase();

    texto = texto.charAt(0).toUpperCase() + texto.slice(1);

    // Suporte a caracteres acentuados
    texto = texto.replace(/([\.!?]\s*)([\w\u00C0-\u024F])/gu, (match, pontuacao, letra) => {
        return pontuacao + letra.toUpperCase();
    });

    elTexto.value = texto;
}

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script (com checagem de existência)
    const typingTexts = [
        "Desenvolvedor Web", 
        "Formatação e Manutenção de Computadores", 
        "Cabeamento de Redes", 
        "Web Designer", 
        "Limpeza e troca de pasta térmica"
    ];

    if ($(".typing").length) {
        new Typed(".typing", {
            strings: typingTexts,
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if ($(".typing-2").length) {
        new Typed(".typing-2", {
            strings: typingTexts,
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // owl carousel script (com checagem de existência)
    if ($('.carousel').length) {
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
    }
});
