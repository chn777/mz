if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CountingDocumentStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CountingDocumentStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CountingDocumentStatusEnum.prototype.constructor = SAPB1.CountingDocumentStatusEnum;
SAPB1.CountingDocumentStatusEnum.cdsOpen = new SAPB1.CountingDocumentStatusEnum('cdsOpen', 'cdsOpen');
SAPB1.CountingDocumentStatusEnum.cdsClosed = new SAPB1.CountingDocumentStatusEnum('cdsClosed', 'cdsClosed');

module.exports = SAPB1.CountingDocumentStatusEnum;
