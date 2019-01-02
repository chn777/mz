if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SEPASequenceTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SEPASequenceTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SEPASequenceTypeEnum.prototype.constructor = SAPB1.SEPASequenceTypeEnum;
SAPB1.SEPASequenceTypeEnum.sstRCUR = new SAPB1.SEPASequenceTypeEnum('sstRCUR', 'sstRCUR');
SAPB1.SEPASequenceTypeEnum.sstOOFF = new SAPB1.SEPASequenceTypeEnum('sstOOFF', 'sstOOFF');
SAPB1.SEPASequenceTypeEnum.sstFNAL = new SAPB1.SEPASequenceTypeEnum('sstFNAL', 'sstFNAL');
SAPB1.SEPASequenceTypeEnum.sstFRST = new SAPB1.SEPASequenceTypeEnum('sstFRST', 'sstFRST');

module.exports = SAPB1.SEPASequenceTypeEnum;
