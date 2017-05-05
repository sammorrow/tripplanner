const Promise = require('bluebird')
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');

const Place = db.define('place', {
    address: {
      type: Sequelize.STRING,
      allowNull: 'false'
    },
    city: {
      type: Sequelize.STRING,
      allowNull: 'false'
    },
    state:{
      type: Sequelize.STRING(2),
      allowNull: 'false'
    },
    phone:{
      type: Sequelize.STRING(12)
    },
    location:{
      type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
  })

const Hotel = db.define('hotel',{
  name: {
    type: Sequelize.STRING,
    allowNull: 'false'
  },
  num_stars: {
    type: Sequelize.RANGE(Sequelize.DECIMAL),
    allowNull: 'false',
    validate: {min: 1, max: 5}
  },
  amenities: {
    type: Sequelize.STRING
  }
})

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: 'false'
  },
  age_range: {
    type: Sequelize.STRING
  }
})

const Restaurant = db.define('restaurant',{
  name: {
    type: Sequelize.STRING,
    allowNull: 'false'
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.RANGE(Sequelize.DECIMAL),
    allowNull: 'false',
    validate: {min: 1, max: 5}
  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db: db,
  Place: Place,
  Hotel: Hotel,
  Restaurant: Restaurant,
  Activity: Activity
};
