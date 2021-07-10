# Configuration

When building RoR Player to host it yourself, you can adjust the configuration, for example to configure custom tunes, audio samples or even modify the list of instruments. Note that when making any changes, you need to [rebuild](./host.md#standalone) the static HTML file for the changes to come into effect.

## Tunes

The tunes are configured in the file [src/defaultTunes.ts](https://github.com/beatboxjs/ror-player/blob/master/src/defaultTunes.ts). You can modify and remove existing tunes or add new tunes. Each tune can have the following parameters:

* `displayName` (optional): Can be optionally specified to show a different tune name than its key. For example, a tune configured as `"Bhangra": { displayName: "Bhaṅgṛā" }` will be persisted as `Bhangra` but shown as `Bhaṅgṛā`.
* `categories`: Which tune categories this tune should appear it (see [find tunes](../user/listen.md#find-tunes)).
* `speed` (optional): Which speed this tune should be played with on its tune page by default. The default is `100`, but it might be increased/decreased when using a different time signature (for example, for a 3/4 signature it should be `120` to not sound slower).
* `time` (optional): How many strokes per beat the breaks of this tune should have by default. The default is `4`. This can be overridden for individual breaks.
* `sheet` (optional): The URL under which the tune sheet PDF for this tune can be found.
* `video` (optional): Embed URL to the tune video on RoR Tube.
* `description` (optional): HTML code for the tune description that should be shown on the tune page. The default tunes use the descriptions from the Markdown files in `assets/tuneDescriptions`.
* `patterns`: The breaks of this tune. Note that technically, a tune is just a collection of breaks, so the Tune/Groove notes need to be added as a break called "Tune". Tip: If you want to import a break from a shared link here, use the [share](../user/share.md) menu and select “Raw (uncompressed)” as the type. This will create an object with a structure that is very similar to what is expected here. Each break can have the following properties:
	* `loop` (optional): Whether this break should be played in a loop. Should be `true` for the "Tune" break.
	* `time` (optional): How many strokes per beat this break should have. Default is `4`. If you want to use triplets within a 4/4 time signature, use `12`.
	* `displayName` (optional): Can be optionally specified to show a different break name than its key. For example, a tune configured as `"Break 1": { displayName: "Dance Break" }` will be persisted as `Break 1` but shown as `Dance Break`.
	* Instruments: The actual strokes that the different instruments should play. Every stroke is one character, for example `X` is a regular stroke and ` ` is no stroke. Since one bar always has 4 beats and one beat has as many strokes as are configured in the `time` parameter, the length of the line needs to be a multiple of 4 × `time`. So for a `4` time signature, the length can be 16, 32, 48, 64, … strokes. If an instrument should play the exact same line as another instrument, the `@` shorthand notation can be used (for example, `@ls` indicates that an instrument should play the same as the low surdo). `ot` stands for "Others" and is used for shouting.
* `exampleSong` (optional): The list of breaks that should make up the example song on the tune page.

## Audio samples

The audio samples can be found and modified in [assets/audio/](https://github.com/beatboxjs/ror-player/tree/master/assets/audio). Each instrument has a 2-character identifier, and each stroke type is identified by one character. The existing instruments and strokes are configured as [parameters](#parameters).

## Parameters

In [src/config.ts](https://github.com/beatboxjs/ror-player/blob/master/src/config.ts), all the parameters of RoR Player are configured. The following parameters are supported:
* `appName`: By default, this is “RoR Player”. It is used in various places in the UI. To change it, modify the `<title>` in `index.html`.
* `instruments`: The available instruments. Each instrument has to have a 2-character identifier, a display name and a list of available stroke identifiers. The available strokes define what strokes the user can select for this instrument when composing a tune. When changing the available instrument identifiers, you also have to adjust the `instrumentKeys` parameter and the `Instrument` type in the beginning of the file.
* `strokes`: Maps the available stroke identifiers to their display name. The stroke identifier has to be one character and is used to identify the stroke in the [audio samples](#audio-samples) and [tunes](#tunes). The display name is what is actually shown to the user in the notes of a tune/break. A stroke identifier cannot be `+` or `@`.
* `strokesDescription`: A tooltip that will be shown when hovering certain strokes in the notes.
* `volumePresets`: Volume presets that are shown in the [playback settings](../user/listen.md#playback-settings). The volumes for each instrument are configured on a scale from `0` to `2` (presented to the user as 0% to 200%).
* `times`: The available time signatures that are offered to the user when composing a tune. The key is the number of strokes per beat, the value is the display name. Note that `playTime` has to fit the available time signatures, see below.
* `filterCats`: The available tune filters that are available in the [dropdown](../user/listen.md#find-tunes) in the tune list. Each [tune](#tunes) can be configured to belong to one or more of these categories. When changing this, the `Category` type in the beginning of the file also needs to be updated.
* `playTime`: This is used internally as the number of strokes per beat. It has to be a multiple of all the available time signatures, in the best case its [least common multiple](https://en.wikipedia.org/wiki/Least_common_multiple). For example, when the time signatures `2`, `3`, `4`, `6` and `12` are supported, `playTime` can be `12`. When `5` should be supported in addition, `playTime` needs to be increase to `60` (as `12` is not dividable by `5`).
* `tuneOfTheYear`: The tune identifier of the tune that should be shown as the front page of RoR Player. If an array of strings is given, a random one of them is chosen each time.
* `defaultSpeed` The default beats per minute that should be used for playback.