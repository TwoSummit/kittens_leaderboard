

$(function() {
  console.log('Client side javascript file is loaded!');
  var leaderboardGrid = $('#leaderboardGrid');

  var data = [
    { text: "Black", value: "1" },
    { text: "Orange", value: "2" },
    { text: "Grey", value: "3" }
  ];

  // create DropDownList from input HTML element
  leaderboardGrid.kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: data,
    index: 0,
  });
  
});