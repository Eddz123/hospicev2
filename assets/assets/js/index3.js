$(function(e){
  'use strict'

   /* sparkline_bar1 */
    $(".sparkline_bar1").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:50,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#f33540'
	});
	/* sparkline_bar1 end */

	/* sparkline_bar2 */
    $(".sparkline_bar2").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:50,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#1753fc'
	});
	/* sparkline_bar2 end */

	/* sparkline_bar3 */
    $(".sparkline_bar3").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:50,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#3582ec'
	});
	/* sparkline_bar3 end */

	/* sparkline_bar4 */
    $(".sparkline_bar4").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:50,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#f35e90'
	});
	/* sparkline_bar4 end */

	/*Chartjs*/
	// var ctx = document.getElementById("Chart").getContext('2d');
	// ctx.height = 100;
	// var myChart = new Chart(ctx, {
	// 	type: 'line',
	// 	data: {
	// 		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Nov","Dec"],
	// 		datasets: [{
	// 			label: "Active Patients",
	// 			data: [65, 59, 80, 81, 56, 55, 40],
	// 			borderWidth: 2,
	// 			backgroundColor: ['rgba(216, 211, 248,0.15)','rgba(216, 211, 248,0.15)'],
	// 			borderColor: '#1753fc',
	// 			pointBackgroundColor: '#ffffff',
	// 			pointRadius: 4
	// 		}, {
	// 			label: "Discharge Patients",
	// 			data: [28, 48, 40, 19, 86, 27, 90],
	// 			borderWidth: 2,
	// 			backgroundColor: ['rgba(216, 211, 248,0.15)','rgba(216, 211, 248,0.15)'],
	// 			borderColor: '#1753fc',
	// 			pointBackgroundColor: '#ffffff',
	// 			pointRadius: 4
	// 		}]
	// 	},
	// 	options: {
	// 		responsive: true,
	// 		maintainAspectRatio: false,
	//
	// 		scales: {
	// 			xAxes: [{
	// 				ticks: {
	// 					fontColor: "#bbc1ca",
	// 				 },
	// 				display: true,
	// 				gridLines: {
	// 					color: 'rgba(0,0,0,0.03)'
	// 				}
	// 			}],
	// 			yAxes: [{
	// 				ticks: {
	// 					fontColor: "#bbc1ca",
	// 				 },
	// 				display: true,
	// 				gridLines: {
	// 					color: 'rgba(0,0,0,0.03)'
	// 				},
	// 				scaleLabel: {
	// 					display: false,
	// 					labelString: 'Thousands',
	// 					fontColor: 'rgba(0,0,0,0.03)'
	// 				}
	// 			}]
	// 		},
	// 		legend: {
	// 			labels: {
	// 				fontColor: "#bbc1ca"
	// 			},
	// 		},
	// 	}
	// });

	/*Chartjs*/


	/*polar chart */
	var ctx = document.getElementById("polarChart");
	var myChart = new Chart(ctx, {
		type: 'polarArea',
		data: {
			datasets: [{
				data: [18, 15, 29, 16, 9],
				backgroundColor: ['#1753fc', ' #00b3ff', '#00d9bf', '#fc0', '#f35e90'],
				hoverBackgroundColor: ['#1753fc', ' #00b3ff', '#00d9bf', '#fc0', '#f35e90'],
				borderColor:'transparent',
			}],
			labels: ["PSD", "JAVA", "HTML", "WORDPRESS", "ANGULAR"]
		},
		options: {
			scale: {
				gridLines: {
						color: 'rgba(0,0,0,0.03)'
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				labels: {
					fontColor: "#bbc1ca"
				},
			},
		}
	});

 });