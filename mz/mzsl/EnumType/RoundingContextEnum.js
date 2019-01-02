if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RoundingContextEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RoundingContextEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RoundingContextEnum.prototype.constructor = SAPB1.RoundingContextEnum;
SAPB1.RoundingContextEnum.rcWTax = new SAPB1.RoundingContextEnum('rcWTax', 'rcWTax');
SAPB1.RoundingContextEnum.rcTaxPerGroup = new SAPB1.RoundingContextEnum('rcTaxPerGroup', 'rcTaxPerGroup');
SAPB1.RoundingContextEnum.rcLineGrossTotal = new SAPB1.RoundingContextEnum('rcLineGrossTotal', 'rcLineGrossTotal');
SAPB1.RoundingContextEnum.rcPrice = new SAPB1.RoundingContextEnum('rcPrice', 'rcPrice');
SAPB1.RoundingContextEnum.rcDocHeaderTotal = new SAPB1.RoundingContextEnum('rcDocHeaderTotal', 'rcDocHeaderTotal');
SAPB1.RoundingContextEnum.rcSum = new SAPB1.RoundingContextEnum('rcSum', 'rcSum');
SAPB1.RoundingContextEnum.rcTax = new SAPB1.RoundingContextEnum('rcTax', 'rcTax');
SAPB1.RoundingContextEnum.rcStockSumRoundUp = new SAPB1.RoundingContextEnum('rcStockSumRoundUp', 'rcStockSumRoundUp');
SAPB1.RoundingContextEnum.rcBudgetSum = new SAPB1.RoundingContextEnum('rcBudgetSum', 'rcBudgetSum');
SAPB1.RoundingContextEnum.rcQuantity = new SAPB1.RoundingContextEnum('rcQuantity', 'rcQuantity');
SAPB1.RoundingContextEnum.rcRate = new SAPB1.RoundingContextEnum('rcRate', 'rcRate');
SAPB1.RoundingContextEnum.rcTaxForPrice = new SAPB1.RoundingContextEnum('rcTaxForPrice', 'rcTaxForPrice');
SAPB1.RoundingContextEnum.rcBASCode = new SAPB1.RoundingContextEnum('rcBASCode', 'rcBASCode');
SAPB1.RoundingContextEnum.rcVatReportAmount = new SAPB1.RoundingContextEnum('rcVatReportAmount', 'rcVatReportAmount');
SAPB1.RoundingContextEnum.rcMeasure = new SAPB1.RoundingContextEnum('rcMeasure', 'rcMeasure');
SAPB1.RoundingContextEnum.rcPercent = new SAPB1.RoundingContextEnum('rcPercent', 'rcPercent');
SAPB1.RoundingContextEnum.rcRealAmountInPayment = new SAPB1.RoundingContextEnum('rcRealAmountInPayment', 'rcRealAmountInPayment');
SAPB1.RoundingContextEnum.rcExpenseTotal = new SAPB1.RoundingContextEnum('rcExpenseTotal', 'rcExpenseTotal');
SAPB1.RoundingContextEnum.rcPriceListSum = new SAPB1.RoundingContextEnum('rcPriceListSum', 'rcPriceListSum');

module.exports = SAPB1.RoundingContextEnum;
