if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceIssueMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceIssueMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceIssueMethodEnum.prototype.constructor = SAPB1.ResourceIssueMethodEnum;
SAPB1.ResourceIssueMethodEnum.rimBackflush = new SAPB1.ResourceIssueMethodEnum('rimBackflush', 'rimBackflush');
SAPB1.ResourceIssueMethodEnum.rimManual = new SAPB1.ResourceIssueMethodEnum('rimManual', 'rimManual');

module.exports = SAPB1.ResourceIssueMethodEnum;
