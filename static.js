(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("8cdf9bd9-538f-419b-b051-22d4a4255bb2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8cdf9bd9-538f-419b-b051-22d4a4255bb2' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"75bce431-242f-4bfa-9760-4b80b91165f7":{"roots":{"references":[{"attributes":{"source":{"id":"15424","type":"ColumnDataSource"}},"id":"15451","type":"CDSView"},{"attributes":{"text":"Spectral energy distribution"},"id":"15426","type":"Title"},{"attributes":{"line_width":2,"x":{"field":"lambda"},"y":{"field":"Galaxy"}},"id":"15448","type":"Line"},{"attributes":{},"id":"15442","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"rgb(253, 245, 230)"},"below":[{"id":"15436","type":"LinearAxis"}],"border_fill_color":{"value":"rgb(253, 245, 230)"},"center":[{"id":"15440","type":"Grid"},{"id":"15445","type":"Grid"}],"left":[{"id":"15441","type":"LinearAxis"}],"renderers":[{"id":"15450","type":"GlyphRenderer"}],"title":{"id":"15426","type":"Title"},"toolbar":{"id":"15446","type":"Toolbar"},"x_range":{"id":"15428","type":"DataRange1d"},"x_scale":{"id":"15432","type":"LinearScale"},"y_range":{"id":"15430","type":"DataRange1d"},"y_scale":{"id":"15434","type":"LinearScale"}},"id":"15425","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15453","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"15442","type":"BasicTicker"}},"id":"15445","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"15446","type":"Toolbar"},{"attributes":{},"id":"15432","type":"LinearScale"},{"attributes":{"callback":null},"id":"15430","type":"DataRange1d"},{"attributes":{"ticker":{"id":"15437","type":"BasicTicker"}},"id":"15440","type":"Grid"},{"attributes":{},"id":"15457","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"15424","type":"ColumnDataSource"},"glyph":{"id":"15448","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15449","type":"Line"},"selection_glyph":null,"view":{"id":"15451","type":"CDSView"}},"id":"15450","type":"GlyphRenderer"},{"attributes":{"axis_label":"Emitted light","formatter":{"id":"15453","type":"BasicTickFormatter"},"ticker":{"id":"15442","type":"BasicTicker"}},"id":"15441","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"lambda"},"y":{"field":"Galaxy"}},"id":"15449","type":"Line"},{"attributes":{},"id":"15437","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"Galaxy":{"__ndarray__":"VxAmcFplBMASemkTx8sAwMIxQO4Fd/C/xTqLcZXl1r8HT8iSe7m0vw/5cPAlGqk/vk1rdybrxD/yveqtJNHOP7je0WW+I9I/oJhUHGsU1z8ylMEWskjSPwAAAAAAAAAAq9N0SZUjzL/XYt5nFfDmvwR+n4hyYOy/BWe0upZN5D8Wl1J3CortPyDF7zORqu0/qyzeH8eq5z871miHibvbPw==","dtype":"float64","shape":[20]},"index":["bayes.FUV","bayes.NUV","bayes.u_prime","bayes.g_prime","bayes.r_prime","bayes.i_prime","bayes.z_prime","bayes.vista.vircam.Y","bayes.vista.vircam.J","bayes.vista.vircam.H","bayes.vista.vircam.Ks","bayes.WISE1","bayes.WISE2","bayes.WISE3","bayes.WISE4","bayes.PACS_green","bayes.PACS_red","bayes.PSW_ext","bayes.PMW_ext","bayes.PLW_ext"],"lambda":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]},"selected":{"id":"15458","type":"Selection"},"selection_policy":{"id":"15457","type":"UnionRenderers"}},"id":"15424","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"15428","type":"DataRange1d"},{"attributes":{},"id":"15455","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Broadband","formatter":{"id":"15455","type":"BasicTickFormatter"},"ticker":{"id":"15437","type":"BasicTicker"}},"id":"15436","type":"LinearAxis"},{"attributes":{},"id":"15458","type":"Selection"},{"attributes":{},"id":"15434","type":"LinearScale"}],"root_ids":["15425"]},"title":"Bokeh Application","version":"1.3.4"}}';
                  var render_items = [{"docid":"75bce431-242f-4bfa-9760-4b80b91165f7","roots":{"15425":"8cdf9bd9-538f-419b-b051-22d4a4255bb2"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();