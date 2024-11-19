import { DataTypes } from 'sequelize';
import db from '../database/db.js'

const User = db.define('users', {
    id:{
      //  type: Sequelize.INTEGER,
     //   autoIncrement: true,
     type: DataTypes.UUID, 
     defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 


// underscore true mapeia camelcase pra trabalhar com snakecase que ta no banco de dados
//{underscored: true}

)

//User.sync({ force: true });
//console.log("A tabela de users foi (re)criada!");

export default User

