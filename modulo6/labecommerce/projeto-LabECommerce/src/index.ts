import { AddressInfo } from "net";
import app from "./app";


/* app.post("/user/:cep",insertAdress)

app.get("/endereco/:cep", getAddress)

app.get("/list", getAllAddress) */


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Ok - Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});