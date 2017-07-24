/**
 * Created by ASUS on 2017/7/22.
 */

$(function () {

    document.addEventListener("touchmove",function (ev) {
    ev.preventDefault()
},{passive:false})

    $(".tjsh").tap(function () {
         $(".bg").css("display","block");
    })
    $(".bg .xuanze p").tap(function () {
        $(".bg").css("display","none");

    })

})

