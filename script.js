var formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", function() {
    event.preventDefault()

    var isFormularioValido = true;
    if (formulario.nome.value == "") {
        isFormularioValido = false;
    }

    if (formulario.email.value == "") {
        isFormularioValido = false;
    }

    if (formulario.tel.value == "") {
        isFormularioValido = false;
    }

    if (formulario.date.value == "") {
        isFormularioValido = false;
    }
    // https://github.com/github/fetch
    fetch("https://formsubmit.co/ajax/inscricao.boracorrer@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Nome: formulario.nome.value,
                Email: formulario.email.value,
                Telefone: formulario.tel.value,
                Nascimento: formulario.date.value
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.success == "true") {
                document.querySelector("#mensagens").textContent = "Formulário enviado com sucesso"
            } else {
                throw "Ocorreu um erro ao tentar enviar o formulário: " + data.message
            }
        })
        .catch(error => {
            console.log(error)
            document.querySelector("#mensagens").textContent = error
        });
})