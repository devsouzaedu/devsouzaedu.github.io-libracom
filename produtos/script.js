// Aguarde que o DOM esteja carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Função para alternar perguntas frequentes (FAQ)
    const faqButtons = document.querySelectorAll('.toggle-btn');
    
    faqButtons.forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.closest('.faq-item').querySelector('.faq-answer');
        answer.classList.toggle('active');
        button.textContent = answer.classList.contains('active') ? '-' : '+';
      });
    });
  
    // Inicializar o carousel de marcas
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  
    // Adicionar evento de clique ao botão flutuante do WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-button');
    whatsappButton.addEventListener('click', () => {
      window.open('https://wa.me/message/AA7NQ43YVMGIN1', '_blank');
    });
  
    // Efeito de rolagem suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  