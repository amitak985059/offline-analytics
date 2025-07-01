const logModel = require("../model/log.model");

module.exports.getUniqueSessionId = async (req, res) => {
  try {
    const sessions = await logModel.distinct("session_id");
    res.status(200).json(sessions);
  } catch (error) {
    console.error(error); 
    res.status(500).json({
      error: "Failed to get unique session IDs",
      details: error.message || error,
    });
  }
};

module.exports.numberOfUniqueUser = async (req, res) => {
  try {
    const uniqueSessions = await logModel.distinct("session_id");
    const uniqueSessionsCount = uniqueSessions.length;

    res.status(200).json({ count: uniqueSessionsCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to get the number of unique session IDs",
      details: error.message || error,
    });
  }
};

module.exports.pageViewCount = async (req, res) => {
  try {
    const result = await logModel.aggregate([
      { $match: { event: "PAGE_VIEW" } },
      {
        $group: {
          _id: "$event_label",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          event_label: "$_id",
          count: 1,
          _id: 0,
        },
      },
    ]);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to count PAGE_VIEW events",
      details: error.message || error,
    });
  }
};

module.exports.formSubmitCount = async (req, res) => {
  try {
    const count = await logModel.countDocuments({ event: "FORM_SUBMIT" });
    res.status(200).json({ event: "FORM_SUBMIT", count });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to count FORM_SUBMIT events",
      details: error.message || error,
    });
  }
};
module.exports.getAllSessionDurations = async function (req, res) {
  try {
  
    const sessionIds = await logModel.distinct("session_id");

    for (const session_id of sessionIds) {
      const all = await logModel.find({ session_id });



      const pageDurations = all.filter(
        (e) => e.event?.toLowerCase() === "page_duration"
      );
   
    }

    const results = await Promise.all(
      sessionIds.map(async (session_id) => {
        const events = await logModel.find({
          event: { $regex: /^page_duration$/i }, // case-insensitive match
          session_id,
        });

        const totalDurationMs = events.reduce((sum, event) => {
          const value = Number(event?.value);
          return sum + (isNaN(value) ? 0 : value);
        }, 0);

        const totalDurationSec = totalDurationMs / 1000;

        return {
          session_id,
          total_duration_seconds: Number(totalDurationSec.toFixed(3)),
          readable: `${Math.floor(totalDurationSec / 60)}m ${(
            totalDurationSec % 60
          ).toFixed(2)}s`,
        };
      })
    );

    res.status(200).json(results);
  } catch (error) {
    console.error(" Error calculating session durations:", error);
    res.status(500).json({
      error: "Failed to calculate session durations",
      details: error.message || error,
    });
  }
};
