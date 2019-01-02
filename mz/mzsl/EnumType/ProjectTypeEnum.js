if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ProjectTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ProjectTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ProjectTypeEnum.prototype.constructor = SAPB1.ProjectTypeEnum;
SAPB1.ProjectTypeEnum.pt_External = new SAPB1.ProjectTypeEnum('pt_External', 'pt_External');
SAPB1.ProjectTypeEnum.pt_Internal = new SAPB1.ProjectTypeEnum('pt_Internal', 'pt_Internal');

module.exports = SAPB1.ProjectTypeEnum;
