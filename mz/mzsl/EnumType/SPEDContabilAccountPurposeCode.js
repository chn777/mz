if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SPEDContabilAccountPurposeCode = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SPEDContabilAccountPurposeCode.prototype = SAPB1.EnumBase.prototype;
SAPB1.SPEDContabilAccountPurposeCode.prototype.constructor = SAPB1.SPEDContabilAccountPurposeCode;
SAPB1.SPEDContabilAccountPurposeCode.spedContasDeResultado = new SAPB1.SPEDContabilAccountPurposeCode('spedContasDeResultado', 'spedContasDeResultado');
SAPB1.SPEDContabilAccountPurposeCode.spedOutras = new SAPB1.SPEDContabilAccountPurposeCode('spedOutras', 'spedOutras');
SAPB1.SPEDContabilAccountPurposeCode.spedPatrimonioLiquido = new SAPB1.SPEDContabilAccountPurposeCode('spedPatrimonioLiquido', 'spedPatrimonioLiquido');
SAPB1.SPEDContabilAccountPurposeCode.spedContasDePassivo = new SAPB1.SPEDContabilAccountPurposeCode('spedContasDePassivo', 'spedContasDePassivo');
SAPB1.SPEDContabilAccountPurposeCode.spedContasDeCompensacao = new SAPB1.SPEDContabilAccountPurposeCode('spedContasDeCompensacao', 'spedContasDeCompensacao');
SAPB1.SPEDContabilAccountPurposeCode.spedContasDeAtivo = new SAPB1.SPEDContabilAccountPurposeCode('spedContasDeAtivo', 'spedContasDeAtivo');

module.exports = SAPB1.SPEDContabilAccountPurposeCode;
