const router = require("express").Router();
const { AfterShip } = require("aftership");
const aftership = new AfterShip("91f4f176-6614-4ab8-ba3a-b250f8189aa5");

router.get("/:trackingNum", async (req, res) => {
  console.log(req.params.trackingNum);
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
      res.send();
    });
});

router.post("/:trackingNum", async (req, res) => {
  console.log("Post " + req.params.trackingNum);
  const payload = {
    tracking: {
      slug: "usps",
      tracking_number: req.params.trackingNum,
    },
  };
  aftership.tracking
    .createTracking(payload)
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
});

module.exports = router;
