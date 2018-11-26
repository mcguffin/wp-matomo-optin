(function($){

	var name = 'allow-matomo-tracking',
		allow;

	// respect DNT setting
	if ( navigator.doNotTrack ) {
		$('html').attr('data-'+name,'no');
		return;
	}

	function get_storage() {
		if ( window.localStorage ) {
			return window.localStorage;
		}
		return {
			setItem:function(k,v) {

				document.cookie = encodeURIComponent(k)+'='+v;
			},
			getItem:function(k) {
				var v = null;
				document.cookie.split(';').filter(function(item) {
				    if ( item.indexOf(k+'=') >= 0 ) {
						v = item.split('=').pop();
						return true;
					}
					return false;
				});
				console.log(v)
				return v;
			},
		};
	}
	var preset = get_storage().getItem(name);

	if ( preset === null ) {
		// wait
		setTimeout(function(){
			$('html').attr('data-'+name,'unknown')
		}, 1000 );
	} else {
		$('html').attr( 'data-' + name, preset === '1' ? 'yes' : 'no' );
	}


	$(document)
		.on('click','[name="'+name+'"]',function(e){
			var val = $(this).val() === 'yes';
			get_storage().setItem(
				name,
				val ? 1 : 0
			);
			$('html').attr('data-' + name, val ? 'yes' : 'no' );
			e.preventDefault();
			if ( val ) {
				$(document).trigger(name);
			}
		})
		.on('click','.matomo-optin-status a.-settings',function(e){
			$('html').attr('data-' + name, 'unknown' );
			e.preventDefault();
		})
		;
})(jQuery)
