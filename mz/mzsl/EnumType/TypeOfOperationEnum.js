if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TypeOfOperationEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TypeOfOperationEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TypeOfOperationEnum.prototype.constructor = SAPB1.TypeOfOperationEnum;
SAPB1.TypeOfOperationEnum.tooRentingAssets = new SAPB1.TypeOfOperationEnum('tooRentingAssets', 'tooRentingAssets');
SAPB1.TypeOfOperationEnum.tooProfessionalServices = new SAPB1.TypeOfOperationEnum('tooProfessionalServices', 'tooProfessionalServices');
SAPB1.TypeOfOperationEnum.tooOthers = new SAPB1.TypeOfOperationEnum('tooOthers', 'tooOthers');

module.exports = SAPB1.TypeOfOperationEnum;
