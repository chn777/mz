if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoGenderTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoGenderTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoGenderTypes.prototype.constructor = SAPB1.BoGenderTypes;
SAPB1.BoGenderTypes.gt_Undefined = new SAPB1.BoGenderTypes('gt_Undefined', 'gt_Undefined');
SAPB1.BoGenderTypes.gt_Female = new SAPB1.BoGenderTypes('gt_Female', 'gt_Female');
SAPB1.BoGenderTypes.gt_Male = new SAPB1.BoGenderTypes('gt_Male', 'gt_Male');
SAPB1.BoGenderTypes.gt_Masked = new SAPB1.BoGenderTypes('gt_Masked', 'gt_Masked');

module.exports = SAPB1.BoGenderTypes;
