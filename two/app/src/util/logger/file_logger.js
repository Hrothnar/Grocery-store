import fs from "fs";

export function fileLog(request, response) {
    const data =
        `Method: ${request.method}   URL: ${request.url}   Status Code: ${response.statusCode}    Time: ${new Date()}\n`;
    fs.writeFile("./app/log/journal.log", data, { flag: "a" }, (error) => {
        if (error) console.log(error);
    });
};