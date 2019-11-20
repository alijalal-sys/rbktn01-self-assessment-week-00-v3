// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest) {
  var newArr = [];
  
  for(var key in familyTree){ // What i am trying to do is iterate over the object 
    if(Array.isArray(familyTree[key])){ // And if the one of the values is an array
        filterFamilyMembers(familyTree[key], truthTest); // We re-invoke the function with this value
    }

    // The problem Here which is the this condition i don't know what am i missing 
    if(truthTest(familyTree[key])){ // What i am trying to do is if the condition is true (which is the function it return either true or false)
       newArr.push(familyTree[key]); // Push it !
    }
  }

  return newArr;
};

