module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'OrderCart', {
            cart_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            quantity: {
                type: DataTypes.INTEGER
            }
        }, {
            tableName: 'order_cart',
            timestamps: false

        }
    )

    model.associate = models => {
        model.belongsTo(models.Order, {
            foreignKey: 'order_id',
            onDelete: 'CASCADE'
        });
        model.belongsTo(models.ProductSkuInfo, {
            foreignKey:'sku_id',
            onDelete: 'CASCADE'
        });
    }


    return model;
}