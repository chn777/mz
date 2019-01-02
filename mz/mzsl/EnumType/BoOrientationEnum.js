if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoOrientationEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoOrientationEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoOrientationEnum.prototype.constructor = SAPB1.BoOrientationEnum;
SAPB1.BoOrientationEnum.ortVertical = new SAPB1.BoOrientationEnum('ortVertical', 'ortVertical');
SAPB1.BoOrientationEnum.ortHorizontal = new SAPB1.BoOrientationEnum('ortHorizontal', 'ortHorizontal');

module.exports = SAPB1.BoOrientationEnum;
