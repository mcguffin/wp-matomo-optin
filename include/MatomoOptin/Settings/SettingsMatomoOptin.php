<?php
/**
 *	@package MatomoOptin\Settings
 *	@version 1.0.0
 *	2018-09-22
 */

namespace MatomoOptin\Settings;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}

use MatomoOptin\Core;

class SettingsMatomoOptin extends Settings {

	private $optionset = '';


	/**
	 *	@inheritdoc
	 */
	protected function __construct() {


		add_option( 'matomo_optin_setting_1' , 'Default Value' , '' , False );

		add_action( 'admin_menu', array( &$this, 'admin_menu' ) );

		parent::__construct();

	}

	/**
	 *	Add Settings page
	 *
	 *	@action admin_menu
	 */
	public function admin_menu() {
		add_options_page( __('WP Matomo OptIn Settings' , 'wp-matomo-optin' ),__('WP Matomo OptIn' , 'wp-matomo-optin'),'manage_options',$this->optionset, array( $this, 'settings_page' ) );
	}

	/**
	 *	Render Settings page
	 */
	public function settings_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}
		?>
		<div class="wrap">
			<h2><?php _e('WP Matomo OptIn Settings', 'wp-matomo-optin') ?></h2>

			<form action="options.php" method="post">
				<?php
				settings_fields(  $this->optionset );
				do_settings_sections( $this->optionset );
				submit_button( __('Save Settings' , 'wp-matomo-optin' ) );
				?>
			</form>
		</div><?php
	}


	/**
	 * Enqueue settings Assets
	 *
	 *	@action load-options-{$this->optionset}.php

	 */
	public function enqueue_assets() {

	}


	/**
	 *	Setup options.
	 *
	 *	@action admin_init
	 */
	public function register_settings() {

		$settings_section	= 'matomo_optin_settings';

		add_settings_section( $settings_section, __( 'Section #1',  'wp-matomo-optin' ), array( $this, 'section_1_description' ), $this->optionset );



		// more settings go here ...
		$option_name		= 'matomo_optin_setting_1';
		register_setting( $this->optionset , $option_name, array( $this , 'sanitize_setting_1' ) );
		add_settings_field(
			$option_name,
			__( 'Setting #1',  'wp-matomo-optin' ),
			array( $this, 'setting_1_ui' ),
			$this->optionset,
			$settings_section,
			array(
				'option_name'			=> $option_name,
				'option_label'			=> __( 'Setting #1',  'wp-matomo-optin' ),
				'option_description'	=> __( 'Setting #1 description',  'wp-matomo-optin' ),
			)
		);
	}

	/**
	 * Print some documentation for the optionset
	 */
	public function section_1_description( $args ) {

		?>
		<div class="inside">
			<p><?php _e( 'Section 1 Description.' , 'wp-matomo-optin' ); ?></p>
		</div>
		<?php
	}

	/**
	 * Output Theme selectbox
	 */
	public function setting_1_ui( $args ) {

		@list( $option_name, $label, $description ) = array_values( $args );

		$option_value = get_option( $option_name );

		?>
			<label for="<?php echo $option_name ?>">
				<input type="text" id="<?php echo $option_name ?>" name="<?php echo $option_name ?>" value="<?php esc_attr_e( $option_value ) ?>" />
				<?php echo $label ?>
			</label>
			<?php
			if ( ! empty( $description ) ) {
				printf( '<p class="description">%s</p>', $description );
			}
			?>
		<?php
	}

	/**
	 * Sanitize value of setting_1
	 *
	 * @return string sanitized value
	 */
	public function sanitize_setting_1( $value ) {
		// do sanitation here!
		return $value;
	}

}
