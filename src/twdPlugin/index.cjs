const plugin = require('tailwindcss/plugin')
const buttons = require('./button.cjs')


module.exports =  plugin(function({ addComponents }) {
    addComponents({
        ...buttons
    })
})