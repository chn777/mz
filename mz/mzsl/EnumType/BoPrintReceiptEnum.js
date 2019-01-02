if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPrintReceiptEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPrintReceiptEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPrintReceiptEnum.prototype.constructor = SAPB1.BoPrintReceiptEnum;
SAPB1.BoPrintReceiptEnum.boprcNo = new SAPB1.BoPrintReceiptEnum('boprcNo', 'boprcNo');
SAPB1.BoPrintReceiptEnum.boprcAlways = new SAPB1.BoPrintReceiptEnum('boprcAlways', 'boprcAlways');
SAPB1.BoPrintReceiptEnum.boprcOnlyWhenAdding = new SAPB1.BoPrintReceiptEnum('boprcOnlyWhenAdding', 'boprcOnlyWhenAdding');

module.exports = SAPB1.BoPrintReceiptEnum;
