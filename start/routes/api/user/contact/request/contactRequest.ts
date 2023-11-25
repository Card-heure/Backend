import Route from "@ioc:Adonis/Core/Route";

export default function contactRequestRoutes() {
  Route.get('/list', async ({response}) => {
    return response.json("contact request list.");
  });
  Route.post('/invite', async ({response}) => {
    return response.json("create contact request.");
  });
  Route.group(() => {
    Route.put('/accept', async ({response}) => {
      return response.json("contact request accepted");
    });
    Route.put('/refuse', async ({response}) => {
      return response.json("contact request refused");
    });
  }).prefix(":id")
}
