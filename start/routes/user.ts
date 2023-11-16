import Route from "@ioc:Adonis/Core/Route";
import AuthService from "App/User/Domain/usecase/AuthService";

Route.post('/login',  AuthService.login)
Route.post('/register', AuthService.register)