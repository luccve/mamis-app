export default function Login() {

    var btn = document.getElementById("btnlogin");
    var largura = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;


    if (largura<=600){
        btn.click(function(){   
            window.open("/login","_blank");
        })
    }
    
}