const express =
require("express");

const router =
express.Router();

const {

getMeetings,
createMeeting,
deleteMeeting

}
=
require(
"../controllers/meetingController"
);

router.get(
"/",
getMeetings
);

router.post(
"/",
createMeeting
);

router.delete(
"/:id",
deleteMeeting
);

module.exports =
router;