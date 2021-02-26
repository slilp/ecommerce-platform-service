module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'CustomerAddress', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            addressName: {
                type: DataTypes.STRING(50),
                field : 'address_name'
            },
            addressInfo: {
                type: DataTypes.STRING(500),
                field : 'address_info'
            },
            zipCode: {
                type: DataTypes.STRING(10),
                field : 'zipCode'
            },
            isDefault: {
                type: DataTypes.BOOLEAN,
                field : 'is_default'
            },
            customerId: {
                type: DataTypes.STRING(50),
                field : 'customer_id'
            }
            // ,
            // addressId: {
            //     type: DataTypes.STRING(50),
            //     field : 'address_id'
            // }
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
        // model.belongsTo(models.Address, {
        //     as : 'address',
        //     foreignKey: 'address_id',
        //     onDelete: 'CASCADE'
        // });
    }

    return model;

}