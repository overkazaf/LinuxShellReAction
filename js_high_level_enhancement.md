# JS High Level Enhancement
###loadScript
```
function loadScript(src) {
	var script = document.createElement(script);
	script.type = "text/javascript";
	script.src = src;
	document.body.appendChild(script);
}
```
***

```
	function loadScriptString (code) {
		var script = document.createElement(script);
		script.type = "text/javascript";	
		try {
			script.appendChild(document.createTextNode(code));
		}catch(ex){
			script.text = code;
		}
		document.body.appendChild(script);
	}
```

###loadStyles

```
	function loadStyles (href) {
		var css = document.createElement('link');
		css.rel = 'stylesheet';
		css.type = 'text/css';
		var head = document.getElementByTagName('head')[0];
		head.appendChild(css);
	}
```

```
	function loadStyleString (css) {
		var css = document.createElement('style');
		css.type = "text/css";
		try {
			css.appendChild(document.createTextNode(css));
		} catch(ex){
			css.styleSheet.cssText = css;
		}
		
		document.getElementByTagName('head')[0].appendChild(css);
	}
```