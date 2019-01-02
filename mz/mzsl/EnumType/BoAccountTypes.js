if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoAccountTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoAccountTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoAccountTypes.prototype.constructor = SAPB1.BoAccountTypes;
SAPB1.BoAccountTypes.at_Other = new SAPB1.BoAccountTypes('at_Other', 'at_Other');
SAPB1.BoAccountTypes.at_Expenses = new SAPB1.BoAccountTypes('at_Expenses', 'at_Expenses');
SAPB1.BoAccountTypes.at_Revenues = new SAPB1.BoAccountTypes('at_Revenues', 'at_Revenues');

module.exports = SAPB1.BoAccountTypes;
