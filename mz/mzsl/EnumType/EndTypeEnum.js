if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EndTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EndTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EndTypeEnum.prototype.constructor = SAPB1.EndTypeEnum;
SAPB1.EndTypeEnum.etByCounter = new SAPB1.EndTypeEnum('etByCounter', 'etByCounter');
SAPB1.EndTypeEnum.etByDate = new SAPB1.EndTypeEnum('etByDate', 'etByDate');
SAPB1.EndTypeEnum.etNoEndDate = new SAPB1.EndTypeEnum('etNoEndDate', 'etNoEndDate');

module.exports = SAPB1.EndTypeEnum;
