if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.IntrastatConfigurationEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.IntrastatConfigurationEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.IntrastatConfigurationEnum.prototype.constructor = SAPB1.IntrastatConfigurationEnum;
SAPB1.IntrastatConfigurationEnum.enRegions = new SAPB1.IntrastatConfigurationEnum('enRegions', 'enRegions');
SAPB1.IntrastatConfigurationEnum.enCommodityCodes = new SAPB1.IntrastatConfigurationEnum('enCommodityCodes', 'enCommodityCodes');
SAPB1.IntrastatConfigurationEnum.enTransportModes = new SAPB1.IntrastatConfigurationEnum('enTransportModes', 'enTransportModes');
SAPB1.IntrastatConfigurationEnum.enStatisticalProcedures = new SAPB1.IntrastatConfigurationEnum('enStatisticalProcedures', 'enStatisticalProcedures');
SAPB1.IntrastatConfigurationEnum.enCustomProcedures = new SAPB1.IntrastatConfigurationEnum('enCustomProcedures', 'enCustomProcedures');
SAPB1.IntrastatConfigurationEnum.enNatureOfTransactions = new SAPB1.IntrastatConfigurationEnum('enNatureOfTransactions', 'enNatureOfTransactions');
SAPB1.IntrastatConfigurationEnum.enPortsOfEntryAndExit = new SAPB1.IntrastatConfigurationEnum('enPortsOfEntryAndExit', 'enPortsOfEntryAndExit');
SAPB1.IntrastatConfigurationEnum.enServiceCodes = new SAPB1.IntrastatConfigurationEnum('enServiceCodes', 'enServiceCodes');
SAPB1.IntrastatConfigurationEnum.enAdditionalMeasureUnit = new SAPB1.IntrastatConfigurationEnum('enAdditionalMeasureUnit', 'enAdditionalMeasureUnit');
SAPB1.IntrastatConfigurationEnum.enIncoterms = new SAPB1.IntrastatConfigurationEnum('enIncoterms', 'enIncoterms');

module.exports = SAPB1.IntrastatConfigurationEnum;
