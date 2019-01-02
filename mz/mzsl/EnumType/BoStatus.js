if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoStatus.prototype.constructor = SAPB1.BoStatus;
SAPB1.BoStatus.bost_Close = new SAPB1.BoStatus('bost_Close', 'bost_Close');
SAPB1.BoStatus.bost_Delivered = new SAPB1.BoStatus('bost_Delivered', 'bost_Delivered');
SAPB1.BoStatus.bost_Paid = new SAPB1.BoStatus('bost_Paid', 'bost_Paid');
SAPB1.BoStatus.bost_Open = new SAPB1.BoStatus('bost_Open', 'bost_Open');

module.exports = SAPB1.BoStatus;
