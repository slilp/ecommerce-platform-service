module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'Order', {
            orderId: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                field: 'order_id'
            },
            orderDate: {
                type: DataTypes.DATE,
                field: 'order_date'
            },
            note: {
                type: DataTypes.STRING(200)
            },
            orderStatus: {
                type: DataTypes.STRING(50),
                defaultValue: "ordering",
                field: 'order_status'
            },
            customerId: {
                type: DataTypes.STRING(50),
                field : 'customer_id'
            }
        }, {
            tableName: 'order',
            timestamps: false

        }
    )

    model.associate = models => {
        model.belongsTo(models.CustomerInfo, {
            foreignKey: 'customer_id',
            onDelete: 'CASCADE'
        });
        model.hasMany(models.OrderCart, {
            as : 'orderCart',
            foreignKey: 'order_id'
        });
    }

    return model;
}