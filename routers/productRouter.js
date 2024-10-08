import express from 'express';
import productController from '../controllers/productController.js';
import productReqValidator from '../middleware/productReqValidator.js';

const productRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 *                   color:
 *                     type: string
 *                   stock:
 *                     type: integer
 *       500:
 *         description: Server error
 */

/**
 * @usage : Get all products
 * @url : http://localhost:8080/products
 * @params : none
 * @method : GET
 * @access : PUBLIC
 */

productRouter.get('/products', productController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 price:
 *                   type: number
 *                 color:
 *                   type: string
 *                 stock:
 *                   type: integer
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */

/**
 * @usage : Get a product by ID
 * @url : http://localhost:8080/products/:id
 * @urlparams : id
 * @params : none
 * @method : GET
 * @access : PUBLIC
 */

productRouter.get('/products/:id', productController.getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               color:
 *                 type: string
 *               stock:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Product created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

/**
 * @usage : Create a product
 * @url : http://localhost:8080/products
 * @params : name, price, color, stock
 * @method : POST
 * @access : PUBLIC
 */

productRouter.post(
  '/products/',
  productReqValidator,
  productController.createProduct
);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               color:
 *                 type: string
 *               stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */

/**
 * @usage : Update a product by ID
 * @url : http://localhost:8080/products/:id
 * @urlparams : id
 * @params : name, price, color, stock
 * @method : PUT
 * @access : PUBLIC
 */

productRouter.put(
  '/products/:id',
  productReqValidator,
  productController.updateProduct
);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */

/**
 * @usage : Delete a product by ID
 * @url : http://localhost:8080/products/:id
 * @urlparams : id
 * @params : none
 * @method : DELETE
 * @access : PUBLIC
 */

productRouter.delete('/products/:id', productController.deleteProduct);

export default productRouter;
