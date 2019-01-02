if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoExpenseOperationTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoExpenseOperationTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoExpenseOperationTypeEnum.prototype.constructor = SAPB1.BoExpenseOperationTypeEnum;
SAPB1.BoExpenseOperationTypeEnum.bo_ExpOpType_Others = new SAPB1.BoExpenseOperationTypeEnum('bo_ExpOpType_Others', 'bo_ExpOpType_Others');
SAPB1.BoExpenseOperationTypeEnum.bo_ExpOpType_None = new SAPB1.BoExpenseOperationTypeEnum('bo_ExpOpType_None', 'bo_ExpOpType_None');
SAPB1.BoExpenseOperationTypeEnum.bo_ExpOpType_ProfessionalServices = new SAPB1.BoExpenseOperationTypeEnum('bo_ExpOpType_ProfessionalServices', 'bo_ExpOpType_ProfessionalServices');
SAPB1.BoExpenseOperationTypeEnum.bo_ExpOpType_RentingAssets = new SAPB1.BoExpenseOperationTypeEnum('bo_ExpOpType_RentingAssets', 'bo_ExpOpType_RentingAssets');

module.exports = SAPB1.BoExpenseOperationTypeEnum;
