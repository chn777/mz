if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PrintOnEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PrintOnEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PrintOnEnum.prototype.constructor = SAPB1.PrintOnEnum;
SAPB1.PrintOnEnum.poOverflowCheckStock = new SAPB1.PrintOnEnum('poOverflowCheckStock', 'poOverflowCheckStock');
SAPB1.PrintOnEnum.poOverflowBlankPaper = new SAPB1.PrintOnEnum('poOverflowBlankPaper', 'poOverflowBlankPaper');
SAPB1.PrintOnEnum.poBlankPaper = new SAPB1.PrintOnEnum('poBlankPaper', 'poBlankPaper');
SAPB1.PrintOnEnum.poDefault = new SAPB1.PrintOnEnum('poDefault', 'poDefault');

module.exports = SAPB1.PrintOnEnum;
