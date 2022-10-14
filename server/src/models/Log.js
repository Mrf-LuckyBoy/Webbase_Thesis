
module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('Log',{
        Vpv1_V:DataTypes.FLOAT,
        Ipv1_A:DataTypes.FLOAT,
        Ppv1_W:DataTypes.FLOAT,
        Pac_W:DataTypes.FLOAT,
        Epv1_today_kWh:DataTypes.FLOAT,
        Epv1_total_kWh:DataTypes.FLOAT,
    },)

    return Log
}