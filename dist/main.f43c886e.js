// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var $siteList = $(".siteList");
var $addButton = $(".addButton");
var $lastLi = $siteList.find('li.last');
var x = localStorage.getItem('x');
var xObject = JSON.parse(x);
var hashMap = xObject || [{
  logo: "B",
  url: "https://www.bilibili.com"
}, {
  logo: "D",
  url: "https://www.baidu.com"
}];

var replaceUrl = function replaceUrl(url) {
  return url.replace("http://", "").replace("https://", "").replace("www.", "").replace(/\/.*/, '');
};

var hashMapList = function hashMapList() {
  $siteList.find("li:not(.addButton)").remove();
  hashMap.forEach(function (item, index) {
    var $string = $("\n    <li class=\"site\">\n        <a href=\"".concat(item.url, "\">\n            <div class=\"siteBox\">\n                <div class=\"logo\">").concat(replaceUrl(item.url)[0].toUpperCase(), "</div>\n                <div class=\"siteUrl\">").concat(replaceUrl(item.url), "</div>\n                <div class=\"delete\">   \n                <svg class=\"icon\" aria-hidden=\"true\">\n                   <use xlink:href=\"#icon-cha\"></use>\n                </svg>\n               </div>\n             </div>\n        </a>\n    </li>\n    ")).insertBefore($addButton);
    $(".delete>.icon").on('click', function (e) {
      e.preventDefault(); // 阻止冒泡

      hashMap.splice(index, 1);
      hashMapList();
    });
  });
};

hashMapList();
$addButton.on("click", function () {
  var addUrl = window.prompt("请输入要添加的站点");

  if (addUrl !== null) {
    var logo = replaceUrl(addUrl)[0].toUpperCase();
    var url = addUrl;

    if (addUrl.indexOf("https") === -1) {
      url = "https://" + addUrl;
    } //console.log(logo, url)


    var addList = {
      logo: logo,
      url: url
    };
    hashMap.push(addList);
    hashMapList();
  }
});

window.onbeforeunload = function () {
  var value = JSON.stringify(hashMap);
  window.localStorage.setItem("x", value);
};

$(document).keydown(function (e) {
  var key = e.key;

  for (var i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url);
    }
  }
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f43c886e.js.map