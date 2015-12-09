Installing dependencies
-----------------------

[Bower](http://bower.io) is used to pull down dependencies instead of having them copied into the code.
 
To install Bower, first of all you need to install [NodeJS](https://nodejs.org) and then run this command:

```
npm install -g bower
```

Now, anytime you want to install the dependencies, run:

```
bower install
```

And they will be downloaded into the `bower_components` folder. See the `bower.json` file to see all dependencies.
