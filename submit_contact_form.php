<?php
$nome_cliente = $_POST['name'];
$nome_empresa = $_POST['company'];
$mensagem = $_POST['message'];

$assunto = 'Contato do Site - ' . $nome_cliente;
$remetente = 'contato@seusite.com';
$destinatario = 'dev.souzaeduw@gmail.com'; // Substitua pelo seu endereço de e-mail
$cabecalho = "From: $remetente\r\nContent-type: text/plain; charset=utf-8";

// Verifique se o formulário foi enviado corretamente
if (!empty($nome_cliente) && !empty($nome_empresa) && !empty($mensagem)) {
    mail($destinatario, $assunto, $mensagem, $cabecalho);
    echo 'Mensagem enviada com sucesso!';
} else {
    echo 'Por favor, preencha todos os campos.';
}
?>