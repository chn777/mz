if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CardOrAccountEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CardOrAccountEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CardOrAccountEnum.prototype.constructor = SAPB1.CardOrAccountEnum;
SAPB1.CardOrAccountEnum.coaAccount = new SAPB1.CardOrAccountEnum('coaAccount', 'coaAccount');
SAPB1.CardOrAccountEnum.coaCard = new SAPB1.CardOrAccountEnum('coaCard', 'coaCard');

module.exports = SAPB1.CardOrAccountEnum;
