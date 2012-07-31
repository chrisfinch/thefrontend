RegionManager = (function (Backbone, $) {
    var currentView;
    var el = "#wrapper";
    var region = {};

    var closeView = function (view) {
        if (view && view.close) {
            view.close();
        }
    };

    var openView = function (view) {
        view.render();
        $(el).html(view.el);
        if (view.onShow) {
            view.onShow();
        }
    };

    region.show = function (view) {
        closeView(currentView);
        currentView = view;
        openView(currentView);
    };

    return region;
})(Backbone, jQuery);