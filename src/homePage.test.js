import { launch } from 'puppeteer'; 
jest.useFakeTimers()

let browser, page;
// Focus attention on Popup page
async function changePage() {
    let pages = await browser.pages();
    let foundPage = false;
    for(let i = 0; i < pages.length; i += 1) {
        if(/accounts\.google\.com/.test(pages[i].url())) {
            foundPage = true;
            module.exports.page = pages[i];//set the new working page as the popup
            break;
        }
    }
    return foundPage;
}


beforeEach( async() => {
    
    browser = await launch({
     // headless: false
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000')
} )

afterEach(async() => {
    await browser.close();
})


test('clicking login starts oauth flow', async () => {
    await page.waitForSelector('button.sc-cTQhss.jDRALC', {
             visible: true,
        });
    await page.click('button.sc-cTQhss.jDRALC');

     await page.waitForSelector('button.sc-cTQhss.bswzMa.google-signin', {
             visible: true,
        });
    await page.click('button.sc-cTQhss.bswzMa.google-signin')

   // ... code to open popup...
    await browser.on('targetcreated', async () => {
        const foundPage = await changePage();
        if (foundPage){
            //Run some basic tests on the new page
            const url = await foundPage.url();
            url.toMatch(/accounts\.google\.com/);
        }
   
    } );
})


// test('When signedin, shows Logout Button', async () => { 
//     const id = 12312
//     const Buffer = require('buffer').Buffer

//     const sessionObject = {}
// })

