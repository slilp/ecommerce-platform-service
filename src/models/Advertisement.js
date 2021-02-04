module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'Advertisement', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            ads_type: {
                type: DataTypes.STRING(50)
            },
            ads_name: {
                type: DataTypes.STRING(100)
            },
            priority: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            image_url: {
                type: DataTypes.STRING(250)
            },
            click_url: {
                type: DataTypes.STRING(250)
            },
            start_date: {
                type: DataTypes.DATE
            },
            expired_date: {
                type: DataTypes.DATE
            },
            is_active: {
                type: DataTypes.BOOLEAN
            }
        }, {
            tableName: 'advertisement'
        }
    );

    return model;
}