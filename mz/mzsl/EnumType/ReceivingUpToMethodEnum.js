if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ReceivingUpToMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ReceivingUpToMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ReceivingUpToMethodEnum.prototype.constructor = SAPB1.ReceivingUpToMethodEnum;
SAPB1.ReceivingUpToMethodEnum.rutmMaximumQty = new SAPB1.ReceivingUpToMethodEnum('rutmMaximumQty', 'rutmMaximumQty');
SAPB1.ReceivingUpToMethodEnum.rutmBothMaxQtyAndWeight = new SAPB1.ReceivingUpToMethodEnum('rutmBothMaxQtyAndWeight', 'rutmBothMaxQtyAndWeight');
SAPB1.ReceivingUpToMethodEnum.rutmMaximumWeight = new SAPB1.ReceivingUpToMethodEnum('rutmMaximumWeight', 'rutmMaximumWeight');

module.exports = SAPB1.ReceivingUpToMethodEnum;
