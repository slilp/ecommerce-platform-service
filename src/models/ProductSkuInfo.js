const {
    v4: uuid
} = require('uuid');


module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'ProductSkuInfo', {
            skuId: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                defaultValue: uuid(),
                field : 'sku_id'
            },
            selectorKey: {
                type: DataTypes.STRING(50),
                field : 'selector_key'
            },
            selectorValue: {
                type: DataTypes.STRING(50),
                field : 'selector_value'
            },
            price: {
                type: DataTypes.DECIMAL(14, 4)
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                field : 'is_active'
            },
            productId: {
                type: DataTypes.STRING(50),
                field: 'product_id'
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