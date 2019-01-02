if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoUTBTableType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoUTBTableType.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoUTBTableType.prototype.constructor = SAPB1.BoUTBTableType;
SAPB1.BoUTBTableType.bott_DocumentLines = new SAPB1.BoUTBTableType('bott_DocumentLines', 'bott_DocumentLines');
SAPB1.BoUTBTableType.bott_MasterDataLines = new SAPB1.BoUTBTableType('bott_MasterDataLines', 'bott_MasterDataLines');
SAPB1.BoUTBTableType.bott_NoObject = new SAPB1.BoUTBTableType('bott_NoObject', 'bott_NoObject');
SAPB1.BoUTBTableType.bott_NoObjectAutoIncrement = new SAPB1.BoUTBTableType('bott_NoObjectAutoIncrement', 'bott_NoObjectAutoIncrement');
SAPB1.BoUTBTableType.bott_MasterData = new SAPB1.BoUTBTableType('bott_MasterData', 'bott_MasterData');
SAPB1.BoUTBTableType.bott_Document = new SAPB1.BoUTBTableType('bott_Document', 'bott_Document');

module.exports = SAPB1.BoUTBTableType;
