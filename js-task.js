const name = 'Sunday Morenikeji';
const courses = ['HTML', 'CSS', 'JavaScript', 'Flutter'];

console.log(name); // Displaying the name

console.log('**********'); // This is for beautifying the outputs

// Using For-of-loop to display the courses
for(let course of courses) {
    console.log(course);
}

console.log('**********'); // This is for beautifying the outputs

// Using For-Loop to display numbers from 1 - 200
for(let index = 1; index <= 200; index++) {
    if(courses.length % 2 === 1 && index % 2 === 1)
        console.log(index);
    else if(courses.length % 2 === 0 && index % 2 === 0)
        console.log(index);
}
