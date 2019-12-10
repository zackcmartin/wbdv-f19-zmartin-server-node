
var students = require('../data/students.json');
var questions = require('../data/questions.json');
var answers = require('../data/answers.json');

//Student functions

function createStudent(student) {
	students.push(student);
	return students;
}
function deleteStudent(sid) {
	var index = students.findIndex(student => student._id == sid)
	if (index != -1) {
		students.splice(index, 1)
		return students;
	}
	else{
		return students;
	}
}
function findAllStudents() {
	return students;
}
function findStudentById(sid) {
	return students.find(student => student._id == sid)
}

function updateStudent(studentId, studentUpdates) {
	var index = students.findIndex(student => student._id == studentId)
	if (index != -1) {
		students.splice(index, 1)
		students.push(studentUpdates)
		return students;
	}
	else{
		return students;
	}
}



//Question functions


function createQuestion(question) {
	questions.push(question);
	return questions;
}
function findAllQuestions() {
	return questions;
}
function findQuestionById(qid) {
	return questions.find(question => question._id == qid)
}
function updateQuestion(questionId, questionUpdates) {
	var index = questions.findIndex(question => question._id == questionId)
	if (index != -1) {
		questions.splice(index, 1)
		questions.push(questionUpdates)
		return questions;
	}
	else{
		return questions;
	}
}
function deleteQuestion(qid) {
	var index = questions.findIndex(question => question._id == qid)
	if (index != -1) {
		questions.splice(index, 1)
		return questions;
	}
	else{
		return questions;
	}
}


//Answer functions


function findAllAnswers() {
	return answers;
}

function findAnswerById(aid) {
	return answers.find(answer => answer._id == aid)
}

function findAnswersByQuestion(qid) {
	return answers.filter(answer => answer.question == qid)
}


function findAnswersByStudent(sid) {
	return answers.filter(answer => answer.student == sid)
}

function findAnswersByStudentsQuestions(sid, qid) {
	return answers.filter(answer => (answer.student == sid && answer.question == qid))
}

function createAnswer(answer) {
	answers.push(answer);
	return answers;
}

module.exports = {
	createStudent,
	deleteStudent,
	findAllStudents,
	findStudentById,
	updateStudent,

	createQuestion,
	findAllQuestions,
	findQuestionById,
	updateQuestion,
	deleteQuestion,

	findAllAnswers,
	findAnswerById,
	findAnswersByQuestion,
	findAnswersByStudent,
	findAnswersByStudentsQuestions,
	createAnswer
};