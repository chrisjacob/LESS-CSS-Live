/*!
* LESSCSSLive v0.10
* 2011-05-11
* - http://jsbin.com/agati5/10
*
* Live Preview LESS CSS on jsbin.com (beta mode)
* To enable "beta mode" on jsbin.com open firebug and run in console
* jsbin.on();
*
* Developed by:
* Chris Jacob
* - http://about.me/chrisjacob
* - http://twitter.com/_chrisjacob
*/

/*
* Random Notes:
*
* Need to try a demo using Bootstrap.less
* http://markdotto.com/bootstrap/
*
* Respond to this Github message
* "Inline less? "
* https://github.com/cloudhead/less.js/issues/108
*/

window.LESSCSSLive = (function( window, document ) {

    var version = '0.10',
    LESSCSSLive = {},
    LessInput = '',
    CssOutput = '',
  
    parseLess = function ( )
    {
        // Less.js Will Obsolete CSS
        // http://fadeyev.net/2010/06/19/lessjs-will-obsolete-css/
        less.env = "development";
        // less.watch();
      
        // Manually invoke the parser and compiler
        // http://lesscss.org/#-client-side-usage
        parser = new(less.Parser);           
      
        parser.parse(LESSCSSLive.LessInput, function (err, tree) {

            if (err)
            {
                return console.error(err);
            }
                  
            LESSCSSLive.CssOutput = tree.toCSS();
        });
      
        // How to create a <style> tag with Javascript
        // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript           
        var head = document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        styleCssOutput = document.createTextNode( LESSCSSLive.CssOutput ),
        displayLessInput = document.getElementById("LessInput"),
        displayCssOutput = document.getElementById("CssOutput"),
        textLessInput = document.createTextNode( LESSCSSLive.LessInput ),
        textCssOutput = document.createTextNode( LESSCSSLive.CssOutput );
      
        style.appendChild(styleCssOutput);
        head.appendChild(style);
        displayLessInput.appendChild(textLessInput);
        displayCssOutput.appendChild(textCssOutput);
    };
  

    // Assign private properties to the return object with prefix
    LESSCSSLive._version = version;
    LESSCSSLive.LessInput = LessInput;
    LESSCSSLive.CssOutput = CssOutput;
    LESSCSSLive.parseLess = parseLess;
    
    return LESSCSSLive;

})(this, this.document);