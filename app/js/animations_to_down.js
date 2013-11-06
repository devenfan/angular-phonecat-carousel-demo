var phonecatAnimations = angular.module('phonecatAnimations', ['ngAnimate']);

phonecatAnimations.animation('.phone-display', function () {

    //the next picture will action by this method...
    var animateLeft = function (element, className, done) {
        if (className != 'active') {
            return;
        }

        var fromCSS = {
            position: 'absolute',
            top: -500,
            left: 0,
            right: 0,
            display: 'block'
        };

        var toCSS = {
            top: 0,
            left: 0,
            right: 0
        };

        element.css(fromCSS);

        jQuery(element).animate(toCSS, done);

        return function (cancel) {
            if (cancel) {
                element.stop();
            }
        };
    }

    //the previous picture will action by this method...
    var animateRight = function (element, className, done) {
        if (className != 'active') {
            return;
        }

        var fromCSS = {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            display: 'block'
        };

        var toCSS = {
            top: 500,
            left: 0,
            right: 0
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
        addClass: animateLeft,
        removeClass: animateRight
    };
});
