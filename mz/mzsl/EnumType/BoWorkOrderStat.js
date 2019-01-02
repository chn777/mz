if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoWorkOrderStat = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoWorkOrderStat.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoWorkOrderStat.prototype.constructor = SAPB1.BoWorkOrderStat;
SAPB1.BoWorkOrderStat.wk_ProductComplete = new SAPB1.BoWorkOrderStat('wk_ProductComplete', 'wk_ProductComplete');
SAPB1.BoWorkOrderStat.wk_WorkOrder = new SAPB1.BoWorkOrderStat('wk_WorkOrder', 'wk_WorkOrder');
SAPB1.BoWorkOrderStat.wk_WorkInstruction = new SAPB1.BoWorkOrderStat('wk_WorkInstruction', 'wk_WorkInstruction');

module.exports = SAPB1.BoWorkOrderStat;
