$(document).ready(function() {
	//Main function of roman hist doc
	console.log("ready");
	
	
	
	
	
	// listener for submit button
	$("#submit-button").click(function() {
		var test_option = false;
		if($("#test-option-checkbox").prop("checked") == true) {
			test_option = true;
		} else {
			test_option = false;
		}
		var grade1;
		var grade2;
		var grade3;
		grade1 = 93;
		grade2 = $("#grade2").val();
		grade3 = $("#grade3").val();
		// when submit button clicked
		if(test_option == true) {
			final_grade = (0.3)*(grade1) + (0.3)*(grade2) + (grade3)*(0.4);
			
		} else {
			final_grade = (0.5)*(grade1) + (0.5)*(grade3);
			
		}
		$("#final-grade").text(final_grade);
		
	});
	
});


// grade calculation function
/*
function calcgrade(grade1,grade2,grade3,test_option) {
	console.log(grade1 + " " +grade2 + " " + grade3);
	var final_grade = 0;
	if(test_option == true) {
		final_grade = (0.3)*(grade1) + (0.3)*(grade2) + (grade3)*(0.4);
		
	} else {
		final_grade = (0.5)*(grade1) + (0.5)*(grade3);
		
	}
	return final_grade;
};
*/


// calculate number of A grades if 2 and 3 tests taken
// MIN_A is the minimum mark in course needed to get an A
function calcAGrades (MIN_A) {
	var numagrades = 0;
	var grade2 = 0;
	var grade3 = 0;
	var finalgrade = 0;
	for (i = 0; i<7;i++) {
		grade2 = 70+(i*5);
		for (j = 0; j<7; j++) {
			grade3 = 70+(j*5);
			finalgrade = calcgrade(93,grade2,grade3,true);
			if(finalgrade>MIN_A) {
				numagrades = numagrades + 1;
			}
		}
		
	}
	return numagrades;
}