import { DataTypes } from 'sequelize';
import db from '../database/db.js'



const Category = db.define('categories', {
  id: {
   // type: DataTypes.INTEGER,
   // autoIncrement: true,
   type: DataTypes.UUID, 
   defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  }, 

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, 
)

//Category.sync({force: true});

export default  Category ;