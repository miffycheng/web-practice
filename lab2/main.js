
$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    let millisecsPerDay = 24*60*60*1000;
    for(var x=0;x<topicCount;x++){
        //debugger;
        $("#courseTable").append(
            `<tr><td>${x+1}</td><td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td></tr>`
        );
    }

    $("#frm1").append();


});

function SetFirst() {
    document.getElementById("frm1").submit();
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
  }