if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.FolioLetterEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.FolioLetterEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.FolioLetterEnum.prototype.constructor = SAPB1.FolioLetterEnum;
SAPB1.FolioLetterEnum.fLetterM = new SAPB1.FolioLetterEnum('fLetterM', 'fLetterM');
SAPB1.FolioLetterEnum.fLetterC = new SAPB1.FolioLetterEnum('fLetterC', 'fLetterC');
SAPB1.FolioLetterEnum.fLetterB = new SAPB1.FolioLetterEnum('fLetterB', 'fLetterB');
SAPB1.FolioLetterEnum.fLetterR = new SAPB1.FolioLetterEnum('fLetterR', 'fLetterR');
SAPB1.FolioLetterEnum.fLetterA = new SAPB1.FolioLetterEnum('fLetterA', 'fLetterA');
SAPB1.FolioLetterEnum.fLetterE = new SAPB1.FolioLetterEnum('fLetterE', 'fLetterE');

module.exports = SAPB1.FolioLetterEnum;
