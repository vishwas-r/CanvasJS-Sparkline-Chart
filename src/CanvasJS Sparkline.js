(function () {
	var CanvasJS = window.CanvasJS || CanvasJS ? window.CanvasJS : null;
	if (CanvasJS) {
		CanvasJS.Chart.prototype.renderSparkline = function () {
			renderSparkline(this);
		}
	}

	function renderSparkline(chart) {
		for (var i = 0; i < chart.data.length; i++) {
			chart.options.data[i].markerSize = chart.data[i].options.markerSize ? chart.data[i].options.markerSize : 0;
		}

		chart.options.axisX = chart.options.axisX ? chart.options.axisX : [{}];
		chart.options.axisY = chart.options.axisY ? chart.options.axisY : [{}];
		chart.options.axisX2 = chart.options.axisX2 ? chart.options.axisX2 : [{}];
		chart.options.axisY2 = chart.options.axisY2 ? chart.options.axisY2 : [{}];

		for (var i = 0; i < chart.axisX.length; i++) {
			if (chart.options.axisX.length) {
				chart.options.axisX[i].lineThickness = chart.axisX[i].options.lineThickness ? chart.axisX[i].options.lineThickness : 0;
				chart.options.axisX[i].gridThickness = chart.axisX[i].options.gridThickness ? chart.axisX[i].options.gridThickness : 0;
				chart.options.axisX[i].tickLength = chart.axisX[i].options.tickLength ? chart.axisX[i].options.tickLength : 0;
				chart.options.axisX[i].margin = chart.axisX[i].options.margin ? chart.axisX[i].options.margin : -5;
				chart.options.axisX[i].labelFormatter = chart.axisX[i].options.labelFormatter ? chart.axisX[i].options.labelFormatter : function (e) {
					return "";
				};
			} else {
				chart.options.axisX.lineThickness = chart.axisX[i].options.lineThickness ? chart.axisX[i].options.lineThickness : 0;
				chart.options.axisX.gridThickness = chart.axisX[i].options.gridThickness ? chart.axisX[i].options.gridThickness : 0;
				chart.options.axisX.tickLength = chart.axisX[i].options.tickLength ? chart.axisX[i].options.tickLength : 0;
				chart.options.axisX.labelFormatter = chart.axisX[i].options.labelFormatter ? chart.axisX[i].options.labelFormatter : function (e) {
					return "";
				};
			}
		}

		for (var i = 0; i < chart.axisY.length; i++) {
			if (chart.options.axisY && chart.options.axisY.length) {
				chart.options.axisY[i].lineThickness = chart.axisY[i].options.lineThickness ? chart.axisY[i].options.lineThickness : 0;
				chart.options.axisY[i].gridThickness = chart.axisY[i].options.gridThickness ? chart.axisY[i].options.gridThickness : 0;
				chart.options.axisY[i].tickLength = chart.axisY[i].options.tickLength ? chart.axisY[i].options.tickLength : 0;
				chart.options.axisY[i].margin = chart.axisY[i].options.margin ? chart.axisY[i].options.margin : -5;
				chart.options.axisY[i].labelFormatter = chart.axisY[i].options.labelFormatter ? chart.axisY[i].options.labelFormatter : function (e) {
					return "";
				};
			} else {
				chart.options.axisY.lineThickness = chart.axisY[i].options.lineThickness ? chart.axisY[i].options.lineThickness : 0;
				chart.options.axisY.gridThickness = chart.axisY[i].options.gridThickness ? chart.axisY[i].options.gridThickness : 0;
				chart.options.axisY.tickLength = chart.axisY[i].options.tickLength ? chart.axisY[i].options.tickLength : 0;
				chart.options.axisY.margin = chart.axisY[i].options.margin ? chart.axisY[i].options.margin : 0;
				chart.options.axisY.labelFormatter = chart.axisY[i].options.labelFormatter ? chart.axisY[i].options.labelFormatter : function (e) {
					return "";
				};
			}
		}

		for (var i = 0; i < chart.axisX2.length; i++) {
			if (chart.options.axisX2.length) {
				chart.options.axisX2[i].lineThickness = chart.axisX2[i].options.lineThickness ? chart.axisX2[i].options.lineThickness : 0;
				chart.options.axisX2[i].gridThickness = chart.axisX2[i].options.gridThickness ? chart.axisX2[i].options.gridThickness : 0;
				chart.options.axisX2[i].tickLength = chart.axisX2[i].options.tickLength ? chart.axisX2[i].options.tickLength : 0;
				chart.options.axisX2[i].margin = chart.axisX2[i].options.margin ? chart.axisX2[i].options.margin : -5;
				chart.options.axisX2[i].labelFormatter = chart.axisX2[i].options.labelFormatter ? chart.axisX2[i].options.labelFormatter : function (e) {
					return "";
				};
			} else {
				chart.options.axisX2.lineThickness = chart.axisX2[i].options.lineThickness ? chart.axisX2[i].options.lineThickness : 0;
				chart.options.axisX2.gridThickness = chart.axisX2[i].options.gridThickness ? chart.axisX2[i].options.gridThickness : 0;
				chart.options.axisX2.tickLength = chart.axisX2[i].options.tickLength ? chart.axisX2[i].options.tickLength : 0;
				chart.options.axisX2.labelFormatter = chart.axisX2[i].options.labelFormatter ? chart.axisX2[i].options.labelFormatter : function (e) {
					return "";
				};
			}
		}

		for (var i = 0; i < chart.axisY2.length; i++) {
			if (chart.options.axisY2 && chart.options.axisY2.length) {
				chart.options.axisY2[i].lineThickness = chart.axisY2[i].options.lineThickness ? chart.axisY2[i].options.lineThickness : 0;
				chart.options.axisY2[i].gridThickness = chart.axisY2[i].options.gridThickness ? chart.axisY2[i].options.gridThickness : 0;
				chart.options.axisY2[i].tickLength = chart.axisY2[i].options.tickLength ? chart.axisY2[i].options.tickLength : 0;
				chart.options.axisY2[i].margin = chart.axisY2[i].options.margin ? chart.axisY2[i].options.margin : -5;
				chart.options.axisY2[i].labelFormatter = chart.axisY2[i].options.labelFormatter ? chart.axisY2[i].options.labelFormatter : function (e) {
					return "";
				};
			} else {
				chart.options.axisY2.lineThickness = chart.axisY2[i].options.lineThickness ? chart.axisY2[i].options.lineThickness : 0;
				chart.options.axisY2.gridThickness = chart.axisY2[i].options.gridThickness ? chart.axisY2[i].options.gridThickness : 0;
				chart.options.axisY2.tickLength = chart.axisY2[i].options.tickLength ? chart.axisY2[i].options.tickLength : 0;
				chart.options.axisY2.margin = chart.axisY2[i].options.margin ? chart.axisY2[i].options.margin : 0;
				chart.options.axisY2.labelFormatter = chart.axisY2[i].options.labelFormatter ? chart.axisY2[i].options.labelFormatter : function (e) {
					return "";
				};
			}
		}

		chart.render();

	}
})();