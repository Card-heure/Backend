/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/api/user/user";
import contactRoutes from "./routes/api/user/contact/contact";
import contactRequestRoutes from "./routes/api/user/contact/request/contactRequest";

Route.group(() => {
  Route.get("/", async ({response}) => {
    return response.json("Working.");
  });
  authRoutes()
  Route.group(() => {

    Route.group(() => {
      userRoutes()
      Route.group(() => {
        contactRoutes()
        Route.group(() => {
          contactRequestRoutes()
        }).prefix("request")
      }).prefix("contact")
    }).prefix("user")

  }).middleware("auth:api")
})


