# transformação de JS
babel --presets react,es2015 ../js/source -d ../js/build

# empacotamento de JS
browserify ../js/build/app.js -o ../bundle.js

# empacotamento de CSS
#(Get-Content bundle.css).replace('../../images', 'images') | Set-Content bundle.css