const { CarItem } = require("../models/carModel");

const getFilterCarsRouter = async (req, res) => {
  const { searchQuery = "", sortType = "year", fuel = "all" } = req.query;

  const filter = {
    ...(searchQuery && { name: { $regex: searchQuery, $options: "i" } }),
    ...(fuel !== "all" && { fuel: fuel }), 
  };

  let sortOptions;
  switch (sortType) {
    case "year":
      sortOptions = { year: -1 };
      break;
    case "year_rev":
      sortOptions = { year: 1 };
      break;
    case "price":
      sortOptions = { price: 1 };
      break;
    case "price_rev":
      sortOptions = { price: -1 };
      break;
    case "name":
      sortOptions = { name: 1 };
      break;
    default:
      sortOptions = { year: -1 };
  }

  const cars = await CarItem.find(filter).sort(sortOptions);

  res.status(200).json({
    code: 200,
    status: "success",
    data: { cars },
  });
};

module.exports = getFilterCarsRouter;
