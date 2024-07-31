# Contribute new tunes

When you compose new tunes in RoR Player, they are only saved in your browser, other people can not see them. If you want to make your tune available to the whole network, you can have it included in RoR Player for everyone.

This page contains two guides: One for non-technical users to gather all the information about the tune, send it to the RoR Internet Working Group and have them add it to the player. The other for technical users, to add the tune directly to the code of the player and open a pull request for it.

## Non-technical guide

The following information is necessary for a tune:
* The notes of the tune and its breaks
* A description of the hand sign for the tune and its non-standard breaks
* A description about the background of the tune: The origin of the name and rhythm, and who or which band composed it when.
* Optionally some more text about what the tune sounds like, how the breaks can best be combined or anything else that you think would be interesting.

After [composing](../user/compose.md) the notes in the player, use the [share functionality](../user/share.md) to export the notes by clicking on the <btn><fa icon="cog"></fa> Tools</btn> button and then on <btn variant="item"><fa icon="share"></fa> Share</btn>. Make sure to select the tune and all its breaks in the dialog.

Your new tune also needs a PDF file for the printed sheetbook, which has to be created separately. If you feel like you have the capacity and skills to create such a file, this would be greatly appreciated as it would save the Internet WG some work. Copy an existing tune sheet from the [sheetbook](https://github.com/rhythms-of-resistance/sheetbook) and put the notes of your tune in following the [styling guidelines](https://github.com/rhythms-of-resistance/sheetbook?tab=readme-ov-file#styling-guidelines). Please send this file in as an ODS rather than PDF so that it can be edited further.

Optionally, you may upload an instructional video to [RoR Tube](https://tube.rhythms-of-resistance.org/) and send us the link. It will be embedded in the tune description.

When you are done, please send in the shared link, the descriptions and optionally the sheetbook ODS to bort ät riseup dot net.

## Technical guide

When adding a new tune, the following things need to be done:
* Create a sheetbook ODS in the [sheetbook repository](https://github.com/rhythms-of-resistance/sheetbook) (see instructions there).
* Create a tune description in [`assets/tuneDescriptions/`](https://github.com/beatboxjs/ror-player/tree/main/assets/tuneDescriptions). The description should contain at least a description of the hand sign, the background of the name and rhythm and the history (who composed it when).
* Add the notes to [`src/defaultTunes.ts`](https://github.com/beatboxjs/ror-player/blob/main/src/defaultTunes.ts). You can find a description of the parameters under [configuration](../technical/config.md). For the notes, you can use the [share](../user/share.md) functionality and select the “Raw (uncompressed)” format, which closely resembles the `defaultTunes.ts` format. You can check your tune config for errors by using an editor that supports TypeScript (such as VSCode) or by running `yarn check-types` (after running `yarn install`). The tune should contain at least the following:
    * `patterns`: the notes. The main groove as `Tune` with `loop: true`.
	* `categories`: `uncommon`, `new` and a difficulty (`easy`/`medium`/`tricky`).
	* `sheet`: The URL to the generated sheetbook PDF.
	* `descriptionHtml`: The description markdown file imported as a property of the `tuneDescriptionsHtml` object.
	* `exampleSong`: A series of breaks that will be presented as the example song. Should contain the groove and all breaks.
	* `video` (optional): If available, a link to the tune on [RoR Tube](https://tube.rhythms-of-resistance.org/) in the format `https://tube.rhythms-of-resistance.org/videos/embed/${videoId}`.

To try out your changes, run `yarn dev-server` (after running `yarn install`).

Once done, submit your changes as a pull request.