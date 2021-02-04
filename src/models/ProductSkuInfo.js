const {
    v4: uuid
} = require('uuid');


module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'ProductSkuInfo', {
            sku_id: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                defaultValue: uuid()
            },
            selector_key: {
                type: DataTypes.STRING(50)
            },
            selector_value: {
                type: DataTypes.STRING(50)
            },
            price: {
                type: DataTypes.DECIMAL(14, 4)
            },
            is_active: {
                type: DataTypes.BOOLEAN
            }
        }, {
            tableName: 'product_sku_info',
            timestamps: false

        }
    )


    model.associate = models => {
        model.belongsTo(models.ProductInfo, {
            foreignKey: 'product_id',
            onDelete: 'CASCADE'
        });
        model.hasMany(models.OrderCart, {
            foreignKey: 'sku_id'
        });
    }



    return model;
}