import app from "./app.js"
import { PORT } from "./config.js";
import { sequelize } from "./database/database.js"

async function main() {
  try {
    await sequelize.sync({ force: false });  // En la primera ejecucion colocar force en true.
    console.log('Database connection established successfully.');

    app.listen(PORT);
    console.log(`Server listening on port: ${PORT}.`);
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}.`);
  }
}

main()
