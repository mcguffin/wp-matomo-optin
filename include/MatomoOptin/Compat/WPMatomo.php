<?php
/**
 *	@package MatomoOptin\Compat
 *	@version 1.0.0
 *	2018-09-22
 */

namespace MatomoOptin\Compat;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}


use MatomoOptin\Core;


class WPMatomo extends Core\PluginComponent {

	/**
	 *	@inheritdoc
	 */
	protected function __construct() {
		if ( ! is_admin() ) {
			add_filter( 'wp-piwik_tracking_code', array( $this, 'handle_tracking_code' ) );
		}
		add_filter( 'option_wp-piwik-noscript_code', '__return_empty_string' );
	}

	public function handle_tracking_code( $code ) {

		$code = strip_tags( $code );

		// wrap it in a function
		$code = sprintf('
/* Modified by WP Matomo OptIn | https://github.com/mcguffin/wp-matomo-optin */
function _do_matomo_track(){%s}',$code);

		$code .= '
(function($){
	if ( $(document).is(\'[data-allow-matomo-tracking="yes"]\') ) {
		// track
		_do_matomo_track();
	} else if ( $(document).is(\'[data-allow-matomo-tracking="no"]\') ) {
		// don\'t track
	} else {
		// ask
		$(document).on(\'allow-matomo-tracking\',_do_matomo_track);
	}
})(jQuery);
';

		// wrap it in <script> again
		$code = sprintf('<!-- Matomo -->
<script type="text/javascript">
%s
</script>', $code );
		return $code;
	}
	/**
	 *	@inheritdoc
	 */
	 public function activate(){

	 }

	 /**
	  *	@inheritdoc
	  */
	 public function deactivate(){

	 }

	 /**
	  *	@inheritdoc
	  */
	 public static function uninstall() {
		 // remove content and settings
	 }

	/**
 	 *	@inheritdoc
	 */
	public function upgrade( $new_version, $old_version ) {
	}

}
