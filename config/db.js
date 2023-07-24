const { connect } = require("mongoose");

const connectDB = async () => {
    try {
        await connect("mongodb+srv://godwinide:0WDlkTGDtCCltuzs@cluster0.bikzofb.mongodb.net/earnbigfx?retryWrites=true&w=majority");
        console.log("MongoDB connected.")
    }
    catch (err) {
        console.log("Mongodb error", err);
    }
}

module.exports = connectDB;