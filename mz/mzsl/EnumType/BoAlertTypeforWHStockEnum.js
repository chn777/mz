if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoAlertTypeforWHStockEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoAlertTypeforWHStockEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoAlertTypeforWHStockEnum.prototype.constructor = SAPB1.BoAlertTypeforWHStockEnum;
SAPB1.BoAlertTypeforWHStockEnum.atfwhs_WarningOnly = new SAPB1.BoAlertTypeforWHStockEnum('atfwhs_WarningOnly', 'atfwhs_WarningOnly');
SAPB1.BoAlertTypeforWHStockEnum.atfwhs_Block = new SAPB1.BoAlertTypeforWHStockEnum('atfwhs_Block', 'atfwhs_Block');
SAPB1.BoAlertTypeforWHStockEnum.atfwhs_NoMessage = new SAPB1.BoAlertTypeforWHStockEnum('atfwhs_NoMessage', 'atfwhs_NoMessage');

module.exports = SAPB1.BoAlertTypeforWHStockEnum;
