# Dalera Properties: frontend (Next.js, JavaScript)

```
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

- 11 route files generate the 28 launch URLs (7 core, 3 legal, 18 project pages from `app/properties/[slug]`).
- Initial site loader: `components/SiteLoader.js`. Route-change loader: `components/RouteLoader.js`. Both use `components/LoaderMark.js`; swap the placeholder "D" for the approved logo.
- All content, developers and the 18 placeholder projects live in `lib/data.js`. Set `site.whatsappNumber` for the WhatsApp link.
- Inquiry forms validate and show the success message, but nothing is sent yet (no backend, per scope).

## Real photos and video
See `public/images/README.txt`. Add `public/videos/hero.mp4` for the hero video and `.jpg` files for projects and developers; placeholders show until the files exist.
