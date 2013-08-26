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
      <blockquote>
        <p>Coderwall is a space for tech's most talented makers to connect, share, build, and be inspired.</p>
      </blockquote>
      <p>Check the badges I earned and feel free to take a look at my profile!</p>
      <p>My Coderall profile: <a href="https://coderwall.com/miguelos"><img alt="Endorse Miguelos on Coderwall" src="https://api.coderwall.com/miguelos/endorsecount.png" /></a></p>
    </div>
    {% endif %}
    {% if site.author.codeschool %}
    <div class="tab-pane fade" id="proudify-codeschool">
      <blockquote>
        <p>Code School teaches web technologies in the comfort of your browser with video lessons, coding challenges, and screencasts. We strive to help you learn by doing.</p>
      </blockquote>
      <p>Here are my completed courses.</p>
    </div>
    {% endif %}
    {% if site.author.github %}
    <div class="tab-pane fade" id="proudify-github">
    </div>
    {% endif %}
  </div>
</div>
