let questions = ['Who is the current United State president?<br /><br />', 'Who first discover america?<br /><br />', 'When was the declaration of independence signed?<br /><br />', 'Where did the pilgrims land in america?<br /><br />', 'what did Paul Revere shout on his midnight ride in 1775?<br /><br />', 'What were the names of Columbus ships?<br /><br />', 'What started the great Chicago fire?<br /><br />', 'Why does the Liberty Bell have a crack in it?<br /><br />', 'When did American Civil War end?<br /><br />', 'Who paid for the State of Liberty?<br /><br />', ];

let options1 = ['<button class=buttons002 onclick=questions1C()>Donald Trump</button>', '<button class=buttons002 onclick=questions2C()>Leif Erikson</button>', '<button class=buttons002 onclick=questions3C()>August 2nd 1776</button>', '<button class=buttons002 onclick=questions4I()>WASHINGTON  DC</button>', '<button class=buttons002 onclick=questions5I()>Nothing</button>', '<button class=buttons002 onclick=questions6I()>Ship</button>', '<button class=buttons002 onclick=questions7I()>A cow kicking over a lantan</button>', '<button class=buttons002 onclick=questions8I()>It fell down</button>', '<button class=buttons002 onclick=questions9I()>July 4, 1863</button>','<button class=buttons002 onclick=questions10I()>Americans</button>',];

let options2 = [
	'<button class=buttons002 onclick=questions1I()>Warren Buffet</button>',
	'<button class=buttons002 onclick=questions2I()>Christopher Columbus</button>',
	'<button class=buttons002 onclick=questions3I()>July 4, 1776</button>',
	'<button class=buttons002 onclick=questions4C()>Unknown</button>',
	'<button class=buttons002 onclick=questions5C()>The regulars are coming</button>',
	'<button class=buttons002 onclick=questions6C()>The Santa Maria, the Santa clara and unknown</button>',
	'<button class=buttons002 onclick=questions7I()>Sunday foot Ball</button>',
	'<button class=buttons002 onclick=questions8I()>It was stollen</button>',
	'<button class=buttons002 onclick=questions9I()> June 1, 1864 </button>',
	'<button class=buttons002 onclick=questions10I()>Jewish leaders</button>',
];

let options3 = [
	'<button class=buttons002 onclick=questions1I()>Kevin Hart</button>',
	'<button class=buttons002 onclick=questions2I()>Leif Erikson</button>',
	'<button class=buttons002 onclick=questions3I()>June 6, 1776 </button>',
	'<button class=buttons002 onclick=questions4I()>NEW YORK</button>',
	'<button class=buttons002 onclick=questions5I()>Kill them</button>',
	'<button class=buttons002 onclick=questions6I()>Yoker</button>',
	'<button class=buttons002 onclick=questions7C()>it remains uncertain</button>',
	'<button class=buttons002 onclick=questions8C()>Shoddy craftsmanship</button>',
	'<button class=buttons002 onclick=questions9I()>September 16, 1948</button>',
	'<button class=buttons002 onclick=questions10I()>Black Panther</button>',
];

let options4 = [
	'<button class=buttons002 onclick=questions1I()>Joe Biden</button>',
	'<button class=buttons002 onclick=questions2I()>Judge W Bush</button>',
	'<button class=buttons002 onclick=questions3I()>September 14, 1776</button>',
	'<button class=buttons002 onclick=questions4I()>Plymouth Rock</button>',
	'<button class=buttons002 onclick=questions5I()>Non of the above</button>',
	'<button class=buttons002 onclick=questions6I()>Blue</button>',
	'<button class=buttons002 onclick=questions7I()>Daniel Pegleg</button>',
	'<button class=buttons002 onclick=questions8I()>The sun cracked it</button>',
	'<button class=buttons002 onclick=questions9C()>May 9th 1865</button>',
	'<button class=buttons002 onclick=questions10C()>France and new York</button>',
];


let correct = [
	'"Donald trump" Hi five, Correct',
	'Correct keep going!',
	'Correct',
	'Correct',
	'Correct wow',
	'Correct',
	'Correct',
	'Correct',
	'yesss Correct',
	'Correct awesome',
];
let incorrect = [
	'Incorrect',
	'Incorrect',
	'Incorrect its ok try again',
	'Incorrect your close',
	'Incorrect come on',
	'Incorrect you are loosing',
	'Incorrect you got this',
	'Incorrect google can help',
	'Incorrect sorry ',
	'Incorrect i told you',
];

let X = 0;
X++;
let Y = 0;
Y++;

function start() {
	hide.innerHTML = '';
	startMsg.innerHTML = '';
	firstQst.innerHTML = questions[0];
	fisrtOption.innerHTML = options1[0];
	secondOption.innerHTML = options2[0];
	thirdOption.innerHTML = options3[0];
	fourthOption.innerHTML = options4[0];
	question.innerHTML = X++;
}

function questions1C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[0] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new002()>Next</button>';
	scoreboard.innerHTML = Y++;
}

function questions1I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[0] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new002()>Next</button>';
}

function new002() {
	firstQst.innerHTML = questions[1];
	fisrtOption.innerHTML = options1[1];
	secondOption.innerHTML = options2[1];
	thirdOption.innerHTML = options3[1];
	fourthOption.innerHTML = options4[1];
	nextSession.innerHTML = '';
	correctOrIncorrectAnswer.innerHTML = '';
	question.innerHTML = X++;
}

