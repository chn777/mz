if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoServiceTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoServiceTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoServiceTypes.prototype.constructor = SAPB1.BoServiceTypes;
SAPB1.BoServiceTypes.bst_Warranty = new SAPB1.BoServiceTypes('bst_Warranty', 'bst_Warranty');
SAPB1.BoServiceTypes.bst_Regular = new SAPB1.BoServiceTypes('bst_Regular', 'bst_Regular');

module.exports = SAPB1.BoServiceTypes;
