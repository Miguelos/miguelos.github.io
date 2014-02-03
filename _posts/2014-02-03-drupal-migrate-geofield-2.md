---
layout: post
title: "Migrate Geofield 2.0"
description: "How to migrate Drupal Geofield with subfield notation"
category: "post"
tags: [Drupal, Drupal Migrate, Drupal Geofield, PHP]
---
{% include JB/setup %}

If you follow Geofield's example in the documentation, you will get this error:
>The field mapping arguments() method is now deprecated - please use subfield notation instead.

Here is how I managed to migrate Geofield (latitude/longitude) using subfield notation.

To migrate Geofield (2.0) using **migrate_extras** handler, apply latest patch in [https://drupal.org/node/1997316](https://drupal.org/node/1997316).

Code for mapping fields:

{% highlight php %}
<?php
  ...
  $this->addFieldMapping('field_location', 'point');
  $this->addFieldMapping('field_location:input_format', 'input_format');
  $this->addFieldMapping('field_location:geo_type', 'point');
  $this->addFieldMapping('field_location:lat', 'latitudine')
     ->xpath('Latitude');
  $this->addFieldMapping('field_location:lon', 'longitudine')
     ->xpath('Longitude');
  ...
?>
{% endhighlight %}

Inside prepareRow():

{% highlight php %}
<?php
  ...
    public function prepareRow($row) {
      ...
      $row->geo_type = 'point';
      $row->input_format = 'lat/lon';
      ...
    }
  ...
?>
{% endhighlight %}

### Useful links
- [Geofield patch for migrate extras.](https://drupal.org/node/1997316)
- [http://drupal.stackexchange.com/a/101707/13365](http://drupal.stackexchange.com/a/101707/13365)


