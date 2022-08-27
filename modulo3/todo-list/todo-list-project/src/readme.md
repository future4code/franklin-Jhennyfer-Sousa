### Exercício TODO LIST

## TABLES 
- Usuário
```SQL
CREATE TABLE TodoListUser (
		id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);
```

- Tarefa
```SQL
CREATE TABLE TodoListTask (
	  id INT PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id INT,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);

```

- Tabela de responsáveis pela tarefa
```SQL

CREATE TABLE TodoListResponsibleUser (
		task_id VARCHAR(255),
    responsible_user_id VARCHAR(255),
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
);
```


## ENDPOINTS

- *1. Criar usuário*
   
    
- *2. Pegar usuário pelo id*
    
    
- *3. Editar usuário*
    
    
- *4. Criar tarefa*

    
- *5. Pegar tarefa pelo id*