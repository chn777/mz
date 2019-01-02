if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BlanketAgreementDatePeriodsEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BlanketAgreementDatePeriodsEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BlanketAgreementDatePeriodsEnum.prototype.constructor = SAPB1.BlanketAgreementDatePeriodsEnum;
SAPB1.BlanketAgreementDatePeriodsEnum.Annually = new SAPB1.BlanketAgreementDatePeriodsEnum('Annually', 'Annually');
SAPB1.BlanketAgreementDatePeriodsEnum.Daily = new SAPB1.BlanketAgreementDatePeriodsEnum('Daily', 'Daily');
SAPB1.BlanketAgreementDatePeriodsEnum.Monthly = new SAPB1.BlanketAgreementDatePeriodsEnum('Monthly', 'Monthly');
SAPB1.BlanketAgreementDatePeriodsEnum.Weekly = new SAPB1.BlanketAgreementDatePeriodsEnum('Weekly', 'Weekly');
SAPB1.BlanketAgreementDatePeriodsEnum.Semiannually = new SAPB1.BlanketAgreementDatePeriodsEnum('Semiannually', 'Semiannually');
SAPB1.BlanketAgreementDatePeriodsEnum.OneTime = new SAPB1.BlanketAgreementDatePeriodsEnum('OneTime', 'OneTime');
SAPB1.BlanketAgreementDatePeriodsEnum.Quarterly = new SAPB1.BlanketAgreementDatePeriodsEnum('Quarterly', 'Quarterly');

module.exports = SAPB1.BlanketAgreementDatePeriodsEnum;
