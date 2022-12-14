var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//es5
function Person(id, name) {
    this.id = id;
    this.name = name;
}
Person.prototype.address = function () { };
var p = new Person(111, 'max');
console.log(p);
// ecmascript 6 specifications
var Game = /** @class */ (function () {
    function Game(id, name, multiplayer, online) {
        this.id = id;
        this.name = name;
        this.multiplayer = multiplayer;
        this.online = online;
    }
    //public is the default access specifier 
    Game.prototype.getDetails = function () {
        return "".concat(this.id, " ").concat(this.name, " ");
    };
    return Game;
}());
var destiny = new Game(111, 'Destiny', true, true);
console.log(destiny.getDetails());
var VRGame = /** @class */ (function (_super) {
    __extends(VRGame, _super);
    function VRGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disp = function () {
            console.log("".concat(_this.name));
        };
        return _this;
    }
    return VRGame;
}(Game));
var vr = new VRGame(1121, 'Minecraft', true, true);
vr.disp();
