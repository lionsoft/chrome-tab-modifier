app.factory('Rule', function () {

    var Rule = function (properties) {
        this.name         = null;
        this.url_fragment = null;
        this.tab          = {
            title: null,
            icon: null,
            pinned: false,
            protected: false,
            unique: false,
            url_matcher: null
        };

        angular.extend(this, properties);
    };

    Rule.prototype.setModel = function (obj) {
        angular.extend(this, obj);
    };

    return Rule;

});
