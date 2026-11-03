# Instalação

Estes passos são gerais. Os requisitos e a ordem exata dependem do guia de cada recurso.

## Preparar o servidor

- Faça backup dos arquivos e da base de dados.
- Teste as mudanças em um servidor de desenvolvimento.
- Confira o framework e as dependências indicadas.
- Baixe o recurso pelo canal informado na compra.

## Copiar o recurso

Extraia a pasta dentro de `resources`. Evite pastas duplicadas uma dentro da outra e mantenha o nome indicado pelo desenvolvedor.

```text
resources/
└── nome_do_recurso/
    ├── fxmanifest.lua
    └── ...
```

`nome_do_recurso` é um exemplo. Use o nome real da pasta baixada.

## Configurar e iniciar

1. Instale primeiro as dependências.
2. Edite somente os arquivos documentados como configuráveis.
3. Execute SQL somente se o guia exigir, depois do backup.
4. Adicione o recurso ao `server.cfg` depois das dependências.

```ini
ensure nome_do_recurso
```

Reinicie conforme as instruções do produto, confira o console e teste as funções com uma conta de teste.

## Arquivos protegidos

Arquivos protegidos por Asset Escrow podem não permitir edição. Não tente remover a proteção. Consulte a [documentação oficial Cfx.re](https://docs.fivem.net/docs/server-manual/asset-escrow/).
