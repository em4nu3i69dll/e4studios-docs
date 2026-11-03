# Troubleshooting

## You lack the required entitlement

The server lacks the required permission to run a protected asset. Check the server owner account and the account that received the resource. See the [Cfx.re explanation](https://docs.fivem.net/docs/server-manual/asset-escrow/).

## Missing dependency

Check that the dependency is installed, retains the correct folder name and starts before the resource that needs it. Read the first console error rather than only later messages.

## UI does not open

Check client errors and the server console. Verify the documented command or key and any conditions required to open the interface. Isolate conflicts in a test environment.

## Database error

Keep the full error. Check the connection and migrations listed by the resource guide. Do not delete tables or run another product’s SQL as a fix.

## Missing purchase

Read [account and purchases](./cuenta.md). You will need the account used and the Tebex reference when requesting help.

## Still unresolved

Write down reproduction steps and read [how to contact support](./soporte.md).
