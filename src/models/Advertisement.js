module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'Advertisement', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            adsType: {
                type: DataTypes.STRING(50),
                field: 'ads_type'
            },
            adsName: {
                type: DataTypes.STRING(100),
                field: 'ads_name'
            },
            priority: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            imageUrl: {
                type: DataTypes.STRING(250),
                field: 'image_url'
            },
            clickUrl: {
                type: DataTypes.STRING(250),
                field: 'click_url'
            },
            startDate: {
                type: DataTypes.DATE,
                field: 'start_date'
            },
            expiredDate: {
                type: DataTypes.DATE,
                field: 'expired_date'
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                field: 'isActive'
            }
        }, {
            tableName: 'advertisement'
        }
    );

    return model;
}