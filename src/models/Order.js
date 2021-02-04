module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'Order', {
            order_id: {
                type: DataTypes.STRING(50),
                primaryKey: true,
            },
            order_date: {
                type: DataTypes.DATE
            },
            note: {
                type: DataTypes.STRING(200)
            },
            order_status: {
                type: DataTypes.STRING(50),
                defaultValue: "ordering"
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
            foreignKey: 'order_id'
        });
    }

    return model;
}