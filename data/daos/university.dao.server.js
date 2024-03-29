
 var students = require('../students.json');
 var questions = require('../questions.json');
 var answers = require('../answers.json');

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
function findStudentById(id) {
	return students.find(student => student._id == id)
}

function updateStudent(studentId, studentUpdates) {
	var index = students.findIndex(student => student._id == studentId)
	if (index != -1) {
		studentUpdates['_id'] = parseInt(studentId);
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
function findQuestionById(id) {
	return questions.find(question => question._id == id)
}
function updateQuestion(questionId, questionUpdates) {
	var index = questions.findIndex(question => question._id == questionId)
	if (index != -1) {
		questionUpdates['_id'] = parseInt(questionId);
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

function findAnswerById(id) {
	return answers.find(answer => answer._id == id)
}

function findAnswersByQuestion(questionId) {
	return answers.filter(answer => answer.question == questionId)
}


function findAnswersByStudent(studentId) {
	return answers.filter(answer => answer.student == studentId)
}

function findAnswersByStudentsQuestions(sid, qid) {
	return answers.filter(answer => (answer.student == sid && answer.question == qid))
}

function answerQuestion(studentId, questionId, answer) {
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
	answerQuestion
};