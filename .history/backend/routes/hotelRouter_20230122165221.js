const db = require("./db");
const hotelRouter = require('express').Router();

hotelRouter.get("/hotels", async (req, res) => {
    try {
    //   const results = await db.query("select * from hotels");
      const hotelRatingsData = await db.query(
        "select * from hotels left join (select hotels_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by hotels_id) reviews on hotels.id = reviews.hotels_id;"
      );
  
      res.status(200).json({
        status: "success",
        results: hotelRatingsData.rows.length,
        data: {
          hotels: hotelRatingsData.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
  