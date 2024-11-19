import CategoryService from '../services/category.service.js'

async function createCategory(req, res, next) {
  try {
    let category = req.body;
     
    if (
      !category.title

    ) {
      throw new Error("Todas as informações são obrigatórias !");
    }
    category = await CategoryService.createCategory(category);
    res.send(category);
    logger.info(`POST /category - ${JSON.stringify(category)}`);

  } catch (err) {
    next(err);
  }
}

//========================

async function getCategory(req, res, next) {
  try {
    res.send(await CategoryService.getCategory(req.params.id));
    logger.info("GET /category");
  } catch (err) {
    next(err);
  }
}

//=======================

async function getCategorys(req, res, next) {
    try {
      const categories = await CategoryService.getCategorys();
      res.send(categories);
      logger.info("GET /categories");
    } catch (err) {
      next(err);
    }
  }
  
//======================

async function deleteCategory(req, res, next) {
  try {
    await CategoryService.deleteCategory(req.params.id);
    res.end();
    logger.info("DELETE /category");
  } catch (err) {
    next(err);
  }
}

//=============================

async function updateCategory(req, res, next) {
  try {
    let category = req.body;
    if (
      !category.id ||
      !category.title

    ) {
      throw new Error("Todas as informações são obrigatórias !");
    }
    category = await CategoryService.updateCategory(category);
    res.send(category);
    logger.info(`PUT /category - ${JSON.stringify(category)}`);
    logger.info("PUT /category");
  } catch (err) {
    next(err);
  }
}

export default {
  createCategory,
  getCategory,
  getCategorys,
  deleteCategory,
  updateCategory,
};