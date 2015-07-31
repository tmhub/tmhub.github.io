var Search = function(options) {

  if (!options.template) {
    options.template = '<li><a href="{{url}}" title="{{description}}">{{title}}</a></li>';
  }

  var docs,
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

  options.searchInput.addEventListener('keyup', function() {
    var results = idx.search(this.value).map(function(result) {
      return docs[parseInt(result.ref, 10)];
    });
    render(results);
  }, false);

  var render = function(records) {
    var result = '';
    for (var i in records) {
      result += Mustache.render(options.template, records[i]);
    }
    if (!result) {
      result = 'No results found';
    }
    options.resultsContainer.innerHTML = result;
  };

};
