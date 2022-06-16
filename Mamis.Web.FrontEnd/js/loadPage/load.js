
var n = document.querySelectorAll(".link-menu");
console.log(n)

$(function idMenu(){
    $('.link-menu').click(function(){
        var id = $(this).attr('id'); 

        if(id==1){
            $('#quemsomos').load('quemsomos.html #quemsomos_contend');
            
        }if (id==2) {
            $('#historia').load('historia.html #historia_contend');
            
        }if (id==3) {
            $('#quemsomos').load('quemsomos.html #quemsomos_contend');
        }if (id==4) {
            $('#quemsomos').load('quemsomos.html #quemsomos_contend');
        }if (id==5) {
            $('#quemsomos').load('quemsomos.html #quemsomos_contend');
        }
    });
});


$(function () {
    $(".link-menu").click(function () {
        $(".show").removeClass("show");
        $(this).addClass("show");
    });
});
