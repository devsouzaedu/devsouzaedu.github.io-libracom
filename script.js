// Correção para fixar o menu ao rolar a página
window.onscroll = function() { fixarMenu() };

var navbar = document.querySelector('.navbar');
if (navbar) {
  var sticky = navbar.offsetTop;
}

function fixarMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
}

// Correção para animação suave ao clicar nos links do menu
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});

// Correção para função de slide de banners
function startSlide() {
  var slideIndex = 0;
  var banners = document.querySelectorAll('.banner');
  if (banners.length > 0) {
    banners[0].style.display = 'block'; // Mostrar o primeiro banner inicialmente
    setInterval(function() {
      banners[slideIndex].style.display = 'none';
      slideIndex = (slideIndex + 1) % banners.length;
      banners[slideIndex].style.display = 'block';
    }, 5000); // Altere o valor (em milissegundos) para ajustar a velocidade do slide
  }
}

$(document).ready(function(){
  $('.produto-slider').slick({
    slidesToShow: 3, // Mostrar 3 slides por vez
    slidesToScroll: 1, // Rolagem de 1 slide por vez
    prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
    nextArrow: '<button type="button" class="slick-next">Próximo</button>',
    responsive: [
      {
        breakpoint: 768, // Breakpoint para telas menores
        settings: {
          slidesToShow: 1 // Mostrar apenas 1 slide por vez em telas menores
        }
      }
    ]
  });
});

// Inicialize o Slick Carousel para os banners
$(document).ready(function(){
  $('.banner-slide').slick({
    slidesToShow: 1, // Mostrar apenas 1 slide por vez
    slidesToScroll: 1, // Rolagem de 1 slide por vez
    arrows: true, // Exibir botões de navegação (anterior/próximo)
    prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
    nextArrow: '<button type="button" class="slick-next">Próximo</button>',
    autoplay: true, // Ativar a reprodução automática
    autoplaySpeed: 5000, // Definir a velocidade da reprodução automática (em milissegundos)
  });
});

// Correção para mostrar/esconder o botão flutuante ao rolar a página
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.floating-button').fadeIn();
    } else {
      $('.floating-button').fadeOut();
    }
  });

  // Animação suave ao clicar no botão flutuante
  $('.scroll-to-top').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});

// Correção para botão de alternar FAQ
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.parentElement.nextElementSibling;
    if (answer) {
      answer.classList.toggle('faq-answer-visible');
    }
  });
});

// Correção para iniciar o carrossel da galeria 5
function iniciarCarrossel() {
  const imagens = document.querySelectorAll('.imagem');
  let index = 0;
  const intervalo = 1800; // Intervalo de tempo entre cada mudança de imagem (em milissegundos)

  function mostrarProximoPar() {
    // Oculta o par de imagens atual
    imagens[index].classList.remove('ativo');
    imagens[index + 1].classList.remove('ativo');

    // Atualiza o índice para mostrar o próximo par de imagens
    index = (index + 2) % imagens.length;

    // Exibe o próximo par de imagens
    imagens[index].classList.add('ativo');
    imagens[index + 1].classList.add('ativo');
  }

  // Inicia a animação de carrossel
  if (imagens.length > 1) {
    mostrarProximoPar(); // Exibe o primeiro par de imagens imediatamente
    setInterval(mostrarProximoPar, intervalo);
  }
}

$(document).ready(function(){
  $('.gallery').slick({
    dots: true, // Mostra as bolinhas de navegação
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 2000, // Define a velocidade do autoplay em milissegundos (2 segundos)
    slidesToShow: 2, // Mostrar duas imagens por vez
    slidesToScroll: 2, // Rolagem de duas imagens por vez
    centerMode: true, // Ativa o modo de centralização
    responsive: [
      {
        breakpoint: 768, // Breakpoint para telas menores
        settings: {
          slidesToShow: 1, // Mostrar apenas 1 imagem por vez em telas menores
          slidesToScroll: 1 // Rolagem de 1 imagem por vez em telas menores
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('#feedback-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });
});

$(document).ready(function() {
  var $marcasContainer = $('#marcasContainer');
  if ($marcasContainer.length) {
    $marcasContainer.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: '10px',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '10px'
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '10px'
          }
        }
      ]
    });
  } else {
    console.log("Elemento #marcasContainer não encontrado no DOM.");
  }
});

