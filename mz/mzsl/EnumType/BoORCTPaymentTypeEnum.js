if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoORCTPaymentTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoORCTPaymentTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoORCTPaymentTypeEnum.prototype.constructor = SAPB1.BoORCTPaymentTypeEnum;
SAPB1.BoORCTPaymentTypeEnum.bopt_Telegraph = new SAPB1.BoORCTPaymentTypeEnum('bopt_Telegraph', 'bopt_Telegraph');
SAPB1.BoORCTPaymentTypeEnum.bopt_Express = new SAPB1.BoORCTPaymentTypeEnum('bopt_Express', 'bopt_Express');
SAPB1.BoORCTPaymentTypeEnum.bopt_Electronic = new SAPB1.BoORCTPaymentTypeEnum('bopt_Electronic', 'bopt_Electronic');
SAPB1.BoORCTPaymentTypeEnum.bopt_None = new SAPB1.BoORCTPaymentTypeEnum('bopt_None', 'bopt_None');
SAPB1.BoORCTPaymentTypeEnum.bopt_Post = new SAPB1.BoORCTPaymentTypeEnum('bopt_Post', 'bopt_Post');

module.exports = SAPB1.BoORCTPaymentTypeEnum;
