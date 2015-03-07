---
layout: page
---
{% include JB/setup %}

<div class="row">
  <section class="col-sm-10 col-md-8" id="my-notes">
    <h2><a href="{{ BASE_PATH }}blog">Latest notes</a></h2>
    <ul class="fa-ul">
      {% for post in site.posts limit: 7 %}
        <li><i class="fa fa-li {% if post.category == 'post' %} fa-file-text{% else %} fa-paperclip {% endif %}"> </i><a href="{{ BASE_PATH }}{{ post.url }}" {% unless page.tags == empty %}data-toggle="tooltip" title="{% for item in post.tags %}{{ item | capitalize }} {% endfor %}" {% endunless %}>{{ post.title }}</a></li> 
      {% endfor %}
    </ul>
  </section>

  <section id="blog-roll" class="col-sm-2 col-md-4">
    <h2>Blog-roll</h2>
    {% include blogroll %}
  </section>

  <section class="col-sm-12" role="tabpanel">
    <h2>Arround the web!</h2>
    <section class="col-sm-12" id="linkedin">
      <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
     <script type="IN/MemberProfile" data-id="uk.linkedin.com/in/miguelgpms" data-format="inline" data-related="false"></script>
    </section>
    <ul class="nav nav-tabs" role="tablist">
      {% if site.author.coderwall %}
      <li id="proudify-coderwall" class="col-sm-12 col-md-6">
        <h3>Coderwall</h3>
        <blockquote>
          <p>Coderwall is a space for tech's most talented makers to connect, share, build, and be inspired.</p>
        </blockquote>
        <p>Check the badges I earned and feel free to take a look at my profile!</p>
        <a href="https://coderwall.com/miguelos" target="_blank">My Coderall profile.</a>
      </li>
      {% endif %}
      {% if site.author.codeschool %}
      <li id="proudify-codeschool" class="col-sm-12 col-md-6">
        <h3>Codeschool</h3>
        <blockquote>
          <p>Code School teaches web technologies in the comfort of your browser with video lessons, coding challenges, and screencasts. We strive to help you learn by doing.</p>
        </blockquote>
        <p>Here are my completed courses.</p>
      {% endif %}
    </ul>
  </section>

</div>
