function validar() {
    var nome = formulario.nome.value
    var idade = formulario.idade.value
    var email = formulario.email.value
    var senha = formulario.senha.value

    if(nome == '') {
        alert('Preencha o campo Nome')
        formulario.nome.focus()
        return false
    }

    if(idade == '') {
        alert('Preencha o campo Idade')
        formulario.idade.focus()
        return false
    }

    if(email == '' || email.indexOf('@') == -1) {
        alert('Preencha o campo E-mail')
        formulario.email.focus()
        return false
    }

    if(senha == '' || senha.length <= 5) {
        alert('Preencha o campo Senha. Sua senha deve conter pelo menos 5 caracteres')
        formulario.senha.focus()
        return false
    }
}

