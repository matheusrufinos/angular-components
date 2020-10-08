# Angular Components

This project is an Angular Library with some basic components for quick use.

- Accordion;
- Button;
- Input;
- Radio Button;
- Checkbox;
- Modal;
- Tabs;

## Style

This library takes over your project's style variables, so you need to have them configured.

Can see example in **[src/theme/\_variables.scss](https://github.com/matheusrufinos/flora/blob/master/src/theme/_variables.scss)**

**WARNING:** if you do not have the variables in your project, the components will not behave as expected

## Use without npm publishing

To use this library with your Angular Project, you need to link it.
First, run `ng build florads`
Go to `/dist` folder and run `npm link`

After, go to project path do you want to use library and run `npm link florads`.

Go to `angular.json` file, find `projects.$name.architect.build.options` and add this line:

`"preserveSymlinks": true`

**Ready!** you now import flora-component module do you want to use.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build florads` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Publish

Run `npm publish` to publish npm package.
