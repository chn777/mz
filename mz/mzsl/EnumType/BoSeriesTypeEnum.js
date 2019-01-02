if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSeriesTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSeriesTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSeriesTypeEnum.prototype.constructor = SAPB1.BoSeriesTypeEnum;
SAPB1.BoSeriesTypeEnum.stBusinessPartner = new SAPB1.BoSeriesTypeEnum('stBusinessPartner', 'stBusinessPartner');
SAPB1.BoSeriesTypeEnum.stItem = new SAPB1.BoSeriesTypeEnum('stItem', 'stItem');
SAPB1.BoSeriesTypeEnum.stResource = new SAPB1.BoSeriesTypeEnum('stResource', 'stResource');
SAPB1.BoSeriesTypeEnum.stDocument = new SAPB1.BoSeriesTypeEnum('stDocument', 'stDocument');

module.exports = SAPB1.BoSeriesTypeEnum;
