if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDocSpecialLineType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDocSpecialLineType.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDocSpecialLineType.prototype.constructor = SAPB1.BoDocSpecialLineType;
SAPB1.BoDocSpecialLineType.dslt_Subtotal = new SAPB1.BoDocSpecialLineType('dslt_Subtotal', 'dslt_Subtotal');
SAPB1.BoDocSpecialLineType.dslt_Text = new SAPB1.BoDocSpecialLineType('dslt_Text', 'dslt_Text');

module.exports = SAPB1.BoDocSpecialLineType;
