module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'Address', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            province: {
                type: DataTypes.STRING(50)
            },
            district: {
                type: DataTypes.STRING(50)
            },
            sub_district: {
                type: DataTypes.STRING(50)
            },
            zip_code: {
                type: DataTypes.STRING(50)
            }
        }, {
            tableName: 'address',
            timestamps: false
        }
    )

    model.associate = models => {
        model.hasMany(models.CustomerAddress, {
            foreignKey: 'address_id'
        });
    }

    return model;
}