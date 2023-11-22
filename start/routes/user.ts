import Route from "@ioc:Adonis/Core/Route";
import AuthService from "App/User/Domain/usecase/AuthService";

Route.get('/login', AuthService.login)
Route.get('/login-callback', AuthService.handleCallback)
Route.post('/logout', AuthService.logout)