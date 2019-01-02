if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DataSensitiveStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DataSensitiveStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DataSensitiveStatusEnum.prototype.constructor = SAPB1.DataSensitiveStatusEnum;
SAPB1.DataSensitiveStatusEnum.dss_Error = new SAPB1.DataSensitiveStatusEnum('dss_Error', 'dss_Error');
SAPB1.DataSensitiveStatusEnum.dss_FieldNotSentive = new SAPB1.DataSensitiveStatusEnum('dss_FieldNotSentive', 'dss_FieldNotSentive');
SAPB1.DataSensitiveStatusEnum.dss_DataSubjectIsBlockedOrErased = new SAPB1.DataSensitiveStatusEnum('dss_DataSubjectIsBlockedOrErased', 'dss_DataSubjectIsBlockedOrErased');
SAPB1.DataSensitiveStatusEnum.dss_DataSubjectNotNaturalPerson = new SAPB1.DataSensitiveStatusEnum('dss_DataSubjectNotNaturalPerson', 'dss_DataSubjectNotNaturalPerson');
SAPB1.DataSensitiveStatusEnum.dss_DataIsSensitive = new SAPB1.DataSensitiveStatusEnum('dss_DataIsSensitive', 'dss_DataIsSensitive');
SAPB1.DataSensitiveStatusEnum.dss_TransactionIsErased = new SAPB1.DataSensitiveStatusEnum('dss_TransactionIsErased', 'dss_TransactionIsErased');

module.exports = SAPB1.DataSensitiveStatusEnum;
