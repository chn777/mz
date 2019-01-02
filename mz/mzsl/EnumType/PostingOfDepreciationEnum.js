if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PostingOfDepreciationEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PostingOfDepreciationEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PostingOfDepreciationEnum.prototype.constructor = SAPB1.PostingOfDepreciationEnum;
SAPB1.PostingOfDepreciationEnum.podIndirectPosting = new SAPB1.PostingOfDepreciationEnum('podIndirectPosting', 'podIndirectPosting');
SAPB1.PostingOfDepreciationEnum.podDirectPosting = new SAPB1.PostingOfDepreciationEnum('podDirectPosting', 'podDirectPosting');

module.exports = SAPB1.PostingOfDepreciationEnum;
