if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoCpCardAcct = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoCpCardAcct.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoCpCardAcct.prototype.constructor = SAPB1.BoCpCardAcct;
SAPB1.BoCpCardAcct.cfp_Card = new SAPB1.BoCpCardAcct('cfp_Card', 'cfp_Card');
SAPB1.BoCpCardAcct.cfp_Account = new SAPB1.BoCpCardAcct('cfp_Account', 'cfp_Account');

module.exports = SAPB1.BoCpCardAcct;
