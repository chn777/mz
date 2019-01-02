if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoUserGroup = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoUserGroup.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoUserGroup.prototype.constructor = SAPB1.BoUserGroup;
SAPB1.BoUserGroup.ug_Deleted = new SAPB1.BoUserGroup('ug_Deleted', 'ug_Deleted');
SAPB1.BoUserGroup.ug_Regular = new SAPB1.BoUserGroup('ug_Regular', 'ug_Regular');

module.exports = SAPB1.BoUserGroup;
