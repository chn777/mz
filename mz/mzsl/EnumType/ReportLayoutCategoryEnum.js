if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ReportLayoutCategoryEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ReportLayoutCategoryEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ReportLayoutCategoryEnum.prototype.constructor = SAPB1.ReportLayoutCategoryEnum;
SAPB1.ReportLayoutCategoryEnum.rlcUserDefinedType = new SAPB1.ReportLayoutCategoryEnum('rlcUserDefinedType', 'rlcUserDefinedType');
SAPB1.ReportLayoutCategoryEnum.rlcPLD = new SAPB1.ReportLayoutCategoryEnum('rlcPLD', 'rlcPLD');
SAPB1.ReportLayoutCategoryEnum.rlcCrystal = new SAPB1.ReportLayoutCategoryEnum('rlcCrystal', 'rlcCrystal');
SAPB1.ReportLayoutCategoryEnum.rlcLegalList = new SAPB1.ReportLayoutCategoryEnum('rlcLegalList', 'rlcLegalList');

module.exports = SAPB1.ReportLayoutCategoryEnum;
