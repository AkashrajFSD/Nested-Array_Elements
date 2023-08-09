function flattenNestedArray(arr) {
  const flattenedArray = [];

  function flatten(node) {
    flattenedArray.push(node);
    if (node.children) {
      node.children.forEach(child => {
        flatten(child);
      });
    }
  }

  arr.forEach(item => {
    flatten(item);
  });

  return flattenedArray;
}

// Sample data
const nestedArray = [
  {
    "id": "1R",
    "name": "Retail",
    "parentId": null,
    "children": [
      // ...
    ]
  },
  {
    "id": "2H",
    "name": "Healthcare",
    "parentId": null,
    "children": [
      // ...
    ]
  }
];

const flattenedArray = flattenNestedArray(nestedArray);
console.log(flattenedArray);
