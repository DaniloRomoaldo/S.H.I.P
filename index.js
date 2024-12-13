import express from 'express';
import * as schemasController from "./domain/postgres/schemas/controller.js"
import * as tablesContoller from "./domain/postgres/tables/controller.js"
import * as columnsController from "./domain/postgres/columns/contoller.js"
import * as viewsController from "./domain/postgres/views/controller.js"
import * as viewsColumnsController from "./domain/postgres/viewColumns/controller.js"
import * as rawQueryController from "./domain/postgres/raw/controller.js"
import * as functionController from "./domain/postgres/functions/controller.js"
import * as functionCodeController from "./domain/postgres/functionCode/controller.js"
import * as procedureController from './domain/postgres/procedure/controller.js'
import * as triggersController from './domain/postgres/trigger/controller.js'
import * as enumsController from './domain/postgres/enums/controller.js'

const app = express();
const port = 3000;

app.use(express.json());

//rota para coletar todos os schemas
app.get("/schemas", schemasController.getSchemas);

// rota para coletar todas as tabelas de um shcema específico
app.get("/tables", tablesContoller.getTables);

// rota para coletar todas as colunas de uma tabela em um schema específico
app.get("/TableColumns", columnsController.getColumns);

// rota para coletar todas as views de um schema específico
app.get("/views", viewsController.getViews);

// rota para coletar as colunas de uma view específica
app.get("/viewColumns", viewsColumnsController.getViewColumns);

// rota para enviar a raw query a ser rodada no banco
app.post("/rawQuery", rawQueryController.rawQuery);

// rota para coletar as funções de um schema
app.get("/functions", functionController.getFunctions);

// rota para coletar o código fonte de uma função específica
app.get("/functionCode", functionCodeController.getFunctionCode);

// rota para coletar as procedures de um schema
app.get("/procedures", procedureController.getProcedures);

// rota para coletar o código fonte de uma procedure específica
app.get("/procedureCode", procedureController.getProcedureCode);

// rota para coletar as triggers de um shcema
app.get("/triggers", triggersController.getTriggers);

// rota para coletar o código fonte de uma trigger
app.get("/triggerCode", triggersController.getTriggerCode);

// rota para coletar os enums de um schema
app.get("/enums", enumsController.getEnums);

// rota para coletar os valores de um enum
app.get("/enumValues", enumsController.getEnumValues);


app.listen(port, () => console.log("Api em Execução"))