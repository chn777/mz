if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.OperationCode347Enum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.OperationCode347Enum.prototype = SAPB1.EnumBase.prototype;
SAPB1.OperationCode347Enum.prototype.constructor = SAPB1.OperationCode347Enum;
SAPB1.OperationCode347Enum.ocPublicEntitiesAcquisitions = new SAPB1.OperationCode347Enum('ocPublicEntitiesAcquisitions', 'ocPublicEntitiesAcquisitions');
SAPB1.OperationCode347Enum.ocPublicSubsidies = new SAPB1.OperationCode347Enum('ocPublicSubsidies', 'ocPublicSubsidies');
SAPB1.OperationCode347Enum.ocTravelAgenciesSales = new SAPB1.OperationCode347Enum('ocTravelAgenciesSales', 'ocTravelAgenciesSales');
SAPB1.OperationCode347Enum.ocGoodsOrServiciesAcquisitions = new SAPB1.OperationCode347Enum('ocGoodsOrServiciesAcquisitions', 'ocGoodsOrServiciesAcquisitions');
SAPB1.OperationCode347Enum.ocTravelAgenciesPurchases = new SAPB1.OperationCode347Enum('ocTravelAgenciesPurchases', 'ocTravelAgenciesPurchases');
SAPB1.OperationCode347Enum.ocSalesOrServicesRevenues = new SAPB1.OperationCode347Enum('ocSalesOrServicesRevenues', 'ocSalesOrServicesRevenues');

module.exports = SAPB1.OperationCode347Enum;
