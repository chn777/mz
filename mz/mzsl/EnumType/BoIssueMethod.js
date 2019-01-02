if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoIssueMethod = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoIssueMethod.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoIssueMethod.prototype.constructor = SAPB1.BoIssueMethod;
SAPB1.BoIssueMethod.im_Manual = new SAPB1.BoIssueMethod('im_Manual', 'im_Manual');
SAPB1.BoIssueMethod.im_Backflush = new SAPB1.BoIssueMethod('im_Backflush', 'im_Backflush');

module.exports = SAPB1.BoIssueMethod;
