# Installation

These steps are general. Exact requirements and installation order depend on the resource guide.

## Prepare the server

- Back up your files and database.
- Test changes on a development server.
- Check the listed framework and dependencies.
- Download the resource from the channel specified with your purchase.

## Copy the resource

Extract the resource folder inside `resources`. Avoid duplicate nested folders and keep the name specified by the developer.

```text
resources/
└── resource_name/
    ├── fxmanifest.lua
    └── ...
```

`resource_name` is an example. Use the actual folder name from your download.

## Configure and start

1. Install dependencies first.
2. Edit only files documented as configurable.
3. Run SQL only if the product guide requires it, after making a backup.
4. Add the resource to `server.cfg` after its dependencies.

```ini
ensure resource_name
```

Restart as required by the product instructions, check the console and test its functions with a test account.

## Protected files

Files protected by Asset Escrow may not be editable. Do not attempt to remove that protection. See the [official Cfx.re documentation](https://docs.fivem.net/docs/server-manual/asset-escrow/) for details.
