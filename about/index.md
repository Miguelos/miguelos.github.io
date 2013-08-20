---
layout: page
title: About me
header : Post Archive
group: navigation
---

<div class="span4">
	<p>I am Miguel González Pérez, a full stack developer and software engineer. I am enthusiastic about the field, eager to learn the latest programming languages, new technologies and development tools. Also, I am passionate about open source and GNU-Linux systems.</p>

  <section>
  	<h2>Contact</h2>

  	<p>me at miguelos.me</p>
  </section>
</div>
<div class="span8">
  <h2>More!</h2>
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
