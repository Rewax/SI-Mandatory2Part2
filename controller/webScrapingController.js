import webScapingService from '../service/webScrapingService.js';
import webScrapingRepo from '../repository/webScrapingRepo.js'

export default async function initWebScraping (){
    
    // ! Saving to database
    // const fullPage = await webScapingService.saveFullPageWithFetch();
    // const result = await webScrapingRepo.insertWebScraped(fullPage);
    // console.log(result);

    // ! Printing elements
    // const elements = await webScapingService.dataScraping()
    // console.log(elements);

    // ! Scape full page with cheerio
    const cheerioScrape = webScapingService.scrapeFullPageWithCheerio();
    console.log(cheerioScrape)

    // ! Scrape full page with Fetch
    // const fetchScrape = webScapingService.scrapeFullPageWithFetch();
    // console.log(fetchScrape)
    
    // ! Scrape internally with cheerio
    const scrapeInternally = webScapingService.scrapeInternallyWithCheerio();
    // console.log(scrapeInternally);

    // 

}