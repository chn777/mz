if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDocWhsUpdateTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDocWhsUpdateTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDocWhsUpdateTypes.prototype.constructor = SAPB1.BoDocWhsUpdateTypes;
SAPB1.BoDocWhsUpdateTypes.dwh_CustomerOrders = new SAPB1.BoDocWhsUpdateTypes('dwh_CustomerOrders', 'dwh_CustomerOrders');
SAPB1.BoDocWhsUpdateTypes.dwh_No = new SAPB1.BoDocWhsUpdateTypes('dwh_No', 'dwh_No');
SAPB1.BoDocWhsUpdateTypes.dwh_Consignment = new SAPB1.BoDocWhsUpdateTypes('dwh_Consignment', 'dwh_Consignment');
SAPB1.BoDocWhsUpdateTypes.dwh_OrdersFromVendors = new SAPB1.BoDocWhsUpdateTypes('dwh_OrdersFromVendors', 'dwh_OrdersFromVendors');
SAPB1.BoDocWhsUpdateTypes.dwh_Stock = new SAPB1.BoDocWhsUpdateTypes('dwh_Stock', 'dwh_Stock');

module.exports = SAPB1.BoDocWhsUpdateTypes;
