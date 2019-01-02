if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.VMCommunicationTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.VMCommunicationTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.VMCommunicationTypeEnum.prototype.constructor = SAPB1.VMCommunicationTypeEnum;
SAPB1.VMCommunicationTypeEnum.vmct_Transaction = new SAPB1.VMCommunicationTypeEnum('vmct_Transaction', 'vmct_Transaction');
SAPB1.VMCommunicationTypeEnum.vmct_MasterData = new SAPB1.VMCommunicationTypeEnum('vmct_MasterData', 'vmct_MasterData');

module.exports = SAPB1.VMCommunicationTypeEnum;
