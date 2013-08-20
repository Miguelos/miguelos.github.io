---
layout: page
title: Miguel's page!
tagline: Technology enthusiast
---
{% include JB/setup %}

<div class="span12">
	<div class="alert alert-block alert-info">
	  <button type="button" class="close" data-dismiss="alert">&times;</button>
	  <strong>Hi!</strong>
	  <p>I created this site and would really appreciate your feedback. If you find any error in this website, feel free to open a new Issue at <a href="https://github.com/Miguelos/miguelos.github.io/issues"> github.com/Miguelos.github.io/issues</a>. I'm working on updating the content and improving it.</p>
	</div>
</div>

<div class="span6">
	<h2>About me</h2>
	{% include about %}
</div>

<div class="span6">
	<h2>Portfolio</h2>

	<p><a href="{{ BASE_PATH }}portfolio">Collection of projects</a></p>

	<h2>Posts</h2>

	<ul class="posts">
	  {% for post in site.posts limit: 5 %}
	    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}"     {% unless page.tags == empty %}data-toggle="tooltip" title="Tags: {% for item in post.tags %}{{ item | capitalize }} {% endfor %}" {% endunless %}>{{ post.title }}</a></li> 
	  {% endfor %}
	</ul>
</div>
