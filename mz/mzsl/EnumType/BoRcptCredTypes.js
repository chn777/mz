if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoRcptCredTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoRcptCredTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoRcptCredTypes.prototype.constructor = SAPB1.BoRcptCredTypes;
SAPB1.BoRcptCredTypes.cr_Regular = new SAPB1.BoRcptCredTypes('cr_Regular', 'cr_Regular');
SAPB1.BoRcptCredTypes.cr_InternetTransaction = new SAPB1.BoRcptCredTypes('cr_InternetTransaction', 'cr_InternetTransaction');
SAPB1.BoRcptCredTypes.cr_Telephone = new SAPB1.BoRcptCredTypes('cr_Telephone', 'cr_Telephone');

module.exports = SAPB1.BoRcptCredTypes;
