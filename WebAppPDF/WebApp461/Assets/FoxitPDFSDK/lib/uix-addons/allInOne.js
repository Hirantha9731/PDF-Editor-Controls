(function(t, e){
                if("object"==typeof exports&&"object"==typeof module) {
                    module.exports = e();
                } else if("function"==typeof define&&define.amd) {
                    define([], e);
                } else if("object"==typeof exports) {
                    exports.UIXAddons = e();
                } else {
                    t.UIXAddons = e();
                }
                })(window, function() {
                function init__UIXAddons(UIExtension){
/*! art-template@runtime | https://github.com/aui/art-template */
                    return UIXAddons;
                }
                init__UIXAddons.isLazyLoadInitializer = true;
                return init__UIXAddons;
            })