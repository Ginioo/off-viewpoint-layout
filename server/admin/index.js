const express = require('express');
const path = require('path');
const fs = require('fs');

const admin = express();


admin.get('/images', (req, res) => {
  const imageDir = path.resolve(__dirname, '..', '..', 'images');
  const countries = fs.readdirSync(imageDir);

  const imagePahts = [];
  countries.forEach((country) => {
    const catagories = fs.readdirSync(path.resolve(imageDir, country));

    catagories.forEach((catagory) => {
      const sizes = fs.readdirSync(path.resolve(imageDir, country, catagory));

      sizes.forEach((size) => {
        const files = fs.readdirSync(path.resolve(imageDir, country, catagory, size));

        files.forEach((file) => {
          imagePahts.push({
            country,
            catagory,
            size,
            file,
            path: path.join(country, catagory, size, file)
          });
        });
      });
    });
  });

  res.set('Content-Type', 'application/json');
  res.set('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(imagePahts));
  res.end();
});

module.exports = admin;