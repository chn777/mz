if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RoundingSysEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RoundingSysEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RoundingSysEnum.prototype.constructor = SAPB1.RoundingSysEnum;
SAPB1.RoundingSysEnum.rsRoundToFiveHundredth = new SAPB1.RoundingSysEnum('rsRoundToFiveHundredth', 'rsRoundToFiveHundredth');
SAPB1.RoundingSysEnum.rsRoundToOne = new SAPB1.RoundingSysEnum('rsRoundToOne', 'rsRoundToOne');
SAPB1.RoundingSysEnum.rsRoundToTenHundredth = new SAPB1.RoundingSysEnum('rsRoundToTenHundredth', 'rsRoundToTenHundredth');
SAPB1.RoundingSysEnum.rsNoRounding = new SAPB1.RoundingSysEnum('rsNoRounding', 'rsNoRounding');
SAPB1.RoundingSysEnum.rsRoundToTen = new SAPB1.RoundingSysEnum('rsRoundToTen', 'rsRoundToTen');

module.exports = SAPB1.RoundingSysEnum;
