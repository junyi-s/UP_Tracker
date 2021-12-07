const router = require("express").Router();
const { AfterShip } = require("aftership");
const aftership = new AfterShip("5c627890-bf2f-477e-8816-f508647d03e1", {
  endpoint: "https://api.aftership.com/v4",
});

router.get("/:trackingNum", async (req, res) => {
  console.log("Get " + req.params.trackingNum);

  const payload = {
    tracking: {
      tracking_number: req.params.trackingNum,
    },
  };

  var tempSlug;
  await aftership.courier.detectCouriers(payload)
  .then(result => {tempSlug = result.couriers[0].slug})
  .catch(e => console.log(e));

  await aftership.tracking
    .getTracking({
      slug: tempSlug,
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
          console.log("SLUG " + tempSlug)
          if (tempSlug === "ups") {
            await new Promise((resolve) => setTimeout(resolve, 5000));
          } else {
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }
          

          aftership.tracking
            .getTracking({
              slug: tempSlug,
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
