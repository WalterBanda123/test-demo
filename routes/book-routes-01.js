
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const _Book = require('./../database/models/Book');
const { StatusCodes } = require('http-status-codes');

//create book
router.route('/').post(async (request, response) => {
    try {
        const { title, description, pages } = request.body;
        const dbResponse = await _Book.create({
            _id: new mongoose.Types.ObjectId(),
            title,
            description,
            pages
        });
        dbResponse.save()
        response.status(StatusCodes.CREATED)
            .json({ message: 'Created a book record', book: dbResponse })

    } catch (error) {
        response.status(StatusCodes.CONFLICT)
            .json({ message: 'Failed to create record', error })
    }
});

router.route('/').get(async (request, response) => {
    try {
        const dbResponse = await _Book.find({})
        response.status(StatusCodes.OK).json({ message: 'Fetched books', books: dbResponse })
    } catch (error) {
        response.status(StatusCodes.CONFLICT)
            .json({ message: 'Failed to fetch records', error })
    }
});

module.exports = router