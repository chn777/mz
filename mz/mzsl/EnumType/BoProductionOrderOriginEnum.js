if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoProductionOrderOriginEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoProductionOrderOriginEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoProductionOrderOriginEnum.prototype.constructor = SAPB1.BoProductionOrderOriginEnum;
SAPB1.BoProductionOrderOriginEnum.bopooManual = new SAPB1.BoProductionOrderOriginEnum('bopooManual', 'bopooManual');
SAPB1.BoProductionOrderOriginEnum.bopooMRP = new SAPB1.BoProductionOrderOriginEnum('bopooMRP', 'bopooMRP');
SAPB1.BoProductionOrderOriginEnum.bopooSalesOrder = new SAPB1.BoProductionOrderOriginEnum('bopooSalesOrder', 'bopooSalesOrder');

module.exports = SAPB1.BoProductionOrderOriginEnum;
