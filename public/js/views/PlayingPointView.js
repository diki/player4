var PlayingPointView = Backbone.View.extend({

    tagName: "div",
    className: "station",

    initialize: function(){
        _.bindAll(this, 'render');

        this.render();
    },

    render: function(){
        var self = this;
        $(this.el).attr("id", "st_"+self.model.id).css({
            "left": self.model.get("leftMargin"),
            "top": self.model.get("topMargin")
        });
    }

});