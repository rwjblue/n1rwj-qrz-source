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

## Project layout

- `src/index.md` - main page content
- `src/_includes/base.njk` - page layout template
- `dist/` - build output (generated)
- `mise/tasks/` - task scripts (`build`, `dev`)
- `mise/config.toml` - toolchain configuration (Node 24)
