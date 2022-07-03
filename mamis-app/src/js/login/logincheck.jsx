export default function LoginCheck(){
    
    var email = document.getElementById("loginEmail").value;
    var senha = document.getElementById("loginSenha").value;
    
    if (email && senha != null) {
        console.log(email, senha)
    }

    alert("Preencha os campos corretamente");
    
}