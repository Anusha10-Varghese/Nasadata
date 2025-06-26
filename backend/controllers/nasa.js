const axios = require('axios');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getAPOD = asyncHandler(async (req, res, next) => {
  const { date, count, thumbs } = req.query;
  let url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
  
  if (date) url += `&date=${date}`;
  if (count) url += `&count=${count}`;
  if (thumbs) url += `&thumbs=${thumbs}`;
  
  const response = await axios.get(url);
  res.status(200).json(response.data);
});

exports.getMarsRoverPhotos = asyncHandler(async (req, res, next) => {
  const { earth_date, camera, page } = req.query;
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${process.env.NASA_API_KEY}`;
  
  if (earth_date) url += `&earth_date=${earth_date}`;
  if (camera) url += `&camera=${camera}`;
  if (page) url += `&page=${page}`;
  
  const response = await axios.get(url);
  res.status(200).json(response.data);
});

exports.getEPICImages = asyncHandler(async (req, res, next) => {
  const { date } = req.query;
  let url = `https://api.nasa.gov/EPIC/api/natural`;
  
  if (date) url += `/date/${date}`;
  url += `?api_key=${process.env.NASA_API_KEY}`;
  
  const response = await axios.get(url);
  res.status(200).json(response.data);
});

exports.getNeoWs = asyncHandler(async (req, res, next) => {
  const { start_date, end_date } = req.query;
  let url = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.NASA_API_KEY}`;
  
  if (start_date) url += `&start_date=${start_date}`;
  if (end_date) url += `&end_date=${end_date}`;
  
  const response = await axios.get(url);
  res.status(200).json(response.data);
});

exports.searchNASA = asyncHandler(async (req, res, next) => {
  const { q, media_type, year_start, year_end } = req.query;
  let url = `https://images-api.nasa.gov/search?q=${q}`;
  
  if (media_type) url += `&media_type=${media_type}`;
  if (year_start) url += `&year_start=${year_start}`;
  if (year_end) url += `&year_end=${year_end}`;
  
  const response = await axios.get(url);
  res.status(200).json(response.data);
});