const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let players = [];

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));