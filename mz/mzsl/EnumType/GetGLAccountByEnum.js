if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.GetGLAccountByEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.GetGLAccountByEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.GetGLAccountByEnum.prototype.constructor = SAPB1.GetGLAccountByEnum;
SAPB1.GetGLAccountByEnum.gglab_General = new SAPB1.GetGLAccountByEnum('gglab_General', 'gglab_General');
SAPB1.GetGLAccountByEnum.gglab_Warehouse = new SAPB1.GetGLAccountByEnum('gglab_Warehouse', 'gglab_Warehouse');
SAPB1.GetGLAccountByEnum.gglab_ItemGroup = new SAPB1.GetGLAccountByEnum('gglab_ItemGroup', 'gglab_ItemGroup');

module.exports = SAPB1.GetGLAccountByEnum;
