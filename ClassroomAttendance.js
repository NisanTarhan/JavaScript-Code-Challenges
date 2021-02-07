/*
    For this challenge, you'll use array and object de-structuring to return a list of students.
    Create a function called getStudents, which takes one argument, classroom. Classroom will contain
    a boolean value called hasTeachingAssistant and classList, which is an array of people in the classroom.
    The first value in classLists will be the teacher. If hasTeachingAssistant is true,
    The second value in the classList is the teaching assistant and the remaining values in the class list are the students.
    If hasTeachingAssistant is false, The second value through the end of the classList are the students.
    Your job is to return a list of students. You must use object and array de-structuring.
*/

function getStudents(classroom) {
    let { hasTeachingAssistant, classList } = classroom;
    let teacher, assistant, students;
    if (hasTeachingAssistant) {
        [teacher, assistant, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }
    return students;
}

const classroom = {
    hasTeachingAssistant: true,
    classList: ["Mehmet", "Nisan", "Ercan", "Ali", "Cemre", "Ayşe"]
}

console.log(getStudents(classroom));