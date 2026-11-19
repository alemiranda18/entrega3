import { config } from "./config/env.config.js";
import { connectDb } from "./config/db.connect.js"
import app from "./app.js"

const PORT = config.port

const main = async () => {
    try {
        await connectDb()

        app.listen(PORT, () => {
            console.log("Servidor corriendo en el puerto " + PORT)
        })
    } catch (error) {
        console.error(`Error al iniciar el servidor: ${error.message}`);
        process.exit(1);
    }

}

main()