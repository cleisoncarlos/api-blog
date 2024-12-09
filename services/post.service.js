
import PostRepository from '../repositories/post.repository.js'
import slugify from 'slugify';

async function createPost(post) {
  // Gera o slug a partir do título
  post.slug = slugify(post.title, { lower: true, strict: true });
  return await PostRepository.createPost(post); 
}

async function getPost(id) {
  return await PostRepository.getPost(id);
}

async function getPosts() {
    return await PostRepository.getPosts();
  }

async function deletePost(id) {
  await PostRepository.deletePost(id);
}


async function updatePost(post) {
  await PostRepository.updatePost(post);
}


export default {
  createPost,
  getPost,
  getPosts,
  deletePost,
  updatePost
};