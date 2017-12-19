// declare variables
// array of possible crystal values
var crystalValues=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// random number for the target
var targetNumber=0;

// number of wins
var wins=0;

//number of losses
var losses=0;

//value of crystal images
var crystalOne=0;
var crystalTwo=0;
var crystalThree=0;
var crystalFour=0;

//total score
var totalScore=0;
// end of variable declarations



// generate target number
function generateTarget(){
	targetNumber=Math.floor(Math.random()*(120-19)+19);
	$("#randomNumberDisplay").text(targetNumber);
}


function generateCrystals (){
	crystalValues=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var crystalValueUses=crystalValues;
	crystalOne=crystalValueUses[Math.floor(Math.random()*crystalValueUses.length)];
	for (var i=0; i<crystalValueUses.length; i++){
		if (crystalOne===crystalValueUses[i]){
			var remove=crystalValueUses.splice(i,1);	
			console.log(crystalOne);
		}
	}

	crystalTwo=crystalValueUses[Math.floor(Math.random()*crystalValueUses.length)];
	for (var i=0; i<crystalValueUses.length; i++){
		if (crystalTwo===crystalValueUses[i]){
			var remove=crystalValueUses.splice(i,1);
			console.log(crystalTwo);
		}
	}

	crystalThree=crystalValueUses[Math.floor(Math.random()*crystalValueUses.length)];
	for (var i=0; i<crystalValueUses.length; i++){
		if (crystalThree===crystalValueUses[i]){
			var remove=crystalValueUses.splice(i,1);

			console.log(crystalThree);

		}
	}

	crystalFour=crystalValueUses[Math.floor(Math.random()*crystalValueUses.length)];
	for (var i=0; i<crystalValueUses.length; i++){
		if (crystalFour===crystalValueUses[i]){
			var remove=crystalValueUses.splice(i,1);

			console.log(crystalFour);
		}
	}
	console.log(crystalValues);


}

// win condition function
function winCondition(){
	wins++;
	generateTarget();
	generateCrystals();
	totalScore=0;
	$("#totalScore").text(totalScore);
	$("#winsNumber").text(wins);
	
}

// loss condition funtion
function lossCondition(){
	losses++;
	generateTarget();
	generateCrystals();
	totalScore=0;
	$("#totalScore").text(totalScore);
	$("#lossesNumber").text(losses);

}
// gameplay

generateTarget();
generateCrystals();



		

//click first image
$("#firstCrystal").on("click",function(){
	totalScore=totalScore+crystalOne;
	$("#totalScore").text(totalScore);
	if (totalScore===targetNumber){
		winCondition();
	}
	if (totalScore>targetNumber){
		lossCondition();
	}
})

//click second image
$("#secondCrystal").on("click",function(){
	totalScore=totalScore+crystalTwo;
	$("#totalScore").text(totalScore);
	if (totalScore===targetNumber){
		winCondition();
	}
	if (totalScore>targetNumber){
		lossCondition();
	}
})

//click on third image
$("#thirdCrystal").on("click",function(){
	totalScore=totalScore+crystalThree;
	$("#totalScore").text(totalScore);
	if (totalScore===targetNumber){
		winCondition();
	}
	if (totalScore>targetNumber){
		lossCondition();
	}
})

//click on fourth image
$("#fourthCrystal").on("click",function(){
	totalScore=totalScore+crystalFour;
	$("#totalScore").text(totalScore);
	if (totalScore===targetNumber){
		winCondition();
	}
	if (totalScore>targetNumber){
		lossCondition();
	}
})


