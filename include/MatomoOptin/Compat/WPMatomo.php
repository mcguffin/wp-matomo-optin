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


class WPMatomo extends Core\Singleton {

	/**
	 *	@inheritdoc
	 */
	protected function __construct() {
		$this->core = Core\Core::instance();
		if ( ! is_admin() ) {
			add_filter( 'wp-piwik_tracking_code', array( $this, 'handle_tracking_code' ) );
		}

		add_filter( 'option_wp-piwik-noscript_code', '__return_empty_string' );

		add_action( 'wp_enqueue_scripts' , array( $this , 'wp_enqueue_scripts' ) );
		add_action( 'wp_footer', array( $this, 'print_dialog' ) );

	}


	/**
	 *	Print opt-in dialog
	 */
	public function print_dialog() {
		include $this->core->get_asset_path('include/templates/cookie-dialog.php');
	}

	/**
	 *	Load frontend styles and scripts
	 *
	 *	@action wp_enqueue_scripts
	 */
	public function wp_enqueue_scripts() {

		wp_enqueue_script('matomo-optin', $this->core->get_asset_url('js/matomo-optin.js'),array('jquery'));
		wp_enqueue_style('matomo-optin', $this->core->get_asset_url('css/matomo-optin.css'),array());
	}


	/**
	 *	@filter wp-piwik_tracking_code
	 */
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
		$(document).one(\'allow-matomo-tracking\',_do_matomo_track);
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
}
