import path from "path";

export function status500(error, request, response, next) {
    console.log("DEFAULT HANDLER");
    const code = 500;
    const option = {
        root: path.join(import.meta.dirname, "../../view")
    };
    response.status(code);
    response.sendFile("status500.html", option, (error) => {
        if (error) {
            response.send("Internal Error");
        }
    });
    console.error(error);
};

export function status404(request, response, next) {
    const code = 404;
    const option = {
        root: path.join(import.meta.dirname, "../../view")
    };
    response.status(code);
    response.sendFile("status404.html", option, (error) => {
        if (error) {
            next(error);
        }
    });
};
