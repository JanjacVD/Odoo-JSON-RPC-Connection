## Usage

To use the `OdooJsonRpcConnection` library, follow the steps below:

### Installation

Install the library via npm:

```bash
npm install odoojsonrpcconnection
```

```ts
import {
  DomainType,
  OdooRequestProps,
  OdooResponse,
} from "odoojsonrpcconnection";
import OdooJsonRpcConnection from "odoojsonrpcconnection";

type YourResponseType = {
  id: number;
  name: string;
  partner_id: [number, string]; //It will always return id and name in one to many relations and list of IDS in many to many
};

const odooRequest: OdooRequestProps = {
  model: "model.name",
  method: "yourOdooMethod",
  fields: ["id", "name", "partner_id"],
};

const domain: DomainType = [
  ["id", "in", [1, 2, 3]],
  ["name", "like", "example"],
]; // Your domain criteria
const page = 1;
const limit = 10;
let data;

try{
    const loginResponse =await OdooJsonRpcConnection.handleLogin("https://somelogin.com",
    {db:"db_name", login:"username",password:"password"});
}
catch(e){
    console.log(e)
}

try {
  const response: OdooResponse<YourResponseType> =
    await OdooJsonRpcConnection.handleRequest<YourResponseType>(
      odooRequest,
      page,
      domain,
      data.user_context,
      data.session_id,
      limit
    );

    /*
        In most cases when it's about Odoo errors it will always return status 200 and response.error \
        so you will have to jump around to figure it out
    */

  if ("result" in response) {
    // It's a successful response
    console.log(response.data.result);
  } else {
    // It's an error response
    console.error(response.data.error);
  }
} catch (error) {
  console.error("Error communicating with Odoo:", error);
}

try{
    OdooJsonRpcConnection.handleLogout(data.session_id)
}
```
