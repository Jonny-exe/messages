"use strict";
exports.__esModule = true;
var Create = /** @class */ (function () {
    function Create() {
        this.create_span();
    }
    Create.prototype.create_span = function () {
        var span = document.createElement('span');
        span.innerHTML = "Comment";
    };
    return Create;
}());
exports["default"] = Create;
