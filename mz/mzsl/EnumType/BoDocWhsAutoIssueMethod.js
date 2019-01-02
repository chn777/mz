if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDocWhsAutoIssueMethod = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDocWhsAutoIssueMethod.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDocWhsAutoIssueMethod.prototype.constructor = SAPB1.BoDocWhsAutoIssueMethod;
SAPB1.BoDocWhsAutoIssueMethod.whsBinAltSortCodeOrder = new SAPB1.BoDocWhsAutoIssueMethod('whsBinAltSortCodeOrder', 'whsBinAltSortCodeOrder');
SAPB1.BoDocWhsAutoIssueMethod.whsBinBinCodeOrder = new SAPB1.BoDocWhsAutoIssueMethod('whsBinBinCodeOrder', 'whsBinBinCodeOrder');
SAPB1.BoDocWhsAutoIssueMethod.whsBinSingleBinPreferred = new SAPB1.BoDocWhsAutoIssueMethod('whsBinSingleBinPreferred', 'whsBinSingleBinPreferred');
SAPB1.BoDocWhsAutoIssueMethod.whsBinQtyDescendingOrder = new SAPB1.BoDocWhsAutoIssueMethod('whsBinQtyDescendingOrder', 'whsBinQtyDescendingOrder');
SAPB1.BoDocWhsAutoIssueMethod.whsBinQtyAscendingOrder = new SAPB1.BoDocWhsAutoIssueMethod('whsBinQtyAscendingOrder', 'whsBinQtyAscendingOrder');
SAPB1.BoDocWhsAutoIssueMethod.whsBinLIFO = new SAPB1.BoDocWhsAutoIssueMethod('whsBinLIFO', 'whsBinLIFO');
SAPB1.BoDocWhsAutoIssueMethod.whsBinSingleChoiceOnly = new SAPB1.BoDocWhsAutoIssueMethod('whsBinSingleChoiceOnly', 'whsBinSingleChoiceOnly');
SAPB1.BoDocWhsAutoIssueMethod.whsBinFIFO = new SAPB1.BoDocWhsAutoIssueMethod('whsBinFIFO', 'whsBinFIFO');

module.exports = SAPB1.BoDocWhsAutoIssueMethod;
