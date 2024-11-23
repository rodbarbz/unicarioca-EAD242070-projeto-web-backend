# Usar uma imagem leve do Node.js
FROM node:18-alpine
# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app
# Copiar os arquivos de dependências para o contêiner
COPY package.json package-lock.json ./
# utilizar yarn para gerenciar pacotes
RUN npm install --global yarn
# Instalar as dependências
RUN yarn install
# Copiar todos os arquivos do projeto para o contêiner
COPY . .
# Construir a versão otimizada da aplicação
RUN yarn run build
# Expor a porta 3000 para o servidor
EXPOSE 3000
# Comando para rodar a aplicação
CMD ["npm", "start"]