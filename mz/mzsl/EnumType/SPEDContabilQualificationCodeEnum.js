if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SPEDContabilQualificationCodeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SPEDContabilQualificationCodeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SPEDContabilQualificationCodeEnum.prototype.constructor = SAPB1.SPEDContabilQualificationCodeEnum;
SAPB1.SPEDContabilQualificationCodeEnum.spedConselheiroDeAdministracao = new SAPB1.SPEDContabilQualificationCodeEnum('spedConselheiroDeAdministracao', 'spedConselheiroDeAdministracao');
SAPB1.SPEDContabilQualificationCodeEnum.spedAdministradorDoGrupo = new SAPB1.SPEDContabilQualificationCodeEnum('spedAdministradorDoGrupo', 'spedAdministradorDoGrupo');
SAPB1.SPEDContabilQualificationCodeEnum.spedGestorJudicial = new SAPB1.SPEDContabilQualificationCodeEnum('spedGestorJudicial', 'spedGestorJudicial');
SAPB1.SPEDContabilQualificationCodeEnum.spedProcurador = new SAPB1.SPEDContabilQualificationCodeEnum('spedProcurador', 'spedProcurador');
SAPB1.SPEDContabilQualificationCodeEnum.spedInterventor = new SAPB1.SPEDContabilQualificationCodeEnum('spedInterventor', 'spedInterventor');
SAPB1.SPEDContabilQualificationCodeEnum.spedContador = new SAPB1.SPEDContabilQualificationCodeEnum('spedContador', 'spedContador');
SAPB1.SPEDContabilQualificationCodeEnum.spedAdministradorJudicialGestor = new SAPB1.SPEDContabilQualificationCodeEnum('spedAdministradorJudicialGestor', 'spedAdministradorJudicialGestor');
SAPB1.SPEDContabilQualificationCodeEnum.spedOutros = new SAPB1.SPEDContabilQualificationCodeEnum('spedOutros', 'spedOutros');
SAPB1.SPEDContabilQualificationCodeEnum.spedLiquidante = new SAPB1.SPEDContabilQualificationCodeEnum('spedLiquidante', 'spedLiquidante');
SAPB1.SPEDContabilQualificationCodeEnum.spedAdministrador = new SAPB1.SPEDContabilQualificationCodeEnum('spedAdministrador', 'spedAdministrador');
SAPB1.SPEDContabilQualificationCodeEnum.spedInventariante = new SAPB1.SPEDContabilQualificationCodeEnum('spedInventariante', 'spedInventariante');
SAPB1.SPEDContabilQualificationCodeEnum.spedNA = new SAPB1.SPEDContabilQualificationCodeEnum('spedNA', 'spedNA');
SAPB1.SPEDContabilQualificationCodeEnum.spedAdministradorJudicialPessoaJuridicaProfissionalResponsavel = new SAPB1.SPEDContabilQualificationCodeEnum('spedAdministradorJudicialPessoaJuridicaProfissionalResponsavel', 'spedAdministradorJudicialPessoaJuridicaProfissionalResponsavel');
SAPB1.SPEDContabilQualificationCodeEnum.spedDiretor = new SAPB1.SPEDContabilQualificationCodeEnum('spedDiretor', 'spedDiretor');
SAPB1.SPEDContabilQualificationCodeEnum.spedEmpresario = new SAPB1.SPEDContabilQualificationCodeEnum('spedEmpresario', 'spedEmpresario');
SAPB1.SPEDContabilQualificationCodeEnum.spedAdministradorDeSociedadeFiliada = new SAPB1.SPEDContabilQualificationCodeEnum('spedAdministradorDeSociedadeFiliada', 'spedAdministradorDeSociedadeFiliada');
SAPB1.SPEDContabilQualificationCodeEnum.spedAdministradorJudicialPessoaFisica = new SAPB1.SPEDContabilQualificationCodeEnum('spedAdministradorJudicialPessoaFisica', 'spedAdministradorJudicialPessoaFisica');

module.exports = SAPB1.SPEDContabilQualificationCodeEnum;
