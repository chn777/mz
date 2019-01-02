if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.StockTransferAuthorizationStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.StockTransferAuthorizationStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.StockTransferAuthorizationStatusEnum.prototype.constructor = SAPB1.StockTransferAuthorizationStatusEnum;
SAPB1.StockTransferAuthorizationStatusEnum.sasRejected = new SAPB1.StockTransferAuthorizationStatusEnum('sasRejected', 'sasRejected');
SAPB1.StockTransferAuthorizationStatusEnum.sasApproved = new SAPB1.StockTransferAuthorizationStatusEnum('sasApproved', 'sasApproved');
SAPB1.StockTransferAuthorizationStatusEnum.sasCancelled = new SAPB1.StockTransferAuthorizationStatusEnum('sasCancelled', 'sasCancelled');
SAPB1.StockTransferAuthorizationStatusEnum.sasWithout = new SAPB1.StockTransferAuthorizationStatusEnum('sasWithout', 'sasWithout');
SAPB1.StockTransferAuthorizationStatusEnum.sasGeneratedbyAuthorizer = new SAPB1.StockTransferAuthorizationStatusEnum('sasGeneratedbyAuthorizer', 'sasGeneratedbyAuthorizer');
SAPB1.StockTransferAuthorizationStatusEnum.sasGenerated = new SAPB1.StockTransferAuthorizationStatusEnum('sasGenerated', 'sasGenerated');
SAPB1.StockTransferAuthorizationStatusEnum.sasPending = new SAPB1.StockTransferAuthorizationStatusEnum('sasPending', 'sasPending');

module.exports = SAPB1.StockTransferAuthorizationStatusEnum;
