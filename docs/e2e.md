# E2E Testing with Maestro

End-to-end tests use [Maestro](https://maestro.mobile.dev/) to run user flows on a real app build (simulator/emulator or device).

## Install Maestro CLI

Install Maestro before running `npm run e2e` or `npm run e2e:smoke` (otherwise you'll get `maestro: command not found`):

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```

Then restart your terminal (or run `source ~/.zshrc` / `source ~/.bashrc`) so `maestro` is on your PATH.

## Requirements

- **Development build**: Run tests against a **development build** of the app (not Expo Go). This gives a stable app id and full control. See [Expo E2E tests](https://docs.expo.dev/build-reference/e2e-tests/).
- **Running app**: Start an iOS Simulator or Android Emulator and install your dev build, or use the app built by EAS for CI.

## Running tests

From the project root:

```bash
# Run all E2E flows
npm run e2e

# Run only the smoke flow
npm run e2e:smoke
```

Or with Maestro directly:

```bash
# All flows (--config loads env from .maestro/config.yaml; include shoe-store explicitly)
maestro test -e APP_ID=host.exp.Exponent .maestro/flows/ .maestro/flows/shoe-store/

# Single flow
maestro test -e APP_ID=host.exp.Exponent .maestro/flows/smoke.yaml

# With a specific app (e.g. built artifact)
maestro test --app path/to/your.app .maestro/flows/smoke.yaml
```

## Structure

```
.maestro/
  config.yaml       # Env (e.g. APP_ID)
  flows/            # Top-level flows
    smoke.yaml
    main-flow.yaml
    shoe-store/
      search-and-product.yaml
      bag-checkout.yaml
  subflows/         # Reusable steps
    go-to-shoe-store.yaml
```

- **smoke**: App launches and basic navigation (Home → Projects → back → About → back).
- **main-flow**: Home → Projects (back) → About → navigate sections Who I Am ↔ Experience (back).
- **shoe-store/search-and-product**: Go to Shoe Store, search, open product, select size, add to bag.
- **shoe-store/bag-checkout**: Add to bag, open bag, checkout, see success and finish.
- **subflows/go-to-shoe-store**: Navigate from Home to Shoe Store (used by shoe-store flows).

## Configuration

- **APP_ID**: In `.maestro/config.yaml`, `env.APP_ID` defaults to `host.exp.Exponent`. Override it when using a custom development build (your app’s bundle id / package name). The scripts use `--config .maestro/config.yaml` so this file is always loaded; set `APP_ID` in CI or locally for a dev build.

## testID convention

E2E flows use **testID** on key elements for stable selectors (especially with i18n). Convention:

- **English, kebab-case**
- **Screen/area prefix** where useful (e.g. `shoe-detail-add-to-bag`, `bag-checkout`)

Examples in the app:

| testID                      | Location                                                     |
| --------------------------- | ------------------------------------------------------------ |
| `home-screen`               | Home screen container                                        |
| `nav-projects`, `nav-about` | Home navigation options                                      |
| `about-swiper-prev`, `about-swiper-next` | About screen section navigation (Who I Am / Experience) |
| `project-card-{id}`         | Project card (e.g. `project-card-shoe-store` for Shoe Store) |
| `shoe-store-home`           | Shoe Store home screen                                       |
| `shoe-store-search-button`  | Search button in Shoe Store                                  |
| `shoe-store-bag-button`     | Bag icon in header                                           |
| `search-input`              | Search text input                                            |
| `search-result-{id}`        | Search result item                                           |
| `shoe-preview-{id}`         | Shoe card on home list                                       |
| `shoe-detail-size-{size}`   | Size option on shoe detail (e.g. `shoe-detail-size-10`)      |
| `shoe-detail-add-to-bag`    | Add to bag on detail                                         |
| `bag-checkout`              | Checkout button on bag screen                                |
| `bag-item-{bagItemId}`      | Bag item card                                                |

When adding new critical paths, add a `testID` to the main interactive element so Maestro can target it reliably.

## CI (EAS)

You can run Maestro in [EAS Workflows](https://docs.expo.dev/build-reference/e2e-tests/): add a job that builds the app, installs the Maestro CLI, and runs `maestro test --config .maestro/config.yaml .maestro/flows/ .maestro/flows/shoe-store/` against the built app. Use EAS secrets or workflow env to set `APP_ID` to your build’s bundle id.

## Locale

Flows are written for **English** UI strings (e.g. "Projects", "About me", "Shoe Store", "My Bag", "Checkout"). Run the app in English when executing E2E, or rely on testID-based steps where possible.
