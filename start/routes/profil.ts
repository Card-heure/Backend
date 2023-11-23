import Route from "@ioc:Adonis/Core/Route";
import ProfilesController from "App/Controllers/Http/ProfilesController";

export default function profileRoutes() {
  Route.get('/getAll', ProfilesController.getAll)
}
