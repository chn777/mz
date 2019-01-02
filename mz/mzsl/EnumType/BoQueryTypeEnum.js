if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoQueryTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoQueryTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoQueryTypeEnum.prototype.constructor = SAPB1.BoQueryTypeEnum;
SAPB1.BoQueryTypeEnum.qtRegular = new SAPB1.BoQueryTypeEnum('qtRegular', 'qtRegular');
SAPB1.BoQueryTypeEnum.qtWizard = new SAPB1.BoQueryTypeEnum('qtWizard', 'qtWizard');

module.exports = SAPB1.BoQueryTypeEnum;
