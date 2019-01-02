if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PMCategorizeTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PMCategorizeTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PMCategorizeTypeEnum.prototype.constructor = SAPB1.PMCategorizeTypeEnum;
SAPB1.PMCategorizeTypeEnum.pm_cat_OpenAmountAR = new SAPB1.PMCategorizeTypeEnum('pm_cat_OpenAmountAR', 'pm_cat_OpenAmountAR');
SAPB1.PMCategorizeTypeEnum.pm_cat_OpenAmountAP = new SAPB1.PMCategorizeTypeEnum('pm_cat_OpenAmountAP', 'pm_cat_OpenAmountAP');
SAPB1.PMCategorizeTypeEnum.pm_cat_InvoicedAR = new SAPB1.PMCategorizeTypeEnum('pm_cat_InvoicedAR', 'pm_cat_InvoicedAR');
SAPB1.PMCategorizeTypeEnum.pm_cat_InvoicedAP = new SAPB1.PMCategorizeTypeEnum('pm_cat_InvoicedAP', 'pm_cat_InvoicedAP');
SAPB1.PMCategorizeTypeEnum.pm_cat_Ignore = new SAPB1.PMCategorizeTypeEnum('pm_cat_Ignore', 'pm_cat_Ignore');

module.exports = SAPB1.PMCategorizeTypeEnum;
