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
            subDistrict: {
                type: DataTypes.STRING(50),
                field : 'sub_district'
            },
            zipCode: {
                type: DataTypes.STRING(50),
                field : 'zip_code'
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