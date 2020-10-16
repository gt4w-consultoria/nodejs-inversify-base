# NodeJs - Projeto base com inversify-express

Projeto base de NodeJS, utilizando inversify e inversify-express.

## Instalação

Instalar o Yarn:
https://classic.yarnpkg.com/en/docs/install/#debian-stable

Rodar os seguintes comandos na raiz do projeto:

```bash
yarn
yarn start
```

O projeto está configurado para escutar a porta 3333.

Para testar o funcionamento deve-se fazer uma requisição get para a rota **localhost:3333/dados/get**.
A rota deve retornar um objeto JSON.

## Padrão utilizado

O projeto possui 3 camadas:.

- Na camada de serviços(Service Layer), devem ficar as controllers, services e models.
- Na camada de Providers devem ficar todas as chamadas a APIs externas(serviços de autenticação, arcGIS, etc).
- Na camada Repositories devem ficar todas as operações realizadas em bancos de dados.

A comunicação entre as camadas é feita por uma camada de abstração.

![Alt text](./relacao.png?raw=true 'Title')

Desta maneira o sistema permite uma maior flexibilidade, já que a troca de tecnologias utilizadas por uma camada não impactam as outras.

Este projeto levou em consideração alguns dos princípios SOLID, tentando encontrar um meio termo entre rápido e eficiente.
Devido a isso alguns dos conceitos do SOLID não foram seguidos à risca.

## Como utilizar

Foram criadas algumas classes para exemplificar o funcionamento do sistema.
É desejável que as adições sigam o padrão existente.

Para mais informações ler a documentação das bibliotecas utilizadas:

InversifyJS: https://github.com/inversify/InversifyJS

Inversify-express-utils: https://github.com/inversify/inversify-express-utils

## Observações

### ESLint e Prettier

Ambas as dependencias foram adicionadas pois facilitam o desenvolvimento e o debug, mas não são necessárias

### Autenticação de usuário

Neste projeto existe um provider de autorização do usuário, porém o inversify-express
já proporciona uma estrutura para autorização de usuários. Essa estrutura não foi utilizada aqui com o
objetivo de deixar os exemplos o mais simples possíveis.

### Composição de componentes

O arquivo ./inversify.config.ts é o container da injeção de dependencias, ele é o único lugar onde as camadas
irão interagir diretamente entre si.

Segundo o próprio Inversify, este arquivo deve ser único para todas as injeções, e deve ficar o mais próximo da
raíz do projeto que for possível. Isso pode fazer com que o arquivo fique convoluto em projetos maiores,
mas evita problemas mais sérios.

Leituras complementares:

- [Service Locator is an Anti-Pattern](https://blog.ploeh.dk/2010/02/03/ServiceLocatorisanAnti-Pattern/)

- [Composition Root](https://blog.ploeh.dk/2011/07/28/CompositionRoot/)

## License

MIT License

Copyright (c) 2020 GT – Global Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
