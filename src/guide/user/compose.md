# Compose tunes

On the top of the screen, there is a tab navigation with the tabs “Listen” and “Compose”. “Listen” is the default mode and provides a simple interface to listen to all the available tunes. “Compose” mode provides an advanced interface where you can modify existing tunes, create new ones and export and share them with others.

When you compose songs or tunes or modify existing ones, all of your changes are saved in your browser, so they will be still there next time you open RoR Player, but others will not be able to see them. You can use the [share](./share.md) functionality to create backups of your tunes or to share them with others.

The following terminology is used:
* A **Tune** within RoR Player is simply a collection of breaks. A tune itself does not have any notes. However, tunes normally contain a *break* called “Tune” that contains the notes of the main groove of the tune.
* A **Break** within RoR Player is a rhythm with a certain length that contains cetain notes.

## Compose a song

In RoR Player, a **Song** is a piece of music that plays different tunes/breaks in a certain order. Think of it as a drumming session of a RoR band where a certain tune would be played with certain breaks in between. You can compose a song to find out how certain breaks would sound in combination.

The main section of the “Compose” mode shows the current song. On the top in the dropdown with the <btn><fa icon="music"></fa></btn> music icon, you have the possibility to give the current song a name and to create additional songs that you can switch between.

To add breaks to the current song, expand a tune on the left (on small screens such as on smartphones, you have to click the <btn><fa icon="bars"></fa></btn> menu icon on the top left to open the list of tunes) and either click the <fa icon="plus"></fa> plus icon of a break to add it to the end of the current song for all instruments, or drag the break somewhere onto the song. You can drag a break into the line of one instrument if you want just that instrument to play it, or to the “All” row at the bottom that appears while dragging.

Just like in a real band, you can have just some instruments play a certain break, while others play a different break or stay silent. To change which instruments are playing a certain break, either click on the <fa icon="hand-point-right"></fa> hand icon on the break inside the song player and select the instruments, or drag the black triangle in the bottom right corner of the break up or down. You can also drag the triangle to the right to let the break be played multiple times in a row.

To delete a break from the song, either click the <fa icon="trash"></fa> trash icon on a break inside the song player or drag the break into the trash bin that appears on the top when you start dragging. You can also clear the whole song in the <btn><fa icon="cog"></fa></btn> tools menu or delete it in the <btn><fa icon="music"></fa></btn> song menu.

## Edit a tune

If you want to make modifications to an existing tune, you can either edit the tune in place or make a copy of it and edit that copy. To copy a tune, expand the tune in the tune list on the left and click on the <fa icon="copy"></fa> copy icon at the very bottom of the list of all breaks. If you want to create just a single break, click on the <fa icon="copy"></fa> copy icon inside this break. When copying a tune/break, the copy is marked with a <fa icon="star"></fa> star to indicate that you created it and it is not part of the default tunes/breaks.

To edit the notes of an existing tune/break, click the <fa icon="pen"></fa> pen icon inside the break. A dialog with the notes opens. On the top, you can change the parameters of the break such as its length in beats, its time signature and the number of upbeat strokes (upbeats are played before the 1 and override the end of the break that is played before).

To change the notes of the break, click on a particular stroke and select one of the available stroke types. As a shortcut, you can also type the first letter of the stroke type on your keyboard (press space to leave the stroke empty). This will select the stroke and jump to the next stroke, which makes it fast to compose a whole line. You can also use the left and right arrows and backspace to navigate a line of strokes.

When editing an existing break, the strokes that you have modified are highlighted in orange. You can click the <btn variant="warning"><fa icon="eraser"></fa> Restore original</btn> button on top to reset the break to its original state.

## Create a new tune

To create a completely new tune, click on the <btn variant="link"><fa icon="plus"></fa> New tune</btn> button at the very bottom of the tune list on the left (on small screens such as smartphones, you have to click the <btn><fa icon="bars"></fa></btn> menu icon on the top left to open the tune list). After typing in a name for the tune, a dialog will open where you can [edit the notes](#edit-a-tune) of the tune.

To add breaks to the tune, click the <fa icon="plus"></fa> plus icon underneath the list of breaks of the tune in the tune list on the left.

## History

When you create new tunes or songs or make changes to existing ones, these changes are saved in your browser. This means that next time you open RoR Player, your custom tunes and songs will still be there. The <btn><fa icon="clock"></fa> History</btn> button on the top right of the screen opens a menu where you can go back to previous states. Not every single change that you make creates a new item in the history, but when there is at least an hour in between two changes that you make, a new historic state is added to the list. When opening a [shared link](./share.md), a new history item is also created so that you can go back to your own custom tunes/songs.

You can switch back and forth between different historic states. When you open a historic state and start to make changes to it, it will be added as a new state to the history.

At the bottom of the history menu, there is a <btn variant="item">Clear</btn> item. Clicking it will remove all historic states, but leave your current custom tunes/songs in place.