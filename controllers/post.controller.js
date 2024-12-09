import PostService from '../services/post.service.js'

async function createPost(req, res, next) { 
  try { 
    let post = req.body; 
    console.log('Dados do post recebidos:', post); 
console.log(`A IMAGEM É ESSA ${req.file}`)

     // Verifica se o arquivo foi enviado 
     if (!req.file) { 
      throw new Error("A imagem é obrigatória para criar um post!");
     } 
     // Adiciona o caminho da imagem ao objeto post 
     const urlImagePost = `../public/${req.file.filename}`; 
     post.urlImagePost = urlImagePost; 

     console.log('Caminho da imagem:', urlImagePost); 


     // Verifica se todas as informações obrigatórias do post estão presentes 
     if (!post.title || !post.categoryId || !post.content
     ) { 
      throw new Error("Todas as informações do post são obrigatórias!"); 
    }


     
   
    // Salva o post no banco de dados 
    post = await PostService.createPost(post); 
    console.log('Post salvo:', post); 

   

    // Responde ao cliente 
    res.status(201).send(post); 
    logger.info(`POST /post - ${JSON.stringify(post)}`); 
  } catch (err) { 
    console.error('Erro ao criar post:', err.message);
     next(err); 
    } 
  }

//========================

async function getPost(req, res, next) {
  try {
    res.send(await PostService.getPost(req.params.id));
    logger.info("GET /post");
  } catch (err) {
    next(err);
  }
}

//=======================



async function getPosts(req, res, next) {
    try {
      const posts = await PostService.getPosts();
      res.send(posts);
      logger.info("GET /posts");
    } catch (err) {
      next(err);
    }
  }
  

//======================

async function deletePost(req, res, next) {
  try {
    await PostService.deletePost(req.params.id);
    res.end();
    logger.info("DELETE /post");
  } catch (err) {
    next(err);
  }
}

//=============================

async function updatePost(req, res, next) {
  try {
    let post = req.body;
    if (
      !post.id ||
      !post.name ||
      !post.email ||
      !post.password
    ) {
      throw new Error("Todas as informações são obrigatórias !");
    }
    post = await PostService.updatePost(post);
    res.send(post);
    logger.info(`PUT /post - ${JSON.stringify(post)}`);
   } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPost,
  getPosts,
  deletePost,
  updatePost,
};