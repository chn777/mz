if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DunningLetterTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DunningLetterTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DunningLetterTypeEnum.prototype.constructor = SAPB1.DunningLetterTypeEnum;
SAPB1.DunningLetterTypeEnum.dltDunningLetter2 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter2', 'dltDunningLetter2');
SAPB1.DunningLetterTypeEnum.dltDunningLetter1 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter1', 'dltDunningLetter1');
SAPB1.DunningLetterTypeEnum.dltDunningLetter10 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter10', 'dltDunningLetter10');
SAPB1.DunningLetterTypeEnum.dltDunningLetter4 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter4', 'dltDunningLetter4');
SAPB1.DunningLetterTypeEnum.dltDunningLetter3 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter3', 'dltDunningLetter3');
SAPB1.DunningLetterTypeEnum.dltDunningLetter6 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter6', 'dltDunningLetter6');
SAPB1.DunningLetterTypeEnum.dltDunningLetter5 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter5', 'dltDunningLetter5');
SAPB1.DunningLetterTypeEnum.dltDunningLetter8 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter8', 'dltDunningLetter8');
SAPB1.DunningLetterTypeEnum.dltDunningLetter7 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter7', 'dltDunningLetter7');
SAPB1.DunningLetterTypeEnum.dltDunningLetter9 = new SAPB1.DunningLetterTypeEnum('dltDunningLetter9', 'dltDunningLetter9');
SAPB1.DunningLetterTypeEnum.dltDunningALL = new SAPB1.DunningLetterTypeEnum('dltDunningALL', 'dltDunningALL');

module.exports = SAPB1.DunningLetterTypeEnum;
