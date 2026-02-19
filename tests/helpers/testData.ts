export const testUsers = {
	admin: {
		username: process.env.USER_NAME,
		password: process.env.PASSWORD,
	},
	invalid: {
		username: "invalidUser",
		password: "invalidPass",
	},
};

export const testBooks = {
	validBook: {
		title: "AI the next",
		author: "Shivakumar",
		publicationDate: "2022-01-10",
		genre: "Fiction",
		isbn: "9780694009090",
		price: "25.99",
	},
	updatedBook: {
		title: "AI genesis",
		author: "ShivakumarKolkar",
		publicationDate: "2023-02-10",
		genre: "Fiction",
		isbn: "1234960890",
		price: "30.99",
	},
};

export const loginPageLabelNames = {
	usernameLabel: "Username",
	passwordLabel: "Password",
	loginHeader: "Login",
};
