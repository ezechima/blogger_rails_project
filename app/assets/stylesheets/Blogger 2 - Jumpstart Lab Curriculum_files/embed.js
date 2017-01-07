var Swiftype = window.Swiftype || {};
Swiftype.root_url = Swiftype.root_url || "//search-api.swiftype.com";
Swiftype.embedVersion = Swiftype.embedVersion || 'v1';
if (typeof Swiftype.renderStyle === 'undefined') {
  Swiftype.renderStyle = 'nocode';
}

Swiftype.isMobile = function() {
  var ua = window.navigator.userAgent;
  if(/iPhone|iPod/.test(ua) && ua.indexOf("AppleWebKit") > -1 ) {
    return true;
  }
  if (/Android/.test(ua) && /Mobile/i.test(ua) && ua.indexOf("AppleWebKit") > -1 ) {
    return true;
  }
  return false;
};

Swiftype.loadScript = function(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;

  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);

  if (script.addEventListener) {
    script.addEventListener('load', callback, false);
  } else {
    script.attachEvent('onreadystatechange', function() {
      if (/complete|loaded/.test(script.readyState))
        callback();
    });
  }
};

Swiftype.loadStylesheet = function(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(link);
};

Swiftype.loadSupportingFiles = function(callback) {
  if (Swiftype.renderStyle === false) {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_no_render-3e32a5d60c44125ddb766683331cff94.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype-2a59bd96cc2fb7e88e86d5cb292104e2.css");
  } else if (Swiftype.isMobile() && !Swiftype.disableMobileOverlay) {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_nocode-aaedb6772bb53c7dcdd30b0bbc989a10.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype_nocode-cb4f5338e91a3b6de62b9ec752f79caa.css");
  } else if (Swiftype.renderStyle === 'inline' || Swiftype.renderStyle === 'new_page') {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_onpage-b905b511f67baa9eb08825807f78b572.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype-2a59bd96cc2fb7e88e86d5cb292104e2.css");
  } else {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_nocode-aaedb6772bb53c7dcdd30b0bbc989a10.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype_nocode-cb4f5338e91a3b6de62b9ec752f79caa.css");
  }
};

var Swiftype = (function(window, undefined) {
   if (Swiftype.embedVersion === 'v1') {
     Swiftype.loadSupportingFiles(function(){});
   }
   return Swiftype;
})(window);
