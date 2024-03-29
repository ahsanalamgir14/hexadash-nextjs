const { Router} =  require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controller');
const { getBookings } = require('../controllers/booking.controller')
const { getClients } = require('../controllers/client.controller')

router.get('/users',getUsers);
router.get('/users/:id',getUserById);
router.post('/users',createUser);
router.post('/getBookings',getBookings);
router.post('/getClients',getClients);
router.delete('/users/:id',deleteUser);
router.put('/users/:id',updateUser);

module.exports = router;