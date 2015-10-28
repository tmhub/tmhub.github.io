var Search = function(options) {

  if (!options.template) {
    options.template = '<li><a href="{{url}}" title="{{description}}">{{title}}</a></li>';
  }

  var docs,
    loaded = false,
    idx = lunr(function () {
      this.field('title', {boost: 10});
      this.field('category', {boost: 3});
      this.field('description');
      this.field('keywords');
      this.field('searchterms');
      this.ref('id');
    });

  // open search.json file and load it to the memory
  var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("GET", options.json, true);
  xhr.onreadystatechange = function() {
    if (xhr.status==200 && xhr.readyState==4) {
      loaded = true;
      try {
        docs = JSON.parse(xhr.responseText);
        for (var i in docs) {
          docs[i].id = i;
          idx.add(docs[i]);
        }
      } catch(err) {
        console.log(err);
      }
    }
  };
  xhr.send();

  if (options.searchInput) {
    options.searchInput.addEventListener('keyup', function() {
      render(search(this.value, options.limit));
    }, false);
  }

  var search = function(value, limit) {
    if (!value) {
      return false;
    }
    limit = limit || 10;
    return idx.search(value).slice(0, limit).map(function(result) {
      return docs[parseInt(result.ref, 10)];
    });
  };

  var render = function(records) {
    var result = '';
    if (false !== records) {
      for (var i in records) {
        result += Mustache.render(options.template, records[i]);
      }
      if (!result) {
        result = 'No results found';
      }
      options.resultsContainer.className = 'shown';
    } else {
      options.resultsContainer.className = '';
    }
    options.resultsContainer.innerHTML = result;
  };

  return {
    search: function(value, limit) {
      var args = arguments;
      if (!loaded) {
        return setTimeout(function() {
          args.callee(value, limit);
        }, 200);
      }
      render(search(value, limit));
    }
  };
};
