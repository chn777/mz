if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EcmActionTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EcmActionTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EcmActionTypeEnum.prototype.constructor = SAPB1.EcmActionTypeEnum;
SAPB1.EcmActionTypeEnum.latDraft = new SAPB1.EcmActionTypeEnum('latDraft', 'latDraft');
SAPB1.EcmActionTypeEnum.latContingency = new SAPB1.EcmActionTypeEnum('latContingency', 'latContingency');
SAPB1.EcmActionTypeEnum.latReport = new SAPB1.EcmActionTypeEnum('latReport', 'latReport');
SAPB1.EcmActionTypeEnum.latOther = new SAPB1.EcmActionTypeEnum('latOther', 'latOther');
SAPB1.EcmActionTypeEnum.latReconciliation = new SAPB1.EcmActionTypeEnum('latReconciliation', 'latReconciliation');
SAPB1.EcmActionTypeEnum.latSkip = new SAPB1.EcmActionTypeEnum('latSkip', 'latSkip');
SAPB1.EcmActionTypeEnum.latSetup = new SAPB1.EcmActionTypeEnum('latSetup', 'latSetup');
SAPB1.EcmActionTypeEnum.latPaymentOutgoing = new SAPB1.EcmActionTypeEnum('latPaymentOutgoing', 'latPaymentOutgoing');
SAPB1.EcmActionTypeEnum.latBpCheck = new SAPB1.EcmActionTypeEnum('latBpCheck', 'latBpCheck');
SAPB1.EcmActionTypeEnum.latPaymentIncoming = new SAPB1.EcmActionTypeEnum('latPaymentIncoming', 'latPaymentIncoming');
SAPB1.EcmActionTypeEnum.latNone = new SAPB1.EcmActionTypeEnum('latNone', 'latNone');
SAPB1.EcmActionTypeEnum.latDocumentAR = new SAPB1.EcmActionTypeEnum('latDocumentAR', 'latDocumentAR');
SAPB1.EcmActionTypeEnum.latDocumentAP = new SAPB1.EcmActionTypeEnum('latDocumentAP', 'latDocumentAP');

module.exports = SAPB1.EcmActionTypeEnum;
