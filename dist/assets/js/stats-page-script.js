const { reload } = require("browser-sync");

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
var diagramDineIn = 200,
  diagramToGo = 122,
  diagramDelievery = 264;
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Dine In", diagramDineIn],
    ["Empty", 300 - diagramDineIn],
  ]);

  var options = {
    pieHole: 0.7,
    backgroundColor: {
      stroke: "black",
      strokeWidth: 10,

    },
    slices: {
      0: { color: "#FF7CA3" },
      1: { color: "transparent" },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("most-type__additional-diagram-1")
  );
  //dine in
  chart.draw(data, options);
  //to go
  data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["To Go", diagramToGo],
    ["Empty", 300 - diagramToGo],
  ]);
  chart = new google.visualization.PieChart(
    document.getElementById("most-type__additional-diagram-2")
  );
  chart.draw(data, options);
  //delievery
  data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Delievery", diagramDelievery],
    ["Empty", 300 - diagramDelievery],
  ]);
  chart = new google.visualization.PieChart(
    document.getElementById("most-type__additional-diagram-3")
  );
  chart.draw(data, options);
}
