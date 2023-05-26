import WebScraping from "../model/WebScraping.js";


const insertWebScraped = async function (data) {

    const webScraped = new WebScraping({
        data: data
    })

    try {
        const webScrapedSaved = await webScraped.save();
        return {
            success: true,
            object: webScrapedSaved
        }
    } catch (e) {
        console.log("OOPS, something went wrong in insertWebScraped" + e)
        return {
            success: false,
            object: {},
            msg: "OOPS, something went wrong in insertWebScraped" + e,
            status: 405
        }
    }
}

export default {
    insertWebScraped
}