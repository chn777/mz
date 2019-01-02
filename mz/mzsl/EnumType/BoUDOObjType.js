if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoUDOObjType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoUDOObjType.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoUDOObjType.prototype.constructor = SAPB1.BoUDOObjType;
SAPB1.BoUDOObjType.boud_MasterData = new SAPB1.BoUDOObjType('boud_MasterData', 'boud_MasterData');
SAPB1.BoUDOObjType.boud_Document = new SAPB1.BoUDOObjType('boud_Document', 'boud_Document');

module.exports = SAPB1.BoUDOObjType;
