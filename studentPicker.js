var $input = $("#names");
var studentArr = [];

$("#addBtn").click(function() {
  var name = $input.val();
  name =name.split(",");
  $input.val('');
  
  if (name[0] !== '') {
    name.map(function(studName) {
      var $li = $("<li>");
      $("#studentList").append($li.text(studName));
      studentArr.push(studName);
    });
    
  }
  
});

$("#randomBtn").click(function() {
  var currStudent = studentArr[Math.floor(Math.random() * studentArr.length)];
  $("#monthStudent").text(currStudent);
  $("#monthLabel").show();
});

$("#teamsBtn").click(function() {
  var num = 1;
  $("#teamsContainer").empty();
  var teamNumber = parseInt($("#teamNum").val());
 
  studentArr.sort(function() {
    // Math.random gives a number between 0 and 1. Half the time, the math.random num will be smaller than 0.5. The sort order will ascend when smaller and vice-versa
    return 0.5 - Math.random();
  });

  for (var i = 0; i < studentArr.length; i+=teamNumber) {
    var tempArr = studentArr.slice(i,i+teamNumber);
    var $ul = $("<ul>").text("Team: " + num).addClass("teams");
    num++;
    tempArr.map(function(studName) {
    var $li = $("<li>");
    $("#teamsContainer").append($ul.append($li.text(studName)));
    });   
  }    
});


