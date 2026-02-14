export const testUsers = {
  admin: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
},
invalid:{
  username: 'invalidUser',
  password: 'invalidPass'   
}
};

export const testBooks = {
  validBook: {
    title: 'mybook',
    author :'Shivakumar',
    year: '2022',
    genre: 'Fiction',
    isbn: '1234567890', 
    price: '25.99'
  },
  updatedBook: {
    title: 'updatedBook',
    author : 'Shivakumar',
    year: '2022', 
    genre: 'Fiction',
    isbn: '1234567890', 
    price: '30.99'
  }
};