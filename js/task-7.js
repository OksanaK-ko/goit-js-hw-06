// Write code under this line
const calculateTotalBalance = users =>
  users.reduce((acc, { balance }) => acc + balance, 0);

console.log(calculateTotalBalance(users));
// 20916
