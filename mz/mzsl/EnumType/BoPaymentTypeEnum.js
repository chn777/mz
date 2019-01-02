if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPaymentTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPaymentTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPaymentTypeEnum.prototype.constructor = SAPB1.BoPaymentTypeEnum;
SAPB1.BoPaymentTypeEnum.boptIncoming = new SAPB1.BoPaymentTypeEnum('boptIncoming', 'boptIncoming');
SAPB1.BoPaymentTypeEnum.boptOutgoing = new SAPB1.BoPaymentTypeEnum('boptOutgoing', 'boptOutgoing');

module.exports = SAPB1.BoPaymentTypeEnum;
