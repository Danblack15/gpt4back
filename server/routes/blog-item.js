const { Router } = require('express');
const router = Router();
const BlogItem = require('../models/BlogItem');
const mongoose = require('mongoose');

router.post('/newBlog', async (req, res) => {
    try {
        const { title, description, text, user, image } = req.body;

        if (!title || !text || !user)
            return res.json({
                status: 'bad',
                msg: 'Нет нужных данных!'
            });

        const newBlog = await new BlogItem({
            title: title,
            description: description,
            text: text,
            user: user,
            userId: user._id,
            image: image,
        });

        const savedBlog = await newBlog.save();

        res.json({
            status: 'ok',
            msg: 'Вы успешно добавили новую статью!',
            blogItem: savedBlog
        });

    } catch (error) {
        console.log(error);
    }
});

router.get('/usersBlog/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        const existBlog = await BlogItem.find({ userId: userId });

        res.json({
            status: 'ok',
            msg: 'Статьи успешно найдены!',
            blogList: existBlog
        });

    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const existBlog = await BlogItem.findById(new mongoose.Types.ObjectId(id));

        if (!existBlog)
            return res.json({
                status: 'bad',
                msg: 'Статья не найдена!',
            });

        res.json({
            status: 'ok',
            msg: 'Статья успешно найдена!',
            blogItem: existBlog
        });

    } catch (error) {
        console.log(error);
    }
});

router.get('/', async (req, res) => {
    let limit = req.query.limit;

    try {
        const blogListData = limit ? 
            await BlogItem.find().sort('-createdAt').limit(Number(limit)) : 
            await BlogItem.find().sort('-createdAt');

        if (!blogListData)
            return res.json({
                status: 'bad',
                msg: 'Ошибка получения статей!',
            });

        res.json({
            status: 'ok',
            msg: 'Статьи успешно получены!',
            blogList: blogListData
        });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;