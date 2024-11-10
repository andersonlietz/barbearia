document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Exibe mensagem de envio simulado
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);

    // Reseta o formulário
    document.getElementById('contact-form').reset();
});
