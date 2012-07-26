var CanvasView = Backbone.View.extend({

    el: "#canvasContainer",

    initialize: function(options){

        _.bindAll(this, "initializeCanvas", "drawRect");

        //create canvas
        var h = $("#container").height();
        var canvasHeight = h-h%16;
        var canvas = false;
        
        this.canvasHeight = options.height;
        this.canvasWidth = options.width;

        this.unitMeasure = 10;
        this.gridHeight = this.canvasHeight/this.unitMeasure;
        this.gridWidth = this.canvasWidth/this.unitMeasure;
        

        this.canvas = canvas = $('<canvas class="canvas" id="playGround" width='+this.canvasWidth+' height='+this.canvasHeight+'><canvas/>');
        $(this.el).append(canvas);

        //get 2d context
        this.ctx = canvas[0].getContext('2d');

        //draw image if given
        if(options.img!==undefined){
            this.ctx.drawImage(options.img, 0, 0);
            this.img = options.img;
        }
        //render canvas first view
        this.initializeCanvas();
    },

    initializeCanvas: function(){
        //set line width
        this.ctx.lineWidth = 1;

        var h=this.gridHeight, w = this.gridWidth;

        console.log(w);
        //vertical lines


        var self = this;
        this.drawInterval = setInterval(function(){

            self.clear();

            self.ctx.drawImage(self.img, 0,0,self.canvasWidth, self.canvasHeight);

            for(var i=1; i<w; i++){
                self.drawLine(i*self.unitMeasure, 0, i*self.unitMeasure,self.canvasHeight);
            }

            //horizontal lines
            for(var j=1; j<h; j++){
                self.drawLine(0, j*self.unitMeasure, self.canvasWidth,j*self.unitMeasure);
            }

            self.collection.each(function(el){
                self.drawRect(el.get("x")*self.unitMeasure+1, el.get("y")*self.unitMeasure+1, 8, 8, 1, el.get("color"));
            });

        }, 10);

        // return this.drawInterval();
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