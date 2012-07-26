$(function(){


        //image element
    var img=new Image();
    img.src = "cb2.png";
    
    var pm1 = new PlayingPointModel({
        id: 0,
        x: 
    });
    var playerPointsCollection = new PlayerPointsCollection();
    //on image load draw image to canvas
    img.onload = function(){
        
        var canvasView = new CanvasView({
            collection: playerPointsCollection,
            height: img.height,
            width: img.width,
            img: img
        });

    }


});