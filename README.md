# desafio-backend


# Instalando as dependências do servidor:
$ yarn

```sh
# Instanciando o banco de dados:
$ yarn typeorm migration:run
# Executando a aplicação em modo de desenvolvimento:
$ yarn dev

```

# Endpoints

  baseUrl: http://{host}:3333/
  
  users
  
  curl -XPOST -H "Content-type: application/json" -d '{ "name":"João", "email":"joao@email.com", "password":"123456"}' '${baseUrl}/users' - Cria um usuario 
  
  curl -XPOST -H "Content-type: application/json" -d '{"email":"joao@email.com","password":"123456"}' '${baseUrl}/sessions'- Autentica um usuario
  
  persons 
  
  curl -XGET -H "Content-type: application/json" '${baseUrl}/persons' - lista todas pessoas
  
  curl -XGET -H "Content-type: application/json" '${baseUrl}/persons/:id' - lista uma pessoa
  
  curl -XPOST -H "Content-type: application/json" -d '{"name":"Pessoa","gender":"Masculino","cpf":"04561297073","birth_date":"20-10 1990","nationality":"Brasileiro","naturalness":"João Pessoa"}'${baseUrl}/persons' - Salva uma pessoa
  
  curl -XPUT -H "Content-type: application/json" -d '{"name":"Pessoa","gender":"Masculino","cpf":"04561297073","birth_date":"20-10 1990","nationality":"Brasileiro","naturalness":"João Pessoa"}' '${baseUrl}/persons/:id' Altera uma pessoa
  
  curl -XDELETE -H "Content-type: application/json" -H "Content-type: application/json" '${baseUrl}/:id' - Deleta uma pessoa
  
  
