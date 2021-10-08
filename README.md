# CanvasJS Sparkline Chart

This is a plugin for CanvasJS Charts that allows you to convert regular chart with axis into sparkline chart by hiding axis-lines, gridlines, axis labels, etc.

## CanvasJS
CanvasJS is built from ground up for high performance data visualization and can render millions of data points in a matter of milliseconds. Charts are beautiful and API is very simple to use.


### How to Use?
- Create and Render CanvasJS Chart
- Call renderSparkline method

```
var chart = new CanvasJS.Chart("chartContainer", {
    .
    .
    .
    //Chart Options
    .
    .
    .
});
chart.render();
chart.renderSparkline();
```

##### Note: 
- Plugin was last tested with **CanvasJS Chart v3.4.4GA**
- This plugin requires you to have CanvasJS License. Please visit **[CanvasJS](https://canvasjs.com/license/)** for more info.
