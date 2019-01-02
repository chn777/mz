if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ElecCommStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ElecCommStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ElecCommStatusEnum.prototype.constructor = SAPB1.ElecCommStatusEnum;
SAPB1.ElecCommStatusEnum.ecsApproved = new SAPB1.ElecCommStatusEnum('ecsApproved', 'ecsApproved');
SAPB1.ElecCommStatusEnum.ecsRejected = new SAPB1.ElecCommStatusEnum('ecsRejected', 'ecsRejected');
SAPB1.ElecCommStatusEnum.ecsPendingApproval = new SAPB1.ElecCommStatusEnum('ecsPendingApproval', 'ecsPendingApproval');

module.exports = SAPB1.ElecCommStatusEnum;
