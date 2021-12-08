# PHP Challenge

## Required enviroment

You will require:
* PHP 7.3+ (7.4 recommended)
* Apache Server
* Mysql
(An easy way is to install XAMPP/LAMPP as have almost all required items. Laragon is also a good option for windows users for easy virtual hosts.)

## Getting the code

Move to the folder where you will host the app (/opt/lampp/htdocs in case of lampp. c/laragon/www in case of laragon)
Run the next statement (replacing "folder_name"):
`git clone https://github.com/eagiraldor94/WP-Podcast-API-Plugin "folder_name"`

## Installing the app

The plugin and the runs using a standard wordpress installation. You can install using Softaculous or any app installer for wordpress and just get the config.php files.
Also you can copy into your wordpress installation the folders wp-content/themes/podcast and wp-content/plugins/podcast-api.
For more detailed instructions please refer to Wordpress.org documentation or readme.html file on this git.

## Available URL to use Project
The project is already deployed in https://podcast.deletreamos.com/ and can be used for test purposes.

### Friendly reminders and instructions
* You need to select the theme and activate the plugin on wordpress dashboard to allow the correct function.
* You need to setup the home page as a static page (or use a direct URL to the page with shortcode) to allow plugin works
* To add the plugin, you can use the shortcode "[pdca_blocks]" on any page.
* The menu is not functional.