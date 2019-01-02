if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ReturnTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ReturnTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ReturnTypeEnum.prototype.constructor = SAPB1.ReturnTypeEnum;
SAPB1.ReturnTypeEnum.rt26Q = new SAPB1.ReturnTypeEnum('rt26Q', 'rt26Q');
SAPB1.ReturnTypeEnum.rt27Q = new SAPB1.ReturnTypeEnum('rt27Q', 'rt27Q');

module.exports = SAPB1.ReturnTypeEnum;
