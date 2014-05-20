Ember.TEMPLATES["templates/application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Yeaaa");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        Register\n    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n        Login\n    ");
  }

  data.buffer.push("<script type=\"text/x-handlebars\" data-template-name=\"application\">\n    <!-- TODO: Template will go in here I'm guessing -->\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "register", options) : helperMissing.call(depth0, "link-to", "register", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["templates/login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                        <div class=\"alert\">Invalid username or password.</div>\n                    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                            <button class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\">Cancel</button>\n                        ");
  }

  data.buffer.push("<script type=\"text/x-handlebars\" id=\"login\" data-template-name=\"login\">\n    <div id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <h1 class=\"text-center\">");
  stack1 = helpers._triageMustache.call(depth0, "heading", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n                </div>\n                <div class=\"modal-body\">\n                    ");
  stack1 = helpers['if'].call(depth0, "loginFailed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <form class=\"form col-md-12 center-block\" id=\"loginForm\" action=\"/login\" method=\"post\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control input-lg\" placeholder=\"Email\" required autofocus>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control input-lg\" placeholder=\"Password\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary btn-lg btn-block\">Login</button>\n                            <span class=\"pull-right\"><a href=\"/register\">Register</a></span><span><a href=\"#\">Need help?</a></span>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <div class=\"col-md-12\">\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["templates/register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                        <div class=\"alert\">Invalid username or password.</div>\n                    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                            <button class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\">Cancel</button>\n                        ");
  }

  data.buffer.push("<script type=\"text/x-handlebars\" id=\"register\" data-template-name=\"register\">\n    <div id=\"registerModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <h1 class=\"text-center\">");
  stack1 = helpers._triageMustache.call(depth0, "heading", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n                </div>\n                \n                <div class=\"modal-body\">\n                    ");
  stack1 = helpers['if'].call(depth0, "loginFailed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <form class=\"form col-md-12 center-block\" id=\"registerForm\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control input-lg\" placeholder=\"Email\" autofocus>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" id=\"displayname\" name=\"displayname\" class=\"form-control input-lg\" placeholder=\"Display Name\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control input-lg\" placeholder=\"Password\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" id=\"confirmpassword\" name=\"confirmpassword\" class=\"form-control input-lg\" placeholder=\"Confirm Password\">\n                        </div>\n                        <div class=\"form-group\">\n                            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "registerAction", {hash:{
    'target': ("controller")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"btn btn-primary btn-lg btn-block\">Register</button>\n                            <span><a href=\"#\">Need help?</a></span>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <div class=\"col-md-12\">\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</script>");
  return buffer;
  
});