/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    $.getJSON("data.json", function(jd) {
        $.each(jd, function(i,aa){ 
            $("#as").append(aa.name + '&nbsp;&nbsp;&nbsp;' + aa.date + '&nbsp;&nbsp;&nbsp;' + aa.assigned + '<br><br>');
            });
        $("#button").click(function () {
            $("#form").submit(function () {
                var fields = $(":input");
                $.each(fields, function (i, field) {
                    $("#sa").append(field.value);
                });
            });
        });
    });
});
var sno = 0;
$("#button").click(function() {
    var name = $("#tname").val();
    var date = $("#date").val();
    var nm = $("#nm").val();
    var new_row = "<tr><td>" + name + "</td><td>" + date + "</td><td>" + nm + "</td></tr>";
    $("#sa").append(new_row);
    return false;
});
          



         
