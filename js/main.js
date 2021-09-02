$(document).ready(function () {
  //回首頁
  $(".other-room").click(function () {
    window.location.href = "index.html"
  });

  //訂房頁面送出按鈕
  $("#form-button").click(function () {
    if ($("#name").val() == "") {
      alert("請填寫您的姓名。");
      $("#name").focus();
      return;
    } if ($("#phone").val() == "") {
      alert("請填寫您的手機號碼。");
      $("#phone").focus();
      return;
    } if ($("#checkIn_date").val() == "") {
      alert("請選取您的入住日期。");
      $("#checkIn_date").focus();
      return;
    } if ($("#checkOut_date").val() == "") {
      alert("請選取您的退房日期。");
      $("#checkOut_date").focus();
      return;
    } if ($("#checkIn_date").val() === $("#checkOut_date").val()) {
      alert("訂房日期與退房日期相同，請重新選取您的退房日期。");
      $("#checkOut_date").focus();
      return;
    } else {
      window.location.href = "order_success.html"
    }
  });

  //點擊按鈕跳出訂房視窗
  $(".booking-now").click(function () {
    $(".full-cover").addClass("cover-background")
    $(".order-page-container").css({ "visibility": "visible" })
  });

  //X關閉訂房視窗
  $(".x-button").click(function () {
    $(".full-cover").removeClass("cover-background")
    $(".order-page-container").css({ "visibility": "hidden" })
  });

  //go-top滑動效果
  $(function () {
    $("#go-top").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 900);

      return false;
    });
  });

  //loading效果
  $("#loading").fadeOut(2000);

});

//點空白關閉訂房視窗
$(document).mouseup(function(e){
  var _con1 = $('.green-bg');   //設定目標區域
  var _con2 = $('.white-bg'); 
  var _con3 = $('#ui-datepicker-div'); 
  if(!_con1.is(e.target) && _con1.has(e.target).length === 0){
    if(!_con2.is(e.target) && _con2.has(e.target).length === 0) {
      if(!_con3.is(e.target) && _con3.has(e.target).length === 0) {
        $(".full-cover").removeClass("cover-background")
        $(".order-page-container").css({ "visibility": "hidden" })
      }
    }
  }
});