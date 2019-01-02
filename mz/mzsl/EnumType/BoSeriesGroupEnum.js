if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSeriesGroupEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSeriesGroupEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSeriesGroupEnum.prototype.constructor = SAPB1.BoSeriesGroupEnum;
SAPB1.BoSeriesGroupEnum.sg_Group1 = new SAPB1.BoSeriesGroupEnum('sg_Group1', 'sg_Group1');
SAPB1.BoSeriesGroupEnum.sg_Group3 = new SAPB1.BoSeriesGroupEnum('sg_Group3', 'sg_Group3');
SAPB1.BoSeriesGroupEnum.sg_Group2 = new SAPB1.BoSeriesGroupEnum('sg_Group2', 'sg_Group2');
SAPB1.BoSeriesGroupEnum.sg_Group5 = new SAPB1.BoSeriesGroupEnum('sg_Group5', 'sg_Group5');
SAPB1.BoSeriesGroupEnum.sg_Group4 = new SAPB1.BoSeriesGroupEnum('sg_Group4', 'sg_Group4');
SAPB1.BoSeriesGroupEnum.sg_Group7 = new SAPB1.BoSeriesGroupEnum('sg_Group7', 'sg_Group7');
SAPB1.BoSeriesGroupEnum.sg_Group6 = new SAPB1.BoSeriesGroupEnum('sg_Group6', 'sg_Group6');
SAPB1.BoSeriesGroupEnum.sg_Group9 = new SAPB1.BoSeriesGroupEnum('sg_Group9', 'sg_Group9');
SAPB1.BoSeriesGroupEnum.sg_Group8 = new SAPB1.BoSeriesGroupEnum('sg_Group8', 'sg_Group8');
SAPB1.BoSeriesGroupEnum.sg_Group10 = new SAPB1.BoSeriesGroupEnum('sg_Group10', 'sg_Group10');

module.exports = SAPB1.BoSeriesGroupEnum;
