const {
    v4: uuid
} = require('uuid');



module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'MarketplaceInfo', {
            marketplace_id: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                defaultValue: uuid()
            },
            name: {
                type: DataTypes.STRING(250)
            },
            description: {
                type: DataTypes.STRING()
            },
            mobile: {
                type: DataTypes.STRING(15)
            },
            email: {
                type: DataTypes.STRING(100)
            },
            latitude: {
                type: DataTypes.STRING(25)
            },
            longtitude: {
                type: DataTypes.STRING(25)
            },
            profile_image_path: {
                type: DataTypes.STRING(250)
            },
            background_image_path: {
                type: DataTypes.STRING(250)
            },
            order: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            is_active: {
                type: DataTypes.BOOLEAN
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            updated_at: {
                type: DataTypes.DATE
            }
        }, {
            tableName: 'marketplace_info',
            timestamps: false

        }
    )

    model.associate = models => {
        model.hasMany(models.ProductInfo, {
            foreignKey: 'marketplace_id'
        });
    }


    return model;
}