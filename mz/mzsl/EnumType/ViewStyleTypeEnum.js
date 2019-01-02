if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ViewStyleTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ViewStyleTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ViewStyleTypeEnum.prototype.constructor = SAPB1.ViewStyleTypeEnum;
SAPB1.ViewStyleTypeEnum.vstPage = new SAPB1.ViewStyleTypeEnum('vstPage', 'vstPage');
SAPB1.ViewStyleTypeEnum.vstLandscape = new SAPB1.ViewStyleTypeEnum('vstLandscape', 'vstLandscape');
SAPB1.ViewStyleTypeEnum.vstFullScreen = new SAPB1.ViewStyleTypeEnum('vstFullScreen', 'vstFullScreen');

module.exports = SAPB1.ViewStyleTypeEnum;
