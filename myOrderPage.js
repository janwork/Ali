/**
 * Created by Jan on 2017/8/3.
 */
  $(document).ready(function () {
      $("a[orderStatus]").click(function () {
          var orderStatus = $(this).attr("orderStatus");
          if('all'== orderStatus){
              $("table[orderStatus]").show();
          }else{
              $("table[orderStatus]").hide();
              $("table[orderStatus="+orderStatus+"]").show();
          }
          $("div.orderType div").removeClass("seletedOrderType");
          $(this).parents("div").addClass("seletedOrderType");
      });
      
  });