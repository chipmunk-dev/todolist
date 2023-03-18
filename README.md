---
title: Todo List API Server
description: Todo RESTful API Server
tags:
  - express
  - mongodb
  - mongoose
  - typescript
---

# Todo List API Server

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/RM1WxR)

[Api Document](https://expressjs-mongoose-production-dbc3.up.railway.app/api-docs/#/)

[Server Deploy](https://expressjs-mongoose-production-dbc3.up.railway.app/)

## ✨ Features

- Serve Api for Todo Create, Update, Read, Delete
- Serve Api Document with Swagger
- Store data using MongoDB and Mongoose
- Validate Schema with Ajv Library

## 💁‍♀️ How to use

- Install dependencies `yarn`
- Start the development server `yarn dev`

## 📝 Notes

Provides the ability to handle Todo data.

There are two main routes on the server:

- A `GET` route - `/todo` which returns all the Todos
- A `POST` route - `/todo` which can be used to add a Todo
- A `PUT` route - `/todo/:id` which can be updated for Todo
- A `DELETE` route - `/todo/:id` which can be deleted for Todo
