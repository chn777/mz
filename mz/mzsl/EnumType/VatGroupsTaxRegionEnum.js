if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.VatGroupsTaxRegionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.VatGroupsTaxRegionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.VatGroupsTaxRegionEnum.prototype.constructor = SAPB1.VatGroupsTaxRegionEnum;
SAPB1.VatGroupsTaxRegionEnum.vgtrPT_AC = new SAPB1.VatGroupsTaxRegionEnum('vgtrPT_AC', 'vgtrPT_AC');
SAPB1.VatGroupsTaxRegionEnum.vgtrPT = new SAPB1.VatGroupsTaxRegionEnum('vgtrPT', 'vgtrPT');
SAPB1.VatGroupsTaxRegionEnum.vgtrPT_MA = new SAPB1.VatGroupsTaxRegionEnum('vgtrPT_MA', 'vgtrPT_MA');

module.exports = SAPB1.VatGroupsTaxRegionEnum;
