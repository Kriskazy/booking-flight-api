exports.example = (req, res) => {
  console.log("example");
  res.send("Controller is working fine");
};

const { v4: uuid } = require("uuid");

let flightDetails = [
  {
    title: "flight to canada",
    time: "1pm",
    price: 26000,
    date: "26-06-2022",
    id: uuid(),
  },
];

// Get all FLights
exports.getFlights = (req, res) => {
  res.json(flightDetails);
};

// Book New Flight
exports.bookFlight = (req, res) => {
  const { title, price } = req.body;
  if (!title || !price) {
    return res.json({ message: "Kindly Provide all fields" });
  }
  flightDetails.push({
    title,
    time: new Date().toLocaleTimeString(),
    price,
    date: new Date().toLocaleDateString(),
    id: uuid(),
  });
  res.json(flightDetails);
};

// Get Single Flight
exports.singleFlight = (req, res) => {
  const { id } = req.params;
  const singleFlight = flightDetails.find((flight) => flight.id === id);
  if (!singleFlight) {
    return res.json({ message: "Flight not found" });
  }
  res.json(singleFlight);
};

// Update Booking/Flight
exports.updateFlight = (req, res) => {
  const { id } = req.params;
  const { title, price } = req.body;
  const updatedBooking = flightDetails.find((booking) => booking.id === id);
  if (updatedBooking) {
    updatedBooking.price = price;
    updatedBooking.title = title;

    res.json(updatedBooking);
  }
};

// Delete Flight
exports.deleteFlight = (req, res) => {
  const { id } = req.params;
  const bookingLeft = flightDetails.filter((flight) => flight.id !== id);
  res.json(bookingLeft);
};
