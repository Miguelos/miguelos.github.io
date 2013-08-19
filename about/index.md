---
layout: page
title: About me
header : Post Archive
group: navigation
---

<div class="span9">
	<p>I am Miguel González Pérez, a developer and software engineer. I am enthusiastic about the field, eager to learn the latest programming languages, new technologies and development tools. Also, I am passionate about open source and GNU-Linux systems.</p>

  <section>
  	<h2>Contact</h2>

  	<p>me at miguel.me</p>
  </section>
</div>
<div class="span3">
  {% if site.author.coderwall %}
  <section>
    <h3>Coderwall</h3>
      <ul id="cw_badges">
        <li class="loading">Loading badges...</li>
      </ul>
    <p><a  href="https://coderwall.com/{{site.author.coderwall}}"><img alt="Endorse {{site.author.coderwall}} on Coderwall" src="https://api.coderwall.com/{{site.author.coderwall}}/endorsecount.png" /></a></p>
  </section>
  {% endif %}
</div>
