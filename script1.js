function converterMaiuscula() {
      let texto = document.getElementById("texto");
      texto.value = texto.value.toUpperCase();
    }

    function converterMinuscula() {
      let texto = document.getElementById("texto");
      texto.value = texto.value.toLowerCase();
    }

    function primeiraLetraMaiuscula() {
      let texto = document.getElementById("texto");
      texto.value = texto.value
        .toLowerCase()
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');
    }
    function maiusculaAposPonto() {
      let texto = document.getElementById("texto").value;

      // Deixa tudo em minúsculo primeiro
      texto = texto.toLowerCase();

      // Coloca a primeira letra do texto em maiúscula
      texto = texto.charAt(0).toUpperCase() + texto.slice(1);

      // Transforma a primeira letra após ponto, interrogação ou exclamação em maiúscula
      texto = texto.replace(/([\.!?]\s*)(\w)/g, (match, pontuacao, letra) => {
        return pontuacao + letra.toUpperCase();
    });

    document.getElementById("texto").value = texto;
    }

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Desenvolvedor Web", "Formatação e Matenção de Computadores", "Cabeamos de Redes", "Web Designer", "Limpeza e troca de pasta termica"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Desenvolvedor Web", "Formatação e Matenção de Computadores", "Cabeamos de Redes", "Web Designer", "Limpeza e troca de pasta termica"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
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
});
