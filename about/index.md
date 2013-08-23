---
layout: page
title: About me
header : Post Archive
group: navigation
priority: 1
---

<div class="span4">
{% include about %}
</div>
<div class="span8">
  <h2>Arround the web!</h2>
  <ul class="nav nav-tabs">
    {% if site.author.coderwall %}
    <li class="active"><a href="#proudify-coderwall" data-toggle="tab">Coderwall</a></li>
    {% endif %}
    {% if site.author.codeschool %}
    <li><a href="#proudify-codeschool" data-toggle="tab">Codeschool</a></li>
    {% endif %}
    {% if site.author.github %}
    <li><a href="#proudify-github" data-toggle="tab">Github</a></li>
    {% endif %}
  </ul>
  <div class="tab-content">
    {% if site.author.coderwall %}
    <div class="tab-pane fade active in" id="proudify-coderwall">
      <a href="https://coderwall.com/miguelos"><img alt="Endorse Miguelos on Coderwall" src="https://api.coderwall.com/miguelos/endorsecount.png" /></a>
    </div>
    {% endif %}
    {% if site.author.codeschool %}
    <div class="tab-pane fade" id="proudify-codeschool">
    </div>
    {% endif %}
    {% if site.author.github %}
    <div class="tab-pane fade" id="proudify-github">
    </div>
    {% endif %}
  </div>
</div>
