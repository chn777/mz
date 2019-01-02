if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoTCDDocumentTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoTCDDocumentTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoTCDDocumentTypeEnum.prototype.constructor = SAPB1.BoTCDDocumentTypeEnum;
SAPB1.BoTCDDocumentTypeEnum.tcddtService = new SAPB1.BoTCDDocumentTypeEnum('tcddtService', 'tcddtService');
SAPB1.BoTCDDocumentTypeEnum.tcddtItemAndService = new SAPB1.BoTCDDocumentTypeEnum('tcddtItemAndService', 'tcddtItemAndService');
SAPB1.BoTCDDocumentTypeEnum.tcddtItem = new SAPB1.BoTCDDocumentTypeEnum('tcddtItem', 'tcddtItem');

module.exports = SAPB1.BoTCDDocumentTypeEnum;
