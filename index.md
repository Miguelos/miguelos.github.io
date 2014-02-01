---
layout: page
---
{% include JB/setup %}

<div class="row">
  <section class="col-sm-7 col-md-8">
    <h2><a href="{{ BASE_PATH }}about">About me</a></h2>
    {% include about %}
  </section>

  <aside class="col-sm-5 col-md-4">
    <section id="my-notes">
      <h2><a href="{{ BASE_PATH }}blog">My notes</a></h2>
      <ul class="fa-ul">
        {% for post in site.posts limit: 7 %}
          <li><i class="fa fa-li {% if post.category == 'post' %} fa-file-text{% else %} fa-link {% endif %}"> </i><a href="{{ BASE_PATH }}{{ post.url }}" {% unless page.tags == empty %}data-toggle="tooltip" title="{% for item in post.tags %}{{ item | capitalize }} {% endfor %}" {% endunless %}>{{ post.title }}</a></li> 
        {% endfor %}
      </ul>
    </section>

    <section id="blog-roll">
      <h2>Blog-roll</h2>
      {% include blogroll %}
    </section>
  </aside>
</div>

<aside class="notification notification-bottom alert alert-block alert-info">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <p><strong>Feedback</strong>: <a href="https://github.com/Miguelos/miguelos.github.io/issues"> github.com/Miguelos.github.io/issues</a>.</p>
</aside>

