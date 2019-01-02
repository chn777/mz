if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoGLMethods = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoGLMethods.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoGLMethods.prototype.constructor = SAPB1.BoGLMethods;
SAPB1.BoGLMethods.glm_WH = new SAPB1.BoGLMethods('glm_WH', 'glm_WH');
SAPB1.BoGLMethods.glm_ItemClass = new SAPB1.BoGLMethods('glm_ItemClass', 'glm_ItemClass');
SAPB1.BoGLMethods.glm_ItemLevel = new SAPB1.BoGLMethods('glm_ItemLevel', 'glm_ItemLevel');

module.exports = SAPB1.BoGLMethods;
