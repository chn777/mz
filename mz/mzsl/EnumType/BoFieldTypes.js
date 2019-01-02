if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoFieldTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoFieldTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoFieldTypes.prototype.constructor = SAPB1.BoFieldTypes;
SAPB1.BoFieldTypes.db_Memo = new SAPB1.BoFieldTypes('db_Memo', 'db_Memo');
SAPB1.BoFieldTypes.db_Numeric = new SAPB1.BoFieldTypes('db_Numeric', 'db_Numeric');
SAPB1.BoFieldTypes.db_Alpha = new SAPB1.BoFieldTypes('db_Alpha', 'db_Alpha');
SAPB1.BoFieldTypes.db_Date = new SAPB1.BoFieldTypes('db_Date', 'db_Date');
SAPB1.BoFieldTypes.db_Float = new SAPB1.BoFieldTypes('db_Float', 'db_Float');

module.exports = SAPB1.BoFieldTypes;
