/**
 * Created by Jan on 2017/7/24.
 */


$(document).ready(function () {
    $("img.smallImage").mouseenter(function () {
        var bigImageUrl = $(this).attr("bigImageUrl");
        $("img.bigImg") .attr("src",bigImageUrl);
    });


    $("img.bigImg").load(
        function(){
            $("img.smallImage").each(function(){
                var bigImageURL = $(this).attr("bigImageURL");
                img = new Image();
                img.src = bigImageURL;
                img.onload = function(){
                    $("div.img4load").append($(img));
                };
            });
        }
    );


    var stock = 66;
    $(".productNumberSetting").keyup(function () {
     var num = $(".productNumberSetting").val();
     num = parseInt(num);
     if(isNaN(num))
         num =1;
     if(num<=0)
         num =1;
     if(num>stock)
         num = stock;
     $(".productNumberSetting").val(num);
    });


    $(".increaseNumber").click(function () {
        var num =  $(".productNumberSetting").val();
        num++;
        if(num>stock)
            num=stock;
        $(".productNumberSetting").val(num);
    });


    $(".decreaseNumber").click(function () {
        var num =  $(".productNumberSetting").val();
        num--;
        if(num<=0)
            num=1;
        $(".productNumberSetting").val(num);
    });
    

    $("a.productDetailTopReviewLink").click(function(){
        $("div.productReviewDiv").show();
        $("div.productDetailDiv").hide();
    });

    $("a.productReviewTopPartSelectedLink").click(function(){
        $("div.productReviewDiv").hide();
        $("div.productDetailDiv").show();
    });

    



    
});
