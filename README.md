# jquery-uri-scheme-fallback

## install package and add it to bower.json dependencies

`bower install jquery-uri-scheme-fallback --save`

Or alternatively, grab the jquery.uri-scheme-fallback.js and include it in your project.

## example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JQuery URI Scheme Fallback</title>
</head>
<body>
    <ul>
        <li>Message: <span data-scheme="sms:001123123456">001 123 123456</span></li>
        <li>Call: <span data-scheme="tel:001123123456">001 123 123456</span></li>
        <li>Facetime: <span data-scheme="facetime:user@domain.tld">user@domain.tld</span></li>
        <li>Facebook: <a href="//www.facebook.com/xyz" data-scheme="fb://profile/123123456">www.facebook.com/xyz</a></li>
    </ul>
  
    <script src="//code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="jquery.uri-scheme-fallback.js"></script>
    <script>
    (function($) { 
        $('[data-scheme]').uriSchemeFallback({
            'log': true
        });
    })(jQuery);
    </script>
</body>
</html>
```

