if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDepositPostingTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDepositPostingTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDepositPostingTypes.prototype.constructor = SAPB1.BoDepositPostingTypes;
SAPB1.BoDepositPostingTypes.dpt_Discounted = new SAPB1.BoDepositPostingTypes('dpt_Discounted', 'dpt_Discounted');
SAPB1.BoDepositPostingTypes.dpt_Collection = new SAPB1.BoDepositPostingTypes('dpt_Collection', 'dpt_Collection');

module.exports = SAPB1.BoDepositPostingTypes;
