if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ProjectStatusTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ProjectStatusTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ProjectStatusTypeEnum.prototype.constructor = SAPB1.ProjectStatusTypeEnum;
SAPB1.ProjectStatusTypeEnum.pst_Started = new SAPB1.ProjectStatusTypeEnum('pst_Started', 'pst_Started');
SAPB1.ProjectStatusTypeEnum.pst_Canceled = new SAPB1.ProjectStatusTypeEnum('pst_Canceled', 'pst_Canceled');
SAPB1.ProjectStatusTypeEnum.pst_Finished = new SAPB1.ProjectStatusTypeEnum('pst_Finished', 'pst_Finished');
SAPB1.ProjectStatusTypeEnum.pst_Paused = new SAPB1.ProjectStatusTypeEnum('pst_Paused', 'pst_Paused');
SAPB1.ProjectStatusTypeEnum.pst_Stopped = new SAPB1.ProjectStatusTypeEnum('pst_Stopped', 'pst_Stopped');

module.exports = SAPB1.ProjectStatusTypeEnum;
