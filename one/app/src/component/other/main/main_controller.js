export function hello(request, response) {
  response.status(418);
  response.send("Welcome to REST API application!");
  // response.json({ message: "Welcome to REST API application." })
  //   .then(() => {

  //   })
  //   .catch((error) => {
  //     throw error;
  //   });
}; 