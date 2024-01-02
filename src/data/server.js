const express = require('express');
const app = express();
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/submitBlog', async (req, res) => {
  const form = new FormData();

  try {
    const response = await axios.post(
      'https://api.blog.redberryinternship.ge/api/blogs',
      form,
      {
        headers: {
          ...form.getHeaders(),
          'accept': 'application/json',
          'Authorization': 'Bearer e0839ac730a62807c9958067e6f2bd5e00dfe98e25b714da17db167ccbfa565a',
        },
      }
    );

    console.log(response.status, response.statusText);
    console.log(response.data);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
