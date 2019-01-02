if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoCorInvItemStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoCorInvItemStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoCorInvItemStatus.prototype.constructor = SAPB1.BoCorInvItemStatus;
SAPB1.BoCorInvItemStatus.ciis_Was = new SAPB1.BoCorInvItemStatus('ciis_Was', 'ciis_Was');
SAPB1.BoCorInvItemStatus.ciis_ShouldBe = new SAPB1.BoCorInvItemStatus('ciis_ShouldBe', 'ciis_ShouldBe');

module.exports = SAPB1.BoCorInvItemStatus;
