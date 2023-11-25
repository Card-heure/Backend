import Route from "@ioc:Adonis/Core/Route";

export default function contactRoutes() {
  Route.get('/list', async ({response}) => {
    return response.json("contact list.");
  });
  Route.delete('/delete', async ({response}) => {
    return response.json("delete contact.");
  });
}
