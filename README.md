[![Deploy](https://github.com/murilomontino/dpsystem-back/actions/workflows/deploy-stage.yaml/badge.svg)](https://github.com/murilomontino/dpsystem-back/actions/workflows/deploy-stage.yaml)


[![Deploy](https://github.com/murilomontino/dpsystem-back/actions/workflows/deploy-stage.yaml/badge.svg)](https://github.com/murilomontino/dpsystem-back/actions/workflows/deploy-stage.yaml)


## 1. Crie um token

   **Vá ate https://github.com/settings depois em Develop settings crie um novo token em Personal access tokens e guarde o token**

## 2. Instalação  
     
   **Clone o repositório usando o comando:**

   ```bash
   git clone https://github.com/
```
   **logo apos sera pedido seu login e em senha use o token que você gerou**

## 3. Instalar Dependências:

   **Use o commando yarn para atualizar as dependêcias do projeto:**

 ```bash
   yarn
```
## 4. Iniciar o projeto

   **você pode iniciar o projeto em mode de desenvolvimento usando:**

 ```bash
   yarn dev
```
   **ou em produção usando:**
 ```bash
   yarn prod
```

## 5. Testes

  **Testes de Unidade:**
  
 ```bash
   yarn test:unit
```
 **Caso queira executar um teste especifico vá em describe e onde esta "Unit" mude para "Only" e execute o comando:**

 ```bash
   yarn test(only)
```

   **Testes de Integração:**

 ```bash
   yarn test:integration
```
   **Testes End-to-End (E2E):**

 ```bash
   yarn test:e2e
```
   **Testes em Ambiente de CI:**

 ```bash
   yarn test-ci
```
   **Cobertura de Testes.**

 ```bash
   yarn test-ci
```


## Scripts

`yarn prepare`
Instalação do Husky. Execute uma vez após clonar o repositório.

`yarn dev`
Inicia o servidor em modo de desenvolvimento com reinicialização automática durante as alterações.

`yarn prod`
Inicia o servidor em modo de produção.

`yarn prebuild`
Executa o script Swagger antes de construir o projeto.

`yarn build`
Compila o projeto para produção, ignorando erros do TypeScript.

`yarn postbuild`
Instala dependências no diretório de construção para produção.

`yarn swagger`
Gera a documentação Swagger.

`yarn start` 
Inicia o servidor usando server.js.

