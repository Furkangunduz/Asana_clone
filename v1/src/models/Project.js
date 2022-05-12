const Mongoose = require("mongoose");

const ProjectSchema = new Mongoose.Schema(
    {
        name: String,
        // user_id: {
        //     type: Mongoose.Types.ObjectId,
        //     ref: user_id,
        // },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = Mongoose.model("Project", ProjectSchema);
