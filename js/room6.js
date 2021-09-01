$(document).ready(function () {

    //取得API：單一房型細節
    var token = "9JMdITZn8nxkAQs4bnau4xv8w0TPcsFyFEZs3yLBrv4bYfmaLWe5TncVb2qU";
    $.ajax({
        url: "https://challenge.thef2e.com/api/thef2e2019/stage6/room/YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
        type: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        },
        success: function (data) {
            var room = data.room[0];

            var room_name = room.name;
            $(".room-name").html(room_name);
            $(".room-name-only").html(room_name);
            var room_normalDayPrice = room.normalDayPrice;
            var room_holidayPrice = room.holidayPrice;
            $(".room-price").html("平日（一～四）價格：" + room.normalDayPrice + " / 假日（五〜日）價格：" + room.holidayPrice);

            var room_checkInEarly = room.checkInAndOut.checkInEarly;
            var room_checkInLate = room.checkInAndOut.checkInLate;
            $(".room-check-in").html("入住時間：" + room_checkInEarly + "（最早）/ " + room_checkInLate + "（最晚）");
            var room_checkOut = room.checkInAndOut.checkOut;
            $(".room-check-out").html("退房時間：" + room_checkOut);

            if (room.amenities.Breakfast === true) {
                $(".icon-box1").css({ "opacity": "1" })
                $(".icon-box1 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box1 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box1").css({ "display": "none" })
            };
            if (room.amenities["Mini-Bar"] === true) {
                $(".icon-box2").css({ "opacity": "1" })
                $(".icon-box2 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box2 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box2").css({ "display": "none" })
            };
            if (room.amenities["Room-Service"] === true) {
                $(".icon-box3").css({ "opacity": "1" })
                $(".icon-box3 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box3 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box3").css({ "display": "none" })
            };
            if (room.amenities["Wi-Fi"] === true) {
                $(".icon-box4").css({ "opacity": "1" })
                $(".icon-box4 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box4 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box4").css({ "display": "none" })
            };
            if (room.amenities["Child-Friendly"] === true) {
                $(".icon-box5").css({ "opacity": "1" })
                $(".icon-box5 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box5 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box5").css({ "display": "none" })
            };
            if (room.amenities.Television === true) {
                $(".icon-box6").css({ "opacity": "1" })
                $(".icon-box6 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box6 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box6").css({ "display": "none" })
            };
            if (room.amenities["Great-View"] === true) {
                $(".icon-box7").css({ "opacity": "1" })
                $(".icon-box7 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box7 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box7").css({ "display": "none" })
            };
            if (room.amenities.Refrigerator === true) {
                $(".icon-box8").css({ "opacity": "1" })
                $(".icon-box8 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box8 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box8").css({ "display": "none" })
            };
            if (room.amenities.Sofa === true) {
                $(".icon-box9").css({ "opacity": "1" })
                $(".icon-box9 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box9 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box9").css({ "display": "none" })
            };
            if (room.amenities["Pet-Friendly"] === true) {
                $(".icon-box10").css({ "opacity": "1" })
                $(".icon-box10 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box10 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box10").css({ "display": "none" })
            };
            if (room.amenities["Smoke-Free"] === true) {
                $(".icon-box11").css({ "opacity": "1" })
                $(".icon-box11 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box11 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box11").css({ "display": "none" })
            };
            if (room.amenities["Air-Conditioner"] === true) {
                $(".icon-box12").css({ "opacity": "1" })
                $(".icon-box12 .t-or-f").html('<img src="images/icon/icons-ok.svg" alt="">')
            } else {
                $(".icon-box12 .t-or-f").html('<img src="images/icon/icons-cancel.svg" alt="">')
                $(".icon-order-box12").css({ "display": "none" })
            };
        }
    });

    //jquery日期選擇器
    var dateToday = new Date();
    var dateFormat = $('.date').datepicker('option', 'dateFormat');
    $.datepicker.setDefaults($.datepicker.regional["zh-TW"]); //中文
    $(".date").datepicker({
        dateFormat: "yy-mm-dd",
        showButtonPanel: true,
        numberOfMonths: 2,
        firstDay: 0,
        minDate: dateToday,
    });
    $("#checkIn_date").datepicker({
        dateFormat: "yy-mm-dd",
        showButtonPanel: true,
        numberOfMonths: 1,
        firstDay: 0,
        minDate: dateToday,
    });
    $("#checkOut_date").datepicker({
        dateFormat: "yy-mm-dd",
        showButtonPanel: true,
        numberOfMonths: 1,
        firstDay: 0,
        minDate: dateToday,
    });
});

//訂房天數
function checkDate() {
    if ($("#checkIn_date").val() == '' || $("#checkOut_date").val() == '') {
        $("#checkDate").html("");
        return;
    }
    var checkIn = new Date($("#checkIn_date").val()); //設定 checkIn 的變數內有一個函式
    var checkOut = new Date($("#checkOut_date").val());//設定 checkOut 的變數內有一個函式
    var days = checkOut.getDate() - checkIn.getDate() + 1; //白天 checkOut - checkIn 的 value
    var night = days - 1;
    $("#checkDate").html(days + "天，" + night + "夜");　//最後顯示日期
    var price = (3899 * night || 0).toString(), result = ''; //顯示價錢並加上千位數符號
    while (price.length > 3) {
        result = ',' + price.slice(-3) + result;
        price = price.slice(0, price.length - 3);
    }
    $(".billPrice").html("$" + price + result);
};