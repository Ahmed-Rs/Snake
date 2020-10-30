window.onload = function()
{
    var canvasWidth = 900;
    var canvasHeight = 600;
    var ctx;
    var blockSize = 30;
    var delay = 100;
    var snakee;

    init();

    function init()
    {
        var canvas = document.createElement('canvas');
        canvas.height = canvasHeight;
        canvas.width = canvasWidth;
        canvas.style.border = "1px solid";
        canvas.style.backgroundColor = "#ddd";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        snakee = new snake ([[6,4],[5,4],[4,4]])
        refreshCanvas();
    }

    function refreshCanvas ()
    {
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        snakee.draw();
        setTimeout(refreshCanvas, delay);
    }

    function drawBLock(ctx, position)
    {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }

    function snake(body)
    {
        this.body = body;
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for( var i = 0; i < this.body.length; i++ )
            {
                drawBLock(ctx, this.body[i]);
            }
            ctx.restore();
        }
    }


}