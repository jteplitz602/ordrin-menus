var  ordrin = (ordrin instanceof Object) ? ordrin : {};

(function(){
  "use strict";

  var Mustache="undefined"!==typeof module&&module.exports||{};
(function(j){function G(a){return(""+a).replace(/&(?!\w+;)|[<>"']/g,function(a){return H[a]||a})}function t(a,c,d,e){for(var e=e||"<template>",b=c.split("\n"),f=Math.max(d-3,0),g=Math.min(b.length,d+3),b=b.slice(f,g),i=0,l=b.length;i<l;++i)g=i+f+1,b[i]=(g===d?" >> ":"    ")+b[i];a.template=c;a.line=d;a.file=e;a.message=[e+":"+d,b.join("\n"),"",a.message].join("\n");return a}function u(a,c,d){if("."===a)return c[c.length-1];for(var a=a.split("."),e=a.length-1,b=a[e],f,g,i=c.length,l,j;i;){j=c.slice(0);
g=c[--i];for(l=0;l<e;){g=g[a[l++]];if(null==g)break;j.push(g)}if(g&&"object"===typeof g&&b in g){f=g[b];break}}"function"===typeof f&&(f=f.call(j[j.length-1]));return null==f?d:f}function I(a,c,d,e){var b="",a=u(a,c);if(e){if(null==a||!1===a||q(a)&&0===a.length)b+=d()}else if(q(a))y(a,function(a){c.push(a);b+=d();c.pop()});else if("object"===typeof a)c.push(a),b+=d(),c.pop();else if("function"===typeof a)var f=c[c.length-1],b=b+(a.call(f,d(),function(a){return r(a,f)})||"");else a&&(b+=d());return b}
function z(a,c){for(var c=c||{},d=c.tags||j.tags,e=d[0],b=d[d.length-1],f=['var buffer = "";',"\nvar line = 1;","\ntry {",'\nbuffer += "'],g=[],i=!1,l=!1,r=function(){if(i&&!l&&!c.space)for(;g.length;)f.splice(g.pop(),1);else g=[];l=i=!1},n=[],v,p,q,w=function(a){d=o(a).split(/\s+/);p=d[0];q=d[d.length-1]},x=function(a){f.push('";',v,'\nvar partial = partials["'+o(a)+'"];',"\nif (partial) {","\n  buffer += render(partial,stack[stack.length - 1],partials);","\n}",'\nbuffer += "')},u=function(b,d){var e=
o(b);if(""===e)throw t(Error("Section name may not be empty"),a,s,c.file);n.push({name:e,inverted:d});f.push('";',v,'\nvar name = "'+e+'";',"\nvar callback = (function () {","\n  return function () {",'\n    var buffer = "";','\nbuffer += "')},y=function(a){u(a,!0)},z=function(b){var b=o(b),d=0!=n.length&&n[n.length-1].name;if(!d||b!=d)throw t(Error('Section named "'+b+'" was never opened'),a,s,c.file);b=n.pop();f.push('";',"\n    return buffer;","\n  };","\n})();");b.inverted?f.push("\nbuffer += renderSection(name,stack,callback,true);"):
f.push("\nbuffer += renderSection(name,stack,callback);");f.push('\nbuffer += "')},A=function(a){f.push('";',v,'\nbuffer += lookup("'+o(a)+'",stack,"");','\nbuffer += "')},B=function(a){f.push('";',v,'\nbuffer += escapeHTML(lookup("'+o(a)+'",stack,""));','\nbuffer += "')},s=1,m,k,h=0,C=a.length;h<C;++h)if(a.slice(h,h+e.length)===e){h+=e.length;m=a.substr(h,1);v="\nline = "+s+";";p=e;q=b;i=!0;switch(m){case "!":h++;k=null;break;case "=":h++;b="="+b;k=w;break;case ">":h++;k=x;break;case "#":h++;k=u;
break;case "^":h++;k=y;break;case "/":h++;k=z;break;case "{":b="}"+b;case "&":h++;l=!0;k=A;break;default:l=!0,k=B}m=a.indexOf(b,h);if(-1===m)throw t(Error('Tag "'+e+'" was not closed properly'),a,s,c.file);e=a.substring(h,m);k&&k(e);for(k=0;~(k=e.indexOf("\n",k));)s++,k++;h=m+b.length-1;e=p;b=q}else switch(m=a.substr(h,1),m){case '"':case "\\":l=!0;f.push("\\"+m);break;case "\r":break;case "\n":g.push(f.length);f.push("\\n");r();s++;break;default:D.test(m)?g.push(f.length):l=!0,f.push(m)}if(0!=n.length)throw t(Error('Section "'+
n[n.length-1].name+'" was not closed properly'),a,s,c.file);r();f.push('";',"\nreturn buffer;","\n} catch (e) { throw {error: e, line: line}; }");b=f.join("").replace(/buffer \+= "";\n/g,"");c.debug&&("undefined"!=typeof console&&console.log?console.log(b):"function"===typeof print&&print(b));return b}function A(a,c){var d=z(a,c),e=new Function("view,partials,stack,lookup,escapeHTML,renderSection,render",d);return function(b,d){var d=d||{},g=[b];try{return e(b,d,g,u,G,I,r)}catch(i){throw t(i.error,
a,i.line,c.file);}}}function B(a,c){c=c||{};return!1!==c.cache?(p[a]||(p[a]=A(a,c)),p[a]):A(a,c)}function r(a,c,d){return B(a)(c,d)}j.name="mustache.js";j.version="0.5.0-dev";j.tags=["{{","}}"];j.parse=z;j.compile=B;j.render=r;j.clearCache=function(){p={}};j.to_html=function(a,c,d,e){a=r(a,c,d);if("function"===typeof e)e(a);else return a};var J=Object.prototype.toString,C=Array.isArray,E=Array.prototype.forEach,F=String.prototype.trim,q;q=C?C:function(a){return"[object Array]"===J.call(a)};var y;
y=E?function(a,c,d){return E.call(a,c,d)}:function(a,c,d){for(var e=0,b=a.length;e<b;++e)c.call(d,a[e],e,a)};var D=/^\s*$/,o;if(F)o=function(a){return null==a?"":F.call(a)};else{var w,x;D.test("\u00a0")?(w=/^\s+/,x=/\s+$/):(w=/^[\s\xA0]+/,x=/[\s\xA0]+$/);o=function(a){return a==null?"":(""+a).replace(w,"").replace(x,"")}}var H={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p={}})(Mustache);

  if(!ordrin.hasOwnProperty("render")){
    ordrin.render = true;
  }
  
  if(!ordrin.hasOwnProperty("template")){
    ordrin.template = [
      "  <ul class=\"menuList\">",
      "    {{#menu}}",
      "      <li class=\"menuCategory\" data-mgid=\"{{id}}\">",
      "        <div class=\"menu-hd\">",
      "          <p class=\"header itemListName\">{{name}}</p>",
      "        </div>",
      "        <ul class=\"itemList menu main-menu\">",
      "          {{#children}}",
      "            <li class=\"mi\" data-listener=\"menuItem\" data-miid=\"{{id}}\">",
      "              <p class=\"name\">{{name}}</p>",
      "              <p>",
      "                <span class=\"price\">{{price}}</span>",
      "              </p>",
      "            </li>",
      "          {{/children}}",
      "        </ul>",
      "      </li>",
      "    {{/menu}}",
      "  </ul>",
      "  <div class=\"trayContainer\">",
      "    <ul class=\"tray\">",
      "    </ul>",
      "  </div>",
      "  <!-- Menu Item Dialog -->",
      "  <div class=\"optionsDialog popup-container hidden\">",
      "  </div>",
      "  <div class=\"dialogBg fade-to-gray hidden\"></div>"
    ].join("");
  }

  if(!ordrin.hasOwnProperty("dialogTemplate")){
    ordrin.dialogTemplate = [
      "    <div class=\"popup-box-container dialog\">",
      "      <div class=\"close-popup-box\">",
      "        <img class=\"closeDialog\" data-listener=\"closeDialog\" src=\"https://fb.ordr.in/images/popup-close.png\" />",
      "      </div>",
      "      <div class=\"mItem-add-to-tray popup-content\">",
      "        <div class=\"menu-hd\">",
      "          <div class=\"boxright\">",
      "            <h1 class=\"big-col itemTitle\">{{name}}</h1>",
      "            <p class=\"slim-col itemPrice\">{{price}}</p>",
      "          </div>",
      "          <div class=\"clear\"></div>",
      "        </div>",
      "        <p class=\"desc dialogDescription\">{{descrip}}</p>",
      "      </div>",
      "      <div class=\"optionContainer\">",
      "        <ul class=\"optionCategoryList\">",
      "          {{#children}}",
      "            <li data-mogid=\"{{id}}\" class=\"optionCategory\">",
      "              <span class=\"header\">{{name}}</span>",
      "              <span class=\"error\"></span>",
      "              <ul class=\"optionList\">",
      "                {{#children}}",
      "                  <li class=\"option\" data-moid=\"{{id}}\">",
      "                    <input type=\"checkbox\" class=\"optionCheckbox\" data-listener=\"optionCheckbox\" />",
      "                    <span class=\"optionName\">{{name}}</span>",
      "                    <span class=\"optionPrice\">{{price}}</span>",
      "                  </li>",
      "                {{/children}}",
      "              </ul>",
      "              <div class=\"clear\"></div>",
      "            </li>",
      "          {{/children}}",
      "        </ul>",      
      "      </div>",
      "      <label for=\"itemQuantity\">Quantity: </label>",
      "      <input type=\"number\" class=\"itemQuantity\" value=\"1\" min=\"1\" />",
      "      <br />",
      "      <input type=\"submit\" class=\"buttonRed\" data-listener=\"addToTray\" value=\"Add to Tray\" />",
      "  </div>"].join("");
  }

  if(!ordrin.hasOwnProperty("trayItemTemlate")){
    ordrin.trayItemTemplate = [
      "<li class=\"trayItem\" data-listener=\"editTrayItem\" data-miid=\"{{itemId}}\" data-tray-id=\"{{trayItemId}}\">",
      "  <div class=\"trayItemRemove\">",
      "     X",
      "  </div>",
      "  <span class=\"trayItemName\">{{itemName}}</span>",
      "  <span class=\"trayItemPrice\">{{price}}</span>",
      "  <span class=\"trayItemQuantity\">({{quantity}})</span>",
      "  <ul>",
      "    {{#options}}",
      "      <li class=\"trayOption\">",
      "        <span class=\"trayOptionName\">{{name}}</span>",
      "        <span class=\"trayOptionPrice\">{{price}}</span>",
      "      </li>",
      "    {{/options}}",
      "  </ul>",
      "</li>"].join("");
  }

  var elements = {}; // variable to store elements so we don't have to continually DOM them

  var Option = function(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
  }

  var nextId = 0;
  
  // ordrin api classes
  var TrayItem = function(itemId, quantity, options, itemName, price){
    this.trayItemId = nextId++;
    this.itemId   = itemId;
    this.itemName = itemName;
    this.quantity = quantity;
    this.options  = options;
    this.price = price;

    this.buildItemString = function(){
      var string = this.itemId + "/" + this.quantity;

      for (var i = 0; i< this.options.length; i++){
        string += "," + this.options[i].id;
      }
      return string;
    }

    this.renderTrayHtml = function(){
      var html = Mustache.render(ordrin.trayItemTemplate, this);
      var div = document.createElement("div");
      div.innerHTML = html;
      this.trayItemNode = div.firstChild;
      return this.trayItemNode;
    }

    this.hasOptionSelected = function(id){
      for(var i=0; i<options.length; i++){
        if(options[i].id == id){
          return true;
        }
      }
      return false;
    }

    this.getPrice = function(){
      var price = +(this.price);
      for(var i=0; i<this.options.length; i++){
        price += +(this.options[i].price);
      }
      return price;
    }
  }

  var Tray = function(){
    this.items = {};

    this.addItem = function(item){
      if (!(item instanceof TrayItem)){
        throw new Error("Item must be an object of the Tray Item class");
      } else {
        this.items[item.trayItemId] = item;
        var newNode = item.renderTrayHtml();
        var pageTrayItems = getElementsByClassName(elements.tray, "trayItem");
        for(var i=0; i<pageTrayItems.length; i++){
          if(pageTrayItems[i].getAttribute("data-tray-id")==item.trayItemId){
            elements.tray.replaceChild(newNode, pageTrayItems[i]);
            return;
          }
        }
        elements.tray.appendChild(newNode);
      }
    }

    this.removeItem = function(id){
      var removed = this.items[id];
      delete this.items[id];
      elements.tray.removeChild(removed.trayItemNode);
    }

    this.buildTrayString = function(){
      var string = "";
      for (var id in this.items){
        if(this.items.hasOwnProperty(id)){
          string += "+" + this.items[id].buildItemString();
        }
      }
      return string.substring(1); // remove that first plus
    }

    this.getSubtotal = function(){
      var subtotal = 0.00;
      for(var id in this.items){
        if(this.items.hasOwnProperty(id)){
          subtotal += this.items[id].getPrice();
        }
      }
      return subtotal;
    }
  };

  ordrin.tray = new Tray()
  ordrin.getTrayString = function(){
    return this.tray.buildTrayString();
  }
  
  function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
      elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
      var r = elem.attachEvent("on"+evnt, func);
      return r;
    }
  }

  function goUntilParent(node, targetClass){
    var re = new RegExp("\\b"+targetClass+"\\b")
    if (node.className.match(re) === null){
      while(node.parentNode !== document){
        node = node.parentNode;
        if (node.className.match(re) === null){
          continue;
        }else{
          break;
        }
      }
      return node;
    } else {
      return node;
    }
  }

  function clearNode(node){
    while(node.firstChild){
      node.removeChild(node.firstChild);
    }
  }

  function extractAllItems(itemList){
    var items = {};
    var item;
    for(var i=0; i<itemList.length; i++){
      item = itemList[i];
      items[item.id] = item;
      if(typeof item.children !== "undefined"){
        var children = extractAllItems(item.children);
        for(var id in children){
          if(children.hasOwnProperty(id)){
            items[id] = children[id];
          }
        }
      }
      else{
        item.children = false;
      }
      if(typeof item.descrip === "undefined"){
        item.descrip = "";
      }
    }
    return items;
  }

  var allItems = {};

  listen("DOMContentLoaded", window, function(){
    allItems = extractAllItems(ordrin.menu);
    if(ordrin.render){
      var menuHtml = Mustache.render(ordrin.template, ordrin);
      document.getElementById("ordrinMenu").innerHTML = menuHtml;
      getElements();
    }
    listen("click", document, clicked);
  });

  function clicked(event){
    if (typeof event.srcElement == "undefined"){
      event.srcElement = event.target;
    }
    // call the appropiate function based on what element was actually clicked
    var routes = {  
      menuItem    : createDialogBox,
      editTrayItem : createEditDialogBox,
      closeDialog : hideDialogBox,
      addToTray : addTrayItem,
      removeTrayItem : removeTrayItem,
      optionCheckbox : validateCheckbox
    }
    var node = event.srcElement;
    var name;
    while(!node.hasAttribute("data-listener")){
      node = node.parentNode;
      if(node===null){
        return;
      }
    }
    var name = node.getAttribute("data-listener");

    if (typeof routes[name] != "undefined"){
      routes[name](event.srcElement);
    }
  }

  function getChildWithClass(node, className){
    var re = new RegExp("\\b"+className+"\\b");
    for(var i=0; i<node.children.length; i++){
      if(re.test(node.children[i].className)){
        return node.children[i];
      }
    }
  }

  function getElementsByClassName(node, className){
    var re = new RegExp("\\b"+className+"\\b");
    var nodes = [];
    for(var i=0; i<node.children.length; i++){
      var child = node.children[i];
      if(re.test(child.className)){
        nodes.push(child);
      }
      nodes = nodes.concat(getElementsByClassName(child, className));
    }
    return nodes;
  }

  function createDialogBox(node){
    // get the correct node, if it's not the current one
    var itemId = node.getAttribute("data-miid");
    buildDialogBox(itemId);
    showDialogBox();
  }

  function createEditDialogBox(node){
    var itemId = node.getAttribute("data-miid");
    var trayItemId = node.getAttribute("data-tray-id");
    var trayItem = ordrin.tray.items[trayItemId];
    buildDialogBox(itemId);
    var options = getElementsByClassName(elements.dialog, "option");
    for(var i=0; i<options.length; i++){
      var optId = options[i].getAttribute("data-moid");
      var checkbox = getElementsByClassName(options[i], "optionCheckbox")[0];
      checkbox.checked = trayItem.hasOptionSelected(optId);
    }
    var button = getElementsByClassName(elements.dialog, "buttonRed")[0];
    button.setAttribute("value", "Save to Tray");
    var quantity = getElementsByClassName(elements.dialog, "itemQuantity")[0];
    quantity.setAttribute("value", trayItem.quantity);
    elements.dialog.setAttribute("data-tray-id", trayItemId);
    showDialogBox();
  }

  function buildDialogBox(id){
    elements.dialog.innerHTML = Mustache.render(ordrin.dialogTemplate, allItems[id]);
    elements.dialog.setAttribute("data-miid", id);
  }
  
  function showDialogBox(){
    // show background
    elements.dialogBg.className = elements.dialogBg.className.replace("hidden", "");

    // show the dialog
    elements.dialog.className = elements.dialog.className.replace("hidden", "");
  }

  function hideDialogBox(){
    elements.dialogBg.className   += " hidden";
    clearNode(elements.dialog);
    elements.dialog.removeAttribute("data-tray-id");
  }

  function removeTrayItem(node){
    var item = goUntilParent(node, "trayItem");
    ordrin.tray.removeItem(item.getAttribute("data-tray-id"));
  }

  function validateCheckbox(node){
    var category = goUntilParent(node, "optionCategory");
    validateGroup(category);
  }

  function validateGroup(groupNode){
    var group = allItems[groupNode.getAttribute("data-mogid")];
    var min = +(group.min_child_select);
    var max = +(group.max_child_select);
    var checkBoxes = getElementsByClassName(groupNode, "optionCheckbox");
    var checked = 0;
    var errorNode = getChildWithClass(groupNode, "error");
    clearNode(errorNode);
    for(var j=0; j<checkBoxes.length; j++){
      if(checkBoxes[j].checked){
        checked++;
      }
    }
    if(checked<min){
      error = true;
      var errorText = "You must select at least "+min+" options";
      var error = document.createTextNode(errorText);
      errorNode.appendChild(error);
      return false;
    }
    if(max>0 && checked>max){
      error = true;
      var errorText = "You must select at most "+max+" options";
      var error = document.createTextNode(errorText);
      errorNode.appendChild(error);
      return false;
    }
    return true;
  }

  function createItemFromDialog(){
    var id = elements.dialog.getAttribute("data-miid");
    var quantity = form.elements["itemQuantity"].value;
    if(quantity<1){
      quantity = 1;
    }

    var error = false;
    var categories = getElementsByClassName(elements.dialog, "optionCategory");
    for(var i=0; i<categories.length; i++){
      if(!validateGroup(categories[i])){
        error = true;
      }
    }

    if(error){
      return;
    }
    var options = [];
    var checkBoxes = getElementsByClassName(elements.dialog, "optionCheckbox");
    for(var i=0; i<checkBoxes.length; i++){
      if(checkBoxes[i].checked){
        var listItem = goUntilParent(checkBoxes[i], "option")
        var optionId = listItem.getAttribute("data-moid");
        var optionName = allItems[optionId].name;
        var optionPrice = allItems[optionId].price;
        var option = new Option(optionId, optionName, optionPrice)
        options.push(option);
      }
    }
    var itemName = allItems[id].name;
    var itemPrice = allItems[id].price;
    var trayItem =  new TrayItem(id, quantity, options, itemName, itemPrice);
    if(elements.dialog.hasAttribute("data-tray-id")){
      trayItem.trayItemId = +(elements.dialog.getAttribute("data-tray-item"));
    }
    return trayItem;
  }

  function addTrayItem(){
    var trayItem = createItemFromDialog();
    ordrin.tray.addItem(trayItem);
    hideDialogBox();
  }

  // UTILITY FUNCTIONS
  function getElements(){
    var menu          = document.getElementById("ordrinMenu");
    elements.dialog   = getElementsByClassName(menu, "optionsDialog")[0];
    elements.dialogBg = getElementsByClassName(menu, "dialogBg")[0];
    elements.tray     = getElementsByClassName(menu, "tray")[0];
  }
})();