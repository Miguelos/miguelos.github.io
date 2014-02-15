---
layout: post
title: "Jekyll Bootstrap sticky footer"
category : post
tagline: ""
tags : [Jekyll, Jekyll-Bootstrap, Bootstrap, CSS, SASS, HTML]
---

## How to add a sticky footer

To use the sticky footer you'll need to modify the default theme template and add some css.

_include/theme/THEMENAME/default.html_:

{% highlight html %}
    ...
    <body>
      <div class="wrap">
        <!-- navbar and content here! -->
        <div class="footer-push"></div>
      </div>
      
      <footer>
        <div class="container">
          <!-- footer here! -->
        </div>
      </footer>
    </body>
    ...
{% endhighlight %}

Sass code:

{% highlight sass %}
    /* Sticky footer */
    $footerHeight: 75px;

    //Page full height
    html, body {
        height: 100%;
    }
    
    #page-wrap {
        min-height: 100%;
        height: auto !important;
        height: 100%;
        // Negative indent footer by it's height
        margin-bottom: -($footerHeight);
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
    }
    
    //footer fixed height
    .footer-push,
    footer {
        height: $footerHeight;
        max-height: $footerHeight;
        overflow: hidden;
    }
{% endhighlight %}

---

## Hooligan theme with sticky footer

I've used this theme with a sticky footer. 

![Hooligan theme screenshot][1]

You can install it running in your terminal:

{% highlight bash %}
    rake theme:install git="https://github.com/Miguelos/hooligan.git"
{% endhighlight %}

---

## Bootstrap sticky footer

[Here](http://getbootstrap.com/examples/sticky-footer-navbar/) you have the example of a sticky footer for twitter bootstrap.


  [1]: http://i.stack.imgur.com/tTWbk.png
