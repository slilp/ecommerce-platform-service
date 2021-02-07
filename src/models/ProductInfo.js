
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'ProductInfo', {
            productId: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                field: 'product_id'
            },
            productName: {
                type: DataTypes.STRING(250),
                field: 'product_name'
            },
            category: {
                type: DataTypes.STRING(50)
            },
            subCategory: {
                type: DataTypes.STRING(50),
                field: 'sub_category'
            },
            imagePath: {
                type: DataTypes.STRING(),
                field: 'image_path'
            },
            promotionCode1: {
                type: DataTypes.STRING(50),
                field: 'promotion_code_1'
            },
            promotionCode2: {
                type: DataTypes.STRING(50),
                field: 'promotion_code_2'
            },
            displayPrice: {
                type: DataTypes.DECIMAL(14, 4),
                field: 'min_price'
            },
            netPrice: {
                type: DataTypes.DECIMAL(14, 4),
                field: 'net_price'
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue : true,
                field: 'is_active'
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                field: 'created_at'
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at'
            },
            marketplaceId: {
                type: DataTypes.STRING(50),
                field: 'marketplace_id'
            },
            customerId: {
                type: DataTypes.STRING(50),
                field: 'customer_id'
            }
        }, {
            tableName: 'product_info',
            timestamps: false

        }
    )

    model.associate = models => {
        model.hasMany(models.OrderCart, {
            foreignKey: 'product_id'
        });
        model.hasMany(models.ProductImage, {
            foreignKey: 'product_id'
        });
        model.belongsTo(models.MarketplaceInfo, {
            foreignKey: 'marketplace_id',
            onDelete: 'CASCADE',
            constraints:false 
        });
        model.belongsTo(models.CustomerInfo, {
            foreignKey: 'customer_id',
            constraints:false 
        });
    }


    return model;
}