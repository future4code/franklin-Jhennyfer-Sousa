import app from "./app";
import createUserList from "./endpoints/createUserList";
import getUserById from "./endpoints/getUserById";
import editUserList from "./endpoints/editUserList";
import getAllUsers from "./endpoints/getAllUsers";
import createTaskList from "./endpoints/createTaskList";
import getTaskById from "./endpoints/getTaskById";

//Buscar todos usuários
app.get("/allusers", getAllUsers);

//Criar usuário
app.post("/user", createUserList);

//Buscar usuário por Id 
app.get("/user/:id", getUserById ) 

//Editar usuário
app.put("/user/edit/:id", editUserList);

//Criar Tarefa
app.post("/task", createTaskList )

//Pegar Tarefa
app.get("/task/:id", getTaskById)


