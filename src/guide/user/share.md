# Share composed tunes

You can share your composed or modified tunes, breaks and songs with others and open those that others have shared with you.

## Share

To share tunes, breaks and songs, click on the <btn><fa icon="cog"></fa> Tools</btn> button and then on <btn variant="item"><fa icon="share"></fa> Share</btn>. A dialog opens where you can select which songs, tunes and breaks you want to share. Clicking an item will select/unselect it.

The text area on top contains a link to RoR Player with all the selected songs, tunes and breaks encoded inside it. Opening this link will open the Player and import all the included songs/tunes/breaks. So you can copy the link and send it to someone. At the top of the dialog, you can also select other export formats than “Link”. The “Raw” format contain a different (more readable) representation of the exported content and can also be imported again later using the [import](#import) dialog.

If you want to share just one specific break, you can open its <fa icon="pen"></fa> note editor and click the <btn variant="info"><fa icon="share"></fa> Share</btn> button there. This will open the share dialog as well, but create a special link that will automatically open the note editor for the specific break.

## Import

When you open a shared link, all your custom modifications, tunes, breaks and songs are cleared and those encoded in the link are imported instead. The reason is that the imported data might contain changes that are conflicting with changes that you have made yourself. Opening a shared link will create a new [historic state](./compose.md#history), so you can get back your own custom modifications, tunes, breaks and songs by clicking the <btn><fa icon="clock"></fa> History</btn> button on the top right.

Sometimes you may want to import the data from a shared link in addition to your own modifications. For this, there is a custom import dialog under <btn><fa icon="cog"></fa> Tools</btn> and then <btn variant="item"><fa icon="file-import"></fa> Import</btn>. Paste a shared link (or shared data in raw format) into the text field and the tunes, breaks and songs contained in the link is shown. By clicking them, you can customise which ones will be imported. Note that if a break with the same tune and break name already exists, it will be overwritten if selected. This is indicated by an <fa icon="exclamation-circle"></fa> exclamation icon (or by a <fa icon="check"></fa> check icon if the existing break is identical to the imported one).

To import the selected items, click <btn variant="primary">Import</btn> on the bottom right.