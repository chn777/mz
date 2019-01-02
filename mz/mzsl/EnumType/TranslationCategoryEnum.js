if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TranslationCategoryEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TranslationCategoryEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TranslationCategoryEnum.prototype.constructor = SAPB1.TranslationCategoryEnum;
SAPB1.TranslationCategoryEnum.asCRReport = new SAPB1.TranslationCategoryEnum('asCRReport', 'asCRReport');
SAPB1.TranslationCategoryEnum.asEFMItem = new SAPB1.TranslationCategoryEnum('asEFMItem', 'asEFMItem');
SAPB1.TranslationCategoryEnum.asMenuItem = new SAPB1.TranslationCategoryEnum('asMenuItem', 'asMenuItem');

module.exports = SAPB1.TranslationCategoryEnum;
