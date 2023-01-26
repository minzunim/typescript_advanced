"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Direction = exports.Color = void 0;
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color = exports.Color || (exports.Color = {}));
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction = exports.Direction || (exports.Direction = {}));
var Status;
(function (Status) {
    Status["Initiated"] = "Initiated";
    Status["Pending"] = "Pending";
    Status["Shipped"] = "Shipped";
    Status["Delivered"] = "Delivered";
})(Status = exports.Status || (exports.Status = {}));
