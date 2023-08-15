let clientes = []
const clientesSalvos = JSON.parse(localStorage.getItem(clientes)) || []

function mudaForm(){
  const formLog = document.getElementById("formLog")
  const formCad = document.getElementById("formCad")

  formLog.classList.toggle("deactivaded")
  formCad.classList.toggle("deactivaded")
}

function cadastraUsuario(){
  const user = document.getElementById("userCad").value
  const password = document.getElementById("passwordCad").value
  const confirm = document.getElementById("passwordConfirm").value

  if(password === confirm){
    const usuarioExistente = clientesSalvos.some((cliente) => cliente.usuario === user)
  
  if(usuarioExistente) {
    alert("Usuario já cadastrado!")
  } else {
    const cliente = {usuario:user, senha:password}
    clientes.push(cliente)
    clientesSalvos.push(cliente)
    localStorage.setItem("clientes", JSON.stringify(clientesSalvos))
    alert("Usuário cadastrado com sucesso!")
    document.getElementById("userCad").value = ""
    document.getElementById("passwordCad").value = ""
    document.getElementById("passwordConfirm").value = ""
    }
  }else{
    alert("As senhas não coincidem!")
  }
}
function logar(){
  const user = document.getElementById("user").value
  const password = document.getElementById("password").value

  const usuario = clientesSalvos.find((cliente) => cliente.usuario === user && cliente.senha === password)

  if(usuario){
    alert("Login realizado com sucesso!")
    window.location.href = "./home/home.html"
    document.getElementById("user").value=""
    document.getElementById("password").value=""
  }else{
    alert("Nome de usuário ou senha incorretos!")
    document.getElementById("user").value=""
    document.getElementById("password").value=""
  }
}