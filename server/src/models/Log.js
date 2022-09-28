
module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('Log',{
        /*
        SerialNumber: DataTypes.STRING,
        Status:DataTypes.STRING,
        Vpv1V:DataTypes.FLOAT,
        Ipv1A:DataTypes.FLOAT,
        Ppv1W:DataTypes.FLOAT,
        Vpv2V:DataTypes.FLOAT,
        Ipv2A:DataTypes.FLOAT,
        Ppv2W:DataTypes.FLOAT,
        Vpv3V:DataTypes.FLOAT,
        Ipv3A:DataTypes.FLOAT,
        Ppv3W:DataTypes.FLOAT,
        PpvW:DataTypes.FLOAT,
        VacRV:DataTypes.FLOAT,
        VacSV:DataTypes.FLOAT,
        VacTV:DataTypes.FLOAT,
        IacRA:DataTypes.FLOAT,
        acSA:DataTypes.FLOAT,
        IacTA:DataTypes.FLOAT,
        FacHz:DataTypes.FLOAT,
        PacW:DataTypes.FLOAT,
        PacRW:DataTypes.FLOAT,
        PacSW:DataTypes.FLOAT,
        PacTW:DataTypes.FLOAT,
        TemperatureC:DataTypes.FLOAT,
        Eac_todaykWh:DataTypes.FLOAT,
        Eac_totalkWh:DataTypes.FLOAT,
        T_totalH:DataTypes.FLOAT,
        IPM_TemperatureC:DataTypes.FLOAT,
        P_BUS_VoltageV:DataTypes.FLOAT,
        N_BUS_VoltageV:DataTypes.FLOAT,
        Power_Factor:DataTypes.FLOAT,
        Epv1_todaykWh:DataTypes.FLOAT,
        Epv1_totalkWh:DataTypes.FLOAT,
        Epv2_todaykWh:DataTypes.FLOAT,
        Epv2_totalkWh:DataTypes.FLOAT,
        Epv_totalkWh:DataTypes.FLOAT,
        RacVar:DataTypes.FLOAT,
        E_Rac_todayKVarh:DataTypes.FLOAT,
        E_Rac_totalKVarh:DataTypes.FLOAT,
        WarmCode:DataTypes.FLOAT,
        */
        distanceCm:DataTypes.FLOAT,
        distanceInch:DataTypes.FLOAT,
        distanceMm:DataTypes.FLOAT,
        distanceFt:DataTypes.FLOAT
    })

    return Log
}