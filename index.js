import cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs'
import connectMongo from './startup/mongodb.js'
import webScrapingController from './controller/webScrapingController.js';

connectMongo();


webScrapingController();



// downloading the target web page 
// by performing an HTTP GET request in Axios



// performScaping()
// scrapeFullPageWithCheerio()
// scrapeFullPageWithFetch()