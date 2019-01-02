if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CountingLineStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CountingLineStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CountingLineStatusEnum.prototype.constructor = SAPB1.CountingLineStatusEnum;
SAPB1.CountingLineStatusEnum.clsOpen = new SAPB1.CountingLineStatusEnum('clsOpen', 'clsOpen');
SAPB1.CountingLineStatusEnum.clsClosed = new SAPB1.CountingLineStatusEnum('clsClosed', 'clsClosed');

module.exports = SAPB1.CountingLineStatusEnum;
