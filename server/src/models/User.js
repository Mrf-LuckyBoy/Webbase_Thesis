
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        Username:DataTypes.STRING,
        Password:DataTypes.STRING,
        fullname:DataTypes.STRING
    })

    return User
}