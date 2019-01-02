if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ContractSequenceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ContractSequenceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ContractSequenceEnum.prototype.constructor = SAPB1.ContractSequenceEnum;
SAPB1.ContractSequenceEnum.cs_Quarterly = new SAPB1.ContractSequenceEnum('cs_Quarterly', 'cs_Quarterly');
SAPB1.ContractSequenceEnum.cs_Yearly = new SAPB1.ContractSequenceEnum('cs_Yearly', 'cs_Yearly');
SAPB1.ContractSequenceEnum.cs_SemiAnnually = new SAPB1.ContractSequenceEnum('cs_SemiAnnually', 'cs_SemiAnnually');
SAPB1.ContractSequenceEnum.cs_Monthly = new SAPB1.ContractSequenceEnum('cs_Monthly', 'cs_Monthly');

module.exports = SAPB1.ContractSequenceEnum;
