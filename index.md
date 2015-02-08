---
layout: page
---
{% include JB/setup %}

<div class="row">
  <section class="col-sm-7 col-md-8" id="my-notes">
    <h2><a href="{{ BASE_PATH }}blog">My notes</a></h2>
    <ul class="fa-ul">
      {% for post in site.posts limit: 7 %}
        <li><i class="fa fa-li {% if post.category == 'post' %} fa-file-text{% else %} fa-paperclip {% endif %}"> </i><a href="{{ BASE_PATH }}{{ post.url }}" {% unless page.tags == empty %}data-toggle="tooltip" title="{% for item in post.tags %}{{ item | capitalize }} {% endfor %}" {% endunless %}>{{ post.title }}</a></li> 
      {% endfor %}
    </ul>
  </section>

  <section id="blog-roll" class="col-sm-5 col-md-4">
    <h2>Blog-roll</h2>
    {% include blogroll %}
  </section>
</div>
