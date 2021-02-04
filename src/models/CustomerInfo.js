const {
    v4: uuid
} = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'CustomerInfo', {
            customer_id: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                defaultValue: uuid()
            },
            username: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(100)
            },
            first_name: {
                type: DataTypes.STRING(20)
            },
            last_name: {
                type: DataTypes.STRING(100)
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
            birth_date: {
                type: DataTypes.DATE
            },
            profile_image_path: {
                type: DataTypes.STRING(250)
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
            register_date: {
                type: DataTypes.DATE
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            updated_at: {
                type: DataTypes.DATE
            }
        }, {
            tableName: 'customer_info',
            timestamps: false

        }
    );

    model.associate = models => {
        model.hasMany(models.CustomerAddress, {
            foreignKey: 'customer_id'
        });
        model.hasMany(models.Order, {
            foreignKey: 'customer_id'
        });
    }


    return model;

}