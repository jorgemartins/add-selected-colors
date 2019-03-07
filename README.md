## What is this?

This plugin is intended to automate the process of adding colors to a document palette.

Since [Sketch v53](https://www.sketchapp.com/updates/#version-53), _Fill presets can now be named and viewed in list_ so in order to use that we'd have to add colors manually as well as name them one by one.

Well, this plugin automates that process, and as a bonus you can export the same colection of colors to a JSON file to share with developers. Right now this is very opinionated and suited to how our team at [Mindera](https://mindera.com) work.


## How

1. Install the plugin
2. Make sure your layers follow the name structure: `something/color-value` _(example: colors/blue-100)_
3. (if you have colors on document colors palette, you might want to run `Add selected colors to.. -> Reset Palette`)
4. select all color Layers you want to add to the palette, and run `Add selected colors to.. -> Document colors`
5. Repeat 4. but choose `to JSON` to export the slected layers as a JSON list.

## Thanks

Thanks to [@helloimbguedes](https://github.com/helloimbguedes) for cleaning up the code and the initial structure.
Thanks to [dkrape](https://sketchplugins.com/u/dkrape) for the starting point of how to approach this.
Thanks to [@andrewfiorillo](https://github.com/andrewfiorillo) for [Sketch Palettes](https://github.com/andrewfiorillo/sketch-palettes) which this was also based on.

