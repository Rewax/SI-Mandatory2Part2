import cheerio, {load} from 'cheerio';
import axios from 'axios';
import fs from 'fs'

async function dataScraping() {
    // downloading the target web page
    // by performing an HTTP GET request in Axios
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://www.eventbrite.com",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    const $ = cheerio.load(axiosResponse.data)

    const tileNames2 = $('.tile--name').map((index, elm) => {
       return $(elm).text()
    }).get();

    console.log(tileNames2);

}


const scrapeFullPageWithCheerio = async ()=>{

    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://www.eventbrite.com"
    })

    const $ = cheerio.load(axiosResponse.data)


    // Use Cheerio selectors and methods to extract the desired data
    // For example:
    const pageTitle = $('title').text(); // Extract the page title
    const pageContent = $('body').html(); // Extract the entire page content

    console.log(pageTitle); // Output the extracted page title
    console.log(pageContent); // Output the extracted page content
    fs.writeFile('page.html', pageContent, (err) => {
        if (err) {
          console.error('Error saving the file:', err);
          return;
        }
        console.log('HTML file saved successfully!');
    });
}

const scrapeFullPageWithFetch = async ()=>{
    const response = await fetch("https://www.eventbrite.com/");
    const result = await response.text();
    fs.writeFileSync("index.html", result);

}

const saveFullPageWithFetch = async ()=>{
    const response = await fetch("https://www.eventbrite.com/");
    const result = await response.text();
    return result;
}

const scrapeInternallyWithCheerio = ()=>{
    const page = fs.readFileSync("index.html", "utf-8");
    const $ = load(page);
    
    const tileNames = $('.tile--name').map((index, elm) => {
        return $(elm).text()
     }).get();
 
    //  console.log(tileNames);

    return tileNames;
    
}

export default {
    dataScraping,
    scrapeFullPageWithCheerio,
    scrapeFullPageWithFetch,
    saveFullPageWithFetch,
    scrapeInternallyWithCheerio
}