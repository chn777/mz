if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoManageMethod = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoManageMethod.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoManageMethod.prototype.constructor = SAPB1.BoManageMethod;
SAPB1.BoManageMethod.bomm_OnEveryTransaction = new SAPB1.BoManageMethod('bomm_OnEveryTransaction', 'bomm_OnEveryTransaction');
SAPB1.BoManageMethod.bomm_OnReleaseOnly = new SAPB1.BoManageMethod('bomm_OnReleaseOnly', 'bomm_OnReleaseOnly');

module.exports = SAPB1.BoManageMethod;
