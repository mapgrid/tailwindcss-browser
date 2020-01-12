import postcss from 'postcss'
import tailwind from 'tailwindcss'

export const configure = config => css =>
    postcss([tailwind(config)]).process(css, { from: undefined })
