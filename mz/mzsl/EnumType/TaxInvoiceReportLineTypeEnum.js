if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxInvoiceReportLineTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxInvoiceReportLineTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxInvoiceReportLineTypeEnum.prototype.constructor = SAPB1.TaxInvoiceReportLineTypeEnum;
SAPB1.TaxInvoiceReportLineTypeEnum.LineOfBusinessPlace = new SAPB1.TaxInvoiceReportLineTypeEnum('LineOfBusinessPlace', 'LineOfBusinessPlace');
SAPB1.TaxInvoiceReportLineTypeEnum.LineOfBusinessPartner = new SAPB1.TaxInvoiceReportLineTypeEnum('LineOfBusinessPartner', 'LineOfBusinessPartner');
SAPB1.TaxInvoiceReportLineTypeEnum.LineOfItem = new SAPB1.TaxInvoiceReportLineTypeEnum('LineOfItem', 'LineOfItem');
SAPB1.TaxInvoiceReportLineTypeEnum.LineOfDocument = new SAPB1.TaxInvoiceReportLineTypeEnum('LineOfDocument', 'LineOfDocument');

module.exports = SAPB1.TaxInvoiceReportLineTypeEnum;
