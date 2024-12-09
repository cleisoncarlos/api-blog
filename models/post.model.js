import { DataTypes } from 'sequelize';
import db from '../database/db.js'

import Category from './category.model.js' 

const Post = db.define('posts', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlImagePost: {
        type: DataTypes.STRING,
       // allowNull: false,
      },
    published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, 

// underscore true mapeia camelcase pra trabalhar com snakecase que ta no banco de dados
//{underscored: true},
{ timestamps: true }

)

// Estabelecendo relações 
Post.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Post, { foreignKey: 'categoryId' });


//Post.sync({ force: true });
//console.log("A tabela de users foi (re)criada!");

export default Post

