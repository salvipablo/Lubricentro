import app from "./app.js"
import { PORT } from "./config.js";

function main() {
  try {
    app.listen(PORT);
    console.log(`Server listening on port: ${PORT}.`);
  } catch (error) {
    console.error(`Error: ${error}.`);
  }
}

main()
