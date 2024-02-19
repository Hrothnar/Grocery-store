export function hello(request, response) {
  response.status(418);
  response.send("Welcome to the REST API application!");
}