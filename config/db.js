const { connect } = require("mongoose");

const connectDB = async () => {
    try {
        await connect("mongodb+srv://rootuser:earnbig-fx@cluster0.jmniurb.mongodb.net/?retryWrites=true&w=majority");
        console.log("MongoDB connected.")
    }
    catch (err) {
        console.log("Mongodb error", err);
    }
}

module.exports = connectDB;