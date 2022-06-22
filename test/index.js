var objects = [
  function() { 
    var canvas = document.getElementById("canvas-1");
    var c = canvas.getContext("2d")
    c.beginPath();
    c.lineWidth = 5;
    c.strokeStyle = 'red';
    c.arc(95,50,40,0,2*Math.PI);
    c.stroke();
  },
  function() {
    var canvas = document.getElementById("canvas-2");
    var c = canvas.getContext("2d");
    c.beginPath();
    c.lineWidth = 5;
    c.strokeStyle = 'dimgray';
    c.arc(95,50,40,0,2*Math.PI);
    c.stroke();
  },
  function() {
    var canvas = document.getElementById("canvas-3");
    var c = canvas.getContext("2d");
    c.beginPath();
    c.lineWidth = 5;
    c.strokeStyle = 'purple';
    c.arc(95,50,40,0,2*Math.PI);
    c.stroke();
  }
];
objects[0]();
objects[2]();
objects[1]();

console.log('hello')