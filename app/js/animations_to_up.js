var phonecatAnimations = angular.module('phonecatAnimations', ['ngAnimate']);

phonecatAnimations.animation('.phone-display', function () {

    var animateUp = function (element, className, done) {
        if (className != 'active') {
            return;
        }

        var fromCSS = {
            position: 'absolute',
            top: 500,
            left: 0,
            display: 'block'
        };

        var toCSS = {
            top: 0
        };

        element.css(fromCSS);

        jQuery(element).animate(toCSS, done);

        return function (cancel) {
            if (cancel) {
                element.stop();
            }
        };
    }

    var animateDown = function (element, className, done) {
        if (className != 'active') {
            return;
        }

        var fromCSS = {
            position: 'absolute',
            left: 0,
            top: 0
        };

        var toCSS = {
            top: -500
        };

        element.css(fromCSS);

        jQuery(element).animate(toCSS, done);

        return function (cancel) {
            if (cancel) {
                element.stop();
            }
        };
    }

    return {
        addClass: animateUp,
        removeClass: animateDown
    };
});
