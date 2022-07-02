

export default function Clear(){
    var file = document.getElementById('upload');
    var nameValidation = document.getElementById("nameValidation");
    var emailValidation = document.getElementById("emailValidation");
    var inputNome = document.getElementById("username");
    var email = document.getElementById("email");
    var span = document.getElementById('valueSpan');
    var telefone = document.getElementById('telefone');
    
    file.style.display = 'none';
    emailValidation.style.display = "none";
    nameValidation.style.display = "none";
    inputNome.style.border = "1px solid rgba(0,0,0,.1)";
    email.style.border = "1px solid rgba(0,0,0,.1)";
    span.style.opacity = "0";
    telefone.style.border = "1px solid rgba(0,0,0,.1)";
    telefone.placeholder = "(xx) xxxxx-xxxx (WhatsApp)";
   }