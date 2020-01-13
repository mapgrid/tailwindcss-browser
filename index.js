import tailwind from 'tailwindcss'
import postcss from 'postcss'

const configure = config => css =>
    postcss([tailwind(config)]).process(css, { from: undefined })

export default {
    tailwind,
    postcss,
    configure,
}
