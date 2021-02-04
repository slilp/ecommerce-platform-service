const {
    v4: uuid
} = require('uuid');


module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'ProductInfo', {
            product_id: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                defaultValue: uuid()
            },
            name: {
                type: DataTypes.STRING(250)
            },
            category: {
                type: DataTypes.STRING(50)
            },
            sub_category: {
                type: DataTypes.STRING(50)
            },
            image_path: {
                type: DataTypes.STRING(250)
            },
            promotion_code_1: {
                type: DataTypes.STRING(50)
            },
            promotion_code_2: {
                type: DataTypes.STRING(50)
            },
            min_price: {
                type: DataTypes.DECIMAL(14, 4)
            },
            max_price: {
                type: DataTypes.DECIMAL(14, 4)
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
            tableName: 'product_info',
            timestamps: false

        }
    )

    model.associate = models => {
        model.hasMany(models.ProductSkuInfo, {
            foreignKey: 'product_id'
        });
        model.belongsTo(models.MarketplaceInfo, {
            foreignKey: 'marketplace_id',
            onDelete: 'CASCADE'
        });

    }


    return model;
}