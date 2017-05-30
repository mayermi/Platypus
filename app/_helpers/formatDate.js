"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var absolute = function (date) { return moment(date).format('MMM DD, YYYY, hh:mm a'); };
var relative = function (date) { return moment(date).fromNow(); };
exports.default = {
    absolute: absolute,
    relative: relative
};
//# sourceMappingURL=formatDate.js.map