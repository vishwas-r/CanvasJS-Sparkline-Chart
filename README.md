# CanvasJS Sparkline Chart

This is a plugin for CanvasJS Charts that allows you to convert regular chart with axis into sparkline chart by hiding axis-lines, gridlines, axis labels, etc.

## CanvasJS
CanvasJS is built from ground up for high performance data visualization and can render millions of data points in a matter of milliseconds. Charts are beautiful and API is very simple to use.


### How to Use?

### Importing Script
Import the CanvasJS & CanvasJS Toggle FullScreen scritps
```
/* HTML Script Tag */
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/canvasjs-sparkline-chart/dist/canvasjs.sparkline.min.js"></script>

/* or */
import CanvasJS from './canvasjs.min';
window.CanvasJS = CanvasJS;
require('canvasjs-sparkline-chart');

/* React */
import CanvasJSReact from './canvasjs.react';
window.CanvasJS = CanvasJSReact.CanvasJS;
require('canvasjs-sparkline-chart');
```

### Render chart & call renderSparkline method
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
In case of react app, get the reference of the chart & call the method inside ComponentDidMount.


##### Note: 
- Plugin was last tested with **CanvasJS Chart v3.7.5GA**
- This plugin requires you to have CanvasJS License. Please visit **[CanvasJS](https://canvasjs.com/license/)** for more info.
