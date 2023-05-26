import mongoose from 'mongoose';

const WebScrapingSchema = new mongoose.Schema({
    data : {
        type: String
    }
})

const WebScraping = mongoose.model("WebScraping", WebScrapingSchema);

export default WebScraping