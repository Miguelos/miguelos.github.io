---
layout: page
title: Miguel's page!
tagline: 
---
{% include JB/setup %}

<div class="row-flow">
  <div class="span8">
    <h2><a href="{{ BASE_PATH }}about">About me</a></h2>
    {% include about %}
  </div>

  <div class="span4">
    <h2>Blog-roll</h2>
    {% include blogroll %}

    <h2><a href="{{ BASE_PATH }}portfolio">Portfolio</a></h2>

    <p>Here I have some of my <a href="{{ BASE_PATH }}portfolio">projects</a></p>

    <h2><a href="{{ BASE_PATH }}blog">My notes</a></h2>

    <ul class="posts">
      {% for post in site.posts limit: 7 %}
        <li><span>{{ post.category }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}"     {% unless page.tags == empty %}data-toggle="tooltip" title="{% for item in post.tags %}{{ item | capitalize }} {% endfor %}" {% endunless %}>{{ post.title }}</a></li> 
      {% endfor %}
    </ul>
  </div>

  <div class="span">
    <div class="alert alert-block alert-info">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <p><strong>Feedback</strong>: <a href="https://github.com/Miguelos/miguelos.github.io/issues"> github.com/Miguelos.github.io/issues</a>.</p>
    </div>
  </div>
</div>

