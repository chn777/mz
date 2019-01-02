if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSortTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSortTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSortTypeEnum.prototype.constructor = SAPB1.BoSortTypeEnum;
SAPB1.BoSortTypeEnum.rlstNumeric = new SAPB1.BoSortTypeEnum('rlstNumeric', 'rlstNumeric');
SAPB1.BoSortTypeEnum.rlstMoney = new SAPB1.BoSortTypeEnum('rlstMoney', 'rlstMoney');
SAPB1.BoSortTypeEnum.rlstAlpha = new SAPB1.BoSortTypeEnum('rlstAlpha', 'rlstAlpha');
SAPB1.BoSortTypeEnum.rlstDate = new SAPB1.BoSortTypeEnum('rlstDate', 'rlstDate');

module.exports = SAPB1.BoSortTypeEnum;
