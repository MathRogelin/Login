alert("Bem-vindo, esse programa não pegar seus dados pessoais")
alert("Seu usuário é: \nsenhorninguem@mail.com\nSenha: 123456")
const frm = document.querySelector("form")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const user = frm.inUsername.value
    const pass = frm.inPassword.value
    if (user == "senhorninguem@mail.com" && pass == "123456") {
        alert("Logado com sucesso!")
    }else{
        alert("Digita-se errado, tente de novo")
        return
    }
})