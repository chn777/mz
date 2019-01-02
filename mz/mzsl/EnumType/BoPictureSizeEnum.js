if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPictureSizeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPictureSizeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPictureSizeEnum.prototype.constructor = SAPB1.BoPictureSizeEnum;
SAPB1.BoPictureSizeEnum.rlpsFitFieldHeight = new SAPB1.BoPictureSizeEnum('rlpsFitFieldHeight', 'rlpsFitFieldHeight');
SAPB1.BoPictureSizeEnum.rlpsOriginalSize = new SAPB1.BoPictureSizeEnum('rlpsOriginalSize', 'rlpsOriginalSize');
SAPB1.BoPictureSizeEnum.rlpsFitFieldSizeNonProportionally = new SAPB1.BoPictureSizeEnum('rlpsFitFieldSizeNonProportionally', 'rlpsFitFieldSizeNonProportionally');
SAPB1.BoPictureSizeEnum.rlpsFitFieldWidth = new SAPB1.BoPictureSizeEnum('rlpsFitFieldWidth', 'rlpsFitFieldWidth');
SAPB1.BoPictureSizeEnum.rlpsFitFieldSizeProportionally = new SAPB1.BoPictureSizeEnum('rlpsFitFieldSizeProportionally', 'rlpsFitFieldSizeProportionally');

module.exports = SAPB1.BoPictureSizeEnum;
