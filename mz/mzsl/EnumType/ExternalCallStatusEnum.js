if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ExternalCallStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ExternalCallStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ExternalCallStatusEnum.prototype.constructor = SAPB1.ExternalCallStatusEnum;
SAPB1.ExternalCallStatusEnum.ecsConfirmed = new SAPB1.ExternalCallStatusEnum('ecsConfirmed', 'ecsConfirmed');
SAPB1.ExternalCallStatusEnum.ecsNew = new SAPB1.ExternalCallStatusEnum('ecsNew', 'ecsNew');
SAPB1.ExternalCallStatusEnum.ecsInProcess = new SAPB1.ExternalCallStatusEnum('ecsInProcess', 'ecsInProcess');
SAPB1.ExternalCallStatusEnum.ecsCompleted = new SAPB1.ExternalCallStatusEnum('ecsCompleted', 'ecsCompleted');
SAPB1.ExternalCallStatusEnum.ecsFailed = new SAPB1.ExternalCallStatusEnum('ecsFailed', 'ecsFailed');

module.exports = SAPB1.ExternalCallStatusEnum;
