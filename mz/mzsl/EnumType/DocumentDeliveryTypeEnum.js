if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DocumentDeliveryTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DocumentDeliveryTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DocumentDeliveryTypeEnum.prototype.constructor = SAPB1.DocumentDeliveryTypeEnum;
SAPB1.DocumentDeliveryTypeEnum.ddtCreateOnlineDocument = new SAPB1.DocumentDeliveryTypeEnum('ddtCreateOnlineDocument', 'ddtCreateOnlineDocument');
SAPB1.DocumentDeliveryTypeEnum.ddtPostToAribaNetwork = new SAPB1.DocumentDeliveryTypeEnum('ddtPostToAribaNetwork', 'ddtPostToAribaNetwork');
SAPB1.DocumentDeliveryTypeEnum.ddtNoneSeleted = new SAPB1.DocumentDeliveryTypeEnum('ddtNoneSeleted', 'ddtNoneSeleted');

module.exports = SAPB1.DocumentDeliveryTypeEnum;
