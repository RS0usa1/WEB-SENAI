// Obtém botão do formulário
let botaoEnviar = document.querySelector("#enviar")

botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    // Captura o formulário
    let form = document.querySelector("#frmContato");

    if (form.email.value == "" && form.telefone.value == "") {
        return alert("É necessário informar o telefone e o email para que possa entrar em contato!");
    } else {
        // Monta um texto de retorno
        msgRetorno = form.nome.value + ", agradecemos seu contato! <br><br> Vamos avaliar suas considerações e retornaremos!"

        //Abre a div de retorno
        document.getElementById('formRetorno').style.display = "block";
        //Efetua o retorno
        document.getElementById('textoRetorno').innerHTML = msgRetorno;
        //Fecha o formulário
        document.getElementById('formulario').style.display = "none";
        return;
    }
});