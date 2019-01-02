if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.Services = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.Services.prototype = SAPB1.EnumBase.prototype;
SAPB1.Services.prototype.constructor = SAPB1.Services;
SAPB1.Services.FormPreferencesService = new SAPB1.Services('FormPreferencesService', 'FormPreferencesService');
SAPB1.Services.SeriesService = new SAPB1.Services('SeriesService', 'SeriesService');
SAPB1.Services.AccountsService = new SAPB1.Services('AccountsService', 'AccountsService');
SAPB1.Services.MessagesService = new SAPB1.Services('MessagesService', 'MessagesService');
SAPB1.Services.CompanyService = new SAPB1.Services('CompanyService', 'CompanyService');
SAPB1.Services.BusinessPartnersService = new SAPB1.Services('BusinessPartnersService', 'BusinessPartnersService');
SAPB1.Services.ReportLayoutsService = new SAPB1.Services('ReportLayoutsService', 'ReportLayoutsService');

module.exports = SAPB1.Services;
