const router = require("express").Router();
const { AfterShip } = require("aftership");
const aftership = new AfterShip("4a8e8667-e1cc-479b-bb12-e1fd4cec3b45", {
  endpoint: "https://api.aftership.com/v4",
});

router.get("/:trackingNum", async (req, res) => {
  console.log("Get " + req.params.trackingNum);

  const payload = {
    tracking: {
      slug: "usps",
      tracking_number: req.params.trackingNum,
    },
  };

  await aftership.tracking
    .getTracking({
      slug: "usps",
      tracking_number: req.params.trackingNum,
    })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch(async (err) => {
      console.log(err);
      await aftership.tracking
        .createTracking(payload)
        .then(async (result) => {
          console.log("POSTED");
          console.log(result);

          // wait a bit before calling another get
          await new Promise((resolve) => setTimeout(resolve, 2000));

          aftership.tracking
            .getTracking({
              slug: "usps",
              tracking_number: req.params.trackingNum,
            })
            .then((result) => {
              console.log(result);
              res.send(result);
            })
            .catch((err) => {
              console.log(err);
              res.send("Does not exist");
            });
        })
        .catch((e) => {
          console.log(e);
        });
    });
});


module.exports = router;
