---
layout: post
title: "Pass array through POST method"
description: ""
category: post
tags: [php, json]
---
{% include JB/setup %}

## Tip: How to pass array through POST method
First use the function <code>json_encode()</code> to encode the array. Then use <code>htmlspecialchars()</code> to avoid errors caused by the quotes in json. Just like the following code:

{% highlight php %}
<?php
  ...
  echo '<input type="hidden" name="array" value="'.htmlspecialchars(json_encode($array)).'">';
  ...
?>
{% endhighlight %}

To obtain the array do the inverse operation. First decode using <code>htmlspecialchars_decode()</code> and then use <code>json_decode()</code> to build the original array.

{% highlight php %}
<?php
  ...
  $array = json_decode(htmlspecialchars_decode($_POST['$array']));
  ...
?>
{% endhighlight %}

<!--more-->

More info:
[http://stackoverflow.com/questions/4237090/how-to-pass-array-through-hidden-field](http://stackoverflow.com/questions/4237090/how-to-pass-array-through-hidden-field)