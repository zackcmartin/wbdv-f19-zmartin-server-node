var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen('4000')

var universityDao = require('../data/daos/university.dao.server.js')


//Student calls

function createStudent(req, res) {
	var student = req.body;
	res.json(universityDao.createStudent(student))
}

function deleteStudent(req, res) {
	var sid = req.params['id'];
	res.json(universityDao.deleteStudent(sid))
}

function findAllStudents(req, res) {
	res.json(universityDao.findAllStudents());
}

function findStudentById(req, res) {
	res.json(
		universityDao.findStudentById(req.params['id'])
	)
}

function updateStudent(req, res) {
	var studentId = req.params['id'];
	var studentUpdates = req.body
	res.json(universityDao.updateStudent(studentId, studentUpdates))
}



//Question calls


function createQuestion(req, res) {
	var question = req.body;
	res.json(universityDao.createQuestion(question))
}

function findAllQuestions(req, res) {
	res.json(universityDao.findAllQuestions());
}
function findQuestionById(req, res) {
	res.json(
		universityDao.findQuestionById(req.params['id'])
	)
}

function updateQuestion(req, res) {
	var questionId = req.params['id'];
	var questionUpdates = req.body
	res.json(universityDao.updateQuestion(questionId, questionUpdates))
}

function deleteQuestion(req, res) {
	var qid = req.params['id'];
	res.json(universityDao.deleteQuestion(qid))
}



//Answer calls


function findAllAnswers(req, res) {
	res.json(universityDao.findAllAnswers());
}

function findAnswerById(req, res) {
	res.json(
		universityDao.findAnswerById(req.params['aid'])
	)
}

function findAnswersByQuestion(req, res) {
	res.json(
		universityDao.findAnswersByQuestion(req.params['qid'])
	)
}

function findAnswersByStudent(req, res) {
	res.json(
		universityDao.findAnswersByStudent(req.params['sid'])
	)
}

function findAnswersByStudentsQuestions(req, res) {
	res.json(
		universityDao.findAnswersByStudentsQuestions(req.params['sid'], req.params['qid'])
	)
}

function createAnswer(req, res) {
	const answer = req.body;
	const sid = req.params['sid'];
	const qid = req.params['qid'];
	answer['student'] = sid;
	answer['question'] = qid;
	res.json(
		universityDao.answerQuestion(sid, qid, answer)
	)
}


//Student
app.post("/api/student", createStudent); //
app.get("/api/student", findAllStudents); //
app.get("/api/student/:id", findStudentById); //
app.put('/api/student/:id', updateStudent); //
app.delete("/api/student/:id", deleteStudent); //

//Questions
app.post("/api/question", createQuestion); //
app.get("/api/question", findAllQuestions); //
app.get("/api/question/:id", findQuestionById); //
app.put("/api/question/:id", updateQuestion); //
app.delete("/api/question/:id", deleteQuestion);

//Answers
app.get("/api/answer", findAllAnswers);
app.get("/api/answer/:aid", findAnswerById);
app.get("/api/question/:qid/answer", findAnswersByQuestion);
app.get("/api/student/:sid/answer", findAnswersByStudent);
app.get("/api/student/:sid/question/:qid/answer", findAnswersByStudentsQuestions);
app.get("/api/question/:qid/student/:sid/answer", findAnswersByStudentsQuestions);
app.post("/api/student/:sid/question/:qid/answer", createAnswer);