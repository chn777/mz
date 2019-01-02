if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDateTemplate = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDateTemplate.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDateTemplate.prototype.constructor = SAPB1.BoDateTemplate;
SAPB1.BoDateTemplate.dt_DDMMYY = new SAPB1.BoDateTemplate('dt_DDMMYY', 'dt_DDMMYY');
SAPB1.BoDateTemplate.dt_YYMMDD = new SAPB1.BoDateTemplate('dt_YYMMDD', 'dt_YYMMDD');
SAPB1.BoDateTemplate.dt_CCYYMMDD = new SAPB1.BoDateTemplate('dt_CCYYMMDD', 'dt_CCYYMMDD');
SAPB1.BoDateTemplate.dt_DDMMCCYY = new SAPB1.BoDateTemplate('dt_DDMMCCYY', 'dt_DDMMCCYY');
SAPB1.BoDateTemplate.dt_MMDDYY = new SAPB1.BoDateTemplate('dt_MMDDYY', 'dt_MMDDYY');
SAPB1.BoDateTemplate.dt_DDMonthYYYY = new SAPB1.BoDateTemplate('dt_DDMonthYYYY', 'dt_DDMonthYYYY');
SAPB1.BoDateTemplate.dt_MMDDCCYY = new SAPB1.BoDateTemplate('dt_MMDDCCYY', 'dt_MMDDCCYY');

module.exports = SAPB1.BoDateTemplate;
