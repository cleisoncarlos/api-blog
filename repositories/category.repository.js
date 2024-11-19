import Category from "../models/category.model.js";

async function createCategory(category) {
  try {
    Category.create(category);
    return await category
  } catch (err) {
    throw err;
  }
}


async function getCategory(id) {
  try {
    return await Category.findByPk(id);
  } catch (err) {
    throw err;
  }
}


async function getCategorys() {
    try {
      return await Category.findAll( );
    } catch (err) {
      throw err;
    }
  }

// async function updateCategory(category) {
//   try {
//     await Category.update(category, {
//       where: {
//         categoryId: category.categoryId,
//       }
//     })

//   }
// }

async function deleteCategory(id) {
  try {
    await Category.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}


export default {
  createCategory,
  getCategory,
  getCategorys,
  // updateCategory,
  deleteCategory,
};