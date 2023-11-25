import Route from "@ioc:Adonis/Core/Route";
import UsersController from "App/Controllers/Http/UsersController";

export default function profileRoutes() {
  Route.get('/getAll', UsersController.getAll)
}
