/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
  
  let categories = transactions.reduce( (result, transaction) => {
   const { category, price } = transaction;

    if(!result[category]) {
    result[category] = { 'category': category, 'totalSpent': 0 };
    output.push(result[category]);
   }
   result[category].totalSpent += price;

   return result;
  }, {});

  return output;
}

const transactions = [{
  id: 1,
  timestamp: 1656076800000,
  price: 40,
  category: 'Food',
  itemName: 'Pasta',
},
{
  id: 2,
  timestamp: 1656259600000,
  price: 40,
  category: 'Food',
  itemName: 'Burger',
},
{
  id: 3,
  timestamp: 1656019200000,
  price: 10,
  category: 'Clothing',
  itemName: 'T-Shirt',
},
{
  id: 4,
  timestamp: 1656364800000,
  price: 300,
  category: 'Electronics',
  itemName: 'Laptop',
},
{
  id: 5,
  timestamp: 1656105600000,
  price: 250,
  category: 'Clothing',
  itemName: 'Jeans',
},
{
  id: 6,
  timestamp: 1656105600100,
  price: 555,
  category: 'Electronics',
  itemName: 'Mobile',
},
];

const output = calculateTotalSpentByCategory(transactions);
console.log(output);

module.exports = calculateTotalSpentByCategory;
