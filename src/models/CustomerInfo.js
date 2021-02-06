const {
    v4: uuid
} = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'CustomerInfo', {
            customerId: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                defaultValue: uuid(),
                field : 'customer_id'
            },
            username: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(100)
            },
            firstName: {
                type: DataTypes.STRING(20),
                field : 'first_name'
            },
            lastName: {
                type: DataTypes.STRING(100),
                field : 'last_name'
            },
            title: {
                type: DataTypes.STRING(20)
            },
            email: {
                type: DataTypes.STRING(100)
            },
            mobile: {
                type: DataTypes.STRING(15)
            },
            birthDate: {
                type: DataTypes.DATE,
                field : 'birth_date'
            },
            profileImagePath: {
                type: DataTypes.STRING(250),
                field : 'profile_image_path'
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
                field : 'isActive'
            },
            registerDate: {
                type: DataTypes.DATE,
                field : 'register_date'
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                field : 'created_at'
            },
            updatedAt: {
                type: DataTypes.DATE,
                field : 'updated_at'
            }
        }, {
            tableName: 'customer_info',
            timestamps: false

        }
    );

    model.associate = models => {
        model.hasMany(models.CustomerAddress, {
            foreignKey: 'customer_id',
        });
        model.hasMany(models.Order, {
            foreignKey: 'customer_id'
        });
        model.hasMany(models.ProductInfo, {
            foreignKey: 'customer_id'
        });
    }


    return model;

}