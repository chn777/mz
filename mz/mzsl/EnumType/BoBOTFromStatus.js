if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBOTFromStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBOTFromStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBOTFromStatus.prototype.constructor = SAPB1.BoBOTFromStatus;
SAPB1.BoBOTFromStatus.btfs_Deposited = new SAPB1.BoBOTFromStatus('btfs_Deposited', 'btfs_Deposited');
SAPB1.BoBOTFromStatus.btfs_Generated = new SAPB1.BoBOTFromStatus('btfs_Generated', 'btfs_Generated');
SAPB1.BoBOTFromStatus.btfs_Paid = new SAPB1.BoBOTFromStatus('btfs_Paid', 'btfs_Paid');
SAPB1.BoBOTFromStatus.btfs_Sent = new SAPB1.BoBOTFromStatus('btfs_Sent', 'btfs_Sent');

module.exports = SAPB1.BoBOTFromStatus;
