# Usar a imagem oficial do Node.js como base
FROM node:20-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o resto dos arquivos do projeto
COPY . .

# Expor a porta que o Vite usa
EXPOSE 5173

# O comando para iniciar a aplicação
CMD ["npm", "run", "dev", "--", "--host"]
