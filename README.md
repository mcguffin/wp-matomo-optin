WP Matomo OptIn
===============

Frontend Opt-In Dialog for WP-Matomo.
Unlike other solutions this one is supposed to work with caching.


Current Status
--------------
Heavy development. Might be unstable and/or harmful. Help appreciated.


Installation
------------

### Production (Stand-Alone)
 - Head over to [releases](../../releases)
 - Download 'wp-matomo-optin.zip'
 - Upload and activate it like any other WordPress plugin
 - AutoUpdate will run as long as the plugin is active

### Production (using Github Updater – recommended for Multisite)
 - Install [Andy Fragen's GitHub Updater](https://github.com/afragen/github-updater) first.
 - In WP Admin go to Settings / GitHub Updater / Install Plugin. Enter `mcguffin/wp-matomo-optin` as a Plugin-URI.

### Development
 - cd into your plugin directory
 - $ `git clone git@github.com:mcguffin/wp-matomo-optin.git`
 - $ `cd wp-matomo-optin`
 - $ `npm install`
 - $ `gulp`

ToDo:
-----
 - [x] Respect DNT Header
 - [x] PLL Strings
 - [x] Move asset loading to compat
 - [x] Status messages
 - [ ] Set Cookie Lifetime 3 months
 - [ ] Allow Dialog Theme override
