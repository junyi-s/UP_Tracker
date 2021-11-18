const router = require("express").Router();
const { AfterShip } = require("aftership");
const aftership = new AfterShip("3a57fe0a-8fcc-4193-8a7e-21932793ed18");

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
    .then((result) => {
      console.log(result)
      res.send("Done")
    })
    .catch((e) => {
      console.log(e)
      res.send("Exists")
      if (e.code === 4003) {
      }
    });
});

module.exports = router;
