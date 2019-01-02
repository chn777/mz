if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPermission = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPermission.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPermission.prototype.constructor = SAPB1.BoPermission;
SAPB1.BoPermission.boper_ReadOnly = new SAPB1.BoPermission('boper_ReadOnly', 'boper_ReadOnly');
SAPB1.BoPermission.boper_Full = new SAPB1.BoPermission('boper_Full', 'boper_Full');
SAPB1.BoPermission.boper_Various = new SAPB1.BoPermission('boper_Various', 'boper_Various');
SAPB1.BoPermission.boper_None = new SAPB1.BoPermission('boper_None', 'boper_None');
SAPB1.BoPermission.boper_Undefined = new SAPB1.BoPermission('boper_Undefined', 'boper_Undefined');

module.exports = SAPB1.BoPermission;
