if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxReportFilterApArDocumentType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxReportFilterApArDocumentType.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxReportFilterApArDocumentType.prototype.constructor = SAPB1.TaxReportFilterApArDocumentType;
SAPB1.TaxReportFilterApArDocumentType.trfadt_APDocuments = new SAPB1.TaxReportFilterApArDocumentType('trfadt_APDocuments', 'trfadt_APDocuments');
SAPB1.TaxReportFilterApArDocumentType.trfadt_ARDocuments = new SAPB1.TaxReportFilterApArDocumentType('trfadt_ARDocuments', 'trfadt_ARDocuments');

module.exports = SAPB1.TaxReportFilterApArDocumentType;
