# Picus

Picus is a web ui for Pcs - Pacemaker/Corosync Configuration System.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Building + Deploying
* build needed files into pcs: `ember build --environment production --output-path=</path/to/>pcs/pcsd/public/ui/`


## Development

### Running in development environment

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests
* `ember test`
* `ember test --server`
