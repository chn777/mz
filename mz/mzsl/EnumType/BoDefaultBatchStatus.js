if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDefaultBatchStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDefaultBatchStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDefaultBatchStatus.prototype.constructor = SAPB1.BoDefaultBatchStatus;
SAPB1.BoDefaultBatchStatus.dbs_Locked = new SAPB1.BoDefaultBatchStatus('dbs_Locked', 'dbs_Locked');
SAPB1.BoDefaultBatchStatus.dbs_NotAccessible = new SAPB1.BoDefaultBatchStatus('dbs_NotAccessible', 'dbs_NotAccessible');
SAPB1.BoDefaultBatchStatus.dbs_Released = new SAPB1.BoDefaultBatchStatus('dbs_Released', 'dbs_Released');

module.exports = SAPB1.BoDefaultBatchStatus;
