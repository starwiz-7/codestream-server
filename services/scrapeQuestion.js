const axios = require('axios');
const cheerio = require('cheerio');

const scrapeQuestion = async (url, hostname) => {
  if (hostname === 'codeforces.com') {
    try {
      const response = await axios.get(url);

      const $ = cheerio.load(response.data);

      const questionData = $('.problemindexholder').html();
      return questionData === null
        ? { error: true, htmlString: '' }
        : { error: false, htmlString: questionData, hostname };
    } catch (err) {
      return {
        error: true,
        htmlString: '',
      };
    }
  } else if (hostname === 'atcoder.jp') {
    try {
      const response = await axios.get(url);

      const $ = cheerio.load(response.data);
      const questionData = $('#task-statement')
        .children()
        .children('.lang-en')
        .html();

      const DelimitterCorrected =
        questionData?.replace(/<var>/g, '%%')?.replace(/<\/var>/g, '%%') || '';
      return questionData === null
        ? { error: true, htmlString: '' }
        : { error: false, htmlString: DelimitterCorrected, hostname };
    } catch (err) {
      return {
        error: true,
        htmlString: '',
      };
    }
  }
  // Leetcode scraper here
  else if (hostname === 'leetcode.com') {
    try {
      const splitURL = url.split('/');
      const response = await axios.get(
        `https://leet-api-code.herokuapp.com/api/v1/${splitURL[4]}`,
      );

      return response.data.status_code === 200
        ? {
            error: false,
            questionName: response.data.message[0].name,
            htmlString: response.data.message[1].content,
            hostname,
          }
        : {
            error: true,
            htmlString: '',
          };
    } catch (err) {
      return {
        error: true,
        htmlString: '',
      };
    }
  } else if (hostname === 'cses.fi') {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      $('.skeleton .nav').remove();
      $('.title-block > h3').remove();
      $('script').remove();

      const questionData = $('.skeleton').html();

      const formattedData = questionData.replace(/\$/gm, '%%') || '';
      return questionData === null
        ? { error: true, htmlString: '' }
        : { error: false, htmlString: formattedData, hostname };
    } catch (err) {
      return {
        error: true,
        htmlString: '',
      };
    }
  } else {
    return {
      error: true,
      htmlString: '',
    };
  }
};

module.exports = scrapeQuestion;
