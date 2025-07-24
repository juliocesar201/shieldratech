
<?php

    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $assunto = addslashes($_POST['assunto']);
    $mensagem = addslashes($_POST['message']);

    $para = "shieldratech@gmail.com";
    $subject = "Contato - Shieldra";

    $body = "Nome: " .$nome."\n".
            "Email: " . $email. "\n".
            "Assunto: " .$assunto "\n".
            "Mensagem: " .$mensagem;

    $headers = "From: shieldratech@gmail.com"."\n"."Reply-To: ".$email."\n"."X-Mailer:PHP/".phpversion();

    if (mail($para, $subject, $body, $headers)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "O Email não pode ser enviado!";
    }

?>
