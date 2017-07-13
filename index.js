/**
 * Created by Jan on 2017/5/23.
 */

$(document).ready(function () {
       $("div.eachCategory").mouseenter(
           function () {
                     var cid = $(this).attr("cid");
               $("div.productsAsideCategorys[cid="+cid+"]").show();
           }
       );

    $("div.eachCategory").mouseleave(
        function () {
            var cid = $(this).attr("cid");
            $("div.productsAsideCategorys[cid="+cid+"]").hide();
        }
    );

    $("div.productsAsideCategorys").mouseenter(function () {
         $(this).show();
    });

    $("div.productsAsideCategorys").mouseleave(function () {
        $(this).hide();
    });


    $("div.rightMenu span").mouseenter(function () {
        var left = $(this).position().left;
        var top =   $(this).position().top;
        var width = $(this).css("width");
        var destLeft = parseInt(left) + parseInt(width)/2;
        
        $("img#catear").css("left",destLeft);
        $("img#catear").css("top", 150+top);
        $("img#catear").fadeIn(500);
   });

    $("div.rightMenu span").mouseleave(function () {
        $("img#catear").hide();
    });

    var left = $("div#carousel-of-product").offset().left;
    $("div.categoryMenu").css("left",left-20);
    $("div.categoryWithCarousel div.head").css("margin-left",left);
    $("div.productsAsideCategorys").css("left",left-20);


    $("div.productsAsideCategorys div.row a").each(function(){
        var v = Math.round(Math.random() *6);
        if(v == 1)
            $(this).css("color","#87CEFA");
    });


    $("div.head").click(function () {
        $("div#catMenu").toggle();
    });

});