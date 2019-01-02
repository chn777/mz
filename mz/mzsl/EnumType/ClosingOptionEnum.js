if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ClosingOptionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ClosingOptionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ClosingOptionEnum.prototype.constructor = SAPB1.ClosingOptionEnum;
SAPB1.ClosingOptionEnum.coByCurrentSystemDate = new SAPB1.ClosingOptionEnum('coByCurrentSystemDate', 'coByCurrentSystemDate');
SAPB1.ClosingOptionEnum.coBySpecifiedDate = new SAPB1.ClosingOptionEnum('coBySpecifiedDate', 'coBySpecifiedDate');
SAPB1.ClosingOptionEnum.coByOriginalDocumentDate = new SAPB1.ClosingOptionEnum('coByOriginalDocumentDate', 'coByOriginalDocumentDate');

module.exports = SAPB1.ClosingOptionEnum;
