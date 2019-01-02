if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.Report349CodeListEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.Report349CodeListEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.Report349CodeListEnum.prototype.constructor = SAPB1.Report349CodeListEnum;
SAPB1.Report349CodeListEnum.r349cI = new SAPB1.Report349CodeListEnum('r349cI', 'r349cI');
SAPB1.Report349CodeListEnum.r349cH = new SAPB1.Report349CodeListEnum('r349cH', 'r349cH');
SAPB1.Report349CodeListEnum.r349cEmpty = new SAPB1.Report349CodeListEnum('r349cEmpty', 'r349cEmpty');
SAPB1.Report349CodeListEnum.r349cE = new SAPB1.Report349CodeListEnum('r349cE', 'r349cE');
SAPB1.Report349CodeListEnum.r349cT = new SAPB1.Report349CodeListEnum('r349cT', 'r349cT');
SAPB1.Report349CodeListEnum.r349cS = new SAPB1.Report349CodeListEnum('r349cS', 'r349cS');
SAPB1.Report349CodeListEnum.r349cA = new SAPB1.Report349CodeListEnum('r349cA', 'r349cA');
SAPB1.Report349CodeListEnum.r349cM = new SAPB1.Report349CodeListEnum('r349cM', 'r349cM');

module.exports = SAPB1.Report349CodeListEnum;
