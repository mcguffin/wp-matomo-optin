<?php

$allow_cls = explode( ' ', get_option( 'matomo_optin_button_class_allow' ) );
$allow_cls = array_map( 'sanitize_html_class', $allow_cls );

$forbid_cls = explode( ' ', get_option( 'matomo_optin_button_class_forbid' ) );
$forbid_cls = array_map( 'sanitize_html_class', $forbid_cls );

$wrapper_cls = explode( ' ', get_option( 'matomo_optin_wrapper_class' ) );
$wrapper_cls = array_map( 'sanitize_html_class', $wrapper_cls );

$dialog_cls = explode( ' ', get_option( 'matomo_optin_dialog_class' ) );
$dialog_cls = array_map( 'sanitize_html_class', $dialog_cls );

?>
<div class="matomo-optin-dialog-wrap <?php echo implode( ' ', $wrapper_cls ); ?>">
	<div class="matomo-optin-dialog <?php echo implode( ' ', $dialog_cls ); ?>" role="dialog">
		<h2 class="matomo-optin-title">
			<?php esc_html_e( get_option( 'matomo_optin_dialog_title' ) ); ?>
		</h2>

		<p class="matomo-optin-message">
			<?php echo nl2br( esc_html__( get_option( 'matomo_optin_dialog_message' ) ) ); ?>
		</p>

		<?php

		printf( '<button class="matomo-optin-button -allow %s" name="allow-matomo-tracking" value="yes">%s</button>',
			implode( ' ' , $allow_cls ),
			esc_html( get_option( 'matomo_optin_button_label_allow' ) )
		);

		printf( '<button class="matomo-optin-button -deny %s" name="allow-matomo-tracking" value="no">%s</button>',
			implode( ' ' , $forbid_cls ),
			esc_html( get_option( 'matomo_optin_button_label_forbid' ) )
		);

		?>
	</div>
</div>
<div class="matomo-optin-status">
	<p>
		<span class="matomo-optin-status-yes">
			<?php _e( 'Your Visits are being tracked.', 'wp-matomo-optin' ); ?>
		</span>
		<span class="matomo-optin-status-no">
			<?php _e( 'Your Visits are not tracked.', 'wp-matomo-optin' ); ?>
		</span>
		<a href="#" class="matomo-optin-button -settings">
			<?php _e('Change Settings','wp-matomo-optin') ?>
		</a>
	</p>
</div>
