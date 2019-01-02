if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.GSTTaxCategoryEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.GSTTaxCategoryEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.GSTTaxCategoryEnum.prototype.constructor = SAPB1.GSTTaxCategoryEnum;
SAPB1.GSTTaxCategoryEnum.gtc_NilRated = new SAPB1.GSTTaxCategoryEnum('gtc_NilRated', 'gtc_NilRated');
SAPB1.GSTTaxCategoryEnum.gtc_Exempt = new SAPB1.GSTTaxCategoryEnum('gtc_Exempt', 'gtc_Exempt');
SAPB1.GSTTaxCategoryEnum.gtc_Regular = new SAPB1.GSTTaxCategoryEnum('gtc_Regular', 'gtc_Regular');

module.exports = SAPB1.GSTTaxCategoryEnum;
