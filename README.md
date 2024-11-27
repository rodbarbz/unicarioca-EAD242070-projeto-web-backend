# Projeto: Sistema de Gerenciamento de Projetos Escolares

Este é um projeto simples para gerenciamento de projetos, com frontend e backend integrados. O frontend é servido no `http://localhost:3000` e consome a API backend exposta em `http://localhost:5002`.

## Pré-requisitos

Certifique-se de ter o **Docker** e o **Docker Compose** instalados na sua máquina.

- [Instalar Docker](https://docs.docker.com/get-docker/)
- [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/rodbarbz/unicarioca-EAD242070-projeto-web-backend.git
   cd PROJETO_WEB_BACKEND

2. Construa os containers com o comando:
    ```bash
    docker compose build

3. Inicie os serviços:
    ```bash
    docker compose up

4. Acesse o frontend no navegador em:
    ```browser
    http://localhost:3000

5. O backend estará disponível em:
    ```browser
    http://localhost:5002

## Endpoints da API Backend

### **1. Listar todos os projetos**
- **GET** `/projects`
- **Descrição:** Retorna a lista de projetos.


### **2. Criar um projeto
- **POST** `/projects`
- **Descrição:**  Adiciona um novo projeto.
- **Exemplo de payload:**
    ```json
    {
        "name": "Novo Projeto",
        "description": "Descrição do projeto"
    }


### **3. Deletar um projeto
- **DELETE** `/projects/{id}`
- **Descrição:** Remove um projeto pelo ID.

### **4. Detalhar um projeto
- **GET** `/projects/{id}`
- **Descrição:** Retorna os detalhes de um projeto pelo ID.


## Observações
- Certifique-se de que as portas `3000` (frontend),`5002` (backend) e `27017` (MongoDB) estejam disponíveis antes de iniciar o projeto.
- Se precisar ajustar configurações, edite o arquivo `docker-compose.yml`.

## Tecnologias Utilizadas
- **Frontend:** Vite
- **Backend:** Flask
- **Banco de Dados:** MongoDB
- **Containerização:** Docker, Docker Compose