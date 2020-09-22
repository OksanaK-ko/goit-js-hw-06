// Write code under this line
const getUsersWithGender = (users, gender) =>
  users.filter(el => el.gender === gender).map(({ name }) => name);
console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */
