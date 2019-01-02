if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoYesNoEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoYesNoEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoYesNoEnum.prototype.constructor = SAPB1.BoYesNoEnum;
SAPB1.BoYesNoEnum.tNO = new SAPB1.BoYesNoEnum('tNO', 'tNO');
SAPB1.BoYesNoEnum.tYES = new SAPB1.BoYesNoEnum('tYES', 'tYES');

module.exports = SAPB1.BoYesNoEnum;
