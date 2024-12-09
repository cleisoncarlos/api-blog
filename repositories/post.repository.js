
import Post from '../models/post.model.js'
import Category from '../models/category.model.js'


async function createPost(post) {
  try {
    Post.create(post);
    // esse retourn precisa para mostrar no log
    return await post
  } catch (err) {
    throw err;
  }
}

async function getPost(id) {
  try {
    return await Post.findByPk(id, {
      attributes: { exclude: ['categoryId'] }, // Exclui o campo 'content'   
      include: [
        {
          model: Category,
          attributes: ['id', 'title'] // Campos específicos do modelo Category
         
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}


async function getPosts() {
    try {
      return await Post.findAll({   
        attributes: { exclude: ['categoryId'] }, // Exclui o campo 'content'     
          include: [
            {
              model: Category,
              attributes: ['id', 'title'] // Campos específicos do modelo Category
             
            },
          ],
        
      });
    } catch (err) {
      throw err;
    }
  }

// async function updatePost(post) {
//   try {
//     await Post.update(post, {
//       where: {
//         postId: post.postId,
//       }
//     })

//   }
// }

async function deletePost(id) {
  try {
    await Post.destroy({
      where: { clientId: id },
    });
  } catch (err) {
    throw err;
  }
}


export default {
  createPost,
  getPost,
  getPosts,
  // updatePost,
  deletePost,
};