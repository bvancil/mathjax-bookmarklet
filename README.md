MathJax Bookmarklet
===================

MathJax Bookmarklet is a bookmarklet for rendering TeX/LaTeX and MathML notation on pages dynamically using the [MathJax](http://www.mathjax.org/) library.

Pages don't have to include mathjax.js. The library is included and configured dynamically. The LaTeX preprocessor will render equations delimited by $ and \[ \]. The ASCIIMathML preprocessor will render equations delimited by `.

*Note: This bookmarklet will also try to render math notation inside iframes. This will be successfully executed only on iframes on the same domain because cross-domain policies don't support modification of iframe content from other domains*.

Minify the bookmarklet from bookmarklet.js by using `uglifyjs bookmarklet.js -m`. (with UglifyJS2)

Install the bookmarklet **[HERE](http://checkmyworking.com/misc/mathjax-bookmarklet/)**.
