// Datas

const quiz = [
	{
	  question: "Inside which HTML element do we put the JavaScript ?",
	  response: ["&lt;js>", "&lt;scripting>", "&lt;javascript>", "&lt;script>"],
	  good: 3,
	},
	{
	  question:
		'What is the correct JavaScript syntax to change the content of the HTML element ? &lt;p id="demo">This is a demonstration.&lt;/p>',
	  response: [
		'#demo.innerHTML = "Hello World!";',
		'document.getElementById("demo").innerHTML = "Hello World!";',
		'document.getElement("p").innerHTML = "Hello World!";',
		'document.getElementByName("p").innerHTML = "Hello World!";',
	  ],
	  good: 1,
	},
	{
	  question: 'What is the correct syntax for referring to an external script called "xxx.js" ?',
	  response: [
		'script name="xxx.js"',
		'script src="xxx.js"',
		'script href="xxx.js',
	  ],
	  good: 1,
	},
	{
		question: 'How do you write "Hello World" in an alert box ?',
		response: ['msg("Hello world !");', 'alertBox("Hello world !");', 'alert("Hello world !");', 'msgBox("Hello world !");'],
		good: 2,
	},
	{
		question: 'How do you call a function named "myFunction" ?',
		response: ['call function myFunction()', 'myFunction()', 'call myFunction',],
		good: 1,
	},
  ];
  
// passer en revue le tableau quizz et afficher la question
  
for (let j = 0; j < quiz.length; j++) {
	// question
	let template = `
	  <div class="question pt-2 mt-3">
		  <h5 class="py-2">${j + 1}/${quiz.length} ${quiz[j].question}</h5>`;
  
	// affichage des réponses
	for (let i = 0; i < quiz[j].response.length; i++) {
	  let idReponse = j.toString() + i.toString();
	  let idName = j.toString();
  
	  template += `
	  <div class="form-check">
		  <input class="form-check-input" type="radio" id="r${idReponse}" name="response${idName}" />
		  <label class="form-check-label" for="r${idReponse}">
			  ${quiz[j].response[i]}
		  </label>
	  </div>`;
	}
  
	template += "</div>";
  
	document.getElementById("quiz").innerHTML += template;
  }
  
  // --- Vérification du clic sur le bouton de validation
  let validateButton = document.getElementById('button');
  validateButton.addEventListener('click', onFormSubmit);
  
  function onFormSubmit() {
	  // --- Compter les bonnes réponses
	  let score = 0;
	  
	  for (let i = 0; i < quiz.length; i++) {
		  const good = quiz[i].good;
		  
		  if (document.getElementById('r'+i+good).checked === true) {
			  score++;
		  }
  
	  }

	  const moyenne = quiz.length/2;
  
	  if(score == 0){
		console.log('Il va alloir revoir les fondamenteaux !');
		document.getElementById('card-text').innerHTML += `<h3>Ton score est de : ${score} / ${quiz.length}</h3>
		<p>Il va alloir revoir les fondamenteaux !</p>`
	}
	
	if(score < moyenne && score > 0){
		console.log('Il faut travailler encore un peu !');
		document.getElementById('card-text').innerHTML += `<h3>Ton score est de : ${score} / ${quiz.length}</h3>
		<p>Il faut travailler encore un peu !</p>`
	}

	if(score > moyenne && score < quiz.lenght){
		console.log('Bravo ! Vous y etes presque !');
		document.getElementById('card-text').innerHTML += `<h3>Ton score est de : ${score} / ${quiz.length}</h3>
		<p>Bravo ! Vous y etes presque !</p>`
	}

	if(score == quiz.length){
		console.log('Flawless victory !');
		document.getElementById('card-text').innerHTML += `<h3>Ton score est de : ${score} / ${quiz.length}</h3>
		<p>Flawless victory !</p>`
	}
	  
	// remonter en haut de page
	location.href = './index.html#top'
  }


let affichage_score = document.getElementById('button');
affichage_score.addEventListener('click', affichage);

function affichage() {
	var div = document.getElementById("scorer");

	if (div.style.display === "block") {
	  div.style.display = "block";
	} else {
	  div.style.display = "block";
	}
}

for(let j=0; j < quiz.length; j++){
	document.querySelector('[for=r${j}${good}]').classList.add('text_success');
}



/*document.querySelector('[for=r11]').classList.add('text_success');


document.querySelector('[for=r03]').classList.add('text_success');

document.querySelector('[for=r32]').classList.add('text_success');

document.querySelector('[for=r41]').classList.add('text_success');*/