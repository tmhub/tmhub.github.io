---
layout: home
---

<div class="jumbotron mdl-color--grey-100">
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <div class="mdl-typography--font-light mdl-typography--display-3">
        Themes
      </div>
      <div class="mdl-typography--font-light mdl-color-text--grey-700 mdl-typography--headline">
        <a href="{{ "/" | prepend: site.baseurl }}" title="Go Back">&#8656;</a> Templates-Master documentation
      </div>
    </div>
  </div>
</div>

<div class="">
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      {% for group in site.data.products %}
        {% if group.title != 'Themes' %}
          {% continue %}
        {% endif %}
        <div class="clearfix products-group group-{{ group.title | downcase | replace: ' ', '-' }}">
          <h3>
            {{ group.title }}
            {% if group.url %}
              <a title="{{ group.title }}" href="{{ group.url | prepend: site.baseurl }}">&#8658;</a>
            {% endif %}
          </h3>
          <ul class="list-products">
            {% assign products = group.items | sort: "title" %}
            {% for product in products %}
              {% if product.hidden == true %}
                {% continue %}
              {% endif %}
              <li>
                {% assign dataBadge = "" %}
                {% if product.badge %}
                  {% capture dataBadge %} data-badge="{{ product.badge }}"{% endcapture %}
                {% elsif product.free %}
                  {% capture dataBadge %} data-badge="free"{% endcapture %}
                {% elsif product.hot %}
                  {% capture dataBadge %} data-badge="hot"{% endcapture %}
                {% endif %}

                {% capture className %} class="{% if product.hot %}hot mdl-badge {% endif %}{% if product.free %}free mdl-badge {% endif %}{% if product.badge %}mdl-badge {% endif %}{{ product.class }}"{% endcapture %}
                <a href="{{ product.url | prepend: site.baseurl }}" title="{{ product.title }}"{{ className }}{{ dataBadge }}>{{ product.title }}</a>
              </li>
            {% endfor %}
          </ul>
        </div>
      {% endfor %}
    </div>
  </div>
</div>
