const User = require('../models/userModel')
const mongoose = require('mongoose')
require('dotenv').config()

const getUsers = (req, res) => {
    User.find().sort({ _id: -1 }).then(result => res.json(result))
}

const getSingleUser = (req, res) => {
    const { id } = req.params
    const mongoId = mongoose.Types.ObjectId(id.trim())

    User.findOne({ _id: mongoId }).then(result => res.status(200).json(result)).catch(err => console.log(err))
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        user.save()
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => console.log(err))
    } catch (err) {
        console.log(err);
    }
}

const updateUer = async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: false },)
            .then(response => res.status(200).json(response))
    } catch (err) {
        console.log(err);
    }
}

const deleteUer = (req, res) => {
    const { id } = req.params
    const mongoId = mongoose.Types.ObjectId(id.trim())
    User.findByIdAndDelete(mongoId).then((result) => res.status(200).json(result)).catch(err => console.log(err))
}

const toggleUserStatus = async (req, res) => {
    const { id } = req.params
    const { checked } = req.body

    const status = checked ? 'active' : 'inactive'

    try {
        await User.findOneAndUpdate({ _id: id }, { $set: { 'status': status } }, { new: false },)
            .then(response => res.status(200).json(response))
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getUsers,
    createUser,
    deleteUer,
    getSingleUser,
    updateUer,
    toggleUserStatus
}