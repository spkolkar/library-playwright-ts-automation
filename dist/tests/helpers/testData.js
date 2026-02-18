"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPageLabelNames = exports.testBooks = exports.testUsers = void 0;
exports.testUsers = {
    admin: {
        username: process.env.USER_NAME,
        password: process.env.PASSWORD
    },
    invalid: {
        username: 'invalidUser',
        password: 'invalidPass'
    }
};
exports.testBooks = {
    validBook: {
        title: 'AI the next',
        author: 'Shivakumar',
        year: '2022-01-10',
        genre: 'Fiction',
        isbn: '9780694009090',
        price: '25.99'
    },
    updatedBook: {
        title: 'updatedBook',
        author: 'Shivakumar',
        year: '2022',
        genre: 'Fiction',
        isbn: '1234567890',
        price: '30.99'
    }
};
exports.loginPageLabelNames = {
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    loginHeader: 'Login'
};
