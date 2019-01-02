if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DisplayBatchQtyUoMByEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DisplayBatchQtyUoMByEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DisplayBatchQtyUoMByEnum.prototype.constructor = SAPB1.DisplayBatchQtyUoMByEnum;
SAPB1.DisplayBatchQtyUoMByEnum.dispBatchQtyByDocRowUoM = new SAPB1.DisplayBatchQtyUoMByEnum('dispBatchQtyByDocRowUoM', 'dispBatchQtyByDocRowUoM');
SAPB1.DisplayBatchQtyUoMByEnum.dispBatchQtyByInventoryUoM = new SAPB1.DisplayBatchQtyUoMByEnum('dispBatchQtyByInventoryUoM', 'dispBatchQtyByInventoryUoM');

module.exports = SAPB1.DisplayBatchQtyUoMByEnum;
