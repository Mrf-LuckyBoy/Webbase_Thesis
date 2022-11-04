
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        Username:DataTypes.STRING,
        Password:DataTypes.STRING,
        fullname:DataTypes.STRING
    },)
    User.prototype.comparePassword = function (Password) {
        if (Password == this.Password){
            return true
        }
        return false
    }

    User.associate = function(models) {}

    return User
}