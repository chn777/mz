if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PriceModeDocumentEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PriceModeDocumentEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PriceModeDocumentEnum.prototype.constructor = SAPB1.PriceModeDocumentEnum;
SAPB1.PriceModeDocumentEnum.pmdGross = new SAPB1.PriceModeDocumentEnum('pmdGross', 'pmdGross');
SAPB1.PriceModeDocumentEnum.pmdNet = new SAPB1.PriceModeDocumentEnum('pmdNet', 'pmdNet');
SAPB1.PriceModeDocumentEnum.pmdNetAndGross = new SAPB1.PriceModeDocumentEnum('pmdNetAndGross', 'pmdNetAndGross');

module.exports = SAPB1.PriceModeDocumentEnum;
