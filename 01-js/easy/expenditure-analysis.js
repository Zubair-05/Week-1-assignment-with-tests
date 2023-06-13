/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = [];
  const map = new Map();
  for(const item of transactions){
    if(map.has(item.category)){
      map.set(item.category, map.get(item.category)+item.price)
    } else{
      map.set(item.category, item.price)
    }
  }

  for(const [key, value] of map.entries()){
    ans.push({category:key, totalSpent:value})
  }
  
  return ans;
}

module.exports = calculateTotalSpentByCategory;
