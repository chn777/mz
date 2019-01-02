if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoOperationEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoOperationEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoOperationEnum.prototype.constructor = SAPB1.BoOperationEnum;
SAPB1.BoOperationEnum.rloRight = new SAPB1.BoOperationEnum('rloRight', 'rloRight');
SAPB1.BoOperationEnum.rloGreaterOrEqual = new SAPB1.BoOperationEnum('rloGreaterOrEqual', 'rloGreaterOrEqual');
SAPB1.BoOperationEnum.rloCurrency = new SAPB1.BoOperationEnum('rloCurrency', 'rloCurrency');
SAPB1.BoOperationEnum.rloLength = new SAPB1.BoOperationEnum('rloLength', 'rloLength');
SAPB1.BoOperationEnum.rloSentence = new SAPB1.BoOperationEnum('rloSentence', 'rloSentence');
SAPB1.BoOperationEnum.rloSubtraction = new SAPB1.BoOperationEnum('rloSubtraction', 'rloSubtraction');
SAPB1.BoOperationEnum.rloLessThan = new SAPB1.BoOperationEnum('rloLessThan', 'rloLessThan');
SAPB1.BoOperationEnum.rloLessOrEqual = new SAPB1.BoOperationEnum('rloLessOrEqual', 'rloLessOrEqual');
SAPB1.BoOperationEnum.rloAddition = new SAPB1.BoOperationEnum('rloAddition', 'rloAddition');
SAPB1.BoOperationEnum.rloMultiplication = new SAPB1.BoOperationEnum('rloMultiplication', 'rloMultiplication');
SAPB1.BoOperationEnum.rloEqual = new SAPB1.BoOperationEnum('rloEqual', 'rloEqual');
SAPB1.BoOperationEnum.rloLeft = new SAPB1.BoOperationEnum('rloLeft', 'rloLeft');
SAPB1.BoOperationEnum.rloRound = new SAPB1.BoOperationEnum('rloRound', 'rloRound');
SAPB1.BoOperationEnum.rloNotEqual = new SAPB1.BoOperationEnum('rloNotEqual', 'rloNotEqual');
SAPB1.BoOperationEnum.rloDivision = new SAPB1.BoOperationEnum('rloDivision', 'rloDivision');
SAPB1.BoOperationEnum.rloNumber = new SAPB1.BoOperationEnum('rloNumber', 'rloNumber');
SAPB1.BoOperationEnum.rloLeftPartCharacters = new SAPB1.BoOperationEnum('rloLeftPartCharacters', 'rloLeftPartCharacters');
SAPB1.BoOperationEnum.rloConcat = new SAPB1.BoOperationEnum('rloConcat', 'rloConcat');
SAPB1.BoOperationEnum.rloGreaterThan = new SAPB1.BoOperationEnum('rloGreaterThan', 'rloGreaterThan');
SAPB1.BoOperationEnum.rloPercentage = new SAPB1.BoOperationEnum('rloPercentage', 'rloPercentage');
SAPB1.BoOperationEnum.rloNone = new SAPB1.BoOperationEnum('rloNone', 'rloNone');
SAPB1.BoOperationEnum.rloRightPartMantissa = new SAPB1.BoOperationEnum('rloRightPartMantissa', 'rloRightPartMantissa');

module.exports = SAPB1.BoOperationEnum;
