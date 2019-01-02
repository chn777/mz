if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceTypeEnum.prototype.constructor = SAPB1.ResourceTypeEnum;
SAPB1.ResourceTypeEnum.rtOther = new SAPB1.ResourceTypeEnum('rtOther', 'rtOther');
SAPB1.ResourceTypeEnum.rtLabor = new SAPB1.ResourceTypeEnum('rtLabor', 'rtLabor');
SAPB1.ResourceTypeEnum.rtMachine = new SAPB1.ResourceTypeEnum('rtMachine', 'rtMachine');

module.exports = SAPB1.ResourceTypeEnum;
