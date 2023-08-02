const { Router } = require('express');
const categoryControllers = require('../controllers/categoryControllers');

const router = Router();

router.get('/', categoryControllers.getCategories);
router.get('/:id', categoryControllers.getCategoryById);
router.post('/', categoryControllers.createCategory);
router.put('/:id', categoryControllers.updateCategory);
router.delete('/:id', categoryControllers.deleteCategory);

module.exports = router;
