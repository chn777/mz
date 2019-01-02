if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoReportLayoutItemTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoReportLayoutItemTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoReportLayoutItemTypeEnum.prototype.constructor = SAPB1.BoReportLayoutItemTypeEnum;
SAPB1.BoReportLayoutItemTypeEnum.rlitUserField = new SAPB1.BoReportLayoutItemTypeEnum('rlitUserField', 'rlitUserField');
SAPB1.BoReportLayoutItemTypeEnum.rlitPageHeader = new SAPB1.BoReportLayoutItemTypeEnum('rlitPageHeader', 'rlitPageHeader');
SAPB1.BoReportLayoutItemTypeEnum.rlitPageFooter = new SAPB1.BoReportLayoutItemTypeEnum('rlitPageFooter', 'rlitPageFooter');
SAPB1.BoReportLayoutItemTypeEnum.rlitStartOfReport = new SAPB1.BoReportLayoutItemTypeEnum('rlitStartOfReport', 'rlitStartOfReport');
SAPB1.BoReportLayoutItemTypeEnum.rlitRepetitiveAreaHeader = new SAPB1.BoReportLayoutItemTypeEnum('rlitRepetitiveAreaHeader', 'rlitRepetitiveAreaHeader');
SAPB1.BoReportLayoutItemTypeEnum.rlitRepetitiveArea = new SAPB1.BoReportLayoutItemTypeEnum('rlitRepetitiveArea', 'rlitRepetitiveArea');
SAPB1.BoReportLayoutItemTypeEnum.rlitRepetitiveAreaFooter = new SAPB1.BoReportLayoutItemTypeEnum('rlitRepetitiveAreaFooter', 'rlitRepetitiveAreaFooter');
SAPB1.BoReportLayoutItemTypeEnum.rlitPictureField = new SAPB1.BoReportLayoutItemTypeEnum('rlitPictureField', 'rlitPictureField');
SAPB1.BoReportLayoutItemTypeEnum.rlitEndOfReport = new SAPB1.BoReportLayoutItemTypeEnum('rlitEndOfReport', 'rlitEndOfReport');
SAPB1.BoReportLayoutItemTypeEnum.rlitTextField = new SAPB1.BoReportLayoutItemTypeEnum('rlitTextField', 'rlitTextField');

module.exports = SAPB1.BoReportLayoutItemTypeEnum;
