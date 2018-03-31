module.exports = (sequelize, type) => {
    return sequelize.define('tag', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING
    })
}