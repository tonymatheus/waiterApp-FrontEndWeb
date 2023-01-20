# Waiter App Web Client

Este é o aplicativo do garçom, que tem como objetivo facilitar a vida dos garçons ajudando nas anotações de comandas e auxiliando os profissionais de um determinado restaurante a gerenciar os seus pedidos.

Esta aplicação está dividida em 3 partes BackEnd, Front-end Web e mobile, sendo essa a parte web da aplicação que está direcionada ao profissional da cozinha ou gerente que vai dar a ordem para início da produção dos pedidos.

## Como Rodar a aplicação

- Primeiramente para que consiga utilizar essa aplicação é necessário clonar o repositório executando o seguint comando:

```bash
git clone https://github.com/tonymatheus/waiterApp-FrontEndWeb.git
```

- Com o projeto clonado em algum diretório da sua máqui instale as dependências do projeto com o comando abaixo

```bash
yarn ou yarn install
```

- ## Após instalar as dependências do projeto é hora de finalmente rodar a aplicação

Execute o comando abaixo para iniciar o expo server :

```bash
yarn dev
```



### Funcionalidades da Aplicação

- Iniciar produção dos pratos
- Cancelar Produção
- Modal para visualização dos pedidos
- Comunicação em tempo real com o Aplicativo do garçom
- Alertas na mudança de status dos pedidos


## Tecnologias utilizadas no desenvolvimento do projeto

- [x] Typescriot
- [x] React
- [x] React-Hooks
- [x] Styled-Components
- [x] Eslint
- [x] Axios
- [x] React-toastify
- [x] Socket.io-client