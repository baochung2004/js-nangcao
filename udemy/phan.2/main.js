const bookings = [];
const createBooking = (flightNum, numPassegers, price) => {
  const booking = {
    flightNum,
    numPassegers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");

const flight = "LH234";
const jonas = {
  name: "Jonas Schmendtmann",
  passport: 24739479284,
};
const checkIn = (flightNum, passenger) => {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("wrong passport");
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
