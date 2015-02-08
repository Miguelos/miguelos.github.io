---
layout: page
title: About me
header : Post Archive
group: navigation
priority: 1
permalink: about/
---

<section class="about">
  {% include about %}
</section>
<section class="" role="tabpanel">
  <h2>Arround the web!</h2>
  <ul class="nav nav-tabs" role="tablist">
    {% if site.author.coderwall %}
    <li id="proudify-coderwall">
      <h3>Coderwall</h3>
      <blockquote>
        <p>Coderwall is a space for tech's most talented makers to connect, share, build, and be inspired.</p>
      </blockquote>
      <p>Check the badges I earned and feel free to take a look at my profile!</p>
      <a href="https://coderwall.com/miguelos" target="_blank">My Coderall profile.</a>
    </li>
    {% endif %}
    {% if site.author.codeschool %}
    <li id="proudify-codeschool">
      <h3>Codeschool</h3>
      <blockquote>
        <p>Code School teaches web technologies in the comfort of your browser with video lessons, coding challenges, and screencasts. We strive to help you learn by doing.</p>
      </blockquote>
      <p>Here are my completed courses.</p>
    {% endif %}
  </ul>
</section>
