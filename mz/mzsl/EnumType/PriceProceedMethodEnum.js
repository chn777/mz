if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PriceProceedMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PriceProceedMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PriceProceedMethodEnum.prototype.constructor = SAPB1.PriceProceedMethodEnum;
SAPB1.PriceProceedMethodEnum.ppmKeepCorresponding = new SAPB1.PriceProceedMethodEnum('ppmKeepCorresponding', 'ppmKeepCorresponding');
SAPB1.PriceProceedMethodEnum.ppmUpdate = new SAPB1.PriceProceedMethodEnum('ppmUpdate', 'ppmUpdate');
SAPB1.PriceProceedMethodEnum.ppmRemove = new SAPB1.PriceProceedMethodEnum('ppmRemove', 'ppmRemove');
SAPB1.PriceProceedMethodEnum.ppmKeepAll = new SAPB1.PriceProceedMethodEnum('ppmKeepAll', 'ppmKeepAll');

module.exports = SAPB1.PriceProceedMethodEnum;
