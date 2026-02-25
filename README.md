# n1rwj-qrz-source

Source for the N1RWJ QRZ.com page. Built with Eleventy from Markdown.

## Quick start

1. Trust and install tools with mise:

```
mise trust
mise install
```

2. Install Node dependencies:

```
npm install
```

3. Build the static HTML:

```
mise run build
```

4. Optional local preview:

```
mise run dev
```

## Images workflow

1. Put source photos in `src/images/`.
2. Build:

```
mise run build
```

3. Use links in markdown like:

```md
![Station overview](assets/images/station-overview.jpg)
```

4. Build output will include:
- `dist/index.html`
- `dist/styles.css`
- `dist/assets/images/*`

Optional: run only the image step with `mise run images`.

## Project layout

- `src/index.md` - main page content
- `src/_includes/base.njk` - page layout template
- `src/images/` - source photos to process
- `dist/` - build output (generated)
- `mise/tasks/` - task scripts (`build`, `copy`, `dev`, `images`)
- `mise/config.toml` - toolchain configuration (Node 24)
