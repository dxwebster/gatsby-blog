---
title: "Conceitos básicos do NodeJS"
date: "2019-02-28"
description: "Aprenda os conceitos básicos do NodeJS"
draft: false
featuredimage: /img/flavor_wheel.jpg
tags:
    - Blog
    - Primeiro post
---

![flavor wheel](/img/flavor_wheel.jpg)

# O que é o Node.js

- Basicamente é a utilização de Javascript no back-end
- Não lidamos com eventos do usuário final (clicks em botões, passar mouse)
- Lidamos com eventos através de rotas e integrações (endereços da aplicação)
- Não é linguagem, é uma plataforma para desenvolvimento back-end
- Construído em cima da V8 (engine que roda por trás do Chrome que interpreta o JS)
- Comparável a PHP / Ruby / Python / Go
- No back-end, utilizamos o node de forma direta, as aplicações ReactJS e React Native utilizam de forma indireta para compilar arquivos e executar processos na máquina do desenvolvedor
- Possui um fluxo totalmente linear, a aplicação é executada de cima pra baixo na ordem de escrita do código

# O que é NPM ou YARN

- Gerenciadores de pacotes do Node
- Permite instalar ferramentas de terceiros
- Fornece bibliotecas para outras pessoas
- O Yarn é mais rápido e mais  funcional que o NPM
- Comparável a Composer do PHP, Gems do Ruby

# Características do Node

- Segue uma arquitetura diferenciada das tradicionais:

## 💡Arquitetura Event-Loop

- Baseada em eventos (Rotas na maioria das vezes)
- Call Stack, pilha de eventos (função disparada pelo código), o node processa através de um loop eterno (while) rodando na aplicação sem parar, vendo se tem outra nova função disparada pela aplicação e aí executa em formato de pilha.
- LAST IN, FIRST OUT (LIFO): A função que vier mais tarde (a que entrar), vai ser a primeira processada (a que vai sair).

## 💡Single-thread

- Executa apenas em 1 thred do processador. Um processador de 4 cores não executa ao mesmo tempo nos 4, o processo dele fica alocado em apenas 1 core no processamento.
- Node utiliza várias libs do C++ por trás, a mais famosa é libuv (utilizado por processos de scripts modernos), permite utilizar multi-threads nos processamentos (backgroung threds).

## 💡Non-blocking I/O

- Input e Output não bloqueante
- Quando fazemos uma requisição pro node, não preciso retornar todos os dados de uma só vez. Assim que o front faz uma requisição pro back-end, ele mantém a conexão com o servidor aberta para receber cada vez mais requisições. ex: Nos chats, a requisição nunca se fecha, as mensagens sempre vão chegando.

# HTTP codes

Servidor HTTP: consegue ouvir requisições de um usuário e executar respostas.

Toda resposta que o back-end retorna, vem junto um código de 3 dígitos que significa o status da resposta, se deu erro ou não por exemplo.

## 💡1xx: Informational

Informativo, apenas o papel de passar uma informação, quase nunca utilizado

## 💡2xx: Success

Códigos de sucesso, que deu tudo certo

- 200 success
- 201 created

## 💡3xx: Redirection

Quando chama uma URL e acontece um redirecionamento 

- 301: Moved Permanently (a URL mudou permanentemente)
- 302: Moved (a URL mudou mas pode voltar)

## 💡4xx: Client Error

Quando enviou algum tipo de informação errada, acessou um rota que não existe, não se autenticou, tem alguam coisa faltando na requisição pro servidor

- 401: Bad Request (back-end esperava uma informação e não teve)
- 401: Unauthorized (não está autorizado para fazer o que esta tentando, ex: faltou estar logado)
- 404: Not Found (a rota não foi encontrada)

## 💡5xx: Server Error

Erros do back-end. Apesar do front-end ter enviado tudo certo, não foi possível formatar a resposta pelo back-end.

- 500: Internal Server Erro