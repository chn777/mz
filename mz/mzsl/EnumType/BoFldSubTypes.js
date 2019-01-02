if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoFldSubTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoFldSubTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoFldSubTypes.prototype.constructor = SAPB1.BoFldSubTypes;
SAPB1.BoFldSubTypes.st_Percentage = new SAPB1.BoFldSubTypes('st_Percentage', 'st_Percentage');
SAPB1.BoFldSubTypes.st_Sum = new SAPB1.BoFldSubTypes('st_Sum', 'st_Sum');
SAPB1.BoFldSubTypes.st_Quantity = new SAPB1.BoFldSubTypes('st_Quantity', 'st_Quantity');
SAPB1.BoFldSubTypes.st_Image = new SAPB1.BoFldSubTypes('st_Image', 'st_Image');
SAPB1.BoFldSubTypes.st_Link = new SAPB1.BoFldSubTypes('st_Link', 'st_Link');
SAPB1.BoFldSubTypes.st_Measurement = new SAPB1.BoFldSubTypes('st_Measurement', 'st_Measurement');
SAPB1.BoFldSubTypes.st_None = new SAPB1.BoFldSubTypes('st_None', 'st_None');
SAPB1.BoFldSubTypes.st_Price = new SAPB1.BoFldSubTypes('st_Price', 'st_Price');
SAPB1.BoFldSubTypes.st_Address = new SAPB1.BoFldSubTypes('st_Address', 'st_Address');
SAPB1.BoFldSubTypes.st_Time = new SAPB1.BoFldSubTypes('st_Time', 'st_Time');
SAPB1.BoFldSubTypes.st_Phone = new SAPB1.BoFldSubTypes('st_Phone', 'st_Phone');
SAPB1.BoFldSubTypes.st_Rate = new SAPB1.BoFldSubTypes('st_Rate', 'st_Rate');

module.exports = SAPB1.BoFldSubTypes;
