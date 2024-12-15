import express from 'express';
//------------------- improts do S.H.I.P  -----------------------------------
import * as usersController from './domain/system/users/controller.js'
import * as permissionController from './domain/system/permission/controller.js'
import * as userPermissionController from './domain/system/user_permission/controller.js'

//------------------- imports do postgres -----------------------------------
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

//--------------------------------- Rotas de uso para o banco de dados S.H.I.P -----------------------------------------

app.get("/users", usersController.findAll);
app.get("/user/:id", usersController.findOne);
app.get("/userEmail", usersController.findByEmail);
app.post("/user", usersController.createUser);
//app.put("/user", usersController.updateUser);
app.patch("/user", usersController.updateUser);
app.delete("/user", usersController.deletarUsuario);


app.get("/permissions", permissionController.findAll);
app.get("/permission/:id", permissionController.findById);
app.get("/permission", permissionController.findByName);
app.post("/permission", permissionController.createPermission);
//app.put("permission", permissionController.updatePermission);
app.patch("/permission", permissionController.updatePermission);
app.delete("/permission", permissionController.deletePermission);


app.get("/permissionsByUser", userPermissionController.findPermissionsByUser);
app.get("/usersByPermission", userPermissionController.findUsersByPermission);
app.post("/createUserPermission", userPermissionController.createPermissionByUser);





//--------------------------------- Rotas de uso do postgres ----------------------------------------------------------------

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