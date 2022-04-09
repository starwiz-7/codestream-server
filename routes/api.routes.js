const express = require('express');
const axios = require('axios');
const { language } = require('../services/languages');
const scrapeQuestion = require('../services/scrapeQuestion');
require('dotenv').config();

const router = express.Router();

router.post('/execute', async (req, res) => {
  const { script, lang, stdin } = req.body;
  if (!lang || !script) {
    return res.status(200).json({
      message: 'Code or language should not be empty/undefined',
    });
  }
  const response = await axios({
    method: 'POST',
    url: 'https://api.jdoodle.com/v1/execute',
    data: {
      script: script, // eslint-disable-line object-shorthand
      stdin: stdin, // eslint-disable-line object-shorthand
      language: language[lang][1],
      versionIndex: language[lang][2],
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
    },
    responseType: 'json',
  });
  return res.json(response.data);
});

router.post('/get-problem', async (req, res) => {
  const { url, hostname } = req.body;
  if (!url) {
    return res.status(200).json({
      message: 'URL should not be empty/undefined',
    });
  }

  const questionData = await scrapeQuestion(url, hostname);
  if (questionData.error === true) {
    return res
      .status(406)
      .json({ error: true, message: 'Cannot find problem with given URL' });
  }
  return res.status(200).json(questionData);
});
module.exports = router;
