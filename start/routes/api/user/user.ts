import Route from "@ioc:Adonis/Core/Route";
import UsersController from "App/Controllers/Http/UsersController";

export default function userRoutes() {
  Route.get('/getAll', UsersController.getAll)
  Route.get('/get', UsersController.getUser)
}
