export default function NameMask(){
    // var  name = document.getElementById('username');
    // var namecorrect = name.value.replace(/([^\d])+/gim, "");

    // document.getElementById('username').value = namecorrect
    var nameValidation = document.getElementById("nameValidation");
    var inputNome = document.querySelector("#username");
    inputNome.addEventListener("keypress", function(e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        nameValidation.style.display = "none";
        inputNome.style.border = "1px solid rgba(0,0,0,.1)"
    
    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
        nameValidation.innerHTML = "Só aceita letras"
        nameValidation.style.display = "block";
        inputNome.style.border = "2px solid red"
    }
})}

