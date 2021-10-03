var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(500, 500, 100, 100);

canvas = document.getElementById("canvas").addEventListener("click", colorchange);

      function colorchange()
      {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(500, 500, 100, 100);
      }

