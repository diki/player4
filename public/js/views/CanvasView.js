var CanvasView = Backbone.View.extend({

    el: "#canvasContainer",

    initialize: function(options){

        _.bindAll(this, "initializeCanvas", "drawRect");

        //create canvas
        var h = $("#container").height();
        var canvasHeight = h-h%16;
        var canvas = false;
        
        this.height = options.height;
        this.width = options.width;

        this.unitMeasure = 10;
        this.gridHeight = this.canvasHeight/this.unitMeasure;
        this.gridWidth = this.canvasWidth/this.unitMeasure;
        

        //this.canvas = canvas = $('<canvas class="canvas" id="playGround" width='+this.canvasWidth+' height='+this.canvasHeight+'><canvas/>');
        this.canvas = canvas = document.getElementById(options.canvasID);
        this.canvas.width = options.width;
        this.canvas.height = options.height;
        //$(this.el).append(canvas);

        //get 2d context
        this.ctx = canvas.getContext('2d');

        //draw image if given
        if(options.img!==undefined){
            this.ctx.drawImage(options.img, 0, 0);
            this.img = options.img;
        }
        //render canvas first view
        this.initializeCanvas();
    },

    initializeCanvas: function(){
        // remove frame margin and scrollbars when maxing out size of canvas
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";

        // clear background
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(0, 0, this.width, this.height);
    },

    drawRect: function (x,y,w,h,o, color) {

        var ctx = this.ctx;

        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.globalAlpha = o;
        ctx.fillStyle = color;
        ctx.closePath();
        ctx.fill();
        
    },

    drawLine: function(x, y, dx, dy) {

        var ctx = this.ctx;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(dx, dy);
        ctx.strokeStyle = "#a3e4fc";
        ctx.closePath();
        ctx.stroke();
    },

    clear: function(){
        this.ctx.clearRect(0, 0, this.canvasWidth , this.canvasHeight);
    }


});