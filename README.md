## Usage

To use the `OdooJsonRpcConnection` library, follow the steps below:

### Installation

Install the library via npm:

```bash
npm install odoojsonrpcconnection
```

```ts

import { DomainType, OdooRequestProps, OdooResponse } from "odoojsonrpcconnection";
import OdooJsonRpcConnection from "odoojsonrpcconnection";

type YourResponseType = {
    id:number,
    name:string,
    partner_id: [number, string] //It will always return id and name in one to many relations and list of IDS in many to many
}

const odooRequest: OdooRequestProps = {
  model: "model.name",
  method: "yourOdooMethod",
  fields: ['id', 'name', 'partner_id']
};

const domain: DomainType = [['id','in',[1,2,3]], ['name', 'like', 'example']]; // Your domain criteria
const page = 1;
const limit = 10;

try {
  const response: OdooResponse<YourResponseType> = await OdooJsonRpcConnection.handleRequest<YourResponseType>(
    odooRequest,
    page,
    domain,
    limit
  );

  console.log("Odoo response:", response.result);
} catch (error) {
  console.error("Error communicating with Odoo:", error);
}
```