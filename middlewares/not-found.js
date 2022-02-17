const notFound = (req, res) => res.status(400).send("Route doesnot exist");

module.exports = notFound;
