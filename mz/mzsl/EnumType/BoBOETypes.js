if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBOETypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBOETypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBOETypes.prototype.constructor = SAPB1.BoBOETypes;
SAPB1.BoBOETypes.bobt_Outgoing = new SAPB1.BoBOETypes('bobt_Outgoing', 'bobt_Outgoing');
SAPB1.BoBOETypes.bobt_Incoming = new SAPB1.BoBOETypes('bobt_Incoming', 'bobt_Incoming');

module.exports = SAPB1.BoBOETypes;
