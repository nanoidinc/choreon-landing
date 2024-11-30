== Choreon Landing

== Local Run

```bash
npm i
npm run dev
```

== Build & Publish

Only commit generated files into `gh-page` branch.

```bash
git checkout gh-page
npm run build
git add -A
git commit -m 'Publish website'
```
