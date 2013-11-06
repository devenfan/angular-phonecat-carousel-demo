angular.module("amu", ["ngRoute", "ngTouch", "amu-tpls", "app.main"]), angular.module("amu-tpls", []).run(["$templateCache", function (a) {
    a.put("tpls/accordion/accordion-group.html", '<div class="accordion-group"><div class="accordion-heading"><a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a></div><div class="accordion-body" collapse="!isOpen"><div class="accordion-inner" ng-transclude=""></div></div></div>'), a.put("tpls/accordion/accordion.html", '<div class="accordion" ng-transclude=""></div>'), a.put("tpls/alert/alert.html", '<div class="alert" ng-class="type && \\"alert-\\" + type"><button ng-show="closeable" type="button" class="close" ng-click="close()">&times;</button><div ng-transclude=""></div></div>'), a.put("tpls/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel"><ol class="carousel-indicators" ng-show="slides().length > 1"><li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li></ol><div class="carousel-inner" ng-transclude=""></div><a ng-click="prev()" class="carousel-control left" ng-show="slides().length > 1">&lsaquo;</a> <a ng-click="next()" class="carousel-control right" ng-show="slides().length > 1">&rsaquo;</a></div>'), a.put("tpls/carousel/slide.html", "<div ng-class=\"{\r\n    'active': leaving || (active && !entering),\r\n    'prev': (next || active) && direction=='prev',\r\n    'next': (next || active) && direction=='next',\r\n    'right': direction=='prev',\r\n    'left': direction=='next'\r\n" + '  }" class="item" ng-transclude=""></div>'), a.put("tpls/datepicker/datepicker.html", '<table><thead><tr class="text-center"><th><button type="button" class="btn pull-left" ng-click="move(-1)"><i class="icon-chevron-left"></i></button></th><th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th><th><button type="button" class="btn pull-right" ng-click="move(1)"><i class="icon-chevron-right"></i></button></th></tr><tr class="text-center" ng-show="labels.length > 0"><th ng-show="showWeekNumbers">#</th><th ng-repeat="label in labels">{{label}}</th></tr></thead><tbody><tr ng-repeat="row in rows"><td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td><td ng-repeat="dt in row" class="text-center"><button type="button" style="width:100%" class="btn" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{muted: dt.secondary}">{{dt.label}}</span></button></td></tr></tbody></table>'), a.put("tpls/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" class="dropdown-menu"><li ng-transclude=""></li><li class="divider"></li><li style="padding: 9px"><span class="btn-group"><button class="btn btn-small btn-inverse" ng-click="today()">Today</button><button class="btn btn-small btn-info" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">Weeks</button><button class="btn btn-small btn-danger" ng-click="clear()">Clear</button></span><button class="btn btn-small btn-success pull-right" ng-click="isOpen = false">Close</button></li></ul>'), a.put("tpls/dialog/message.html", '<div class="modal-header"><h3>{{ title }}</h3></div><div class="modal-body"><p>{{ message }}</p></div><div class="modal-footer"><button ng-repeat="btn in buttons" ng-click="close(btn.result)" class="btn" ng-class="btn.cssClass">{{ btn.label }}</button></div>'), a.put("tpls/drawer/drawer.html", '<div class="drawer"><div class="drawer-left" ng-class="{\'show\':drawers.leftActive}" ng-include="drawerLeftTpl"></div><div class="drawer-right" ng-class="{\'show\':drawers.rightActive}" ng-include="drawerRightTpl"></div><div class="drawer-up" ng-class="{\'drawer-left-show\':drawers.leftActive,\'drawer-right-show\':drawers.rightActive}" ng-transclude=""></div></div>'), a.put("tpls/modal-btn-group/modal-btn-group.html", '<div class="modal-btn-group" ng-class="{unfold:isFold}"><span class="modal-btn-group-bg" ng-click="isFold = false"></span><button class="btn-round modal-btn-group-btn-fold" ng-class="{unfold:isFold}" ng-click="isFold =!isFold"><i class="icon-plus"></i></button><ul class="modal-btn-group-list" ng-class="{unfold:isFold}"><li class="modal-btn-group-list-item" ng-repeat="btn in btnList" ng-click="btnListFuncInner(btn)" mbg-style="$index"><span class="modal-btn-group-list-item-title" ng-bind="btn.title"></span><span class="btn-round" ng-class="btn.icon"></span></li></ul></div>'), a.put("tpls/pagination/pager.html", '<div class="pager"><ul><li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li></ul></div>'), a.put("tpls/pagination/pagination.html", '<div class="pagination"><ul><li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li></ul></div>'), a.put("tpls/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div></div>'), a.put("tpls/progressbar/bar.html", '<div class="bar" ng-class="type && \\"bar-\\" + type"></div>'), a.put("tpls/progressbar/progress.html", '<div class="progress"><progressbar ng-repeat="bar in bars" width="bar.to" old="bar.from" animate="bar.animate" type="bar.type"></progressbar></div>'), a.put("tpls/pull-refresh-android/pull-refresh-android.html", '<div class="pull-refresh"><span class="pull-refresh-loader"></span><div class="pull-refresh-content" ng-transclude=""></div></div>'), a.put("tpls/pull-refresh/pull-refresh.html", '<div class="pull-refresh"><container class="pull-refresh-container"><div class="pull-refresh-message"><div class="pull-refresh-icon" class="icon" ng-class="{\'arrow\':isPulling,\'arrow-up\':isPullingEnough,\'loading\':isLoading}"></div><span ng-hide="isPulling">{{isLoading?\'正在加载 …\':\'加载完成\' }}</span><span ng-show="isPullingEnough">施放以加载</span></div><div class="pull-refresh-content" ng-transclude=""></div></container></div>'), a.put("tpls/rating/rating.html", '<span ng-mouseleave="reset()"><i ng-repeat="number in range" ng-mouseenter="enter(number)" ng-click="rate(number)" ng-class="{\'icon-star\': number <= val, \'icon-star-empty\': number > val}"></i></span>'), a.put("tpls/swipe-tabs/swipe-tab.html", '<li ng-class="{\'active\': active}" ng-click="select()" swipe-tab-heading-transclude="">{{heading}}</li>'), a.put("tpls/swipe-tabs/swipe-tabset-titles.html", '<ul class="swipe-nav"></ul>'), a.put("tpls/swipe-tabs/swipe-tabset.html", '<div class="swipe-tabset"><div swipe-tabset-titles="tabsAbove"></div><div class="swipe-tab-content"><container class="swipe-container" ng-style="{\'width\':paneWidth * tabs.length +\'px\'}"><div class="swipe-tab-pane" ng-style="{\'width\':paneWidth +\'px\'}" ng-repeat="tab in tabs" swipe-tab-content-transclude="tab"></div></container></div><div swipe-tabset-titles="!tabsAbove"></div></div>'), a.put("tpls/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}"><a ng-click="select()" tab-heading-transclude="">{{heading}}</a></li>'), a.put("tpls/tabs/tabset-titles.html", "<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\"></ul>"), a.put("tpls/tabs/tabset.html", '<div class="tabbable" ng-class="{\'tabs-right\': direction == \'right\', \'tabs-left\': direction == \'left\', \'tabs-below\': direction == \'below\'}"><div tabset-titles="tabsAbove"></div><div class="tab-content"><div class="tab-pane" ng-repeat="tab in tabs" ng-class="{active: tab.active}" tab-content-transclude="tab"></div></div><div tabset-titles="!tabsAbove"></div></div>'), a.put("tpls/timepicker/timepicker.html", '<table class="form-inline"><tr class="text-center"><td><a ng-click="incrementHours()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td><td>&nbsp;</td><td><a ng-click="incrementMinutes()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td><td ng-show="showMeridian"></td></tr><tr><td class="control-group" ng-class="{\'error\': !validHours}"><input type="text" ng-model="hours" ng-change="updateHours()" class="span1 text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2"></td><td>:</td><td class="control-group" ng-class="{\'error\': !validMinutes}"><input type="text" ng-model="minutes" ng-change="updateMinutes()" class="span1 text-center" ng-readonly="readonlyInput" maxlength="2"></td><td ng-show="showMeridian"><button ng-click="toggleMeridian()" class="btn text-center">{{meridian}}</button></td></tr><tr class="text-center"><td><a ng-click="decrementHours()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td><td>&nbsp;</td><td><a ng-click="decrementMinutes()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td><td ng-show="showMeridian"></td></tr></table>'), a.put("tpls/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind-html-unsafe="content"></div></div>'), a.put("tpls/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="content"></div></div>'), a.put("tpls/typeahead/typeahead-match.html", '<a tabindex="-1" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>'), a.put("tpls/typeahead/typeahead-popup.html", '<ul class="typeahead dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}"><li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)"><typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></typeahead-match></li></ul>')
}]), function (a, b) {
    "use strict";
    function c() {
        if (!d.READY) {
            d.event.determineEventTypes();
            for (var a in d.gestures)d.gestures.hasOwnProperty(a) && d.detection.register(d.gestures[a]);
            d.event.onTouch(d.DOCUMENT, d.EVENT_MOVE, d.detection.detect), d.event.onTouch(d.DOCUMENT, d.EVENT_END, d.detection.detect), d.READY = !0
        }
    }

    var d = function (a, b) {
        return new d.Instance(a, b || {})
    };
    d.defaults = {stop_browser_behavior: {userSelect: "none", touchAction: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)"}}, d.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, d.HAS_TOUCHEVENTS = "ontouchstart"in a, d.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, d.NO_MOUSEEVENTS = d.HAS_TOUCHEVENTS && navigator.userAgent.match(d.MOBILE_REGEX), d.EVENT_TYPES = {}, d.DIRECTION_DOWN = "down", d.DIRECTION_LEFT = "left", d.DIRECTION_UP = "up", d.DIRECTION_RIGHT = "right", d.POINTER_MOUSE = "mouse", d.POINTER_TOUCH = "touch", d.POINTER_PEN = "pen", d.EVENT_START = "start", d.EVENT_MOVE = "move", d.EVENT_END = "end", d.DOCUMENT = document, d.plugins = {}, d.READY = !1, d.Instance = function (a, b) {
        var e = this;
        return c(), this.element = a, this.enabled = !0, this.options = d.utils.extend(d.utils.extend({}, d.defaults), b || {}), this.options.stop_browser_behavior && d.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), d.event.onTouch(a, d.EVENT_START, function (a) {
            e.enabled && d.detection.startDetect(e, a)
        }), this
    }, d.Instance.prototype = {on: function (a, b) {
        for (var c = a.split(" "), d = 0; d < c.length; d++)this.element.addEventListener(c[d], b, !1);
        return this
    }, off: function (a, b) {
        for (var c = a.split(" "), d = 0; d < c.length; d++)this.element.removeEventListener(c[d], b, !1);
        return this
    }, trigger: function (a, b) {
        var c = d.DOCUMENT.createEvent("Event");
        c.initEvent(a, !0, !0), c.gesture = b;
        var e = this.element;
        return d.utils.hasParent(b.target, e) && (e = b.target), e.dispatchEvent(c), this
    }, enable: function (a) {
        return this.enabled = a, this
    }};
    var e = null, f = !1, g = !1;
    if (d.event = {bindDom: function (a, b, c) {
        for (var d = b.split(" "), e = 0; e < d.length; e++)a.addEventListener(d[e], c, !1)
    }, onTouch: function (a, b, c) {
        var h = this;
        this.bindDom(a, d.EVENT_TYPES[b], function (i) {
            var j = i.type.toLowerCase();
            if (!j.match(/mouse/) || !g) {
                (j.match(/touch/) || j.match(/pointerdown/) || j.match(/mouse/) && 1 === i.which) && (f = !0), j.match(/touch|pointer/) && (g = !0);
                var k = 0;
                f && (d.HAS_POINTEREVENTS && b != d.EVENT_END ? k = d.PointerEvent.updatePointer(b, i) : j.match(/touch/) ? k = i.touches.length : g || (k = j.match(/up/) ? 0 : 1), k > 0 && b == d.EVENT_END ? b = d.EVENT_MOVE : k || (b = d.EVENT_END), k || null === e ? e = i : i = e, c.call(d.detection, h.collectEventData(a, b, i)), d.HAS_POINTEREVENTS && b == d.EVENT_END && (k = d.PointerEvent.updatePointer(b, i))), k || (e = null, f = !1, g = !1, d.PointerEvent.reset())
            }
        })
    }, determineEventTypes: function () {
        var a;
        a = d.HAS_POINTEREVENTS ? d.PointerEvent.getEvents() : d.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], d.EVENT_TYPES[d.EVENT_START] = a[0], d.EVENT_TYPES[d.EVENT_MOVE] = a[1], d.EVENT_TYPES[d.EVENT_END] = a[2]
    }, getTouchList: function (a) {
        return d.HAS_POINTEREVENTS ? d.PointerEvent.getTouchList() : a.touches ? a.touches : [
            {identifier: 1, pageX: a.pageX, pageY: a.pageY, target: a.target}
        ]
    }, collectEventData: function (a, b, c) {
        var e = this.getTouchList(c, b), f = d.POINTER_TOUCH;
        return(c.type.match(/mouse/) || d.PointerEvent.matchType(d.POINTER_MOUSE, c)) && (f = d.POINTER_MOUSE), {center: d.utils.getCenter(e), timeStamp: (new Date).getTime(), target: c.target, touches: e, eventType: b, pointerType: f, srcEvent: c, preventDefault: function () {
            this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
        }, stopPropagation: function () {
            this.srcEvent.stopPropagation()
        }, stopDetect: function () {
            return d.detection.stopDetect()
        }}
    }}, d.PointerEvent = {pointers: {}, getTouchList: function () {
        var a = this, b = [];
        return Object.keys(a.pointers).sort().forEach(function (c) {
            b.push(a.pointers[c])
        }), b
    }, updatePointer: function (a, b) {
        return a == d.EVENT_END ? this.pointers = {} : (b.identifier = b.pointerId, this.pointers[b.pointerId] = b), Object.keys(this.pointers).length
    }, matchType: function (a, b) {
        if (!b.pointerType)return!1;
        var c = {};
        return c[d.POINTER_MOUSE] = b.pointerType == b.MSPOINTER_TYPE_MOUSE || b.pointerType == d.POINTER_MOUSE, c[d.POINTER_TOUCH] = b.pointerType == b.MSPOINTER_TYPE_TOUCH || b.pointerType == d.POINTER_TOUCH, c[d.POINTER_PEN] = b.pointerType == b.MSPOINTER_TYPE_PEN || b.pointerType == d.POINTER_PEN, c[a]
    }, getEvents: function () {
        return["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
    }, reset: function () {
        this.pointers = {}
    }}, d.utils = {extend: function (a, c, d) {
        for (var e in c)a[e] !== b && d || (a[e] = c[e]);
        return a
    }, hasParent: function (a, b) {
        for (; a;) {
            if (a == b)return!0;
            a = a.parentNode
        }
        return!1
    }, getCenter: function (a) {
        for (var b = [], c = [], d = 0, e = a.length; e > d; d++)b.push(a[d].pageX), c.push(a[d].pageY);
        return{pageX: (Math.min.apply(Math, b) + Math.max.apply(Math, b)) / 2, pageY: (Math.min.apply(Math, c) + Math.max.apply(Math, c)) / 2}
    }, getVelocity: function (a, b, c) {
        return{x: Math.abs(b / a) || 0, y: Math.abs(c / a) || 0}
    }, getAngle: function (a, b) {
        var c = b.pageY - a.pageY, d = b.pageX - a.pageX;
        return 180 * Math.atan2(c, d) / Math.PI
    }, getDirection: function (a, b) {
        var c = Math.abs(a.pageX - b.pageX), e = Math.abs(a.pageY - b.pageY);
        return c >= e ? a.pageX - b.pageX > 0 ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT : a.pageY - b.pageY > 0 ? d.DIRECTION_UP : d.DIRECTION_DOWN
    }, getDistance: function (a, b) {
        var c = b.pageX - a.pageX, d = b.pageY - a.pageY;
        return Math.sqrt(c * c + d * d)
    }, getScale: function (a, b) {
        return a.length >= 2 && b.length >= 2 ? this.getDistance(b[0], b[1]) / this.getDistance(a[0], a[1]) : 1
    }, getRotation: function (a, b) {
        return a.length >= 2 && b.length >= 2 ? this.getAngle(b[1], b[0]) - this.getAngle(a[1], a[0]) : 0
    }, isVertical: function (a) {
        return a == d.DIRECTION_UP || a == d.DIRECTION_DOWN
    }, stopDefaultBrowserBehavior: function (a, b) {
        var c, d = ["webkit", "khtml", "moz", "ms", "o", ""];
        if (b && a.style) {
            for (var e = 0; e < d.length; e++)for (var f in b)b.hasOwnProperty(f) && (c = f, d[e] && (c = d[e] + c.substring(0, 1).toUpperCase() + c.substring(1)), a.style[c] = b[f]);
            "none" == b.userSelect && (a.onselectstart = function () {
                return!1
            })
        }
    }}, d.detection = {gestures: [], current: null, previous: null, stopped: !1, startDetect: function (a, b) {
        this.current || (this.stopped = !1, this.current = {inst: a, startEvent: d.utils.extend({}, b), lastEvent: !1, name: ""}, this.detect(b))
    }, detect: function (a) {
        if (this.current && !this.stopped) {
            a = this.extendEventData(a);
            for (var b = this.current.inst.options, c = 0, e = this.gestures.length; e > c; c++) {
                var f = this.gestures[c];
                if (!this.stopped && b[f.name] !== !1 && f.handler.call(f, a, this.current.inst) === !1) {
                    this.stopDetect();
                    break
                }
            }
            return this.current && (this.current.lastEvent = a), a.eventType == d.EVENT_END && !a.touches.length - 1 && this.stopDetect(), a
        }
    }, stopDetect: function () {
        this.previous = d.utils.extend({}, this.current), this.current = null, this.stopped = !0
    }, extendEventData: function (a) {
        var b = this.current.startEvent;
        if (b && (a.touches.length != b.touches.length || a.touches === b.touches)) {
            b.touches = [];
            for (var c = 0, e = a.touches.length; e > c; c++)b.touches.push(d.utils.extend({}, a.touches[c]))
        }
        var f = a.timeStamp - b.timeStamp, g = a.center.pageX - b.center.pageX, h = a.center.pageY - b.center.pageY, i = d.utils.getVelocity(f, g, h);
        return d.utils.extend(a, {deltaTime: f, deltaX: g, deltaY: h, velocityX: i.x, velocityY: i.y, distance: d.utils.getDistance(b.center, a.center), angle: d.utils.getAngle(b.center, a.center), direction: d.utils.getDirection(b.center, a.center), scale: d.utils.getScale(b.touches, a.touches), rotation: d.utils.getRotation(b.touches, a.touches), startEvent: b}), a
    }, register: function (a) {
        var c = a.defaults || {};
        return c[a.name] === b && (c[a.name] = !0), d.utils.extend(d.defaults, c, !0), a.index = a.index || 1e3, this.gestures.push(a), this.gestures.sort(function (a, b) {
            return a.index < b.index ? -1 : a.index > b.index ? 1 : 0
        }), this.gestures
    }}, d.gestures = d.gestures || {}, d.gestures.Hold = {name: "hold", index: 10, defaults: {hold_timeout: 500, hold_threshold: 1}, timer: null, handler: function (a, b) {
        switch (a.eventType) {
            case d.EVENT_START:
                clearTimeout(this.timer), d.detection.current.name = this.name, this.timer = setTimeout(function () {
                    "hold" == d.detection.current.name && b.trigger("hold", a)
                }, b.options.hold_timeout);
                break;
            case d.EVENT_MOVE:
                a.distance > b.options.hold_threshold && clearTimeout(this.timer);
                break;
            case d.EVENT_END:
                clearTimeout(this.timer)
        }
    }}, d.gestures.Tap = {name: "tap", index: 100, defaults: {tap_max_touchtime: 250, tap_max_distance: 10, tap_always: !0, doubletap_distance: 20, doubletap_interval: 300}, handler: function (a, b) {
        if (a.eventType == d.EVENT_END) {
            var c = d.detection.previous, e = !1;
            if (a.deltaTime > b.options.tap_max_touchtime || a.distance > b.options.tap_max_distance)return;
            c && "tap" == c.name && a.timeStamp - c.lastEvent.timeStamp < b.options.doubletap_interval && a.distance < b.options.doubletap_distance && (b.trigger("doubletap", a), e = !0), (!e || b.options.tap_always) && (d.detection.current.name = "tap", b.trigger(d.detection.current.name, a))
        }
    }}, d.gestures.Swipe = {name: "swipe", index: 40, defaults: {swipe_max_touches: 1, swipe_velocity: .7}, handler: function (a, b) {
        if (a.eventType == d.EVENT_END) {
            if (b.options.swipe_max_touches > 0 && a.touches.length > b.options.swipe_max_touches)return;
            (a.velocityX > b.options.swipe_velocity || a.velocityY > b.options.swipe_velocity) && (b.trigger(this.name, a), b.trigger(this.name + a.direction, a))
        }
    }}, d.gestures.Drag = {name: "drag", index: 50, defaults: {drag_min_distance: 10, drag_max_touches: 1, drag_block_horizontal: !1, drag_block_vertical: !1, drag_lock_to_axis: !1, drag_lock_min_distance: 25}, triggered: !1, handler: function (a, b) {
        if (d.detection.current.name != this.name && this.triggered)return b.trigger(this.name + "end", a), this.triggered = !1, void 0;
        if (!(b.options.drag_max_touches > 0 && a.touches.length > b.options.drag_max_touches))switch (a.eventType) {
            case d.EVENT_START:
                this.triggered = !1;
                break;
            case d.EVENT_MOVE:
                if (a.distance < b.options.drag_min_distance && d.detection.current.name != this.name)return;
                d.detection.current.name = this.name, (d.detection.current.lastEvent.drag_locked_to_axis || b.options.drag_lock_to_axis && b.options.drag_lock_min_distance <= a.distance) && (a.drag_locked_to_axis = !0);
                var c = d.detection.current.lastEvent.direction;
                a.drag_locked_to_axis && c !== a.direction && (a.direction = d.utils.isVertical(c) ? a.deltaY < 0 ? d.DIRECTION_UP : d.DIRECTION_DOWN : a.deltaX < 0 ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT), this.triggered || (b.trigger(this.name + "start", a), this.triggered = !0), b.trigger(this.name, a), b.trigger(this.name + a.direction, a), (b.options.drag_block_vertical && d.utils.isVertical(a.direction) || b.options.drag_block_horizontal && !d.utils.isVertical(a.direction)) && a.preventDefault();
                break;
            case d.EVENT_END:
                this.triggered && b.trigger(this.name + "end", a), this.triggered = !1
        }
    }}, d.gestures.Transform = {name: "transform", index: 45, defaults: {transform_min_scale: .01, transform_min_rotation: 1, transform_always_block: !1}, triggered: !1, handler: function (a, b) {
        if (d.detection.current.name != this.name && this.triggered)return b.trigger(this.name + "end", a), this.triggered = !1, void 0;
        if (!(a.touches.length < 2))switch (b.options.transform_always_block && a.preventDefault(), a.eventType) {
            case d.EVENT_START:
                this.triggered = !1;
                break;
            case d.EVENT_MOVE:
                var c = Math.abs(1 - a.scale), e = Math.abs(a.rotation);
                if (c < b.options.transform_min_scale && e < b.options.transform_min_rotation)return;
                d.detection.current.name = this.name, this.triggered || (b.trigger(this.name + "start", a), this.triggered = !0), b.trigger(this.name, a), e > b.options.transform_min_rotation && b.trigger("rotate", a), c > b.options.transform_min_scale && (b.trigger("pinch", a), b.trigger("pinch" + (a.scale < 1 ? "in" : "out"), a));
                break;
            case d.EVENT_END:
                this.triggered && b.trigger(this.name + "end", a), this.triggered = !1
        }
    }}, d.gestures.Touch = {name: "touch", index: -1 / 0, defaults: {prevent_default: !1, prevent_mouseevents: !1}, handler: function (a, b) {
        return b.options.prevent_mouseevents && a.pointerType == d.POINTER_MOUSE ? (a.stopDetect(), void 0) : (b.options.prevent_default && a.preventDefault(), a.eventType == d.EVENT_START && b.trigger(this.name, a), void 0)
    }}, d.gestures.Release = {name: "release", index: 1 / 0, handler: function (a, b) {
        a.eventType == d.EVENT_END && b.trigger(this.name, a)
    }}, !angular)throw new Error("window.angular is not defined.");
    var h, i = ["hold", "tap", "doubletap", "drag", "dragstart", "dragend", "dragup", "dragdown", "dragleft", "dragright", "swipe", "swipeup", "swipedown", "swipeleft", "swiperight", "transform", "transformstart", "transformend", "rotate", "pinch", "pinchin", "pinchout", "touch", "release"];
    angular.injector(["ng"]).invoke(["$rootScope", function (a) {
        h = a.$new()
    }]);
    var j = angular.module("utils.hammer", []);
    j.factory("Hammer", function () {
        return d
    }), i.forEach(function (a) {
        var b = "hammer" + a[0].toUpperCase() + a.slice(1);
        j.directive(b, ["$parse", function (c) {
            return function (e, f, g) {
                var i, j, k, l = h.$eval(g[b]);
                "undefined" == typeof l ? i = c(g[b]) : (i = c(l.fn), delete l.fn, j = l), k = d(f[0], j).on(a, function (a) {
                    e.$apply(function () {
                        i(e, {$event: a})
                    })
                })
            }
        }])
    })
}(this), angular.module("ui.common.lazy-compile", []).directive("lazyCompile", ["$timeout", "$compile", "$http", function (a, b, c) {
    return{scope: {lazyCompile: "="}, replace: !0, link: function (d, e, f) {
        e.html("<android-loadingbar></android-loadingbar>"), b(e.contents())(d), a(function () {
            c.get(d.lazyCompile).success(function (a) {
                console.log(a), e.html(a), b(e.contents())(d.$parent)
            })
        }, f.delay)
    }}
}]), angular.module("utils.mobile-nav", []).provider("$change",function () {
    var a = {modal: ["modal", ""], none: ["", ""]}, b = {prefix: "amu-"}, c = "in", d = "out", e = "reverse", f = "animationName"in document.documentElement.style ? "animationend" : "webkitAnimationEnd";
    this.setTransitionPreset = function (b, c, d) {
        c = c || "", d = d || c, a[b] = [c, d]
    }, this.options = function (a) {
        b = angular.extend(b, a || {})
    }, this.$get = ["$q", "$rootScope", function (g, h) {
        return function (i, j, k, l, m) {
            function n(a) {
                return a.reduce(function (a, b) {
                    return a + (b ? " " + m.prefix + b : "")
                }, "")
            }

            function o() {
                h.$apply(function () {
                    r.resolve()
                })
            }

            m = angular.extend(m || {}, b);
            var p, q, r = g.defer(), s = a[k] ? a[k] : [k, k];
            i.css("z-index", "-100"), i[0].offsetWidth += 0;
            var t = n([l ? d : c, p = s[l ? 1 : 0], l && e || ""]);
            i.addClass(t);
            var u;
            j && (u = n([l ? c : d, q = s[l ? 0 : 1], l && e || ""]), j.addClass(u)), i.css("z-index", ""), i[0].offsetWidth += 0;
            var v;
            return p && p.length ? (v = i).bind(f, o) : j && q && q.length ? (v = j).bind(f, o) : r.resolve(), r.promise.then(function () {
                v && v.unbind(f, o), i.removeClass(t), j && j.removeClass(u)
            }), r.promise.cancel = function () {
                r.resolve()
            }, r.promise
        }
    }]
}).provider("$navigate",function () {
        this.$get = ["$rootScope", "$location", "$route", function (a, b) {
            function c(a, b, c) {
                var d, e = a, f = b || "slide", g = c;
                this.transition = function () {
                    var a;
                    return d ? (a = d, d = null) : a = f, a
                }, this.path = function () {
                    return e
                }, this.reverse = function () {
                    return g
                }, this.transitionOnce = function (a) {
                    d = a
                }
            }

            function d(b, c, d) {
                a.$broadcast("$pageTransitionStart", b, c, d), f.current = f.next
            }

            function e() {
                f.current && g.push(f.current), f.next = new c(b.path()), f.next.transitionOnce("none"), d(f.next), f.onRouteSuccess = null
            }

            var f = {}, g = [];
            return f.onRouteSuccess = null, a.$on("$routeChangeSuccess", function (a, b, c) {
                b.$$route && b.$$route.redirectTo || (f.onRouteSuccess || e)(a, b, c)
            }), f.go = function (a, e, h) {
                "boolean" == typeof e && (h = e, e = null), b.path(a), f.onRouteSuccess = function (b, i) {
                    f.current && g.push(f.current), f.next = new c(a, e || i.$$route && i.$$route.transition, h), d(f.next, f.current, !1)
                }
            }, f.eraseHistory = function () {
                g.length = 0
            }, f.back = function () {
                if (g.length > 0) {
                    var a = g[g.length - 1];
                    return b.path(a.path()), f.onRouteSuccess = function () {
                        g.pop(), f.next = a, d(f.next, f.current, !0)
                    }, !0
                }
                return!1
            }, f
        }]
    }).directive("mobileView", ["$rootScope", "$compile", "$controller", "$route", "$change", "$q", function (a, b, c, d, e, f) {
        function g(g, h, i) {
            function j(a) {
                var e = d.current, f = e && e.locals;
                return a.element = angular.element(document.createElement("div")), a.element.html(f.$template), a.element.addClass("amu-page"), a.scope = g.$new(), e.controller && (f.$scope = a.scope, a.controller = c(e.controller, f), a.element.contents().data("$ngControllerController", a.controller)), b(a.element.contents())(a.scope), f && f.$template && h.append(a.element), a.scope.$emit("$viewContentLoaded"), a.scope.$eval(i.onLoad), a
            }

            var k;
            g.$on("$pageTransitionStart", function (b, c, h, l) {
                function m() {
                    function b() {
                        var b = e(c.element, h ? h.element : null, m, l);
                        return b.then(function () {
                            h && (a.$broadcast("$pageTransitionSuccess", c, h), h.scope.$destroy(), h.element.remove(), h = void 0)
                        }), b
                    }

                    var k = d.current && d.current.$$route || {}, m = l ? h.transition() : c.transition();
                    j(c), (c.reverse() || k.reverse) && (l = !l), c.element.css("display", "none");
                    var n = g.$eval(i.deferTransition) || f.when();
                    n.cancel = function () {
                        o = !0, c.element.css("display", "")
                    };
                    var o = !1;
                    return n.then(function () {
                        return o ? void 0 : (c.element.css("display", ""), b())
                    }), n
                }

                k && k.cancel(), k = m(c, h, l)
            })
        }

        return{restrict: "EA", link: g}
    }]).directive("scrollable", ["$route", function (a) {
        var b = {};
        return{restrict: "EA", link: function (c, d) {
            var e = a.current ? a.current.$$route : {}, f = e.templateUrl || e.template, g = d[0];
            f && (setTimeout(function () {
                var a = b[f];
                a && (g.scrollTop = a)
            }), c.$on("$destroy", function () {
                b[f] = g.scrollTop
            }))
        }}
    }]), angular.module("ui.container.drawer", []).controller("DrawerController", ["$scope", "$rootScope", function (a, b) {
        var c = this;
        c.drawers = a.drawers = {leftActive: !1, rightActive: !1}, b.$on("resetDrawerLeft", function () {
            a.drawers.leftActive = !1
        }), b.$on("resetDrawerRight", function () {
            a.drawers.rightActive = !1
        }), b.$on("toggleDrawerLeft", function () {
            a.drawers.leftActive = !a.drawers.leftActive, a.drawers.rightActive && a.$emit("resetDrawerLeft")
        }), b.$on("toggleDrawerRight", function () {
            a.drawers.rightActive = !a.drawers.rightActive, a.drawers.leftActive && a.$emit("resetDrawerLeft")
        }), b.$on("$routeChangeSuccess", function () {
            a.drawers.leftActive && a.$emit("resetDrawerLeft"), a.drawers.rightActive && a.$emit("resetDrawerRight")
        })
    }]).directive("drawer", function () {
        return{restrict: "EA", templateUrl: "tpls/drawer/drawer.html", controller: "DrawerController", transclude: !0, replace: !0, scope: {drawerLeftTpl: "=", drawerRightTpl: "="}}
    }), angular.module("ui.container.error-alert", []).directive("errorAlert", ["$rootScope", "$timeout", function (a, b) {
    return{restrict: "EA", replace: !0, template: "<div class=\"error-alert\"><span ng-bind='content'></span></div>", link: function (c, d) {
        a.$on("showErrorAlert", function (a, e) {
            c.content = e.content, d.addClass("fade"), b(function () {
                d.addClass("in")
            }, 100), b(function () {
                d.removeClass("in"), b(function () {
                    d.removeClass("fade")
                }, 500)
            }, 4e3)
        })
    }}
}]), angular.module("app.nav.nav-left", []).controller("NavLeftCtrl", ["$scope", "$rootScope", "$navigate", "toolList", function (a, b, c, d) {
    a.$navigate = c, a.navList = [], angular.forEach(d, function (b) {
        "left" == b.navList && a.navList.push(b)
    }), a.logout = function () {
        c.go("/")
    }, a.switchPage = function (b) {
        a.$emit("resetDrawerLeft"), c.go(b.path, "slide")
    }
}]), angular.module("app.nav.nav-right", []).controller("NavRightCtrl", ["$scope", "$rootScope", "$navigate", "toolList", function (a, b, c, d) {
    a.navList = [], angular.forEach(d, function (b) {
        "left" == b.navList && a.navList.push(b)
    }), b.$on("$routeChangeSuccess", function (b, c) {
        angular.forEach(a.navList, function (a) {
            a.active = !1, c.path == a.path && (a.active = !0)
        })
    }), a.switchPage = function (b) {
        a.$emit("resetDrawerLeft"), c.go(b.path, "slide")
    }
}]), angular.module("utils.data-pool", []).factory("dataPool",function () {
    return{}
}).factory("httpMessageTypes",function () {
        return{}
    }).directive("aliSrc", ["serverUrl", function (a) {
        return function (b, c, d) {
            b.$watch(d.aliSrc, function (b) {
                c.attr("src", a.aliUrl + b)
            })
        }
    }]).factory("httpData", ["$rootScope", "$http", "$window", "httpMessageTypes", "serverUrl", function (a, b, c, d, e) {
        return{url: e.http, post: function (c, f, g) {
            var h, i = {};
            angular.isObject(f) && (i = angular.copy(f)), h = JSON.stringify(i), console.log(d[c]), console.log(h);
            var j = {url: this.url + d[c], method: "POST", data: h, headers: {"Content-Type": "application/json;charset=UTF-8", token: e.token}};
            if ("UPLOAD_BUILDING_IMG" == c || "INSERT_NEWS_IMG" == c) {
                j.headers["Content-Type"] = !1, j.data = f, j.transformRequest = function (a) {
                    console.log("UPLOAD_IMG", this.data);
                    var b = new FormData;
                    return a.hasOwnProperty("buildingId") && b.append("buildingId", a.buildingId), b.append("file", a.file), b
                };
                var k = new XMLHttpRequest;
                k.open("POST", j.url, !0), k.setRequestHeader("token", j.headers.token), k.onload = function () {
                    console.log("onload"), a.$apply(function () {
                        g(angular.fromJson(k.responseText))
                    })
                }, k.upload.onprogress = function (b) {
                    b.lengthComputable && a.$apply(function () {
                        f.file.uploadProgress = 100 * (b.loaded / b.total)
                    })
                }, k.send(j.transformRequest(f))
            } else b(j).success(function (a, b, c, d) {
                g(a, b, c, d)
            }).error(function (a, b, c, d) {
                    0 == b && (b = "数据服务未开"), console.log(b, d)
                })
        }, get: function (a, c, f) {
            b({url: this.url + d[a], params: c, method: "GET", headers: {"Content-Type": "application/json;charset=UTF-8", token: e.token}}).success(function (a) {
                f(a)
            }).error(function (a, b) {
                    0 == b && (b = "数据服务未开"), console.log(b)
                })
        }, linkTo: function (a, b) {
            var e = this;
            this.get(a, b, function () {
                c.location.href = e.url + d[a] + "?fileName=" + b.fileName
            })
        }}
    }]), angular.module("ui.widgets.facebook-loadingbar", []).directive("facebookLoadingbar", function () {
    return{restrict: "EA", replace: !0, template: "<div class='facebook-loadingbar'><span></span><span></span><span></span></div>"}
}), angular.module("app.tools.logo", ["ui.widgets.facebook-loadingbar"]).controller("LogoCtrl", ["$scope", "$navigate", "$timeout", function (a, b, c) {
    c(function () {
        b.go("/home")
    }, 3e3)
}]), angular.module("app.tools.home", []).controller("HomeCtrl", ["$scope", "$navigate", "toolList", function (a, b, c) {
    a.navList = [];
    var d = 0;
    angular.forEach(c, function (b) {
        "home" == b.navList && (b.color = "color-" + [d % 7], d++, a.navList.push(b))
    }), a.switchPage = function (a) {
        b.go(a.path, "slide")
    }, a.showNotice = function () {
        b.go("/notice", "slide")
    }
}]), angular.module("ui.container.modal-btn-group", []).factory("modalBtnGroupConfig",function () {
    return this.gap = 60, this.deltaDeg = 3, {gap: this.gap, deltaDeg: this.deltaDeg, r: this.gap / 2 / Math.sin(this.deltaDeg / 2 * Math.PI / 180)}
}).controller("ModalBtnGroupController", ["$scope", function (a) {
        a.btnListLength = a.btnList.length, a.btnListFuncInner = function (b) {
            a.btnListFunc(b), a.isFold = !1
        }
    }]).directive("modalBtnGroup",function () {
        return{require: "^modalBtnGroup", restrict: "EA", scope: {btnList: "=", btnListFunc: "="}, replace: !0, controller: "ModalBtnGroupController", templateUrl: "tpls/modal-btn-group/modal-btn-group.html", link: function () {
        }}
    }).directive("mbgStyle", ["modalBtnGroupConfig", function (a) {
        return{require: "^modalBtnGroup", restrict: "A", link: function (b, c, d) {
            var e = (b.btnListLength - b.$eval(d.mbgStyle)) * a.deltaDeg, f = ["translate3d(-", a.r - Math.cos(e * Math.PI / 180) * a.r, "px,-", Math.sin(e * Math.PI / 180) * a.r, "px,0) rotate(-", e, "deg)"].join("");
            c.css({webkitTransform: f, transform: f})
        }}
    }]), angular.module("app.tools.demo", ["ui.container.modal-btn-group"]).controller("DemoCtrl", ["$scope", "$navigate", function (a) {
    console.log("DemoCtrl"), a.btnList = [
        {id: 0, title: "1111"},
        {id: 1, title: "2222"},
        {id: 2, title: "3333"},
        {id: 3, title: "4444"},
        {id: 4, title: "5555"}
    ], a.btnListFunc = function (a) {
        console.log(a)
    }
}]), angular.module("ui.container.swipe-tabs", ["utils.hammer"]).controller("SwipeTabsetController", ["$scope", "$rootScope", function (a, b) {
        var c = this, d = c.tabs = a.tabs = [];
        a.curTab = null, c.select = function (b, c) {
            angular.forEach(d, function (a) {
                a.active = !1
            }), b.active = !0, a.curTab = b, c || a.showPane(d.indexOf(b))
        }, a.$watch("curTab", function (a) {
            b.$broadcast("paneSwitchComplete", {currentPane: a})
        }), c.addTab = function (a) {
            d.push(a), (1 === d.length || a.active) && c.select(a)
        }, c.removeTab = function (a) {
            var b = d.indexOf(a);
            if (a.active && d.length > 1) {
                var e = b == d.length - 1 ? b - 1 : b + 1;
                c.select(d[e])
            }
            d.splice(b, 1)
        }
    }]).directive("swipeTabset", ["$window", "Hammer", "$rootScope", function (a, b, c) {
        return{restrict: "EA", transclude: !0, replace: !0, require: "^swipeTabset", scope: {}, controller: "SwipeTabsetController", templateUrl: "tpls/swipe-tabs/swipe-tabset.html", compile: function (d, e, f) {
            var g = d.find("container"), h = 0, i = !1;
            return c.$on("domPulling", function (a, b) {
                i = b.isPulling
            }), function (c, e, j, k) {
                function l(a, b) {
                    g.removeClass("animate"), b && g.addClass("animate"), g.css({webkitTransform: "translate3d(" + a + "%,0,0) scale3d(1,1,1)", transform: "translate3d(" + a + "%,0,0) scale3d(1,1,1)"})
                }

                function m(a) {
                    switch (a.gesture.preventDefault(), a.type) {
                        case"dragright":
                        case"dragleft":
                            if (i)a.stopPropagation(); else {
                                var b = -(100 / c.tabs.length) * h, d = 100 / c.paneWidth * a.gesture.deltaX / c.tabs.length;
                                (0 == h && "right" == a.gesture.direction || h == c.tabs.length - 1 && "left" == a.gesture.direction) && (d *= .4)
                            }
                            l(d + b);
                            break;
                        case"swipeleft":
                            c.showPane(h + 1), a.gesture.stopDetect();
                            break;
                        case"swiperight":
                            c.showPane(h - 1), a.gesture.stopDetect();
                            break;
                        case"release":
                            Math.abs(a.gesture.deltaX) > c.paneWidth / 2 ? "left" == a.gesture.direction ? c.showPane(h + 1) : c.showPane(h - 1) : c.showPane(h)
                    }
                    c.$apply()
                }

                c.tabsAbove = "below" != c.direction, k.$scope = c, k.$transcludeFn = f, c.paneWidth = d[0].offsetWidth, angular.element(a).bind("load resize orientationchange", function () {
                    c.paneWidth = d[0].offsetWidth, c.$apply()
                }), c.showPane = function (a) {
                    a = Math.max(0, Math.min(a, c.tabs.length - 1)), h = a;
                    var b = -(100 / c.tabs.length * h);
                    l(b, !0), k.select(c.tabs[h], !0)
                }, b(g[0], {drag_lock_to_axis: !0}).on("release dragleft dragright swipeleft swiperight", m)
            }
        }}
    }]).directive("swipeTab", ["$parse", "$http", "$templateCache", "$compile", function (a) {
        return{require: "^swipeTabset", restrict: "EA", replace: !0, templateUrl: "tpls/swipe-tabs/swipe-tab.html", transclude: !0, scope: {heading: "@", onSelect: "&select", onDeselect: "&deselect"}, controller: function () {
        }, compile: function (b, c, d) {
            return function (b, c, e, f) {
                var g, h;
                e.active ? (g = a(e.active), h = g.assign, b.$parent.$watch(g, function (a) {
                    b.active = !!a
                }), b.active = g(b.$parent)) : h = g = angular.noop, b.$watch("active", function (a) {
                    h(b.$parent, a), a ? (f.select(b), b.onSelect(), c.css({width: "35%"})) : (b.onDeselect(), c.css({width: 65 / (f.tabs.length - 1) + "%"}))
                }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) {
                    b.disabled = !!a
                }), b.select = function () {
                    b.disabled || (b.active = !0)
                }, f.addTab(b), b.$on("$destroy", function () {
                    f.removeTab(b)
                }), b.active && h(b.$parent, !0), b.$transcludeFn = d
            }
        }}
    }]).directive("swipeTabHeadingTransclude", [function () {
        return{restrict: "A", require: "^swipeTab", link: function (a, b) {
            a.$watch("headingElement", function (a) {
                a && (b.html(""), b.append(a))
            })
        }}
    }]).directive("swipeTabContentTransclude", ["$compile", "$parse", function () {
        function a(a) {
            return a.tagName && (a.hasAttribute("swipe-tab-heading") || a.hasAttribute("data-tab-heading") || "swipe-tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
        }

        return{restrict: "A", require: "^swipeTabset", link: function (b, c, d) {
            var e = b.$eval(d.swipeTabContentTransclude);
            e.$transcludeFn(e.$parent, function (b) {
                angular.forEach(b, function (b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }}
    }]).directive("swipeTabsetTitles", function () {
        return{restrict: "A", require: "^swipeTabset", templateUrl: "tpls/swipe-tabs/swipe-tabset-titles.html", replace: !0, link: function (a, b, c, d) {
            a.$eval(c.swipeTabsetTitles) ? d.$transcludeFn(d.$scope.$parent, function (a) {
                b.append(a)
            }) : b.remove()
        }}
    }), angular.module("ui.widgets.android-loadingbar", []).directive("androidLoadingbar", function () {
    return{restrict: "EA", replace: !0, template: "<div class='android-loadingbar'><span></span><span></span><span></span><span></span></div>"}
}), angular.module("ui.container.pull-refresh-android", ["utils.hammer", "ui.widgets.android-loadingbar"]).directive("pullRefreshAndroid", ["Hammer", "$compile", function (a, b) {
    return{restrict: "EA", transclude: !0, replace: !0, scope: {pullRefreshAndroid: "&", isLoading: "="}, templateUrl: "tpls/pull-refresh-android/pull-refresh-android.html", controller: function () {
    }, link: function (c, d) {
        function e(a, b) {
            f.removeClass("animate"), b && f.addClass("animate"), f.css({width: a / 4 + "%"})
        }

        var f = d.find("span"), g = function () {
            f.html("<android-loadingbar></android-loadingbar>"), b(f.contents())(c)
        }, h = function () {
            f.html("")
        };
        c.$watch("isLoading", function (a) {
            a ? (g(), e(400, !0)) : (h(), e(0, !1))
        });
        var i = function (a) {
            switch (a.type) {
                case"touch":
                    e(0, !0);
                    break;
                case"release":
                    if (!c.isPulling)return;
                    a.gesture.deltaY / 200 >= 1 ? c.pullRefreshAndroid() : e(0, !0), c.isPulling = !1, c.$emit("domPulling", {isPulling: c.isPulling});
                    break;
                case"dragdown":
                    var b = f[0].scrollTop;
                    if (b > 5)return;
                    0 !== b && (f[0].scrollTop = 0), c.isPulling || (c.isPulling = !0, c.$emit("domPulling", {isPulling: c.isPulling})), e(a.gesture.deltaY), a.gesture.preventDefault()
            }
            c.$apply()
        };
        a(d[0]).on("touch dragdown release", i)
    }}
}]), angular.module("app.tools.news", ["utils.data-pool", "ui.container.swipe-tabs", "ui.container.pull-refresh-android"]).factory("newsDataPool", ["$rootScope", "httpMessageTypes", "httpData", "dataPool", function (a, b, c, d) {
        b.GET_SCHOOL_NEWS = "news/getSchoolNews.do", b.GET_NEWS_INFO = "news/getNewsInfo.do";
        var e = {};
        return e.newsTags = [
            {id: 1, name: "学校要闻", newsList: [
                {}
            ], offset: 0, isLoading: !1},
            {id: 2, name: "综合新闻", newsList: [
                {}
            ], offset: 0, isLoading: !1},
            {id: 3, name: "会议讲座", newsList: [
                {}
            ], offset: 0, isLoading: !1}
        ], e.newsCurInfo = {}, a.$on("getNewsList", function (b, d) {
            c.post("GET_SCHOOL_NEWS", {offset: d.newTag.offset, newsType: d.newTag.id}, function (b) {
                console.log("GET_SCHOOL_NEWS"), console.log(b), d.newTag.newsList = 1 == d.newTag.offset ? b.newsList : d.newTag.newsList.concat(b.newsList), d.newTag.isLoading = !1, a.$emit("updateNewsList", {isReady: !0})
            })
        }), a.$on("getNewsInfo", function (b, d) {
            console.log("getNewsInfo"), c.post("GET_NEWS_INFO", {newsId: d.news.newsId}, function (b) {
                console.log("GET_NEWS_INFO"), console.log(b), e.newsCurInfo = b.newsInfo, a.$emit("updateNewsInfo", {isReady: !0})
            })
        }), d.news = e, e
    }]).controller("NewsCtrl", ["$scope", "$navigate", "$http", "newsDataPool", function (a, b, c, d) {
        console.log(d), a.$navigate = b, a.newsTags = d.newsTags, a.contentLoader = function (b) {
            b.isLoading = !0, b.offset = 1, a.$emit("getNewsList", {newTag: b})
        }, a.showMore = function (b) {
            b.isLoading = !0, b.offset += 1, a.$emit("getNewsList", {newTag: b})
        }, a.$on("paneSwitchComplete", function (b, c) {
            angular.forEach(a.newsTags, function (b) {
                b.name == c.currentPane.heading && a.contentLoader(b)
            })
        }), a.readMore = function (c) {
            a.$emit("getNewsInfo", {news: c}), b.go("/news-info")
        }
    }]).controller("NewsInfoCtrl", ["$scope", "$rootScope", "$navigate", "newsDataPool", function (a, b, c, d) {
        a.$navigate = c, b.$on("updateNewsInfo", function (b, c) {
            a.isReady = c.isReady, a.newsInfo = d.newsCurInfo
        })
    }]), angular.module("ui.common.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function (a, b, c) {
    function d(a) {
        for (var b in a)if (void 0 !== f.style[b])return a[b]
    }

    var e = function (d, f, g) {
        g = g || {};
        var h = a.defer(), i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"], j = function () {
            c.$apply(function () {
                d.unbind(i, j), h.resolve(d)
            })
        };
        return i && d.bind(i, j), b(function () {
            angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
        }), h.promise.cancel = function () {
            i && d.unbind(i, j), h.reject("Transition cancelled")
        }, h.promise
    }, f = document.createElement("trans"), g = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend"}, h = {WebkitTransition: "webkitAnimationEnd", MozTransition: "animationend", OTransition: "oAnimationEnd", transition: "animationend"};
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
}]);
var dialogModule = angular.module("ui.common.dialog", ["ui.common.transition"]);
dialogModule.controller("MessageBoxController", ["$scope", "dialog", "model", function (a, b, c) {
    a.title = c.title, a.message = c.message, a.buttons = c.buttons, a.close = function (a) {
        b.close(a)
    }
}]), dialogModule.provider("$dialog", function () {
    var a = {backdrop: !0, dialogClass: "modal", backdropClass: "modal-backdrop", transitionClass: "fade", triggerClass: "in", resolve: {}, backdropFade: !1, dialogFade: !1, keyboard: !0, backdropClick: !0}, b = {}, c = {value: 0};
    this.options = function (a) {
        b = a
    }, this.$get = ["$http", "$document", "$compile", "$rootScope", "$controller", "$templateCache", "$q", "$transition", "$injector", function (d, e, f, g, h, i, j, k, l) {
        function m(a) {
            var b = angular.element("<div>");
            return b.addClass(a), b
        }

        function n(c) {
            var d = this, e = this.options = angular.extend({}, a, b, c);
            this._open = !1, this.backdropEl = m(e.backdropClass), e.backdropFade && (this.backdropEl.addClass(e.transitionClass), this.backdropEl.removeClass(e.triggerClass)), this.modalEl = m(e.dialogClass), e.dialogFade && (this.modalEl.addClass(e.transitionClass), this.modalEl.removeClass(e.triggerClass)), this.handledEscapeKey = function (a) {
                27 === a.which && (d.close(), a.preventDefault(), d.$scope.$apply())
            }, this.handleBackDropClick = function (a) {
                d.close(), a.preventDefault(), d.$scope.$apply()
            }
        }

        var o = e.find("body");
        return n.prototype.isOpen = function () {
            return this._open
        }, n.prototype.open = function (a, b) {
            var c = this, d = this.options;
            if (a && (d.templateUrl = a), b && (d.controller = b), !d.template && !d.templateUrl)throw new Error("Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.");
            return this._loadResolves().then(function (a) {
                var b = a.$scope = c.$scope = a.$scope ? a.$scope : g.$new();
                if (c.modalEl.html(a.$template), c.options.controller) {
                    var d = h(c.options.controller, a);
                    c.modalEl.children().data("ngControllerController", d)
                }
                f(c.modalEl)(b), c._addElementsToDom(), setTimeout(function () {
                    c.options.dialogFade && c.modalEl.addClass(c.options.triggerClass), c.options.backdropFade && c.backdropEl.addClass(c.options.triggerClass)
                }), c._bindEvents()
            }), this.deferred = j.defer(), this.deferred.promise
        }, n.prototype.close = function (a) {
            function b(a) {
                a.removeClass(d.options.triggerClass)
            }

            function c() {
                d._open && d._onCloseComplete(a)
            }

            var d = this, e = this._getFadingElements();
            if (e.length > 0)for (var f = e.length - 1; f >= 0; f--)k(e[f], b).then(c); else this._onCloseComplete(a)
        }, n.prototype._getFadingElements = function () {
            var a = [];
            return this.options.dialogFade && a.push(this.modalEl), this.options.backdropFade && a.push(this.backdropEl), a
        }, n.prototype._bindEvents = function () {
            this.options.keyboard && o.bind("keydown", this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.bind("click", this.handleBackDropClick)
        }, n.prototype._unbindEvents = function () {
            this.options.keyboard && o.unbind("keydown", this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.unbind("click", this.handleBackDropClick)
        }, n.prototype._onCloseComplete = function (a) {
            this._removeElementsFromDom(), this._unbindEvents(), this.deferred.resolve(a)
        }, n.prototype._addElementsToDom = function () {
            o.append(this.modalEl), this.options.backdrop && (0 === c.value && o.append(this.backdropEl), c.value++), this._open = !0
        }, n.prototype._removeElementsFromDom = function () {
            this.modalEl.remove(), this.options.backdrop && (c.value--, 0 === c.value && this.backdropEl.remove()), this._open = !1
        }, n.prototype._loadResolves = function () {
            var a, b = [], c = [], e = this;
            return this.options.template ? a = j.when(this.options.template) : this.options.templateUrl && (a = d.get(this.options.templateUrl, {cache: i}).then(function (a) {
                return a.data
            })), angular.forEach(this.options.resolve || [], function (a, d) {
                c.push(d), b.push(angular.isString(a) ? l.get(a) : l.invoke(a))
            }), c.push("$template"), b.push(a), j.all(b).then(function (a) {
                var b = {};
                return angular.forEach(a, function (a, d) {
                    b[c[d]] = a
                }), b.dialog = e, b
            })
        }, {dialog: function (a) {
            return new n(a)
        }, messageBox: function (a, b, c) {
            return new n({templateUrl: "tpls/dialog/message.html", controller: "MessageBoxController", resolve: {model: function () {
                return{title: a, message: b, buttons: c}
            }}})
        }}
    }]
}), angular.module("ui.container.modal", ["ui.common.dialog"]).directive("modal", ["$parse", "$dialog", function (a, b) {
    return{restrict: "EA", terminal: !0, link: function (c, d, e) {
        var f, g = angular.extend({}, c.$eval(e.uiOptions || e.bsOptions || e.options)), h = e.modal || e.show;
        g = angular.extend(g, {template: d.html(), resolve: {$scope: function () {
            return c
        }}});
        var i = b.dialog(g);
        d.remove(), f = e.close ? function () {
            a(e.close)(c)
        } : function () {
            angular.isFunction(a(h).assign) && a(h).assign(c, !1)
        }, c.$watch(h, function (a) {
            a ? i.open().then(function () {
                f()
            }) : i.isOpen() && i.close()
        })
    }}
}]), angular.module("map.coordsConverter", []).factory("coordsConverter", function () {
    var a = function () {
        this.a = 6378245, this.ee = .006693421622965943, this.Math = Math
    };
    return a.prototype = {_isOnEarth: function (a) {
        return a.longitude < 72.004 || a.longitude > 137.8347 || a.latitude < .8293 || a.latitude > 55.8271
    }, _getDeltaLat: function (a, b) {
        var c = -100 + 2 * a + 3 * b + .2 * b * b + .1 * a * b + .2 * this.Math.sqrt(this.Math.abs(a));
        return c += 2 * (20 * this.Math.sin(6 * a * this.Math.PI) + 20 * this.Math.sin(2 * a * this.Math.PI)) / 3, c += 2 * (20 * this.Math.sin(b * this.Math.PI) + 40 * this.Math.sin(b / 3 * this.Math.PI)) / 3, c += 2 * (160 * this.Math.sin(b / 12 * this.Math.PI) + 320 * this.Math.sin(b * this.Math.PI / 30)) / 3
    }, _getDeltaLon: function (a, b) {
        var c = 300 + a + 2 * b + .1 * a * a + .1 * a * b + .1 * this.Math.sqrt(this.Math.abs(a));
        return c += 2 * (20 * this.Math.sin(6 * a * this.Math.PI) + 20 * this.Math.sin(2 * a * this.Math.PI)) / 3, c += 2 * (20 * this.Math.sin(a * this.Math.PI) + 40 * this.Math.sin(a / 3 * this.Math.PI)) / 3, c += 2 * (150 * this.Math.sin(a / 12 * this.Math.PI) + 300 * this.Math.sin(a / 30 * this.Math.PI)) / 3
    }, earthToMars: function (a) {
        var b, c, d, e, f, g = {};
        return this._isOnEarth(a) ? (g.latitude = a.latitude, g.longitude = a.longitude, g) : (b = this._getDeltaLat(a.longitude - 105, a.latitude - 35), c = this._getDeltaLon(a.longitude - 105, a.latitude - 35), d = a.latitude / 180 * this.Math.PI, e = this.Math.sin(d), e = 1 - this.ee * e * e, f = this.Math.sqrt(e), b = 180 * b / (this.a * (1 - this.ee) / (e * f) * this.Math.PI), c = 180 * c / (this.a / f * this.Math.cos(d) * this.Math.PI), g.latitude = a.latitude + b, g.longitude = a.longitude + c, g)
    }, marsToEarth: function (a) {
        var b, c, d, e = {};
        return b = this.earthToMars(a), c = b.latitude - a.latitude, d = b.longitude - a.longitude, e.latitude = a.latitude - c, e.longitude = a.longitude - d, e
    }, marsToBaidu: function (a) {
        var b, c, d, e = {}, f = a.longitude, g = a.latitude;
        return d = 3e3 * this.Math.PI / 180, b = this.Math.sqrt(f * f + g * g) + 2e-5 * this.Math.sin(g * d), c = this.Math.atan2(g, f) + 3e-6 * this.Math.cos(f * d), e.latitude = b * this.Math.sin(c) + .006, e.longitude = b * this.Math.cos(c) + .0065, e
    }, baiduToMars: function (a) {
        var b, c, d, e = {}, f = a.longitude - .0065, g = a.latitude - .006;
        return d = 3e3 * this.Math.PI / 180, b = this.Math.sqrt(f * f + g * g) - 2e-5 * this.Math.sin(g * d), c = this.Math.atan2(g, f) - 3e-6 * this.Math.cos(f * d), e.latitude = b * this.Math.sin(c), e.longitude = b * this.Math.cos(c), e
    }, baiduToEarth: function (a) {
        return this.marsToEarth(this.baiduToMars(a))
    }, earthToBaidu: function (a) {
        return this.marsToBaidu(this.earthToMars(a))
    }}, new a
}), angular.module("map.mapHandler", ["map.coordsConverter"]).factory("geolocation",function () {
    return window.navigator.geolocation
}).factory("scriptLoader",function () {
        return function (a, b) {
            var c = document.createElement("script");
            c.src = a, c.onload = b, document.body.appendChild(c)
        }
    }).service("baseMapHandler", ["coordsConverter", "geolocation", "scriptLoader", "$rootScope", function (a, b, c, d) {
        var e = this;
        this.baseMap = null, this.locateMarker = null, this.BMap = window.BMap, this.baseLibLoader = function (a) {
            window.BMap_loadScriptTime = (new Date).getTime(), c("http://api.map.baidu.com/getscript?v=2.0&ak=158d2da48ee164abf8ea4074a36c4320", function () {
                e.BMap = window.BMap, a()
            })
        }, this._transToMapPoint = function (b) {
            var c = {};
            this.baseMap.getMapType() == BMAP_PERSPECTIVE_MAP ? (c.longitude = b.dlongitude, c.latitude = b.dlatitude) : (c.longitude = b.longitude, c.latitude = b.latitude);
            var d = a.earthToBaidu(c);
            return new this.BMap.Point(d.longitude, d.latitude)
        }, this._transToEarthCoords = function (b) {
            var c = a.baiduToEarth({longitude: b.lng, latitude: b.lat}), d = {};
            return this.baseMap.getMapType() == BMAP_PERSPECTIVE_MAP ? (d.dlongitude = c.longitude, d.dlatitude = c.latitude) : (d.longitude = c.longitude, d.latitude = c.latitude), d
        }, this.centerMapTo = function (a) {
            var b = this._transToMapPoint(a);
            this.baseMap.setCenter(b), this.baseMap.removeOverlay(this.markerCircle), this.markerCircle.setCenter(b), this.baseMap.addOverlay(this.markerCircle), this.baseMap.addEventListener("click", function c() {
                this.removeOverlay(e.markerCircle), this.removeEventListener("click", c)
            })
        }, this.getDistancefromMapCenter = function (a) {
            var b = this._transToMapPoint(a);
            return this.baseMap.getDistance(b, this.baseMap.getCenter())
        }, this.walkPathSearch = function (a, b) {
            e.baseMap.setMapType(BMAP_HYBRID_MAP), this.baseMap.clearOverlays();
            var c = new this.BMap.WalkingRoute(this.baseMap, {renderOptions: {map: this.baseMap, autoViewport: !0}}), f = this._transToMapPoint(a), g = this._transToMapPoint(b);
            c.search(f, g), e.baseMap.addEventListener("click", function h() {
                e.baseMap.reset(), d.$emit("changeDivision", {isNotNeedCenter: !1}), this.removeEventListener("click", h)
            })
        }, this.drivePathSearch = function (a, b) {
            e.baseMap.setMapType(BMAP_HYBRID_MAP), this.baseMap.clearOverlays();
            var c = new this.BMap.DrivingRoute(this.baseMap, {renderOptions: {map: this.baseMap, autoViewport: !0}}), f = this._transToMapPoint(a), g = this._transToMapPoint(b);
            c.search(f, g), e.baseMap.addEventListener("click", function h() {
                e.baseMap.reset(), d.$emit("changeDivision", {isNotNeedCenter: !1}), this.removeEventListener("click", h)
            })
        }, this.centerMapToMarkerById = function (a) {
            angular.forEach(e.baseMap.getOverlays(), function (b) {
                b.setAnimation(null), b.buildingId == a && (e.baseMap.setCenter(b.getPosition()), b.setAnimation(BMAP_ANIMATION_BOUNCE), b.addEventListener("mouseup", function c() {
                    this.setAnimation(null), this.removeEventListener("mouseup", c)
                }))
            })
        }, this._transToEarthCoords = function (b) {
            return a.baiduToEarth({longitude: b.lng, latitude: b.lat})
        }, this.mapInit = function (a, b, c) {
            console.log(this.BMap), this.baseMap = new this.BMap.Map(a, {minZoom: 16, maxZoom: 19, enableMapClick: !1}), console.log(this.baseMap), this.baseMap.enableDragging(), this.baseMap.enableScrollWheelZoom(), this.baseMap.enablePinchToZoom(), this.baseMap.enableKeyboard(), this.baseMap.disableDoubleClickZoom();
            var d = this._transToMapPoint(c);
            (new e.BMap.Geocoder).getLocation(d, function (a) {
                switch (e.baseMap.setCurrentCity(a.addressComponents.city), b) {
                    case"3D":
                        e.baseMap.setMapType(BMAP_PERSPECTIVE_MAP);
                        break;
                    case"NORMAL":
                        e.baseMap.setMapType(BMAP_NORMAL_MAP);
                        break;
                    case"HYBRID":
                        e.baseMap.setMapType(BMAP_HYBRID_MAP);
                        break;
                    case"SATELLITE":
                        e.baseMap.setMapType(BMAP_SATELLITE_MAP)
                }
                e.baseMap.centerAndZoom(d, 18)
            }), this.markerCircle = new this.BMap.Circle(d, 15, {strokeColor: "#fff", strokeOpacity: .1, fillColor: "red"})
        }, this._addBuildingMarker = function (a, b) {
            var c = new this.BMap.Marker(a, {title: b || "当前建筑"});
            if (void 0 != b) {
                var d = new BMap.Label(b, {offset: new BMap.Size(20, -10)});
                d.setStyle({padding: "2px 4px", borderColor: "#ddd"}), c.setLabel(d)
            }
            return this.baseMap.addOverlay(c), c
        }, this.showAllCampusBuildings = function (a, b) {
            var c, d, e, f;
            for (this.baseMap.clearOverlays(), c = a.length; c--;)e = a[c], d = this._transToMapPoint(e), f = this._addBuildingMarker(d, e.buildingName), f.buildingId = e.buildingId, f.addEventListener("click", function () {
                b(this.buildingId)
            })
        }, this.mapHitBackLocation = function (a) {
            this.baseMap.setDefaultCursor("crosshair"), this.baseMap.addEventListener("click", function b(c) {
                var d = e._transToEarthCoords(c.point);
                e.createOneBuildingMarker(d, a), a(d), e.baseMap.setDefaultCursor("default"), this.removeEventListener("click", b)
            })
        }, this.showOneBuildingMarker = function (a, b) {
            this.baseMap.clearOverlays();
            var c = this._transToMapPoint(a), d = this._addBuildingMarker(c);
            return b || this.baseMap.setCenter(c), d
        }, this.createOneBuildingMarker = function (a, b) {
            var c = this.showOneBuildingMarker(a, !0);
            c.enableDragging(), c.addEventListener("dragend", function () {
                b(e._transToEarthCoords(this.getPosition()))
            })
        }, this.showLocalSearch = function (a) {
            this.baseMap.clearOverlays();
            var b = new BMap.LocalSearch(this.baseMap, {renderOptions: {map: this.baseMap, panel: "mapInfo", selectFirstResult: !1, autoViewport: !1}});
            b.searchInBounds(a, this.baseMap.getBounds())
        }, this.locateMarkerInit = function (a) {
            this.locateMarker = new this.BMap.Marker(this._transToMapPoint(a)), this.locateMarker.disableMassClear(!1), this.locateMarker.addEventListener("click", function () {
                e.baseMap.centerAndZoom(this.getPosition(), 19)
            }), this._addLocateMarker()
        }, this._addLocateMarker = function () {
            this.getCenterEarthCoords(), this.baseMap.addOverlay(this.locateMarker)
        }, this.getCenterEarthCoords = function () {
            function a(a) {
                e._updateLocate(a)
            }

            function c(a) {
                alert("code: " + a.code + "\n" + "message: " + a.message + "\n")
            }

            b.getCurrentPosition(a, c, {enableHighAccuracy: !0})
        }, this._updateLocate = function (a) {
            this.locateMarker.setPosition(this._transToMapPoint(a.coords))
        }, this.updateLocatePerSecond = function (a) {
            var b = this;
            this.updateLocatePerSecondInterval = setInterval(function () {
                b.getCenterEarthCoords()
            }, 1e3 * a)
        }
    }]), angular.module("app.tools.map", ["ui.container.modal-btn-group", "ui.container.modal", "map.mapHandler"]).factory("mapDataPool", ["$rootScope", "httpMessageTypes", "httpData", "dataPool", function (a, b, c, d) {
        b.GET_SCHOOL_BUILDING_LIST = "building/getSchoolBuildingList.do";
        var e = {};
        return e.buildingList = {}, e.buildingTypes = [
            {id: 1, name: "教学楼"},
            {id: 2, name: "宿舍楼"},
            {id: 3, name: "体育场"},
            {id: 4, name: "宾馆"},
            {id: 5, name: "餐厅"},
            {id: 6, name: "风景"},
            {id: 7, name: "其他"}
        ], a.$on("getMapInfo", function () {
            console.log("getMapInfo"), c.get("GET_SCHOOL_BUILDING_LIST", null, function (b) {
                console.log("GET_SCHOOL_BUILDING_LIST"), console.log(b), e.buildingList = b.buildingList, a.$emit("updateMapInfo", {isReady: !0})
            })
        }), d.map = e, e
    }]).controller("MapCtrl", ["$scope", "$rootScope", "$timeout", "$navigate", "baseMapHandler", "mapDataPool", function (a, b, c, d, e, f) {
        function g() {
            e.mapInit("mapMain", "HYBRID", i), e.locateMarkerInit(i)
        }

        function h() {
            console.log("buildingMarkersInit"), console.log("showAllCampusBuildings"), e.showAllCampusBuildings(f.buildingList, function (b) {
                angular.forEach(f.buildingList, function (c) {
                    c.buildingId == b && a.$emit("showMapInfoModal", {buildingInfo: c})
                }), a.$apply()
            })
        }

        var i = {latitude: 39.95143124833905, longitude: 116.3411808013916};
        window.BMap ? c(g, 300) : e.baseLibLoader(g), a.$emit("getMapInfo"), b.$on("updateMapInfo", function () {
            console.log("updateMapInfo"), c(h, 3e3)
        });
        var j = function (a) {
            angular.forEach(f.buildingList, function (b) {
                b.buildingId == a && e.centerMapTo(b)
            })
        };
        b.$on("centerBuildingById", function (b, c) {
            console.log("centerBuildingById"), console.log(c), h(), j(c.buildingId), a.$emit("closeModal")
        }), a.geoLocation = function () {
            e.baseMap.setMapType(BMAP_HYBRID_MAP), e.baseMap.centerAndZoom(e.locateMarker.getPosition(), 19)
        }, a.isMapInfoModalOpen = !1, b.$on("showMapInfoModal", function (b, c) {
            a.buildingInfo = c.buildingInfo, console.log(c), a.isMapInfoModalOpen = !0
        }), a.mapModalOpts = {backdropFade: !0, dialogFade: !0}, a.closeMapInfoModal = function () {
            console.log("closeMapInfoModal"), a.isMapInfoModalOpen = !1
        }
    }]).controller("MapSearchCtrl", ["$scope", "mapDataPool", function (a, b) {
        a.beginSearch = function () {
            a.isShowSearch = !0, a.buildingList = b.buildingList, a.buildingTypes = b.buildingTypes
        }, a.cancelSearch = function () {
            a.isShowSearch = !1
        }, a.centerToBuilding = function (b) {
            a.$emit("centerBuildingById", {buildingId: b.buildingId}), a.cancelSearch()
        }
    }]), angular.module("utils.xdate", []).factory("XDate", function () {
    return function (a, b, c, d) {
        function e() {
            return f(this instanceof e ? this : new e, arguments)
        }

        function f(b, c) {
            var d, f = c.length;
            if (L(c[f - 1]) && (d = c[--f], c = H(c, 0, f)), f)if (1 == f) {
                var g = c[0];
                g instanceof a || K(g) ? b[0] = new a(+g) : g instanceof e ? b[0] = z(g) : J(g) && (b[0] = new a(0), b = q(g, d || !1, b))
            } else b[0] = new a(cb.apply(a, c)), d || (b[0] = D(b[0])); else b[0] = new a;
            return L(d) && h(b, d), b
        }

        function g(a) {
            return a[0].toString === db
        }

        function h(b, c, d) {
            return c ? g(b) || (d && (b[0] = C(b[0])), b[0].toString = db) : g(b) && (b[0] = d ? D(b[0]) : new a(+b[0])), b
        }

        function i(a, b, c, d, e) {
            var f, g = G(A, a[0], e), h = G(B, a[0], e), i = !1;
            2 == d.length && L(d[1]) && (i = d[1], d = [c]), f = b == P ? (c % 12 + 12) % 12 : g(P), h(b, d), i && g(P) != f && (h(P, [g(P) - 1]), h(Q, [E(g(O), g(P))]))
        }

        function j(a, c, d, e) {
            d = Number(d);
            var f = b.floor(d);
            a["set" + $[c]](a["get" + $[c]]() + f, e || !1), f != d && U > c && j(a, c + 1, (d - f) * ab[c], e)
        }

        function k(a, c, d) {
            a = a.clone().setUTCMode(!0, !0), c = e(c).setUTCMode(!0, !0);
            var f = 0;
            if (d == O || d == P) {
                for (var g = U; g >= d; g--)f /= ab[g], f += A(c, !1, g) - A(a, !1, g);
                d == P && (f += 12 * (c.getFullYear() - a.getFullYear()))
            } else if (d == Q) {
                var h = a.toDate().setUTCHours(0, 0, 0, 0), i = c.toDate().setUTCHours(0, 0, 0, 0);
                f = b.round((i - h) / X) + (c - i - (a - h)) / X
            } else f = (c - a) / [36e5, 6e4, 1e3, 1][d - 3];
            return f
        }

        function l(a) {
            return m(a(O), a(P), a(Q))
        }

        function m(c, d, e) {
            var f = new a(cb(c, d, e)), g = o(n(c, d, e));
            return b.floor(b.round((f - g) / X) / 7) + 1
        }

        function n(b, c, d) {
            var e = new a(cb(b, c, d));
            return e < o(b) ? b - 1 : e >= o(b + 1) ? b + 1 : b
        }

        function o(b) {
            var c = new a(cb(b, 0, 4));
            return c.setUTCDate(c.getUTCDate() - (c.getUTCDay() + 6) % 7), c
        }

        function p(a, b, c, e) {
            var f = G(A, a, e), g = G(B, a, e);
            c === d && (c = n(f(O), f(P), f(Q)));
            var h = o(c);
            e || (h = D(h)), a.setTime(+h), g(Q, [f(Q) + 7 * (b - 1)])
        }

        function q(b, c, d) {
            for (var f, g = e.parsers, h = 0; h < g.length; h++)if (f = g[h](b, c, d))return f;
            return d[0] = new a(b), d
        }

        function r(b, c, d) {
            var e = b.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/);
            if (e) {
                var f = new a(cb(e[1], e[3] ? e[3] - 1 : 0, e[5] || 1, e[7] || 0, e[8] || 0, e[10] || 0, e[12] ? 1e3 * Number("0." + e[12]) : 0));
                return e[13] ? e[14] && f.setUTCMinutes(f.getUTCMinutes() + ("-" == e[15] ? 1 : -1) * (60 * Number(e[16]) + (e[18] ? Number(e[18]) : 0))) : c || (f = D(f)), d.setTime(+f)
            }
        }

        function s(a, b, c, d, f) {
            function g(a) {
                return c[a] || j[a]
            }

            function h(a) {
                if (d)for (var b = (a == V ? Q : a) - 1; b >= 0; b--)d.push(k(b));
                return k(a)
            }

            var i = e.locales, j = i[e.defaultLocale] || {}, k = G(A, a, f);
            return c = (J(c) ? i[c] : c) || {}, t(a, b, h, g, f)
        }

        function t(a, b, c, d, e) {
            for (var f, g, h = ""; f = b.match(bb);)h += b.substr(0, f.index), f[1] ? h += u(a, f[1], c, d, e) : f[3] ? (g = t(a, f[4], c, d, e), parseInt(g.replace(/\D/g, ""), 10) && (h += g)) : h += f[7] || "'", b = b.substr(f.index + f[0].length);
            return h + b
        }

        function u(a, b, c, e, f) {
            for (var g, h = b.length, i = ""; h > 0;)g = v(a, b.substr(0, h), c, e, f), g !== d ? (i += g, b = b.substr(h), h = b.length) : h--;
            return i + b
        }

        function v(a, b, c, d, f) {
            var g = e.formatters[b];
            if (J(g))return t(a, g, c, d, f);
            if (M(g))return g(a, f || !1, d);
            switch (b) {
                case"fff":
                    return N(c(U), 3);
                case"s":
                    return c(T);
                case"ss":
                    return N(c(T));
                case"m":
                    return c(S);
                case"mm":
                    return N(c(S));
                case"h":
                    return c(R) % 12 || 12;
                case"hh":
                    return N(c(R) % 12 || 12);
                case"H":
                    return c(R);
                case"HH":
                    return N(c(R));
                case"d":
                    return c(Q);
                case"dd":
                    return N(c(Q));
                case"ddd":
                    return d("dayNamesShort")[c(V)] || "";
                case"dddd":
                    return d("dayNames")[c(V)] || "";
                case"M":
                    return c(P) + 1;
                case"MM":
                    return N(c(P) + 1);
                case"MMM":
                    return d("monthNamesShort")[c(P)] || "";
                case"MMMM":
                    return d("monthNames")[c(P)] || "";
                case"yy":
                    return(c(O) + "").substring(2);
                case"yyyy":
                    return c(O);
                case"t":
                    return x(c, d).substr(0, 1).toLowerCase();
                case"tt":
                    return x(c, d).toLowerCase();
                case"T":
                    return x(c, d).substr(0, 1);
                case"TT":
                    return x(c, d);
                case"z":
                case"zz":
                case"zzz":
                    return f ? "Z" : w(a, b);
                case"w":
                    return l(c);
                case"ww":
                    return N(l(c));
                case"S":
                    var h = c(Q);
                    return h > 10 && 20 > h ? "th" : ["st", "nd", "rd"][h % 10 - 1] || "th"
            }
        }

        function w(a, c) {
            var d = a.getTimezoneOffset(), e = 0 > d ? "+" : "-", f = b.floor(b.abs(d) / 60), g = b.abs(d) % 60, h = f;
            return"zz" == c ? h = N(f) : "zzz" == c && (h = N(f) + ":" + N(g)), e + h
        }

        function x(a, b) {
            return a(R) < 12 ? b("amDesignator") : b("pmDesignator")
        }

        function y(a) {
            return!isNaN(+a[0])
        }

        function z(b) {
            var c = new a(+b[0]);
            return g(b) && (c.toString = db), c
        }

        function A(a, b, c) {
            return a["get" + (b ? "UTC" : "") + $[c]]()
        }

        function B(a, b, c, d) {
            a["set" + (b ? "UTC" : "") + $[c]].apply(a, d)
        }

        function C(b) {
            return new a(cb(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours(), b.getMinutes(), b.getSeconds(), b.getMilliseconds()))
        }

        function D(b) {
            return new a(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes(), b.getUTCSeconds(), b.getUTCMilliseconds())
        }

        function E(b, c) {
            return 32 - new a(cb(b, c, 32)).getUTCDate()
        }

        function F(a) {
            return function () {
                return a.apply(d, [this].concat(H(arguments)))
            }
        }

        function G(a) {
            var b = H(arguments, 1);
            return function () {
                return a.apply(d, b.concat(H(arguments)))
            }
        }

        function H(a, b, e) {
            return c.prototype.slice.call(a, b || 0, e === d ? a.length : e)
        }

        function I(a, b) {
            for (var c = 0; c < a.length; c++)b(a[c], c)
        }

        function J(a) {
            return"string" == typeof a
        }

        function K(a) {
            return"number" == typeof a
        }

        function L(a) {
            return"boolean" == typeof a
        }

        function M(a) {
            return"function" == typeof a
        }

        function N(a, b) {
            for (b = b || 2, a += ""; a.length < b;)a = "0" + a;
            return a
        }

        var O = 0, P = 1, Q = 2, R = 3, S = 4, T = 5, U = 6, V = 7, W = 8, X = 864e5, Y = "yyyy-MM-dd'T'HH:mm:ss(.fff)", Z = Y + "zzz", $ = ["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds", "Day", "Year"], _ = ["Years", "Months", "Days"], ab = [12, 31, 24, 60, 60, 1e3, 1], bb = new RegExp("(([a-zA-Z])\\2*)|(\\((('.*?'|\\(.*?\\)|.)*?)\\))|('(.*?)')"), cb = a.UTC, db = a.prototype.toUTCString, eb = e.prototype;
        return eb.length = 1, eb.splice = c.prototype.splice, eb.getUTCMode = F(g), eb.setUTCMode = F(h), eb.getTimezoneOffset = function () {
            return g(this) ? 0 : this[0].getTimezoneOffset()
        }, I($, function (a, b) {
            eb["get" + a] = function () {
                return A(this[0], g(this), b)
            }, b != W && (eb["getUTC" + a] = function () {
                return A(this[0], !0, b)
            }), b != V && (eb["set" + a] = function (a) {
                return i(this, b, a, arguments, g(this)), this
            }, b != W && (eb["setUTC" + a] = function (a) {
                return i(this, b, a, arguments, !0), this
            }, eb["add" + (_[b] || a)] = function (a, c) {
                return j(this, b, a, c), this
            }, eb["diff" + (_[b] || a)] = function (a) {
                return k(this, a, b)
            }))
        }), eb.getWeek = function () {
            return l(G(A, this, !1))
        }, eb.getUTCWeek = function () {
            return l(G(A, this, !0))
        }, eb.setWeek = function (a, b) {
            return p(this, a, b, !1), this
        }, eb.setUTCWeek = function (a, b) {
            return p(this, a, b, !0), this
        }, eb.addWeeks = function (a) {
            return this.addDays(7 * Number(a))
        }, eb.diffWeeks = function (a) {
            return k(this, a, Q) / 7
        }, e.parsers = [r], e.parse = function (a) {
            return+e("" + a)
        }, eb.toString = function (a, b, c) {
            return a !== d && y(this) ? s(this, a, b, c, g(this)) : this[0].toString()
        }, eb.toUTCString = eb.toGMTString = function (a, b, c) {
            return a !== d && y(this) ? s(this, a, b, c, !0) : this[0].toUTCString()
        }, eb.toISOString = function () {
            return this.toUTCString(Z)
        }, e.defaultLocale = "", e.locales = {"": {monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], amDesignator: "AM", pmDesignator: "PM"}}, e.formatters = {i: Y, u: Z}, I(["getTime", "valueOf", "toDateString", "toTimeString", "toLocaleString", "toLocaleDateString", "toLocaleTimeString", "toJSON"], function (a) {
            eb[a] = function () {
                return this[0][a]()
            }
        }), eb.setTime = function (a) {
            return this[0].setTime(a), this
        }, eb.valid = F(y), eb.clone = function () {
            return new e(this)
        }, eb.clearTime = function () {
            return this.setHours(0, 0, 0, 0)
        }, eb.toDate = function () {
            return new a(+this[0])
        }, e.now = function () {
            return+new a
        }, e.today = function () {
            return(new e).clearTime()
        }, e.UTC = cb, e.getDaysInMonth = E, "undefined" != typeof module && module.exports && (module.exports = e), "function" == typeof define && define.amd && define([], function () {
            return e
        }), e
    }(Date, Math, Array)
}), angular.module("ui.widgets.buttons", []).constant("buttonConfig", {activeClass: "active", toggleEvent: "click"}).directive("btnRadio", ["buttonConfig", function (a) {
        var b = a.activeClass || "active", c = a.toggleEvent || "click";
        return{require: "ngModel", link: function (a, d, e, f) {
            f.$render = function () {
                d.toggleClass(b, angular.equals(f.$modelValue, a.$eval(e.btnRadio)))
            }, d.bind(c, function () {
                d.hasClass(b) || a.$apply(function () {
                    f.$setViewValue(a.$eval(e.btnRadio)), f.$render()
                })
            })
        }}
    }]).directive("btnCheckbox", ["buttonConfig", function (a) {
        var b = a.activeClass || "active", c = a.toggleEvent || "click";
        return{require: "ngModel", link: function (a, d, e, f) {
            function g() {
                var b = a.$eval(e.btnCheckboxTrue);
                return angular.isDefined(b) ? b : !0
            }

            function h() {
                var b = a.$eval(e.btnCheckboxFalse);
                return angular.isDefined(b) ? b : !1
            }

            f.$render = function () {
                d.toggleClass(b, angular.equals(f.$modelValue, g()))
            }, d.bind(c, function () {
                a.$apply(function () {
                    f.$setViewValue(d.hasClass(b) ? h() : g()), f.$render()
                })
            })
        }}
    }]), angular.module("app.tools.calendar", ["utils.xdate", "ui.widgets.buttons"]).factory("calendarDataPool", ["$rootScope", "httpMessageTypes", "httpData", "dataPool", "XDate", function (a, b, c, d, e) {
        b.getScheduleList = "schedule/getScheduleList.do", b.addSchedule = "schedule/addSchedule.do", b.modifySchedule = "schedule/modifySchedule.do", b.delSchedule = "schedule/delSchedule.do";
        var f = {};
        return f.curMonthList = {}, f.curDate = {}, f.curMonth = {}, f.pointDate = {}, f.monthDates = {}, f.weekDates = {}, f.dayDates = {}, f.selectDateObj = {}, f.selectDateObjByHour = {}, a.$on("getScheduleList", function (b, d) {
            console.log("getScheduleList"), c.get("getScheduleList", {ownerId: 1, month: d.month, courseFlg: !0}, function (b) {
                console.log(b), 1 == b.msgState && (angular.forEach(b.scheduleList, function (a) {
                    a.startTimeObj = new e(a.startTime), a.endTimeObj = new e(a.endTime), 1 == a.scheduleType && (a.detail = angular.fromJson(a.detail))
                }), f.curMonthList = b.scheduleList, a.$broadcast("updateScheduleList"))
            })
        }), a.$on("addTask", function (b, d) {
            var f = angular.copy(d.curTask);
            f.ownerId = 1, f.scheduleType = 2, f.startTime = new e(f.startTimeString).getTime(), f.endTime = new e(f.endTimeString).getTime(), c.post("addSchedule", {scheduleInfo: f}, function (b) {
                console.log("addSchedule"), console.log(b), a.$broadcast("closeTaskModal")
            })
        }), a.$on("modifyTask", function (b, d) {
            var f = angular.copy(d.curTask);
            f.ownerId = 1, f.startTime = new e(f.startTimeString).getTime(), f.endTime = new e(f.endTimeString).getTime(), console.log(f), c.post("modifySchedule", {scheduleInfo: f}, function (b) {
                console.log("modifySchedule"), console.log(b), a.$broadcast("closeTaskModal")
            })
        }), a.$on("removeTask", function (b, d) {
            var e = angular.copy(d.curTask);
            c.get("delSchedule", {ownerId: e.ownerId, scheduleId: e.scheduleId, month: f.curMonth.getMonth() + 1}, function (b) {
                console.log("delSchedule"), console.log(b), a.$broadcast("closeTaskModal")
            })
        }), d.tasks = f, f
    }]).service("calendarDataHandler", ["calendarDataPool", "XDate", function (a, b) {
        this.XDate = function (a) {
            return new b(a)
        }, this.getTaskObjById = function (b) {
            for (var c, d = a.curMonthList.length; d-- && (c = a.curMonthList[d], 1 == c.scheduleType || c.scheduleId != b););
            return c
        }, this.split = function (a, b) {
            for (var c = []; a.length > 0;)c.push(a.splice(0, b));
            return c
        }, this.getMonthDates = function (a, c) {
            for (var d = new Array(c), e = a.clone(), f = 0; c > f;)d[f++] = new b(e), e.setDate(e.getDate() + 1);
            return d
        }, this.toDateObjs = function (c) {
            var d = [];
            return angular.forEach(c, function (c, e) {
                var f = {};
                f.date = c, f.row = parseInt(e / 7), f.column = c.getDay(), f.isoWeek = c.getWeek(), f.isCurMonth = c.getMonth() == a.curMonth.getMonth(), f.isToday = 0 == c.clone().clearTime().diffDays(b.today()), f.isSelected = 0 == c.clone().clearTime().diffDays(a.selectDateObj.date), f.taskList = [], f.taskTypes = [
                    {id: 0, isHas: !1},
                    {id: 1, isHas: !1},
                    {id: 2, isHas: !1}
                ], f.isToday && (a.selectDateObj = f), d.push(f)
            }), d
        }, this.refillMonth = function (c) {
            if (c)this.fillTaskInMonth(a.monthDates); else {
                var d = a.curMonth, e = d.clone().setDate(1), f = e.getDay(), g = b.getDaysInMonth(d.getFullYear(), d.getMonth()), h = this.getMonthDates(e.addDays(-f), g + f > 36 ? 42 : 35);
                a.monthDates = this.split(this.toDateObjs(h), 7)
            }
        }, this.hourRowsInit = function () {
            for (var a = 24, b = 7, c = []; a--;)for (b = 7; b--;) {
                var d = {};
                d.hour = 23 - a, d.day = 6 - b, c.push(d)
            }
            return c
        }, this.hourRowInit = function () {
            for (var a = 24, b = []; a--;) {
                var c = {};
                c.hour = 23 - a, b.push(c)
            }
            return b
        }, this.fillTaskInMonth = function (c) {
            var d = c[0][0].date, e = c.length;
            angular.forEach(a.curMonthList, function (a) {
                var f, g, h, i, j, k;
                switch (a.scheduleType) {
                    case 1:
                        for (j = e, h = a.detail.dayInWeek; j--;)i = c[j][h], a.startTimeObj = a.startTimeObj.setFullYear(i.date.getFullYear()).setMonth(i.date.getMonth()).setDate(i.date.getDate()), a.endTimeObj = a.endTimeObj.setFullYear(i.date.getFullYear()).setMonth(i.date.getMonth()).setDate(i.date.getDate()), k = angular.copy(a), k.startTimeObj = new b(k.startTimeObj[0]), k.endTimeObj = new b(k.endTimeObj[0]), i.taskList.push(k), i.taskTypes[1].isHas = !0;
                        break;
                    default:
                        a.startTimeObj.getMonth() != a.endTimeObj.getMonth() && a.endTimeObj.setMonth(a.startTimeObj.getMonth() + 1).setDate(1).clearTime();
                        var l = a.startTimeObj.clone().clearTime().diffDays(a.endTimeObj.clone().clearTime()) + (0 == a.endTimeObj.getHours() ? 0 : 1);
                        for (f = d.clone().clearTime().diffDays(a.startTimeObj.clone().clearTime()), g = parseInt(f / 7), h = f % 7; l--;)h > 6 && (h = 0, g++), i = c[g][h], k = angular.copy(a), k.startTimeObj = new b(k.startTimeObj[0]), k.endTimeObj = new b(k.endTimeObj[0]), k.startTimeObj.getDate() != i.date.getDate() && (k.startTimeObj = i.date.clone()), k.endTimeObj.getDate() > i.date.getDate() && (k.endTimeObj = i.date.clone().addDays(1)), i.taskList.push(k), i.taskTypes[2].isHas = !0, h++
                }
            })
        }, this.fillTaskByDate = function (a) {
            var b = {};
            b.allDay = [], b.inDay = [], b.dateObj = a, angular.forEach(a.taskList, function (a) {
                a.startTimeObj.diffDays(a.endTimeObj) < 1 ? (a.topFix = a.startTimeObj.getHours() + a.startTimeObj.getMinutes() / 60, a.height = a.startTimeObj.diffHours(a.endTimeObj), a.n = 1, a.col = 0, b.inDay.push(a)) : b.allDay.push(a)
            }), b.inDay.sort(function (a, b) {
                return b.height - a.height
            }), b.inDay.sort(function (a, b) {
                return a.startTimeObj.getTime() - b.startTimeObj.getTime()
            });
            var c, d, e, f;
            for (d = 0; e = b.inDay[d]; d++) {
                for (e.isMixed = [d], c = d + 1; f = b.inDay[c]; c++)e.endTimeObj.getTime() > f.startTimeObj.getTime() && e.isMixed.push(c);
                console.log(e.isMixed)
            }
            console.log(b.inDay);
            var g = function (a, c) {
                c.push(a);
                for (var d, e = b.inDay.length; e--;)d = b.inDay[e].isMixed, d.indexOf(a) > -1 && e != a && c.push(e)
            };
            if (d = b.inDay.length, 0 != d) {
                for (var h = []; d--;) {
                    var i = {index: d, value: b.inDay[d].isMixed.length, arr: []};
                    g(d, i.arr), console.log(i, i.arr), h.push(i)
                }
                h.sort(function (a, b) {
                    return b.arr.length - a.arr.length
                });
                var j = h[0].arr.length;
                h.sort(function (a, b) {
                    return a.index - b.index
                });
                var k = [0];
                b.inDay[0].col = 0, angular.forEach(h, function (a) {
                    a.arr.sort(function (a, b) {
                        return a - b
                    }), console.log(a.index, a.arr), angular.forEach(a.arr, function (c) {
                        e = b.inDay[c], e.n = j, a.index != c && (k.indexOf(c) > -1 || (e.col = b.inDay[a.arr.indexOf(c)].col + 1, k.push(c)))
                    })
                })
            }
            return b
        }
    }]).controller("CalendarCtrl", ["$scope", "$navigate", "calendarDataPool", "XDate", function (a, b, c, d) {
        a.calendarType = "month", a.curDate = d.today(), c.curDate = a.curDate, a.selectDateObj = {}, a.selectDateObj.date = d.today(), c.selectDateObj = a.selectDateObj, a.modalOpts = {backdropFade: !0, dialogFade: !0}, a.showTaskModal = function () {
            c.isAddTask = !0, a.isTaskModalOpen = !0
        }, a.closeTaskModal = function () {
            a.isTaskModalOpen = !1
        }, a.$on("closeTaskModal", function () {
            a.isTaskModalOpen = !1, a.$broadcast("initCtrl." + c.calendarType, {isNeedUpdate: !0})
        }), a.$watch("calendarType", function (b) {
            c.calendarType = b, a.$broadcast("initCtrl." + b, {isNeedUpdate: !1})
        })
    }]).controller("CalendarCtrl.Month", ["$scope", "$rootScope", "calendarDataPool", "calendarDataHandler", function (a, b, c, d) {
        a.taskList = [], a.curMonth = a.$parent.selectDateObj.date.clone(), c.curMonth = a.curMonth, a.select = function (b) {
            angular.forEach(a.dateRows, function (a) {
                angular.forEach(a, function (a) {
                    a.isSelected = !1
                })
            }), b.isSelected = !0, c.selectDateObj = angular.copy(b), c.selectDateObj.date = d.XDate(c.selectDateObj.date[0]), a.$parent.selectDateObj = c.selectDateObj, b.date.getMonth() != a.curMonth.getMonth() && a.move(b.date.getMonth() - a.curMonth.getMonth())
        }, a.showTaskModal = function (b) {
            c.isAddTask = !1, console.log(b), c.curTask = 1 == b.scheduleType ? b : d.getTaskObjById(b.scheduleId), a.$parent.isTaskModalOpen = !0
        }, a.move = function (b) {
            a.curMonth.setMonth(a.curMonth.getMonth() + b), c.curMonth = a.curMonth, d.refillMonth(!1), a.dateRows = c.monthDates, a.$emit("getScheduleList", {month: a.curMonth.getMonth() + 1})
        }, a.$on("updateMonthDates", function (b, c) {
            console.log("updateMonthDates"), a.move(c.direction)
        }), a.$on("updateScheduleList", function () {
            console.log("updateScheduleList"), d.refillMonth(!0), console.log(a.$parent.selectDateObj, c.selectDateObj, c.monthDates), a.dateRows = c.monthDates, c.selectDateObj || (c.selectDateObj = angular.copy(c.monthDates[0][0]), c.selectDateObj.date = d.XDate(c.selectDateObj.date[0]), a.$parent.selectDateObj = c.selectDateObj), console.log(c.selectDateObj), b.$broadcast("updateScheduleListCompleted")
        }), a.$on("initCtrl.month", function () {
            console.log("initCtrl.month"), a.move(0)
        })
    }]).controller("CalendarCtrl.Week", ["$scope", "$rootScope", "calendarDataPool", "calendarDataHandler", function (a, b, c, d) {
        a.curWeekRow = null, a.allDayMax = 0, a.updating = {}, a.select = function (b) {
            angular.forEach(a.hourRows, function (a) {
                angular.forEach(a, function (a) {
                    a.isSelected = !1
                })
            }), b.isSelected = !0, c.selectDateObj = angular.copy(c.weekDates[b.day].dateObj), c.selectDateObj.date = d.XDate(c.selectDateObj.date[0]), c.selectDateObj.date.setHours(b.hour)
        }, a.showTaskModal = function (b) {
            c.isAddTask = !1, c.curTask = 1 == b.scheduleType ? b : d.getTaskObjById(b.scheduleId), a.$parent.isTaskModalOpen = !0
        }, a.move = function (e) {
            c.weekDates = [], console.log(a.curWeekRow, e, c.monthDates.length), a.curWeekRow + e < 0 ? (a.updating.is = !0, a.updating.direction = -1, b.$broadcast("updateMonthDates", {direction: -1})) : a.curWeekRow + e >= c.monthDates.length ? (a.updating.is = !0, a.updating.direction = 1, b.$broadcast("updateMonthDates", {direction: 1})) : (angular.forEach(c.monthDates[a.curWeekRow + e], function (b) {
                var e = d.fillTaskByDate(b);
                c.weekDates.push(e), e.allDay.length > a.allDayMax && (a.allDayMax = e.allDay.length)
            }), console.log(a.allDayMax), a.curWeekRow = a.curWeekRow + e, c.selectDateObj = angular.copy(c.weekDates[0].dateObj), c.selectDateObj.date = d.XDate(c.selectDateObj.date[0])), a.weekDates = c.weekDates, console.log(a.weekDates)
        }, a.$on("updateScheduleListCompleted", function () {
            console.log("updateScheduleListCompleted");
            var b;
            if (a.updating.is)switch (a.updating.is = !1, a.updating.direction) {
                case 1:
                    a.curWeekRow = 0, b = c.monthDates[a.curWeekRow], b[0].date.getMonth() != b[6].date.getMonth() && (a.curWeekRow = 1), a.move(0);
                    break;
                case-1:
                    a.curWeekRow = c.monthDates.length - 1, b = c.monthDates[a.curWeekRow], b[0].date.getMonth() != b[6].date.getMonth() && (a.curWeekRow = a.curWeekRow - 1), a.move(0);
                    break;
                case 0:
                    a.move(0)
            }
        }), a.$on("initCtrl.week", function (e, f) {
            f.isNeedUpdate ? (a.updating.is = !0, a.updating.direction = 0, b.$broadcast("updateMonthDates", {direction: 0})) : (console.log("initCtrl.week", c.selectDateObj), a.curWeekRow = c.selectDateObj.row, console.log(a.curWeekRow), a.hourRows = d.split(d.hourRowsInit(), 7), a.move(0))
        })
    }]).controller("CalendarCtrl.Day", ["$scope", "$rootScope", "calendarDataPool", "calendarDataHandler", function (a, b, c, d) {
        a.curDateObj = null, a.updating = {}, a.select = function (b) {
            angular.forEach(a.hourRow, function (a) {
                a.isSelected = !1
            }), b.isSelected = !0, c.selectDateObj.date.setHours(b.hour)
        }, a.showTaskModal = function (b) {
            c.isAddTask = !1, c.curTask = 1 == b.scheduleType ? b : d.getTaskObjById(b.scheduleId), a.$parent.isTaskModalOpen = !0
        }, a.move = function (e) {
            var f, g;
            f = a.curDateObj.row, g = a.curDateObj.column, g += e, a.curDateObj.column = a.curDateObj.column + e, g > 6 && (g = 0, f++), 0 > g && (g = 6, f--), 0 > f || c.monthDates[f][g].date.getMonth() < a.curDateObj.date.getMonth() ? (a.updating.is = !0, a.updating.direction = -1, b.$broadcast("updateMonthDates", {direction: -1})) : f >= c.monthDates.length || c.monthDates[f][g].date.getMonth() > a.curDateObj.date.getMonth() ? (a.updating.is = !0, a.updating.direction = 1, b.$broadcast("updateMonthDates", {direction: 1})) : (a.curDateObj = c.monthDates[f][g], a.dayDates = d.fillTaskByDate(a.curDateObj), c.dayDates = a.dayDates)
        }, a.$on("updateScheduleListCompleted", function () {
            if (console.log("updateScheduleListCompleted"), a.updating.is)switch (a.updating.is = !1, a.updating.direction) {
                case 1:
                    a.curDateObj.column > 6 && (a.curDateObj.column = a.curDateObj.column - 7), a.curDateObj = c.monthDates[0][a.curDateObj.column], a.move(0);
                    break;
                case-1:
                    a.curDateObj.column < 0 && (a.curDateObj.column = a.curDateObj.column + 7), a.curDateObj = c.monthDates[c.monthDates.length - 1][a.curDateObj.column], a.move(0);
                    break;
                case 0:
                    a.move(0)
            }
        }), a.$on("initCtrl.day", function (e, f) {
            f.isNeedUpdate ? (a.updating.is = !0, a.updating.direction = 0, b.$broadcast("updateMonthDates", {direction: 0})) : (console.log("initCtrl.day"), a.curDateObj = c.selectDateObj, a.hourRow = d.hourRowInit(), a.move(0))
        })
    }]).controller("TaskViewCtrl", ["$scope", "calendarDataPool", "calendarDataHandler", function (a, b, c) {
        a.isAddTask = b.isAddTask, a.curTask = b.curTask, console.log(b.curMonthList, a.isAddTask, b.selectDateObj.date), a.isAddTask && (a.curTask = {scheduleType: 2, startTimeObj: b.selectDateObj.date}, a.curTask.startTimeString = a.curTask.startTimeObj.toString("i"), a.curTask.endTimeObj = b.selectDateObj.date.getHours() > 0 ? b.selectDateObj.date.clone().addHours(1) : b.selectDateObj.date.clone().addDays(1), a.curTask.endTimeString = a.curTask.endTimeObj.toString("i"), a.curTask.startTime = c.XDate(a.curTask.startTimeString).getTime(), a.curTask.endTime = c.XDate(a.curTask.endTimeString).getTime()), a.addTask = function () {
            console.log("addTask"), a.$emit("addTask", {curTask: a.curTask})
        }, a.preModifyTask = function () {
            console.log("preModifyTask"), a.isModifying = !0, console.log(a.curTask), a.curTask.startTimeObj = c.XDate(a.curTask.startTime), a.curTask.endTimeObj = c.XDate(a.curTask.endTime), a.curTask.startTimeString = a.curTask.startTimeObj.toString("i"), a.curTask.endTimeString = a.curTask.endTimeObj.toString("i")
        }, a.modifyTask = function () {
            console.log("modifyTask"), a.$emit("modifyTask", {curTask: a.curTask})
        }, a.removeTask = function () {
            console.log("removeTask"), a.$emit("removeTask", {curTask: a.curTask})
        }
    }]), angular.module("utils.chart", []).provider("Chart", function () {
    this.$get = function () {
        var a = function (a) {
            function b(a, b, c) {
                var d = b.steps * b.stepValue, e = a - b.graphMin, f = j(e / d, 1, 0);
                return c * b.steps * f
            }

            function c(a, b, c, d) {
                function e() {
                    var e = a.animation ? j(h(i), null, 0) : 1;
                    r(d), a.scaleOverlay ? (c(e), b()) : (b(), c(e))
                }

                function f() {
                    i += g, e(), 1 >= i ? y(f) : "function" == typeof a.onAnimationComplete && a.onAnimationComplete()
                }

                var g = a.animation ? 1 / j(a.animationSteps, Number.MAX_VALUE, 1) : 1, h = o[a.animationEasing], i = a.animation ? 0 : 1;
                "function" != typeof b && (b = function () {
                }), y(f)
            }

            function d(a, b, c, d, f, g) {
                function h(a) {
                    return Math.floor(Math.log(a) / Math.LN10)
                }

                var i, j, k, l, m, n, o;
                for (n = d - f, o = h(n), i = Math.floor(f / (1 * Math.pow(10, o))) * Math.pow(10, o), j = Math.ceil(d / (1 * Math.pow(10, o))) * Math.pow(10, o), k = j - i, l = Math.pow(10, o), m = Math.round(k / l); c > m || m > b;)c > m ? (l /= 2, m = Math.round(k / l)) : (l *= 2, m = Math.round(k / l));
                var p = [];
                return e(g, p, m, i, l), {steps: m, stepValue: l, graphMin: i, labels: p}
            }

            function e(a, b, c, d, e) {
                if (a)for (var f = 1; c + 1 > f; f++)b.push(m(a, {value: (d + e * f).toFixed(k(e))}))
            }

            function f(a) {
                return Math.max.apply(Math, a)
            }

            function g(a) {
                return Math.min.apply(Math, a)
            }

            function h(a, b) {
                return a ? a : b
            }

            function i(a) {
                return!isNaN(parseFloat(a)) && isFinite(a)
            }

            function j(a, b, c) {
                return i(b) && a > b ? b : i(c) && c > a ? c : a
            }

            function k(a) {
                return 0 != a % 1 ? a.toString().split(".")[1].length : 0
            }

            function l(a, b) {
                var c = {};
                for (var d in a)c[d] = a[d];
                for (var d in b)c[d] = b[d];
                return c
            }

            function m(a, b) {
                var c = /\W/.test(a) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : z[a] = z[a] || m(document.getElementById(a).innerHTML);
                return b ? c(b) : c
            }

            var n = this, o = {linear: function (a) {
                return a
            }, easeInQuad: function (a) {
                return a * a
            }, easeOutQuad: function (a) {
                return-1 * a * (a - 2)
            }, easeInOutQuad: function (a) {
                return(a /= .5) < 1 ? .5 * a * a : -0.5 * (--a * (a - 2) - 1)
            }, easeInCubic: function (a) {
                return a * a * a
            }, easeOutCubic: function (a) {
                return 1 * ((a = a / 1 - 1) * a * a + 1)
            }, easeInOutCubic: function (a) {
                return(a /= .5) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
            }, easeInQuart: function (a) {
                return a * a * a * a
            }, easeOutQuart: function (a) {
                return-1 * ((a = a / 1 - 1) * a * a * a - 1)
            }, easeInOutQuart: function (a) {
                return(a /= .5) < 1 ? .5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
            }, easeInQuint: function (a) {
                return 1 * (a /= 1) * a * a * a * a
            }, easeOutQuint: function (a) {
                return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
            }, easeInOutQuint: function (a) {
                return(a /= .5) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
            }, easeInSine: function (a) {
                return-1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
            }, easeOutSine: function (a) {
                return 1 * Math.sin(a / 1 * (Math.PI / 2))
            }, easeInOutSine: function (a) {
                return-0.5 * (Math.cos(Math.PI * a / 1) - 1)
            }, easeInExpo: function (a) {
                return 0 == a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
            }, easeOutExpo: function (a) {
                return 1 == a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1)
            }, easeInOutExpo: function (a) {
                return 0 == a ? 0 : 1 == a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
            }, easeInCirc: function (a) {
                return a >= 1 ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
            }, easeOutCirc: function (a) {
                return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
            }, easeInOutCirc: function (a) {
                return(a /= .5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            }, easeInElastic: function (a) {
                var b = 1.70158, c = 0, d = 1;
                if (0 == a)return 0;
                if (1 == (a /= 1))return 1;
                if (c || (c = .3), d < Math.abs(1)) {
                    d = 1;
                    var b = c / 4
                } else var b = c / (2 * Math.PI) * Math.asin(1 / d);
                return-(d * Math.pow(2, 10 * (a -= 1)) * Math.sin((1 * a - b) * 2 * Math.PI / c))
            }, easeOutElastic: function (a) {
                var b = 1.70158, c = 0, d = 1;
                if (0 == a)return 0;
                if (1 == (a /= 1))return 1;
                if (c || (c = .3), d < Math.abs(1)) {
                    d = 1;
                    var b = c / 4
                } else var b = c / (2 * Math.PI) * Math.asin(1 / d);
                return d * Math.pow(2, -10 * a) * Math.sin((1 * a - b) * 2 * Math.PI / c) + 1
            }, easeInOutElastic: function (a) {
                var b = 1.70158, c = 0, d = 1;
                if (0 == a)return 0;
                if (2 == (a /= .5))return 1;
                if (c || (c = 1 * .3 * 1.5), d < Math.abs(1)) {
                    d = 1;
                    var b = c / 4
                } else var b = c / (2 * Math.PI) * Math.asin(1 / d);
                return 1 > a ? -.5 * d * Math.pow(2, 10 * (a -= 1)) * Math.sin((1 * a - b) * 2 * Math.PI / c) : .5 * d * Math.pow(2, -10 * (a -= 1)) * Math.sin((1 * a - b) * 2 * Math.PI / c) + 1
            }, easeInBack: function (a) {
                var b = 1.70158;
                return 1 * (a /= 1) * a * ((b + 1) * a - b)
            }, easeOutBack: function (a) {
                var b = 1.70158;
                return 1 * ((a = a / 1 - 1) * a * ((b + 1) * a + b) + 1)
            }, easeInOutBack: function (a) {
                var b = 1.70158;
                return(a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            }, easeInBounce: function (a) {
                return 1 - o.easeOutBounce(1 - a)
            }, easeOutBounce: function (a) {
                return(a /= 1) < 1 / 2.75 ? 1 * 7.5625 * a * a : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
            }, easeInOutBounce: function (a) {
                return.5 > a ? .5 * o.easeInBounce(2 * a) : .5 * o.easeOutBounce(2 * a - 1) + .5
            }}, p = a.canvas.width, q = a.canvas.height;
            window.devicePixelRatio && (a.canvas.style.width = p + "px", a.canvas.style.height = q + "px", a.canvas.height = q * window.devicePixelRatio, a.canvas.width = p * window.devicePixelRatio, a.scale(window.devicePixelRatio, window.devicePixelRatio)), this.PolarArea = function (b, c) {
                n.PolarArea.defaults = {scaleOverlay: !0, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleShowLine: !0, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleFontFamily: "'Arial'", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animation: !0, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, onAnimationComplete: null};
                var d = c ? l(n.PolarArea.defaults, c) : n.PolarArea.defaults;
                return new s(b, d, a)
            }, this.Radar = function (b, c) {
                n.Radar.defaults = {scaleOverlay: !1, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleShowLine: !0, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !1, scaleLabel: "<%=value%>", scaleFontFamily: "'Arial'", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, angleShowLineOut: !0, angleLineColor: "rgba(0,0,0,.1)", angleLineWidth: 1, pointLabelFontFamily: "'Arial'", pointLabelFontStyle: "normal", pointLabelFontSize: 12, pointLabelFontColor: "#666", pointDot: !0, pointDotRadius: 3, pointDotStrokeWidth: 1, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", onAnimationComplete: null};
                var d = c ? l(n.Radar.defaults, c) : n.Radar.defaults;
                return new t(b, d, a)
            }, this.Pie = function (b, c) {
                n.Pie.defaults = {segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animation: !0, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, onAnimationComplete: null};
                var d = c ? l(n.Pie.defaults, c) : n.Pie.defaults;
                return new u(b, d, a)
            }, this.Doughnut = function (b, c) {
                n.Doughnut.defaults = {segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 50, animation: !0, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, onAnimationComplete: null};
                var d = c ? l(n.Doughnut.defaults, c) : n.Doughnut.defaults;
                return new v(b, d, a)
            }, this.Line = function (b, c) {
                n.Line.defaults = {scaleOverlay: !1, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleFontFamily: "'Arial'", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, bezierCurve: !0, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 2, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", onAnimationComplete: null};
                var d = c ? l(n.Line.defaults, c) : n.Line.defaults;
                return new w(b, d, a)
            }, this.Bar = function (b, c) {
                n.Bar.defaults = {scaleOverlay: !1, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleFontFamily: "'Arial'", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", onAnimationComplete: null};
                var d = c ? l(n.Bar.defaults, c) : n.Bar.defaults;
                return new x(b, d, a)
            };
            var r = function (a) {
                a.clearRect(0, 0, p, q)
            }, s = function (a, i, j) {
                function k() {
                    o = g([p, q]) / 2, o -= f([.5 * i.scaleFontSize, .5 * i.scaleLineWidth]), t = 2 * i.scaleFontSize, i.scaleShowLabelBackdrop && (t += 2 * i.scaleBackdropPaddingY, o -= 1.5 * i.scaleBackdropPaddingY), u = o, t = h(t, 5)
                }

                function l() {
                    for (var a = 0; a < s.steps; a++)if (i.scaleShowLine && (j.beginPath(), j.arc(p / 2, q / 2, r * (a + 1), 0, 2 * Math.PI, !0), j.strokeStyle = i.scaleLineColor, j.lineWidth = i.scaleLineWidth, j.stroke()), i.scaleShowLabels) {
                        j.textAlign = "center", j.font = i.scaleFontStyle + " " + i.scaleFontSize + "px " + i.scaleFontFamily;
                        var b = s.labels[a];
                        if (i.scaleShowLabelBackdrop) {
                            var c = j.measureText(b).width;
                            j.fillStyle = i.scaleBackdropColor, j.beginPath(), j.rect(Math.round(p / 2 - c / 2 - i.scaleBackdropPaddingX), Math.round(q / 2 - r * (a + 1) - .5 * i.scaleFontSize - i.scaleBackdropPaddingY), Math.round(c + 2 * i.scaleBackdropPaddingX), Math.round(i.scaleFontSize + 2 * i.scaleBackdropPaddingY)), j.fill()
                        }
                        j.textBaseline = "middle", j.fillStyle = i.scaleFontColor, j.fillText(b, p / 2, q / 2 - r * (a + 1))
                    }
                }

                function m(c) {
                    var d = -Math.PI / 2, e = 2 * Math.PI / a.length, f = 1, g = 1;
                    i.animation && (i.animateScale && (f = c), i.animateRotate && (g = c));
                    for (var h = 0; h < a.length; h++)j.beginPath(), j.arc(p / 2, q / 2, f * b(a[h].value, s, r), d, d + g * e, !1), j.lineTo(p / 2, q / 2), j.closePath(), j.fillStyle = a[h].color, j.fill(), i.segmentShowStroke && (j.strokeStyle = i.segmentStrokeColor, j.lineWidth = i.segmentStrokeWidth, j.stroke()), d += g * e
                }

                function n() {
                    for (var b = Number.MIN_VALUE, c = Number.MAX_VALUE, d = 0; d < a.length; d++)a[d].value > b && (b = a[d].value), a[d].value < c && (c = a[d].value);
                    var e = Math.floor(u / (.66 * t)), f = Math.floor(.5 * (u / t));
                    return{maxValue: b, minValue: c, maxSteps: e, minSteps: f}
                }

                var o, r, s, t, u, v, w;
                k(), v = n(), w = i.scaleShowLabels ? i.scaleLabel : null, i.scaleOverride ? (s = {steps: i.scaleSteps, stepValue: i.scaleStepWidth, graphMin: i.scaleStartValue, labels: []}, e(w, s.labels, s.steps, i.scaleStartValue, i.scaleStepWidth)) : s = d(u, v.maxSteps, v.minSteps, v.maxValue, v.minValue, w), r = o / s.steps, c(i, l, m, j)
            }, t = function (a, i, k) {
                function l(c) {
                    var d = 2 * Math.PI / a.datasets[0].data.length;
                    k.save(), k.translate(p / 2, q / 2);
                    for (var e = 0; e < a.datasets.length; e++) {
                        k.beginPath(), k.moveTo(0, c * -1 * b(a.datasets[e].data[0], t, s));
                        for (var f = 1; f < a.datasets[e].data.length; f++)k.rotate(d), k.lineTo(0, c * -1 * b(a.datasets[e].data[f], t, s));
                        if (k.closePath(), k.fillStyle = a.datasets[e].fillColor, k.strokeStyle = a.datasets[e].strokeColor, k.lineWidth = i.datasetStrokeWidth, k.fill(), k.stroke(), i.pointDot) {
                            k.fillStyle = a.datasets[e].pointColor, k.strokeStyle = a.datasets[e].pointStrokeColor, k.lineWidth = i.pointDotStrokeWidth;
                            for (var g = 0; g < a.datasets[e].data.length; g++)k.rotate(d), k.beginPath(), k.arc(0, c * -1 * b(a.datasets[e].data[g], t, s), i.pointDotRadius, 2 * Math.PI, !1), k.fill(), k.stroke()
                        }
                        k.rotate(d)
                    }
                    k.restore()
                }

                function m() {
                    var b = 2 * Math.PI / a.datasets[0].data.length;
                    if (k.save(), k.translate(p / 2, q / 2), i.angleShowLineOut) {
                        k.strokeStyle = i.angleLineColor, k.lineWidth = i.angleLineWidth;
                        for (var c = 0; c < a.datasets[0].data.length; c++)k.rotate(b), k.beginPath(), k.moveTo(0, 0), k.lineTo(0, -r), k.stroke()
                    }
                    for (var d = 0; d < t.steps; d++) {
                        if (k.beginPath(), i.scaleShowLine) {
                            k.strokeStyle = i.scaleLineColor, k.lineWidth = i.scaleLineWidth, k.moveTo(0, -s * (d + 1));
                            for (var e = 0; e < a.datasets[0].data.length; e++)k.rotate(b), k.lineTo(0, -s * (d + 1));
                            k.closePath(), k.stroke()
                        }
                        if (i.scaleShowLabels) {
                            if (k.textAlign = "center", k.font = i.scaleFontStyle + " " + i.scaleFontSize + "px " + i.scaleFontFamily, k.textBaseline = "middle", i.scaleShowLabelBackdrop) {
                                var f = k.measureText(t.labels[d]).width;
                                k.fillStyle = i.scaleBackdropColor, k.beginPath(), k.rect(Math.round(-f / 2 - i.scaleBackdropPaddingX), Math.round(-s * (d + 1) - .5 * i.scaleFontSize - i.scaleBackdropPaddingY), Math.round(f + 2 * i.scaleBackdropPaddingX), Math.round(i.scaleFontSize + 2 * i.scaleBackdropPaddingY)), k.fill()
                            }
                            k.fillStyle = i.scaleFontColor, k.fillText(t.labels[d], 0, -s * (d + 1))
                        }
                    }
                    for (var g = 0; g < a.labels.length; g++) {
                        k.font = i.pointLabelFontStyle + " " + i.pointLabelFontSize + "px " + i.pointLabelFontFamily, k.fillStyle = i.pointLabelFontColor;
                        var h = Math.sin(b * g) * (r + i.pointLabelFontSize), j = Math.cos(b * g) * (r + i.pointLabelFontSize);
                        k.textAlign = b * g == Math.PI || 0 == b * g ? "center" : b * g > Math.PI ? "right" : "left", k.textBaseline = "middle", k.fillText(a.labels[g], h, -j)
                    }
                    k.restore()
                }

                function n() {
                    r = g([p, q]) / 2, u = 2 * i.scaleFontSize;
                    for (var b = 0, c = 0; c < a.labels.length; c++) {
                        k.font = i.pointLabelFontStyle + " " + i.pointLabelFontSize + "px " + i.pointLabelFontFamily;
                        var d = k.measureText(a.labels[c]).width;
                        d > b && (b = d)
                    }
                    r -= f([b, 1.5 * (i.pointLabelFontSize / 2)]), r -= i.pointLabelFontSize, r = j(r, null, 0), v = r, u = h(u, 5)
                }

                function o() {
                    for (var b = Number.MIN_VALUE, c = Number.MAX_VALUE, d = 0; d < a.datasets.length; d++)for (var e = 0; e < a.datasets[d].data.length; e++)a.datasets[d].data[e] > b && (b = a.datasets[d].data[e]), a.datasets[d].data[e] < c && (c = a.datasets[d].data[e]);
                    var f = Math.floor(v / (.66 * u)), g = Math.floor(.5 * (v / u));
                    return{maxValue: b, minValue: c, maxSteps: f, minSteps: g}
                }

                var r, s, t, u, v, w, x;
                a.labels || (a.labels = []), n();
                var w = o();
                x = i.scaleShowLabels ? i.scaleLabel : null, i.scaleOverride ? (t = {steps: i.scaleSteps, stepValue: i.scaleStepWidth, graphMin: i.scaleStartValue, labels: []}, e(x, t.labels, t.steps, i.scaleStartValue, i.scaleStepWidth)) : t = d(v, w.maxSteps, w.minSteps, w.maxValue, w.minValue, x), s = r / t.steps, c(i, m, l, k)
            }, u = function (a, b, d) {
                function e(c) {
                    var e = -Math.PI / 2, g = 1, i = 1;
                    b.animation && (b.animateScale && (g = c), b.animateRotate && (i = c));
                    for (var j = 0; j < a.length; j++) {
                        var k = i * a[j].value / f * 2 * Math.PI;
                        d.beginPath(), d.arc(p / 2, q / 2, g * h, e, e + k), d.lineTo(p / 2, q / 2), d.closePath(), d.fillStyle = a[j].color, d.fill(), b.segmentShowStroke && (d.lineWidth = b.segmentStrokeWidth, d.strokeStyle = b.segmentStrokeColor, d.stroke()), e += k
                    }
                }

                for (var f = 0, h = g([q / 2, p / 2]) - 5, i = 0; i < a.length; i++)f += a[i].value;
                c(b, null, e, d)
            }, v = function (a, b, d) {
                function e(c) {
                    var e = -Math.PI / 2, g = 1, j = 1;
                    b.animation && (b.animateScale && (g = c), b.animateRotate && (j = c));
                    for (var k = 0; k < a.length; k++) {
                        var l = j * a[k].value / f * 2 * Math.PI;
                        d.beginPath(), d.arc(p / 2, q / 2, g * h, e, e + l, !1), d.arc(p / 2, q / 2, g * i, e + l, e, !0), d.closePath(), d.fillStyle = a[k].color, d.fill(), b.segmentShowStroke && (d.lineWidth = b.segmentStrokeWidth, d.strokeStyle = b.segmentStrokeColor, d.stroke()), e += l
                    }
                }

                for (var f = 0, h = g([q / 2, p / 2]) - 5, i = h * (b.percentageInnerCutout / 100), j = 0; j < a.length; j++)f += a[j].value;
                c(b, null, e, d)
            }, w = function (a, f, g) {
                function h(c) {
                    function d(d, e) {
                        return z - c * b(a.datasets[d].data[e], o, n)
                    }

                    function e(a) {
                        return y + v * a
                    }

                    for (var h = 0; h < a.datasets.length; h++) {
                        g.strokeStyle = a.datasets[h].strokeColor, g.lineWidth = f.datasetStrokeWidth, g.beginPath(), g.moveTo(y, z - c * b(a.datasets[h].data[0], o, n));
                        for (var i = 1; i < a.datasets[h].data.length; i++)f.bezierCurve ? g.bezierCurveTo(e(i - .5), d(h, i - 1), e(i - .5), d(h, i), e(i), d(h, i)) : g.lineTo(e(i), d(h, i));
                        if (g.stroke(), f.datasetFill ? (g.lineTo(y + v * (a.datasets[h].data.length - 1), z), g.lineTo(y, z), g.closePath(), g.fillStyle = a.datasets[h].fillColor, g.fill()) : g.closePath(), f.pointDot) {
                            g.fillStyle = a.datasets[h].pointColor, g.strokeStyle = a.datasets[h].pointStrokeColor, g.lineWidth = f.pointDotStrokeWidth;
                            for (var j = 0; j < a.datasets[h].data.length; j++)g.beginPath(), g.arc(y + v * j, z - c * b(a.datasets[h].data[j], o, n), f.pointDotRadius, 0, 2 * Math.PI, !0), g.fill(), g.stroke()
                        }
                    }
                }

                function i() {
                    g.lineWidth = f.scaleLineWidth, g.strokeStyle = f.scaleLineColor, g.beginPath(), g.moveTo(p - w / 2 + 5, z), g.lineTo(p - w / 2 - x - 5, z), g.stroke(), A > 0 ? (g.save(), g.textAlign = "right") : g.textAlign = "center", g.fillStyle = f.scaleFontColor;
                    for (var b = 0; b < a.labels.length; b++)g.save(), A > 0 ? (g.translate(y + b * v, z + f.scaleFontSize), g.rotate(-(A * (Math.PI / 180))), g.fillText(a.labels[b], 0, 0), g.restore()) : g.fillText(a.labels[b], y + b * v, z + f.scaleFontSize + 3), g.beginPath(), g.moveTo(y + b * v, z + 3), f.scaleShowGridLines && b > 0 ? (g.lineWidth = f.scaleGridLineWidth, g.strokeStyle = f.scaleGridLineColor, g.lineTo(y + b * v, 5)) : g.lineTo(y + b * v, z + 3), g.stroke();
                    g.lineWidth = f.scaleLineWidth, g.strokeStyle = f.scaleLineColor, g.beginPath(), g.moveTo(y, z + 5), g.lineTo(y, 5), g.stroke(), g.textAlign = "right", g.textBaseline = "middle";
                    for (var c = 0; c < o.steps; c++)g.beginPath(), g.moveTo(y - 3, z - (c + 1) * n), f.scaleShowGridLines ? (g.lineWidth = f.scaleGridLineWidth, g.strokeStyle = f.scaleGridLineColor, g.lineTo(y + x + 5, z - (c + 1) * n)) : g.lineTo(y - .5, z - (c + 1) * n), g.stroke(), f.scaleShowLabels && g.fillText(o.labels[c], y - 8, z - (c + 1) * n)
                }

                function j() {
                    var b = 1;
                    if (f.scaleShowLabels) {
                        g.font = f.scaleFontStyle + " " + f.scaleFontSize + "px " + f.scaleFontFamily;
                        for (var c = 0; c < o.labels.length; c++) {
                            var d = g.measureText(o.labels[c]).width;
                            b = d > b ? d : b
                        }
                        b += 10
                    }
                    x = p - b - w, v = Math.floor(x / (a.labels.length - 1)), y = p - w / 2 - x, z = s + f.scaleFontSize / 2
                }

                function k() {
                    m = q, g.font = f.scaleFontStyle + " " + f.scaleFontSize + "px " + f.scaleFontFamily, w = 1;
                    for (var b = 0; b < a.labels.length; b++) {
                        var c = g.measureText(a.labels[b]).width;
                        w = c > w ? c : w
                    }
                    p / a.labels.length < w ? (A = 45, p / a.labels.length < Math.cos(A) * w ? (A = 90, m -= w) : m -= Math.sin(A) * w) : m -= f.scaleFontSize, m -= 5, r = f.scaleFontSize, m -= r, s = m
                }

                function l() {
                    for (var b = Number.MIN_VALUE, c = Number.MAX_VALUE, d = 0; d < a.datasets.length; d++)for (var e = 0; e < a.datasets[d].data.length; e++)a.datasets[d].data[e] > b && (b = a.datasets[d].data[e]), a.datasets[d].data[e] < c && (c = a.datasets[d].data[e]);
                    var f = Math.floor(s / (.66 * r)), g = Math.floor(.5 * (s / r));
                    return{maxValue: b, minValue: c, maxSteps: f, minSteps: g}
                }

                var m, n, o, r, s, t, u, v, w, x, y, z, A = 0;
                k(), t = l(), u = f.scaleShowLabels ? f.scaleLabel : "", f.scaleOverride ? (o = {steps: f.scaleSteps, stepValue: f.scaleStepWidth, graphMin: f.scaleStartValue, labels: []}, e(u, o.labels, o.steps, f.scaleStartValue, f.scaleStepWidth)) : o = d(s, t.maxSteps, t.minSteps, t.maxValue, t.minValue, u), n = Math.floor(s / o.steps), j(), c(f, i, h, g)
            }, x = function (a, f, g) {
                function h(c) {
                    g.lineWidth = f.barStrokeWidth;
                    for (var d = 0; d < a.datasets.length; d++) {
                        g.fillStyle = a.datasets[d].fillColor, g.strokeStyle = a.datasets[d].strokeColor;
                        for (var e = 0; e < a.datasets[d].data.length; e++) {
                            var h = y + f.barValueSpacing + v * e + A * d + f.barDatasetSpacing * d + f.barStrokeWidth * d;
                            g.beginPath(), g.moveTo(h, z), g.lineTo(h, z - c * b(a.datasets[d].data[e], o, n) + f.barStrokeWidth / 2), g.lineTo(h + A, z - c * b(a.datasets[d].data[e], o, n) + f.barStrokeWidth / 2), g.lineTo(h + A, z), f.barShowStroke && g.stroke(), g.closePath(), g.fill()
                        }
                    }
                }

                function i() {
                    g.lineWidth = f.scaleLineWidth, g.strokeStyle = f.scaleLineColor, g.beginPath(), g.moveTo(p - w / 2 + 5, z), g.lineTo(p - w / 2 - x - 5, z), g.stroke(), B > 0 ? (g.save(), g.textAlign = "right") : g.textAlign = "center", g.fillStyle = f.scaleFontColor;
                    for (var b = 0; b < a.labels.length; b++)g.save(), B > 0 ? (g.translate(y + b * v, z + f.scaleFontSize), g.rotate(-(B * (Math.PI / 180))), g.fillText(a.labels[b], 0, 0), g.restore()) : g.fillText(a.labels[b], y + b * v + v / 2, z + f.scaleFontSize + 3), g.beginPath(), g.moveTo(y + (b + 1) * v, z + 3), g.lineWidth = f.scaleGridLineWidth, g.strokeStyle = f.scaleGridLineColor, g.lineTo(y + (b + 1) * v, 5), g.stroke();
                    g.lineWidth = f.scaleLineWidth, g.strokeStyle = f.scaleLineColor, g.beginPath(), g.moveTo(y, z + 5), g.lineTo(y, 5), g.stroke(), g.textAlign = "right", g.textBaseline = "middle";
                    for (var c = 0; c < o.steps; c++)g.beginPath(), g.moveTo(y - 3, z - (c + 1) * n), f.scaleShowGridLines ? (g.lineWidth = f.scaleGridLineWidth, g.strokeStyle = f.scaleGridLineColor, g.lineTo(y + x + 5, z - (c + 1) * n)) : g.lineTo(y - .5, z - (c + 1) * n), g.stroke(), f.scaleShowLabels && g.fillText(o.labels[c], y - 8, z - (c + 1) * n)
                }

                function j() {
                    var b = 1;
                    if (f.scaleShowLabels) {
                        g.font = f.scaleFontStyle + " " + f.scaleFontSize + "px " + f.scaleFontFamily;
                        for (var c = 0; c < o.labels.length; c++) {
                            var d = g.measureText(o.labels[c]).width;
                            b = d > b ? d : b
                        }
                        b += 10
                    }
                    x = p - b - w, v = Math.floor(x / a.labels.length), A = (v - 2 * f.scaleGridLineWidth - 2 * f.barValueSpacing - (f.barDatasetSpacing * a.datasets.length - 1) - (f.barStrokeWidth / 2 * a.datasets.length - 1)) / a.datasets.length, y = p - w / 2 - x, z = s + f.scaleFontSize / 2
                }

                function k() {
                    m = q, g.font = f.scaleFontStyle + " " + f.scaleFontSize + "px " + f.scaleFontFamily, w = 1;
                    for (var b = 0; b < a.labels.length; b++) {
                        var c = g.measureText(a.labels[b]).width;
                        w = c > w ? c : w
                    }
                    p / a.labels.length < w ? (B = 45, p / a.labels.length < Math.cos(B) * w ? (B = 90, m -= w) : m -= Math.sin(B) * w) : m -= f.scaleFontSize, m -= 5, r = f.scaleFontSize, m -= r, s = m
                }

                function l() {
                    for (var b = Number.MIN_VALUE, c = Number.MAX_VALUE, d = 0; d < a.datasets.length; d++)for (var e = 0; e < a.datasets[d].data.length; e++)a.datasets[d].data[e] > b && (b = a.datasets[d].data[e]), a.datasets[d].data[e] < c && (c = a.datasets[d].data[e]);
                    var f = Math.floor(s / (.66 * r)), g = Math.floor(.5 * (s / r));
                    return{maxValue: b, minValue: c, maxSteps: f, minSteps: g}
                }

                var m, n, o, r, s, t, u, v, w, x, y, z, A, B = 0;
                k(), t = l(), u = f.scaleShowLabels ? f.scaleLabel : "", f.scaleOverride ? (o = {steps: f.scaleSteps, stepValue: f.scaleStepWidth, graphMin: f.scaleStartValue, labels: []}, e(u, o.labels, o.steps, f.scaleStartValue, f.scaleStepWidth)) : o = d(s, t.maxSteps, t.minSteps, t.maxValue, t.minValue, u), n = Math.floor(s / o.steps), j(), c(f, i, h, g)
            }, y = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
                    window.setTimeout(a, 1e3 / 60)
                }
            }(), z = {}
        };
        return{chart: function (b) {
            return new a(b)
        }}
    }
}), angular.module("ui.widgets.chart", ["utils.chart"]).directive("chart", ["Chart", "$document", function (a, b) {
    return{restrict: "A", scope: {data: "=", type: "@", options: "=", id: "@"}, link: function (c, d, e) {
        e.autoWidth && d.attr("width", b[0].width - 20);
        var f = d[0].getContext("2d"), g = a.chart(f);
        c.$watch("data", function () {
            g[c.type](c.data, c.options)
        }, !0)
    }}
}]), angular.module("app.tools.daily", ["ui.widgets.chart"]).controller("DailyCtrl", ["$scope", "$navigate", function (a) {
    a.options = {animation: !1}, a.myLineChartData = {labels: ["January", "February", "March", "April", "May", "June", "July"], datasets: [
        {fillColor: "rgba(220,220,220,0.5)", strokeColor: "rgba(220,220,220,1)", pointColor: "rgba(220,220,220,1)", pointStrokeColor: "#fff", data: [65, 59, 90, 81, 56, 55, 40]},
        {fillColor: "rgba(151,187,205,0.5)", strokeColor: "rgba(151,187,205,1)", pointColor: "rgba(151,187,205,1)", pointStrokeColor: "#fff", data: [28, 48, 40, 19, 96, 27, 100]}
    ]}, a.myPolarAreaChartData = [
        {value: 30, color: "#D97041"},
        {value: 90, color: "#C7604C"},
        {value: 24, color: "#21323D"},
        {value: 58, color: "#9D9B7F"},
        {value: 82, color: "#7D4F6D"},
        {value: 8, color: "#584A5E"}
    ]
}]), angular.module("app.tools.settings", []).controller("SettingsCtrl", ["$scope", "$navigate", function () {
}]), angular.module("app.tools.notice", []).controller("NoticeCtrl", ["$scope", "$navigate", function (a, b) {
        a.noticeList = [
            {from: "教务处", title: "XXX 会议", content: "adfasdf adf asdfasfasdfasdfasdf"},
            {from: "行政处", title: "XXX 会议", content: "adfasdf adf asdfasfasdfasdfasdf"},
            {from: "学院", title: "XXX 会议", content: "adfasdf adf asdfasfasdfasdfasdf"},
            {from: "教师", title: "XXX 会议", content: "adfasdf adf asdfasfasdfasdfasdf"}
        ], a.showMoreNotice = function () {
            b.go("/notice-info")
        }
    }]).controller("NoticeInfoCtrl", ["$scope", "$navigate", function (a) {
        a.noticeList = [
            {from: "教务处", title: "XXX 会议", content: "adfasdf adf asdfasfasdfasdfasdf"},
            {from: "教务处", title: "XXX 会议", content: "adfasdf adf asdfasfasdfasdfasdf"},
            {from: "教务处", title: "XXX 会议", content: "adfasdf adf asdfasfasdfasdfasdf"},
            {from: "教务处", title: "XXX 会议", content: "adfasdf adf asdfasfasdfasdfasdf"}
        ]
    }]), angular.module("app.main", ["utils.hammer", "ui.common.lazy-compile", "utils.mobile-nav", "ui.container.drawer", "ui.container.error-alert", "app.nav.nav-left", "app.nav.nav-right", "utils.data-pool", "app.tools.logo", "app.tools.home", "app.tools.demo", "app.tools.news", "app.tools.map", "app.tools.calendar", "app.tools.daily", "app.tools.settings", "app.tools.notice"]).constant("serverUrl", {ws: "ws://42.96.185.197:8075/websocket", http: "http://42.96.185.197:8080/mobilecampus/", aliUrl: "http://mobilecampus.oss.aliyuncs.com/", token: "327303566_hyJcb2OsmWilSWQdxcEs3ZN1jlNca5CvbElk3cXOL9Jkaompj2lvbklk3cXzL9Jsb2ipblupbWUdxcEzNzgyNTj2NzgIN8gs3ZGpn2txnW1l3cXd3dwdjZCsmS36MSwdioNljklk3cX1NdwdioNljkGebWUdxd3wMc3HMTE1MyJC"}).constant("toolList", [
        {name: "启动页", path: "/", templateUrl: "partials/tools/logo.html", controller: "LogoCtrl"},
        {name: "智慧校园", path: "/home", templateUrl: "partials/tools/home.html", transition: "modal", controller: "HomeCtrl"},
        {name: "新闻会议", navList: "home", icon: "home-icon-news", path: "/news", templateUrl: "partials/tools/news.html", controller: "NewsCtrl"},
        {name: "新闻详情", path: "/news-info", templateUrl: "partials/tools/news-info.html", controller: "NewsInfoCtrl"},
        {name: "校情展示", navList: "home", icon: "home-icon-school", path: "/school", templateUrl: "partials/tools/loginPage.html", controller: "DemoCtrl"},
        {name: "巴士搜索", navList: "home", icon: "home-icon-bus", path: "/bus", templateUrl: "partials/tools/demo.html", controller: "DemoCtrl"},
        {name: "地图搜索", navList: "home", icon: "home-icon-map", path: "/map", templateUrl: "partials/tools/map.html", controller: "MapCtrl"},
        {name: "日程课表", navList: "home", icon: "home-icon-timetable", path: "/calendar", templateUrl: "partials/tools/calendar.html", controller: "CalendarCtrl"},
        {name: "日常工作", navList: "home", icon: "home-icon-daily", path: "/daily", templateUrl: "partials/tools/daily.html", controller: "DailyCtrl"},
        {name: "招生就业", navList: "home", icon: "home-icon-job", path: "/job", templateUrl: "partials/tools/demo.html", controller: "DemoCtrl"},
        {name: "校园网", navList: "home", icon: "home-icon-wifi", path: "/wifi", templateUrl: "partials/tools/demo.html", controller: "DemoCtrl"},
        {name: "设置", navList: "left", path: "/settings", templateUrl: "partials/tools/settings.html", controller: "SettingsCtrl"},
        {name: "通知", path: "/notice", templateUrl: "partials/tools/notice.html", controller: "NoticeCtrl"},
        {name: "通知列表", path: "/notice-info", templateUrl: "partials/tools/notice-info.html", controller: "NoticeInfoCtrl"}
    ]).config(["$routeProvider", "toolList", function (a, b) {
        for (var c, d = b.length; d--;)c = b[d], a.when(c.path, c)
    }]).run(["$route", "$http", "$templateCache", function (a, b, c) {
        angular.forEach(a.routes, function (a) {
            a.templateUrl && b.get(a.templateUrl, {cache: c})
        })
    }]).controller("MainCtrl", ["$scope", "$rootScope", "$navigate", "$location", function (a, b, c) {
        a.$navigate = c, a.goLastPath = function () {
            c.go("/news")
        }, a.toggleDrawerLeft = function () {
            a.$emit("toggleDrawerLeft")
        }, a.toggleDrawerRight = function () {
            a.$emit("toggleDrawerRight")
        }, a.showError = function (b) {
            a.$emit("showErrorAlert", {content: b})
        }, b.$on("$routeChangeSuccess", function (b, c) {
            a.pageHeading = c.name
        })
    }]), angular.bootstrap(window.document, ["amu"]);