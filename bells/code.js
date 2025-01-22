const offset = -57

const times = [
  [[7,30,2],'Start Homeroom'],
  [[7,40,2],'End Homeroom'],
  [[7,43,0],'Start 1st Period'],
  [[8,45,0],'End 1st Period'],
  [[8,48,0],'Start 2nd Period'],
  [[9,50,0],'End 2nd Period'],
  [[9,53,0],'Start 3rd Period'],
  [[10,55,2],'End 3rd Period'],
  [[10,58,1],'Start Lunch/ETL A'],
  [[11,22,0],'End Lunch/ETL A'],
  [[11,25,0],'Start Lunch/ETL B'],
  [[11,49,3],'End Lunch/ETL B'],
  [[11,52,0],'Start 4th Period'],
  [[12,44,0],'End 4th Period'],
  [[12,47,0],'Start 5th Period'],
  [[13,39,0],'End 5th Period'],
  [[13,42,0],'Start 6th Period'],
  [[14,33,0],'Dismissal']
]

function getTarget() {
for (x=0; x<times.length; x++) {
var out = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),times[x][0][0], times[x][0][1], times[x][0][2]+offset).getTime()
if (new Date().getTime() < out) {
  document.getElementById('label').innerHTML = times[x][1]
  return out
}
}
}

const Target = getTarget()
// Update the count down every 1 second
var x = setInterval(function() {
  // Find the distance between now and the count down date
  var distance = Target - new Date().getTime();
    
  // Time calculations for days, hours, minutes and seconds
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
  
}, 1000);
