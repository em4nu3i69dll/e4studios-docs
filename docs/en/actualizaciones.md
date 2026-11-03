# Updates

## Before updating

Read the release notes and check for dependency, configuration or database changes. Do not assume every version can be installed by replacing the entire folder.

## Back up

Keep the installed version, its configuration and a database backup. Preserve what you need to restore the previous version if testing fails.

## Apply the update

1. Test the new package outside production.
2. Compare configuration files with the installed version.
3. Follow documented migrations, if any.
4. Start dependencies and the resource in the documented order.
5. Check the console and main functions.

## If something fails

Stop testing and keep the full error. If you need to roll back, restore both changed files and data from your backup. Do not mix versions without checking compatibility.

Each product page states which updates are included.
