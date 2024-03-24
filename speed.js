/*Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”.
 Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the
  total number of demerit points.*/
function calculateSpeed (speed) {
  const speedLimit = 0;
  let demeritPoints = Math.floor((speed-speedLimit)/5);
  if  (speed <= speedLimit) {
    return 'Ok';
  }else if (demeritPoints > 12) {
    return 'Licence suspended';
  }else if (demeritPoints > 0) {
    return `Points: ${demeritPoints}`;}
}
console.log(calculateSpeed(45));