function calcular(num){
    var numero = document.getElementById('painel').innerHTML
    var painel = document.getElementById('painel').innerHTML = numero + num
    
    if(painel.length > 7){
        document.getElementById('dots').style.display = 'block'
    }else{
        document.getElementById('dots').style.display = ''
    }
}
function resultado(){
    var resultado = document.getElementById('painel').innerHTML
    if(resultado){
        document.getElementById('painel').innerHTML = eval(resultado)
    }
}
function escondeDots(){
    document.getElementById('dots').style.display = ''
}
function mostraDots(){
    var numero = document.getElementById('painel').innerHTML
    if(numero.length > 7){
    document.getElementById('dots').style.display = 'block'
    }
}
function voltar(){
    var numero = document.getElementById('painel').innerHTML
    var resultado = document.getElementById('painel').innerHTML
    document.getElementById('painel').innerHTML = resultado.substring(0, resultado.length -1)
    if(numero == ''){
        document.getElementById('dots').style.display = ''
    }
}
function apagarTudo(){
    document.getElementById('painel').innerHTML = ''
    document.getElementById('dots').style.display = ''
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
        strings: ["Ferramentas Online", "Como formatar um texto", "Como interpletar um texto", "Web Designer", "Como Otimizar seu computador"],
        typeSpeed: 100,
        backSpeed: 60,
       loop: true
    });

    //var typed = new Typed(".typing-2", {
      //  strings: [""],
      //  typeSpeed: 100,
     //   backSpeed: 60,
    //    loop: true
  //  });

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
