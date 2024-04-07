import cors from "cors";

export function configureCors() {
    const corsParameters = {
        // origin: ["http://127.0.0.1:1111"],
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["Content-Length"],
        credentials: false,
        preflightContinue: false,
        optionsSuccessStatus: 204,
        maxAge: 3600
    };
    return cors(corsParameters);
};