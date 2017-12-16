// declare variables

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
generateTarget();

//generate crystal values
function generateCrystals (){
	crystalOne=Math.floor(Math.random()*(12-1)+1);
	crystalTwo=Math.floor(Math.random()*(12-1)+1);
	if (crystalOne===crystalTwo){
		crystalTwo=Math.floor(Math.random()*(12-1)+1);
	}
	crystalThree=Math.floor(Math.random()*(12-1)+1);
	if (crystalThree===crystalOne || crystalThree===crystalTwo){
		crystalThree=Math.floor(Math.random()*(12-1)+1);
	}
	crystalFour=Math.floor(Math.random()*(12-1)+1);
	if (crystalFour===crystalOne || crystalFour===crystalTwo || crystalFour===crystalThree){
		crystalFour=Math.floor(Math.random()*(12-1)+1);
	}
}
generateCrystals();


// gameplay

//click first image
$("#firstCrystal").on("click",function(){
	totalScore=totalScore+crystalOne;
	$("#totalScore").text(totalScore);
	if (totalScore===targetNumber){
		wins++;
		generateTarget();
		generateCrystals();
		totalScore=0;
		$("#totalScore").text(totalScore);
		$("#winsNumber").text(wins);
	}
	if (totalScore>targetNumber){
		losses++;
		generateTarget();
		generateCrystals();
		totalScore=0;
		$("#totalScore").text(totalScore);
		$("#lossesNumber").text(losses);
	}
})

//click second image
$("#secondCrystal").on("click",function(){
	totalScore=totalScore+crystalTwo;
	$("#totalScore").text(totalScore);
	if (totalScore===targetNumber){
		wins++;
		generateTarget();
		generateCrystals();
		totalScore=0;
		$("#totalScore").text(totalScore);
		$("#winsNumber").text(wins);
	}
	if (totalScore>targetNumber){
		losses++;
		generateTarget();
		generateCrystals();
		totalScore=0;
		$("#totalScore").text(totalScore);
		$("#lossesNumber").text(losses);
	}
})

//click on third image
$("#thirdCrystal").on("click",function(){
	totalScore=totalScore+crystalThree;
	$("#totalScore").text(totalScore);
	if (totalScore===targetNumber){
		wins++;
		generateTarget();
		generateCrystals();
		totalScore=0;
		$("#totalScore").text(totalScore);
		$("#winsNumber").text(wins);
	}
	if (totalScore>targetNumber){
		losses++;
		generateTarget();
		generateCrystals();
		totalScore=0;
		$("#totalScore").text(totalScore);
		$("#lossesNumber").text(losses);
	}
})

//click on fourth image
$("#fourthCrystal").on("click",function(){
	totalScore=totalScore+crystalFour;
	$("#totalScore").text(totalScore);
	if (totalScore===targetNumber){
		wins++;
		generateTarget();
		generateCrystals();
		totalScore=0;
		$("#totalScore").text(totalScore);
		$("#winsNumber").text(wins);
	}
	if (totalScore>targetNumber){
		losses++;
		generateTarget();
		generateCrystals();
		totalScore=0;
		$("#totalScore").text(totalScore);
		$("#lossesNumber").text(losses);
	}
})


