if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AuthenticateUserResultsEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AuthenticateUserResultsEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AuthenticateUserResultsEnum.prototype.constructor = SAPB1.AuthenticateUserResultsEnum;
SAPB1.AuthenticateUserResultsEnum.aturUserHasBeenLocked = new SAPB1.AuthenticateUserResultsEnum('aturUserHasBeenLocked', 'aturUserHasBeenLocked');
SAPB1.AuthenticateUserResultsEnum.aturPasswordExpired = new SAPB1.AuthenticateUserResultsEnum('aturPasswordExpired', 'aturPasswordExpired');
SAPB1.AuthenticateUserResultsEnum.aturBadUserOrPassword = new SAPB1.AuthenticateUserResultsEnum('aturBadUserOrPassword', 'aturBadUserOrPassword');
SAPB1.AuthenticateUserResultsEnum.aturLogOnUserNotAdmin = new SAPB1.AuthenticateUserResultsEnum('aturLogOnUserNotAdmin', 'aturLogOnUserNotAdmin');
SAPB1.AuthenticateUserResultsEnum.aturNoUserConnectedToCompany = new SAPB1.AuthenticateUserResultsEnum('aturNoUserConnectedToCompany', 'aturNoUserConnectedToCompany');
SAPB1.AuthenticateUserResultsEnum.aturDBErrors = new SAPB1.AuthenticateUserResultsEnum('aturDBErrors', 'aturDBErrors');
SAPB1.AuthenticateUserResultsEnum.aturUsernamePasswordMatched = new SAPB1.AuthenticateUserResultsEnum('aturUsernamePasswordMatched', 'aturUsernamePasswordMatched');

module.exports = SAPB1.AuthenticateUserResultsEnum;
