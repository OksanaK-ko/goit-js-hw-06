// Write code under this line
const getUsersWithGender = (users, gender) =>
  users.map(({ name }) => users.filter(({ gender }) => gender === 'male'));
console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */
