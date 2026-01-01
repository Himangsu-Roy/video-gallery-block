<?php
namespace VGB;

if (! defined('ABSPATH')) {
    exit;
}

class Ajax
{
    function __construct()
    {
        add_action('wp_ajax_vgb_PremiumChecker', [$this, 'vgb_PremiumChecker']);
        add_action('wp_ajax_nopriv_vgb_PremiumChecker', [$this, 'vgb_PremiumChecker']);
        add_action('admin_init', [$this, 'registerSettings']);
        add_action('rest_api_init', [$this, 'registerSettings']);
    }

    function vgb_PremiumChecker()
    {
        if (! isset($_POST['_wpnonce'])) {
            wp_send_json_error('Missing nonce');
        }

        $nonce = sanitize_text_field(wp_unslash($_POST['_wpnonce']));

        if (! wp_verify_nonce($nonce, 'wp_rest')) {
            wp_send_json_error('Invalid Request');
        }

        wp_send_json_success([
            'isPremium' => vgb_IsPremium(),
        ]);
    }

    function registerSettings()
    {
        register_setting('vgb_Utils', 'vgb_Utils', [
            'show_in_rest' => [
                'name' => 'vgb_Utils',
                'schema' => ['type' => 'string'],
            ],
            'type' => 'string',
            'default' => wp_json_encode(['nonce' => wp_create_nonce('wp_ajax')]),
            'sanitize_callback' => 'sanitize_text_field',
        ]);
    }

}
// new Ajax();