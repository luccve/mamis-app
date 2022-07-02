export default function TextareaJS() {


    
    var desc = document.getElementById('msg');
    var span = document.getElementById('valueSpan');
    var span = document.getElementById('valueSpan');

    span.innerHTML = desc.value.length + "/400";
    
    if (desc.value.length==0){
        span.style.opacity = '0';
    }else{
        span.style.opacity = '1';
    }





}