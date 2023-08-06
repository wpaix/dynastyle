class Dynastyle {

	constructor(input) {
		this.dynastyling = false
		this.start()
    }

	update(){
		if(!this.dynastyling) return false;
		$('*[data-dynastyle]').each(function() {
		  let css, key, keyValuePair, value, _i, _len, _ref;
		  css = {};
		  _ref = $(this).data('dynastyle').split(';');
		  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
		    keyValuePair = _ref[_i];
		    keyValuePair = keyValuePair.split(':');
		    key = keyValuePair[0];
		    value = keyValuePair[1];
		    if (!key || !value) continue;
		    key = trimWhitespaces(key);
		    value = trimWhitespaces(value);
		    if (value.indexOf('tw') > -1) {
		      value = parseFloat(value.replace('tw', '') / 100) * $(this).width();
		    } else if (value.indexOf('pw') > -1) {
		      value = parseFloat(value.replace('pw', '') / 100) * $(this).parent().width();
		    } else if (value.indexOf('ww') > -1) {
		      value = parseFloat(value.replace('ww', '') / 100) * $(window).width();
		    } else if (value.indexOf('th') > -1) {
		      value = parseFloat(value.replace('th', '') / 100) * $(this).height();
		    } else if (value.indexOf('ph') > -1) {
		      value = parseFloat(value.replace('ph', '') / 100) * $(this).parent().height();
		    } else if (value.indexOf('wh') > -1) {
		      value = parseFloat(value.replace('wh', '') / 100) * $(window).height();
		    }
		    css[key] = value;
		  }
		  $(this).css(css);
		});
	}

	onWinResize(){

	},

	start(){
		if(!window['dynastyleWindowResizer']) {
			$(window).on('resize.x9279',()=>{ updateDynastyles() })
			window['dynastyleWindowResizer'] = true
		}
		this.dynastyling = true
		$(window).trigger('resize')
	}

	stop(){
		$(window).off('resize.x9279',()=>{ updateDynastyles() })
		window['dynastyleWindowResizer'] = false
		this.dynastyling = false
	}

	trimWhitespaces(str) { return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '') }

}
