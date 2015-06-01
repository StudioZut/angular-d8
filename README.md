# d8client

Configure Drupal 8
------------------

Enable all 4 core REST modules
Configure CORS: http://enable-cors.org/server_apache.html

Install Yeoman, Grunt, Bower & Angular
--------------------------------------

Install Node.js using PPA:
$ sudo curl -sL https://deb.nodesource.com/setup | sudo bash -
$ sudo apt-get install nodejs
$ sudo apt-get install build-essential
$ npm install -g yo grunt-cli bower generator-angular

If you get permission errors you may need to run:
$ sudo chown -R $USER ~/.npm
$ sudo chown -R $USER /usr/local/lib/node_modules


## Yeoman

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
