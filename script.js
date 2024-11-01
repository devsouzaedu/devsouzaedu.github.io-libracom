document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('video-bg');
  video.play().then(function () {
    // Vídeo reproduzido com sucesso
  }).catch(function (error) {
    // Tratamento de erro ao reproduzir o vídeo
    console.log('Erro ao reproduzir o vídeo:', error);
  });

  // Iniciar carrossel da galeria
  $('.gallery').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  });

  // Iniciar carrossel de feedback
  $('#feedback-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });

  // Animação suave ao clicar nos links do menu
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Alternar FAQ
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.parentElement.nextElementSibling;
      if (answer) {
        answer.classList.toggle('faq-answer-visible');
      }
    });
  });

  // Mostrar/esconder botão flutuante ao rolar a página
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.floating-button').fadeIn();
    } else {
      $('.floating-button').fadeOut();
    }
  });

  // Animação suave ao clicar no botão flutuante
  $('.scroll-to-top').click(function() {
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
  });
});

$(document).ready(function(){
  $('.carousel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3200,
      dots: false,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('video-bg');
  var fallback = document.getElementById('video-fallback');

  video.addEventListener('canplay', function () {
    video.classList.add('loaded');
    fallback.style.display = 'none';
  });

  video.play().then(function () {
    // Vídeo reproduzido com sucesso
  }).catch(function (error) {
    // Tratamento de erro ao reproduzir o vídeo
    console.log('Erro ao reproduzir o vídeo:', error);
  });
});

// Função para alternar a visibilidade da janela de chat
function toggleChat() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.style.display = chatContainer.style.display === "none" ? "flex" : "none";
}

// Função para gerar a resposta do bot
function generateBotResponse(message) {
  const lowerCaseMessage = message.toLowerCase();

  // Respostas para saudações
  if (lowerCaseMessage.includes("boa tarde")) {
    return "Boa tarde! Como posso ajudar você com nossos wind-banners hoje?";
  } else if (lowerCaseMessage.includes("olá") || lowerCaseMessage.includes("oi")) {
    return "Olá! Como posso ajudar você com nossos wind-banners hoje?";
  } else if (lowerCaseMessage.includes("tamanho") || lowerCaseMessage.includes("dimensões")) {
    return "Oferecemos os wind-banners nos tamanhos de 2m, 2,60m e 3,20m. Qual deles você gostaria?";
  } else if (lowerCaseMessage.includes("modelo")) {
    return "Temos os modelos FACA, PENA, GOTA e VELA. Gostaria de mais informações sobre algum modelo específico?";
  } else if (lowerCaseMessage.includes("comprar") || lowerCaseMessage.includes("preço") || lowerCaseMessage.includes("valor")) {
    return "Ok, clique aqui e converse com um vendedor especialista: <a href='https://wa.me/message/AA7NQ43YVMGIN1' target='_blank'>Falar com um especialista</a>";
  } else if (lowerCaseMessage.includes("ajuda")) {
    return "Claro! Em que área você precisa de ajuda com nossos wind-banners?";
  } else {
    return "Desculpe, não entendi sua pergunta. Posso ajudar com informações sobre tamanhos, modelos ou compras de wind-banners?";
  }
}

// Função para enviar a mensagem do usuário e obter a resposta do bot
function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value;

  if (message.trim() !== "") {
    displayMessage("user", message);

    const botResponse = generateBotResponse(message);
    displayMessage("bot", botResponse);

    userInput.value = "";
  }
}

// Função para exibir uma mensagem no chat
function displayMessage(sender, message) {
  const chatBox = document.getElementById("chatBox");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.innerHTML = message; // Alterado para innerHTML para permitir links
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Evento para enviar a mensagem quando pressionar Enter
document.getElementById("userInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
