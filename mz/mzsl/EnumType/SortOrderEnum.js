if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SortOrderEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SortOrderEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SortOrderEnum.prototype.constructor = SAPB1.SortOrderEnum;
SAPB1.SortOrderEnum.soAscending = new SAPB1.SortOrderEnum('soAscending', 'soAscending');
SAPB1.SortOrderEnum.soDescending = new SAPB1.SortOrderEnum('soDescending', 'soDescending');

module.exports = SAPB1.SortOrderEnum;
