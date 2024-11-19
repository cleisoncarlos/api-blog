
import CategoryRepository from '../repositories/category.repository.js'
import slugify from 'slugify';


async function createCategory(category) {
category.slug = slugify(category.title , { lower: true, strict: true });
  return await CategoryRepository.createCategory(category); 
}

async function getCategory(id) {
  return await CategoryRepository.getCategory(id);
}

async function getCategorys() {
    return await CategoryRepository.getCategorys();
}

async function deleteCategory(id) {
  await CategoryRepository.deleteCategory(id);
}

async function updateCategory(category) {
  await CategoryRepository.updateCategory(category);
}


export default {
  createCategory,
  getCategory,
  getCategorys,
  deleteCategory,
  updateCategory
};