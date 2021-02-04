module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'CustomerAddress', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            address_name: {
                type: DataTypes.STRING(50)
            },
            address_ref: {
                type: DataTypes.INTEGER
            },
            address_info: {
                type: DataTypes.STRING(200)
            },
            is_default: {
                type: DataTypes.BOOLEAN
            }
        }, {
            tableName: 'customer_address',
            timestamps: false

        }
    )

    model.associate = models => {
        model.belongsTo(models.CustomerInfo, {
            foreignKey: 'customer_id',
            onDelete: 'CASCADE'
        });
        model.belongsTo(models.Address, {
            foreignKey: 'address_id',
            onDelete: 'CASCADE'
        });
    }

    return model;

}