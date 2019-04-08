$(document).ready(function() {
	// Main function
	var ctx1 =  document.getElementById("chart1");
	//var ctx2 =  document.getElementById("chart2");
	var ctx3 = document.getElementById("chart3");
	var ctx4 = document.getElementById("chart4");
	var ctx5 = document.getElementById("chart5");
	var ctx6 = document.getElementById("chart6");
	var ctx7 = document.getElementById("chart7");
	var ctx8 = document.getElementById("chart8");
	
	// chart one of if second test is dropped
	var g70,g75,g80,g85,g90,g95,g100;
	g70 = calcgrade(0,70,false);
	g75 = calcgrade(0,75,false);
	g80 = calcgrade(0,80,false);
	g85 = calcgrade(0,85,false);
	g90 = calcgrade(0,90,false);
	g95 = calcgrade(0,95,false);
	g100 = calcgrade(0,100,false);
	
	var mychart1 = new Chart(ctx1, {
		type: 'bar',
		data: {
			labels: ["70%", "75%", "80%","85%","90%","95%","100%"],
			datasets: [{
				label: 'Grade',
				data: [g70, g75, g80, g85, g90,g95,g100],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						suggestedMin: 70,
						suggestedMax: 100
					}
				}]
			},
			responsive: false
		}
	});
	
	// WITH SECOND GRADE!
	var MIN_A = 85; // a grades are 85+ at McGill
	var agrades = 0;
	
	/*
	
	// 70 on 2nd, range on final
	var s_t_g = 70; // second_test_grade
	var g70,g75,g80,g85,g90,g95,g100;
	g70 = calcgrade(s_t_g,70,true);
	g75 = calcgrade(s_t_g,75,true);
	g80 = calcgrade(s_t_g,80,true);
	g85 = calcgrade(s_t_g,85,true);
	g90 = calcgrade(s_t_g,90,true);
	g95 = calcgrade(s_t_g,95,true);
	g100 = calcgrade(s_t_g,100,true);
	
	for (i = 0; i < 7; i++) {
		if (calcgrade(s_t_g,(70+(5*i)),true) > MIN_A) {
			agrades++;
		}
	}
	
	var mychart70 = new Chart(ctx2, {
		type: 'bar',
		data: {
			labels: ["70%", "75%", "80%","85%","90%","95%","100%"],
			datasets: [{
				label: 'Grade',
				data: [g70, g75, g80, g85, g90,g95,g100],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						suggestedMin: 70,
						suggestedMax: 100
					}
				}]
			},
			responsive: false
		}
	});
	*/
	
	// 75 on 2nd, range on final
	var s_t_g = 75; // second_test_grade
	var g70,g75,g80,g85,g90,g95,g100;
	g70 = calcgrade(s_t_g,70,true);
	g75 = calcgrade(s_t_g,75,true);
	g80 = calcgrade(s_t_g,80,true);
	g85 = calcgrade(s_t_g,85,true);
	g90 = calcgrade(s_t_g,90,true);
	g95 = calcgrade(s_t_g,95,true);
	g100 = calcgrade(s_t_g,100,true);
	
	for (i = 0; i < 7; i++) {
		if (calcgrade(s_t_g,(70+(5*i)),true) > MIN_A) {
			agrades++;
		}
	}
	
	var mychart75 = new Chart(ctx3, {
		type: 'bar',
		data: {
			labels: ["70%", "75%", "80%","85%","90%","95%","100%"],
			datasets: [{
				label: 'Grade',
				data: [g70, g75, g80, g85, g90,g95,g100],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						suggestedMin: 70,
						suggestedMax: 100
					}
				}]
			},
			responsive: false
		}
	});
	
	// 80 on 2nd, range on final
	var s_t_g = 80; // second_test_grade
	var g70,g75,g80,g85,g90,g95,g100;
	g70 = calcgrade(s_t_g,70,true);
	g75 = calcgrade(s_t_g,75,true);
	g80 = calcgrade(s_t_g,80,true);
	g85 = calcgrade(s_t_g,85,true);
	g90 = calcgrade(s_t_g,90,true);
	g95 = calcgrade(s_t_g,95,true);
	g100 = calcgrade(s_t_g,100,true);
	
	for (i = 0; i < 7; i++) {
		if (calcgrade(s_t_g,(70+(5*i)),true) > MIN_A) {
			agrades++;
		}
	}
	
	var mychart80 = new Chart(ctx4, {
		type: 'bar',
		data: {
			labels: ["70%", "75%", "80%","85%","90%","95%","100%"],
			datasets: [{
				label: 'Grade',
				data: [g70, g75, g80, g85, g90,g95,g100],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						suggestedMin: 70,
						suggestedMax: 100
					}
				}]
			},
			responsive: false
		}
	});
	
	// 85 on 2nd, range on final
	var s_t_g = 85; // second_test_grade
	var g70,g75,g80,g85,g90,g95,g100;
	g70 = calcgrade(s_t_g,70,true);
	g75 = calcgrade(s_t_g,75,true);
	g80 = calcgrade(s_t_g,80,true);
	g85 = calcgrade(s_t_g,85,true);
	g90 = calcgrade(s_t_g,90,true);
	g95 = calcgrade(s_t_g,95,true);
	g100 = calcgrade(s_t_g,100,true);
	
	for (i = 0; i < 7; i++) {
		if (calcgrade(s_t_g,(70+(5*i)),true) > MIN_A) {
			agrades++;
		}
	}
	
	var mychart85 = new Chart(ctx5, {
		type: 'bar',
		data: {
			labels: ["70%", "75%", "80%","85%","90%","95%","100%"],
			datasets: [{
				label: 'Grade',
				data: [g70, g75, g80, g85, g90,g95,g100],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						suggestedMin: 70,
						suggestedMax: 100
					}
				}]
			},
			responsive: false
		}
	});
	
	// 90 on 2nd, range on final
	var s_t_g = 90; // second_test_grade
	var g70,g75,g80,g85,g90,g95,g100;
	g70 = calcgrade(s_t_g,70,true);
	g75 = calcgrade(s_t_g,75,true);
	g80 = calcgrade(s_t_g,80,true);
	g85 = calcgrade(s_t_g,85,true);
	g90 = calcgrade(s_t_g,90,true);
	g95 = calcgrade(s_t_g,95,true);
	g100 = calcgrade(s_t_g,100,true);
	
	
	for (i = 0; i < 7; i++) {
		if (calcgrade(s_t_g,(70+(5*i)),true) > MIN_A) {
			agrades++;
		}
	}
	
	var mychart90 = new Chart(ctx6, {
		type: 'bar',
		data: {
			labels: ["70%", "75%", "80%","85%","90%","95%","100%"],
			datasets: [{
				label: 'Grade',
				data: [g70, g75, g80, g85, g90,g95,g100],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						suggestedMin: 70,
						suggestedMax: 100
					}
				}]
			},
			responsive: false
		}
	});
	
	// 95 on 2nd, range on final
	var s_t_g = 95; // second_test_grade
	var g70,g75,g80,g85,g90,g95,g100;
	g70 = calcgrade(s_t_g,70,true);
	g75 = calcgrade(s_t_g,75,true);
	g80 = calcgrade(s_t_g,80,true);
	g85 = calcgrade(s_t_g,85,true);
	g90 = calcgrade(s_t_g,90,true);
	g95 = calcgrade(s_t_g,95,true);
	g100 = calcgrade(s_t_g,100,true);
	
	for (i = 0; i < 7; i++) {
		if (calcgrade(s_t_g,(70+(5*i)),true) > MIN_A) {
			agrades++;
		}
	}
	
	var mychart95 = new Chart(ctx7, {
		type: 'bar',
		data: {
			labels: ["70%", "75%", "80%","85%","90%","95%","100%"],
			datasets: [{
				label: 'Grade',
				data: [g70, g75, g80, g85, g90,g95,g100],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						suggestedMin: 70,
						suggestedMax: 100
					}
				}]
			},
			responsive: false
		}
	});
	
	// 100 on 2nd, range on final
	var s_t_g = 100; // second_test_grade
	var g70,g75,g80,g85,g90,g95,g100;
	g70 = calcgrade(s_t_g,70,true);
	g75 = calcgrade(s_t_g,75,true);
	g80 = calcgrade(s_t_g,80,true);
	g85 = calcgrade(s_t_g,85,true);
	g90 = calcgrade(s_t_g,90,true);
	g95 = calcgrade(s_t_g,95,true);
	g100 = calcgrade(s_t_g,100,true);
	
	for (i = 0; i < 7; i++) {
		if (calcgrade(s_t_g,(70+(5*i)),true) > MIN_A) {
			agrades++;
		}
	}
	
	var mychart100 = new Chart(ctx8, {
		type: 'bar',
		data: {
			labels: ["70%", "75%", "80%","85%","90%","95%","100%"],
			datasets: [{
				label: 'Grade',
				data: [g70, g75, g80, g85, g90,g95,g100],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						suggestedMin: 70,
						suggestedMax: 100
					}
				}]
			},
			responsive: false
		}
	});
	
	$("#num-a-grades").text(agrades + " / 40 = " + ((agrades/40.0)*100) + "% chance");
});



function calcgrade(grade2,grade3,test_option) {
	grade1 = 93;
	var final_grade = 0;
	if(test_option == true) {
		final_grade = (0.3)*(grade1) + (0.3)*(grade2) + (grade3)*(0.4);
		
	} else {
		final_grade = (0.5)*(grade1) + (0.5)*(grade3);
		
	}
	return final_grade;
};