var express = require("express");
var router = express.Router();

var connection = require("../library/database");

/* GET users listing. */
router.get("/", function (req, res, next) {
  //Query
  connection.query(
    "SELECT * FROM users ORDER BY id desc",
    function (err, rows) {
      if (err) {
        req.flash("error", err);
        req.render("user", {
          data: "",
        });
      } else {
        //Render to view post index
        res.render("users", {
          data: rows,
        });
      }
    }
  );
});

module.exports = router;
