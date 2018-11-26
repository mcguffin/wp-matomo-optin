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

	private $optionset = 'matomo-optin';


	/**
	 *	@inheritdoc
	 */
	protected function __construct() {

		/* default values */
		add_option( 'matomo_optin_dialog_title' , __('Allow Tracking?','wp-matomo-optin') , '' , False );
		add_option( 'matomo_optin_dialog_message', __('Please allow us to track your visit. The collected data is kept anonymous and will not be shared with others.', 'wp-matomo-optin'), '', true );
		add_option( 'matomo_optin_button_label_allow', __( 'Yes, you may track my Visits', 'wp-matomo-optin' ), '', true );
		add_option( 'matomo_optin_button_label_forbid', __( 'No, I prefer to stay under the Radar', 'wp-matomo-optin' ), '', true );
		add_option( 'matomo_optin_button_class_allow', '', '', true );
		add_option( 'matomo_optin_button_class_forbid', '', '', true );
		add_option( 'matomo_optin_button_dialog_class', '', '', true );
		add_option( 'matomo_optin_button_wrapper_class', '', '', true );

		add_action( 'admin_menu', array( $this, 'admin_menu' ) );

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
		$option_name		= 'matomo_optin_dialog_title';
		register_setting( $this->optionset , $option_name, array( $this , 'sanitize_setting_1' ) );
		add_settings_field(
			$option_name,
			__( 'Dialog Title',  'wp-matomo-optin' ),
			array( $this, 'text_ui' ),
			$this->optionset,
			$settings_section,
			array(
				'option_name'			=> $option_name,
			)
		);

		$option_name		= 'matomo_optin_dialog_message';
		register_setting( $this->optionset , $option_name, array( $this , 'sanitize_setting_1' ) );
		add_settings_field(
			$option_name,
			__( 'Dialog Text',  'wp-matomo-optin' ),
			array( $this, 'textarea_ui' ),
			$this->optionset,
			$settings_section,
			array(
				'option_name'			=> $option_name,
			)
		);

		$option_name		= 'matomo_optin_button_label_allow';
		register_setting( $this->optionset , $option_name, array( $this , 'sanitize_setting_1' ) );
		add_settings_field(
			$option_name,
			__( 'Allow Button Label ',  'wp-matomo-optin' ),
			array( $this, 'text_ui' ),
			$this->optionset,
			$settings_section,
			array(
				'option_name'			=> $option_name,
			)
		);



		$option_name		= 'matomo_optin_button_label_forbid';
		register_setting( $this->optionset , $option_name, array( $this , 'sanitize_setting_1' ) );
		add_settings_field(
			$option_name,
			__( 'Allow Button Label ',  'wp-matomo-optin' ),
			array( $this, 'text_ui' ),
			$this->optionset,
			$settings_section,
			array(
				'option_name'			=> $option_name,
			)
		);


		$option_name		= 'matomo_optin_button_class_allow';
		register_setting( $this->optionset , $option_name, array( $this , 'sanitize_setting_1' ) );
		add_settings_field(
			$option_name,
			__( 'Allow Button CSS Class ',  'wp-matomo-optin' ),
			array( $this, 'text_ui' ),
			$this->optionset,
			$settings_section,
			array(
				'option_name'			=> $option_name,
			)
		);


		$option_name		= 'matomo_optin_button_class_forbid';
		register_setting( $this->optionset , $option_name, array( $this , 'sanitize_setting_1' ) );
		add_settings_field(
			$option_name,
			__( 'Forbid Button CSS Class ',  'wp-matomo-optin' ),
			array( $this, 'text_ui' ),
			$this->optionset,
			$settings_section,
			array(
				'option_name'			=> $option_name,
			)
		);


		$option_name		= 'matomo_optin_dialog_class';
		register_setting( $this->optionset , $option_name, array( $this , 'sanitize_setting_1' ) );
		add_settings_field(
			$option_name,
			__( 'Dialog CSS Class ',  'wp-matomo-optin' ),
			array( $this, 'text_ui' ),
			$this->optionset,
			$settings_section,
			array(
				'option_name'			=> $option_name,
			)
		);


		$option_name		= 'matomo_optin_wrapper_class';
		register_setting( $this->optionset , $option_name, array( $this , 'sanitize_setting_1' ) );
		add_settings_field(
			$option_name,
			__( 'Wrapper CSS Class ',  'wp-matomo-optin' ),
			array( $this, 'text_ui' ),
			$this->optionset,
			$settings_section,
			array(
				'option_name'			=> $option_name,
			)
		);


	}

	/**
	 * Print some documentation for the optionset
	 */
	public function section_1_description( $args ) {

		?>
		<div class="inside">
			<p><?php _e( '...' , 'wp-matomo-optin' ); ?></p>
		</div>
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
