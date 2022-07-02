
export default function CheckerClear() {   
    var fild1 = document.getElementsByClassName('input-box');
    document.getElementsByName("telefone")[0].placeholder="(xx) xxxxx-xxxx";
    document.getElementsByName("telefone")[0].style.border="1px solid rgba(0,0,0,.1)";
    document.getElementById("email").style.border="1px solid rgba(0,0,0,.1)";
    document.getElementById("emailValidation").style.display = "none";
    
    fild1.value("")
    
}