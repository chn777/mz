if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDataSourceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDataSourceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDataSourceEnum.prototype.constructor = SAPB1.BoDataSourceEnum;
SAPB1.BoDataSourceEnum.rldsFormula = new SAPB1.BoDataSourceEnum('rldsFormula', 'rldsFormula');
SAPB1.BoDataSourceEnum.rldsSystemVariable = new SAPB1.BoDataSourceEnum('rldsSystemVariable', 'rldsSystemVariable');
SAPB1.BoDataSourceEnum.rldsFreeText = new SAPB1.BoDataSourceEnum('rldsFreeText', 'rldsFreeText');
SAPB1.BoDataSourceEnum.rldsDatabase = new SAPB1.BoDataSourceEnum('rldsDatabase', 'rldsDatabase');

module.exports = SAPB1.BoDataSourceEnum;
