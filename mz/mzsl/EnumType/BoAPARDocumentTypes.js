if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoAPARDocumentTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoAPARDocumentTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoAPARDocumentTypes.prototype.constructor = SAPB1.BoAPARDocumentTypes;
SAPB1.BoAPARDocumentTypes.bodt_DeliveryNote = new SAPB1.BoAPARDocumentTypes('bodt_DeliveryNote', 'bodt_DeliveryNote');
SAPB1.BoAPARDocumentTypes.bodt_PurchaseOrder = new SAPB1.BoAPARDocumentTypes('bodt_PurchaseOrder', 'bodt_PurchaseOrder');
SAPB1.BoAPARDocumentTypes.bodt_CorrectionAPInvoice = new SAPB1.BoAPARDocumentTypes('bodt_CorrectionAPInvoice', 'bodt_CorrectionAPInvoice');
SAPB1.BoAPARDocumentTypes.bodt_PurchaseQutation = new SAPB1.BoAPARDocumentTypes('bodt_PurchaseQutation', 'bodt_PurchaseQutation');
SAPB1.BoAPARDocumentTypes.bodt_Quotation = new SAPB1.BoAPARDocumentTypes('bodt_Quotation', 'bodt_Quotation');
SAPB1.BoAPARDocumentTypes.bodt_CreditNote = new SAPB1.BoAPARDocumentTypes('bodt_CreditNote', 'bodt_CreditNote');
SAPB1.BoAPARDocumentTypes.bodt_PurchaseCreditNote = new SAPB1.BoAPARDocumentTypes('bodt_PurchaseCreditNote', 'bodt_PurchaseCreditNote');
SAPB1.BoAPARDocumentTypes.bodt_MinusOne = new SAPB1.BoAPARDocumentTypes('bodt_MinusOne', 'bodt_MinusOne');
SAPB1.BoAPARDocumentTypes.bodt_PurchaseInvoice = new SAPB1.BoAPARDocumentTypes('bodt_PurchaseInvoice', 'bodt_PurchaseInvoice');
SAPB1.BoAPARDocumentTypes.bodt_PurchaseDeliveryNote = new SAPB1.BoAPARDocumentTypes('bodt_PurchaseDeliveryNote', 'bodt_PurchaseDeliveryNote');
SAPB1.BoAPARDocumentTypes.bodt_Invoice = new SAPB1.BoAPARDocumentTypes('bodt_Invoice', 'bodt_Invoice');
SAPB1.BoAPARDocumentTypes.bodt_Order = new SAPB1.BoAPARDocumentTypes('bodt_Order', 'bodt_Order');
SAPB1.BoAPARDocumentTypes.bodt_Zero = new SAPB1.BoAPARDocumentTypes('bodt_Zero', 'bodt_Zero');
SAPB1.BoAPARDocumentTypes.bodt_PurchaseReturn = new SAPB1.BoAPARDocumentTypes('bodt_PurchaseReturn', 'bodt_PurchaseReturn');
SAPB1.BoAPARDocumentTypes.bodt_Return = new SAPB1.BoAPARDocumentTypes('bodt_Return', 'bodt_Return');
SAPB1.BoAPARDocumentTypes.bodt_CorrectionARInvoice = new SAPB1.BoAPARDocumentTypes('bodt_CorrectionARInvoice', 'bodt_CorrectionARInvoice');

module.exports = SAPB1.BoAPARDocumentTypes;
