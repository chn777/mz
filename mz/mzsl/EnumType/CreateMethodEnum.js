if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CreateMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CreateMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CreateMethodEnum.prototype.constructor = SAPB1.CreateMethodEnum;
SAPB1.CreateMethodEnum.cmManual = new SAPB1.CreateMethodEnum('cmManual', 'cmManual');
SAPB1.CreateMethodEnum.cmAutomatic = new SAPB1.CreateMethodEnum('cmAutomatic', 'cmAutomatic');

module.exports = SAPB1.CreateMethodEnum;
