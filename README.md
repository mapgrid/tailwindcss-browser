<h2 align="center">Tailwind CSS [Browser]</h2>
<p align="center">
    Browser build of <a href="https://github.com/tailwindcss/tailwindcss">Tailwind CSS</a>.
    Automatically tracks latest Tailwind release.
</p>

<p align="center">
    <a href="https://github.com/mapgrid/tailwindcss-browser/releases"><img src="https://github.com/mapgrid/tailwindcss-browser/workflows/Publish/badge.svg" alt="Status"></a>
    <a href="https://github.com/mapgrid/tailwindcss-browser/releases"><img src="https://img.shields.io/npm/v/tailwindcss-browser.svg" alt="Latest Release"></a>
</p>

------

## Documentation

```js
import postcss from 'postcss-browser'
import tailwind from 'tailwindcss-browser'

postcss([
    tailwind({
        // Tailwind CSS config
    })
]).process(`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
`, {
    from: undefined,
}).then(result => {
    console.log(result.css)
})
```
