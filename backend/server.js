const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

