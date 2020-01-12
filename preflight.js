import postcss from 'postcss'
import normalize from 'normalize.css'
import preflight from 'tailwindcss/lib/plugins/css/preflight.css'

export default function() {
    return function({ addBase }) {
        const normalizeStyles = postcss.parse(normalize, 'utf8')
        const preflightStyles = postcss.parse(preflight, 'utf8')
        addBase([...normalizeStyles.nodes, ...preflightStyles.nodes])
    }
}
