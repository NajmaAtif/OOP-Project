#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmStart = async (persons) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "whom would you like to interact with?",
            choices: [
                { name: "Staff", value: "Staff" },
                { name: "Student", value: "Student" },
                { name: "Exit", value: "Exit" },
            ]
        });
        if (ans.select == "Staff") {
            console.log("You approached the staff room,please feel free to ask any question.");
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello! I am ${name.name}. Nice to meet you!`);
                console.log("New student added.");
                console.log("Current student List:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello! I am ${student.name}. Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programmStart(persons);
