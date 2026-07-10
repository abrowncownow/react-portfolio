# Alex Brown — Cloud & Platform Engineer

The source for [abrowncownow.com](https://abrowncownow.com), rebuilt around Alex's current cloud and platform engineering work.

## Stack

- React 19 + Vite
- [Pretext](https://github.com/chenglou/pretext) for the live kinetic text layout
- GitHub Pages deployment through the existing `gh-pages` branch

## Local development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`; output is written to `dist/`.

## Deployment

Run `npm run deploy` to build and update the existing `gh-pages` branch. This keeps `https://abrowncownow.github.io/react-portfolio/` current. In the repository's **Settings → Pages**, set the custom domain to `abrowncownow.com` only after its Route 53 records point to GitHub Pages.

The domain currently uses Cloudflare nameservers. Point the apex to GitHub Pages with these DNS-only A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Point `www` to `abrowncownow.github.io` with a CNAME. Complete GitHub's domain verification before enabling the custom domain, then enable HTTPS after DNS resolves.
