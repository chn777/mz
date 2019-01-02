if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BADocumentStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BADocumentStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BADocumentStatus.prototype.constructor = SAPB1.BADocumentStatus;
SAPB1.BADocumentStatus.bads_Closed = new SAPB1.BADocumentStatus('bads_Closed', 'bads_Closed');
SAPB1.BADocumentStatus.bads_Cancelled = new SAPB1.BADocumentStatus('bads_Cancelled', 'bads_Cancelled');
SAPB1.BADocumentStatus.bads_Open = new SAPB1.BADocumentStatus('bads_Open', 'bads_Open');

module.exports = SAPB1.BADocumentStatus;
