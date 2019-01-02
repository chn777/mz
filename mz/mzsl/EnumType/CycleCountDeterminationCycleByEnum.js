if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CycleCountDeterminationCycleByEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CycleCountDeterminationCycleByEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CycleCountDeterminationCycleByEnum.prototype.constructor = SAPB1.CycleCountDeterminationCycleByEnum;
SAPB1.CycleCountDeterminationCycleByEnum.ccdcbWarehouseSublevel1 = new SAPB1.CycleCountDeterminationCycleByEnum('ccdcbWarehouseSublevel1', 'ccdcbWarehouseSublevel1');
SAPB1.CycleCountDeterminationCycleByEnum.ccdcbWarehouseSublevel3 = new SAPB1.CycleCountDeterminationCycleByEnum('ccdcbWarehouseSublevel3', 'ccdcbWarehouseSublevel3');
SAPB1.CycleCountDeterminationCycleByEnum.ccdcbWarehouseSublevel2 = new SAPB1.CycleCountDeterminationCycleByEnum('ccdcbWarehouseSublevel2', 'ccdcbWarehouseSublevel2');
SAPB1.CycleCountDeterminationCycleByEnum.ccdcbWarehouseSublevel4 = new SAPB1.CycleCountDeterminationCycleByEnum('ccdcbWarehouseSublevel4', 'ccdcbWarehouseSublevel4');
SAPB1.CycleCountDeterminationCycleByEnum.ccdcbItemGroup = new SAPB1.CycleCountDeterminationCycleByEnum('ccdcbItemGroup', 'ccdcbItemGroup');

module.exports = SAPB1.CycleCountDeterminationCycleByEnum;
