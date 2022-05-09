import express from 'express';
import { signin, signup } from '../controllers/users.js';
import User from '../models/User.js';

const router = express.Router();

router.get('/',async (req,res) => {
    // res.send("The Users are Confidential");
    try {
        const Users = await User.find();
        console.log(Users);
        res.send(Users);
    } catch (error) {
        res.send.json({ message: error.message });
    }
})
router.get('/signin', signin);
router.get('/signup', signup);

export default router;