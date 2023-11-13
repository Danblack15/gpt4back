const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register route
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password)
            return res.json({
                status: 'bad',
                msg: 'Пароль или Имя пользователя пустое!'
            });

        const trimmedUsername = username.trim();

        if (trimmedUsername.length < 4)
            return res.json({
                status: 'bad',
                msg: 'Имя пользователя должно содержать минимум 4 символа'
            });

        if (username.trim().length > 20)
            return res.json({
                status: 'bad',
                msg: 'Имя пользователя не должно содержать больще 20 символов'
            })

        const existUser = await User.findOne({ username });

        if (existUser)
            return res.json({
                status: 'bad',
                msg: 'Пользователь уже существует'
            })

        const hashedPass = await bcrypt.hash(password, 10);

        const newuser = await new User({
            username: trimmedUsername,
            password: hashedPass
        });

        const savedUser = await newuser.save();

        const token = await jwt.sign({ user: existUser }, "tokensecret");

        res.json({
            status: 'ok',
            msg: 'Вы успешно зарегистрировались!',
            user: savedUser,
            token,
        });

    } catch (error) {
        console.log(error);
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password)
            return res.json({
                status: 'bad',
                msg: 'Пароль или Имя пользователя пустое!'
            });

        const existUser = await User.findOne({ username });

        if (!existUser)
            return res.json({
                status: 'bad',
                msg: 'Пользователь не найден'
            })

        const comparedPass = await bcrypt.compare(password, existUser.password);

        if (!comparedPass) 
            return res.json({
                status: 'bad',
                msg: 'Неправильный пароль'
            })

        const token = await jwt.sign({ user: existUser }, "tokensecret");

        res.json({
            status: 'ok',
            msg: 'Вы успешно залогинились!',
            user: existUser,
            token,
        });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;