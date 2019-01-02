if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LineStatusTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LineStatusTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LineStatusTypeEnum.prototype.constructor = SAPB1.LineStatusTypeEnum;
SAPB1.LineStatusTypeEnum.lst_Open = new SAPB1.LineStatusTypeEnum('lst_Open', 'lst_Open');
SAPB1.LineStatusTypeEnum.lst_Closed = new SAPB1.LineStatusTypeEnum('lst_Closed', 'lst_Closed');

module.exports = SAPB1.LineStatusTypeEnum;
