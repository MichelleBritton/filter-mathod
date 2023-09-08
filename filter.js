  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(person => person.name === "Paul");
console.log(paul);

// or you can shorten further
const paul1 = people.filter(p => p.name === "Paul");
console.log(paul1);

// Filter method always returns an array.  If you want to access the object itself appen [0]
const paul2 = people.filter(p => p.name === "Paul")[0];
console.log(paul2);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// Difficult to read
const candidates = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
  return strongSkills.length > 0;
})
console.log(candidates);

// Easier to read
const hasStrongSkills = student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
  return strongSkills.length > 0;
}

const candidates1 = students.filter(hasStrongSkills);
console.log(candidates1);

// Better way of doing it as more readable
const has5yearsExp = skill => skill.yrsExperience >=5;
const hasStrongSkills1 = student => student.skills.filter(has5yearsExp).length > 0;
const candidates2 = students.filter(hasStrongSkills1);
console.log(candidates2);

// Using map method to retrieve only the names 
const names = candidates2.map(cand => [cand.name])
console.log(names);