module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'OrderCart', {
            cartId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'cart_id'
            },
            quantity: {
                type: DataTypes.INTEGER
            },
            orderId: {
                type: DataTypes.STRING(50),
                field: 'order_id'
            },
            productId: {
                type: DataTypes.STRING(50),
                field: 'product_id'
            },
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
        model.belongsTo(models.ProductInfo, {
            as:'productInfo',
            foreignKey:'product_id',
            onDelete: 'CASCADE'
        });
    }


    return model;
}