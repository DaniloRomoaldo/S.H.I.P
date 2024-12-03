import express from 'express';
import * as schemasController from "./domain/postgres/schemas/controller.js"
import * as tablesContoller from "./domain/postgres/tables/controller.js"
import * as columnsController from "./domain/postgres/columns/contoller.js"
import * as viewsController from "./domain/postgres/views/controller.js"
import * as viewsColumnsController from "./domain/postgres/viewColumns/controller.js"
import * as rawQueryController from "./domain/postgres/raw/controller.js"

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



app.listen(port, () => console.log("Api em Execução"))