function questions2C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[1] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new003()>Next</button>';
	scoreboard.innerHTML = Y++;
}

function questions2I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[1] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new003()>Next</button>';
}

function new003() {
	firstQst.innerHTML = questions[2];
	fisrtOption.innerHTML = options1[2];
	secondOption.innerHTML = options2[2];
	thirdOption.innerHTML = options3[2];
	fourthOption.innerHTML = options4[2];
	nextSession.innerHTML = '';
	correctOrIncorrectAnswer.innerHTML = '';
	question.innerHTML = X++;
}

function questions3C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[2] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new004()>Next</button>';
	scoreboard.innerHTML = Y++;
}

function questions3I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[2] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new004()>Next</button>';
}

function new004() {
	firstQst.innerHTML = questions[3];
	fisrtOption.innerHTML = options1[3];
	secondOption.innerHTML = options2[3];
	thirdOption.innerHTML = options3[3];
	fourthOption.innerHTML = options4[3];
	nextSession.innerHTML = '';
	correctOrIncorrectAnswer.innerHTML = '';
	question.innerHTML = X++;
}

function questions4C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[3] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new005()>Next</button>';
	scoreboard.innerHTML = Y++;
}

function questions4I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[3] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new005()>Next</button>';
}

function new005() {
	firstQst.innerHTML = questions[4];
	fisrtOption.innerHTML = options1[4];
	secondOption.innerHTML = options2[4];
	thirdOption.innerHTML = options3[4];
	fourthOption.innerHTML = options4[4];
	nextSession.innerHTML = '';
	correctOrIncorrectAnswer.innerHTML = '';
	question.innerHTML = X++;
}

function questions5C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[4] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new006()>Next</button>';
	scoreboard.innerHTML = Y++;
}

function questions5I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[4] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new006()>Next</button>';
}

function new006() {
	firstQst.innerHTML = questions[5];
	fisrtOption.innerHTML = options1[5];
	secondOption.innerHTML = options2[5];
	thirdOption.innerHTML = options3[5];
	fourthOption.innerHTML = options4[5];
	nextSession.innerHTML = '';
	correctOrIncorrectAnswer.innerHTML = '';
	question.innerHTML = X++;
}

function questions6C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[5] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new007()>Next</button>';
	scoreboard.innerHTML = Y++;
}

function questions6I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[5] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new007()>Next</button>';
}

function new007() {
	firstQst.innerHTML = questions[6];
	fisrtOption.innerHTML = options1[6];
	secondOption.innerHTML = options2[6];
	thirdOption.innerHTML = options3[6];
	fourthOption.innerHTML = options4[6];
	nextSession.innerHTML = '';
	correctOrIncorrectAnswer.innerHTML = '';
	question.innerHTML = X++;
}

function questions7C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[6] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new008()>Next</button>';
	scoreboard.innerHTML = Y++;
}

function questions7I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[6] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new008()>Next</button>';
}

function new008() {
	firstQst.innerHTML = questions[7];
	fisrtOption.innerHTML = options1[7];
	secondOption.innerHTML = options2[7];
	thirdOption.innerHTML = options3[7];
	fourthOption.innerHTML = options4[7];
	nextSession.innerHTML = '';
	correctOrIncorrectAnswer.innerHTML = '';
	question.innerHTML = X++;
}

function questions8C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[7] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new009()>Next</button>';
	scoreboard.innerHTML = Y++;
}

function questions8I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[7] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new009()>Next</button>';
}

function new009() {
	firstQst.innerHTML = questions[8];
	fisrtOption.innerHTML = options1[8];
	secondOption.innerHTML = options2[8];
	thirdOption.innerHTML = options3[8];
	fourthOption.innerHTML = options4[8];
	nextSession.innerHTML = '';
	correctOrIncorrectAnswer.innerHTML = '';
	question.innerHTML = X++;
}

function questions9C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[8] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new010()>Next</button>';
	scoreboard.innerHTML = Y++;
}

function questions9I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[8] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=new010()>Next</button>';
}

function new010() {
	firstQst.innerHTML = questions[9];
	fisrtOption.innerHTML = options1[9];
	secondOption.innerHTML = options2[9];
	thirdOption.innerHTML = options3[9];
	fourthOption.innerHTML = options4[9];
	nextSession.innerHTML = '';
	correctOrIncorrectAnswer.innerHTML = '';
	question.innerHTML = X++;
}

function questions10C() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=greenText>' + correct[9] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=endSession()>End of the trivia</button>';
	scoreboard.innerHTML = Y++;
}

function questions10I() {
	correctOrIncorrectAnswer.innerHTML =
		'<div id=redText>' + incorrect[9] + '</div>';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<button class=buttons001 onclick=endSession()>End of the trivia</button>';
}

function endSession() {
	startMsg.innerHTML = 'End of the trivia.';
	firstQst.innerHTML = '';
	fisrtOption.innerHTML = '';
	secondOption.innerHTML = '';
	thirdOption.innerHTML = '';
	fourthOption.innerHTML = '';
	nextSession.innerHTML =
		'<div id=textNumber1>' +
		'<button class=buttons001 onclick=repeatIt()><h4>Repeat ?</h4></button>' +
		'</div>';
	correctOrIncorrectAnswer.innerHTML = '';
}

function repeatIt() {
	location.reload();
}