const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    comments: {
        type: String
    }
}, {timestamps: true})


const BookStore = mongoose.model("BookStore", bookSchema);


class DBUtility {

    static deleteBook(id) {
        return new Promise((resolve, reject) => {
            BookStore.findByIdAndDelete(id, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`Deleted book ${id} successfully`);
                }
            });
        });
    }
}

exports.DBUtility = DBUtility;

module.exports = mongoose.model("BookStore", bookSchema);