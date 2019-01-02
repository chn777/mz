if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LinkedDocTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LinkedDocTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LinkedDocTypeEnum.prototype.constructor = SAPB1.LinkedDocTypeEnum;
SAPB1.LinkedDocTypeEnum.ldtEmptyLink = new SAPB1.LinkedDocTypeEnum('ldtEmptyLink', 'ldtEmptyLink');
SAPB1.LinkedDocTypeEnum.ldtSalesOpportunitiesLink = new SAPB1.LinkedDocTypeEnum('ldtSalesOpportunitiesLink', 'ldtSalesOpportunitiesLink');
SAPB1.LinkedDocTypeEnum.ldtDeliveriesLink = new SAPB1.LinkedDocTypeEnum('ldtDeliveriesLink', 'ldtDeliveriesLink');
SAPB1.LinkedDocTypeEnum.ldtSalesQuotationsLink = new SAPB1.LinkedDocTypeEnum('ldtSalesQuotationsLink', 'ldtSalesQuotationsLink');
SAPB1.LinkedDocTypeEnum.ldtSalesOrdersLink = new SAPB1.LinkedDocTypeEnum('ldtSalesOrdersLink', 'ldtSalesOrdersLink');
SAPB1.LinkedDocTypeEnum.ldtARInvoicesLink = new SAPB1.LinkedDocTypeEnum('ldtARInvoicesLink', 'ldtARInvoicesLink');

module.exports = SAPB1.LinkedDocTypeEnum;
