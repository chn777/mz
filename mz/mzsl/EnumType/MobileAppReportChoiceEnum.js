if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.MobileAppReportChoiceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.MobileAppReportChoiceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.MobileAppReportChoiceEnum.prototype.constructor = SAPB1.MobileAppReportChoiceEnum;
SAPB1.MobileAppReportChoiceEnum.marCustomizedReport = new SAPB1.MobileAppReportChoiceEnum('marCustomizedReport', 'marCustomizedReport');
SAPB1.MobileAppReportChoiceEnum.marSystemReport = new SAPB1.MobileAppReportChoiceEnum('marSystemReport', 'marSystemReport');

module.exports = SAPB1.MobileAppReportChoiceEnum;
