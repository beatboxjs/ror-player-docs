# Practice

The **Practice** tab lets you practise a tune by playing one instrument's part on your own drum. While you play, RoR Player listens through your computer's microphone, compares what it hears with the notes of the tune, and scores how accurate your timing is.

To use Practice you need a **microphone** and, importantly, **headphones** (see [Getting started](#getting-started) for why).

## Getting started

Open the **Practice** tab at the top of the screen. As in the other modes, pick a tune from the list on the left. On small screens such as smartphones, click the <btn><fa icon="bars"></fa></btn> menu icon on the top left to open the list first.

Then use the **Part** dropdown in the toolbar to choose which part of the tune to practise — its main **Tune**, a **break**, or a **variant**. (The list on the left chooses the tune; the Part dropdown chooses the part within it.) If your chosen instrument has no strokes in the selected part, the <btn variant="success"><fa icon="play"></fa> Start</btn> button stays disabled, with the message "No strokes to practice for this instrument." next to the notation — pick a different part or instrument.

Next, choose the instrument you want to practise from the **Instrument** dropdown in the toolbar, and press the <btn variant="success"><fa icon="play"></fa> Start</btn> button. (Instruments that have no strokes in the selected part are greyed out and marked "(–)".)

The first time you start, two things happen:
* Your browser asks for permission to **use the microphone**. Practice needs to hear your drum in order to score your playing. The audio is processed locally on your device and is never sent anywhere. Click **Enable microphone** — and if your browser blocked it, allow access from the icon in the address bar.
* A **"Headphones recommended"** notice appears. Please put on headphones and click **Continue**. This matters: if the tune plays through speakers, the microphone hears the playback as well as your drum and counts it as your hits, which ruins the scoring.

After a short **count-in**, the break starts playing in a loop and you can play along.

## Practise just your instrument, or with the band

The toolbar has a toggle with two modes:
* **Instrument:** you hear only your instrument's part, played by RoR Player, as a reference to imitate. The notation shows just that instrument.
* **Band:** RoR Player plays the whole tune *except* your instrument, which is muted — so you fill in your own part within the context of the full band.

Start with **Instrument** to learn the part, then switch to **Band** to practise playing it in context.

## The practice loop

After the count-in, the break repeats in a loop. Play your part on your drum in time with what you hear. As you play, the notation marks how you did:
* **green** — you hit the stroke on time;
* **amber** — you hit it, but your timing was off;
* **red and struck through** — a stroke the tune expected that you missed (the loop passed it and no hit was heard);
* **a dotted outline** — an *extra*: a hit heard where the tune expects no stroke. The outline marks the cell nearest to where the stray hit landed, so you can see what was counted against you.

## Reading the live feedback

Next to the notation is a panel that updates as you play:
* The large number at the top is your current **score** out of 100.
* Below it is a **timing meter**. Each hit drops a marker on it: to the **right** if you were early, to the **left** if you were behind, and in the green zone in the **centre** if you were on the beat. The most recent hit pulses, and the few hits before it fade out behind it, so you can see at a glance whether you are drifting early or late.
* Click **Session totals** to expand the running totals for the session:
  * **Timing** — how far off the beat you were on average, in milliseconds. Lower is better; 0 is perfect.
  * **Drift** — whether you tend to play early (−) or late (+) overall.
  * **Hits** — strokes you played on or near the beat.
  * **Misses** — expected strokes you didn't play.
  * **Extras** — strokes you played where the tune didn't expect one.
* At the bottom, a status line shows whether the microphone is <fa icon="microphone"></fa> listening, the current difficulty and speed, and the latency offset (see [Settings](#settings)).

## Settings

Click the <btn><fa icon="cog"></fa></btn> settings icon in the toolbar to adjust:
* **Speed:** move the slider to play the tune slower or faster (the number is the beats per minute). Click **Reset** to return to the tune's default tempo. Practising slowly first and speeding up gradually is a good way to learn a part.
* **Latency offset / Calibrate:** every audio setup has a small delay between a sound being played and the microphone hearing it. If this delay is not accounted for, your hits look later than they really were. Click **Calibrate…** to measure it automatically: the wizard plays a series of clicks through your **speakers** (turn the volume up for this step and keep the room quiet) and listens to them with the microphone, then offers to apply the measured value. Run it whenever you change your microphone, speakers or device. You can also set the offset by hand with the slider.
* **Sensitivity:** how loud a sound has to be before Practice counts it as a hit. The default (1.0×) suits most setups. If your real strokes are being counted as **misses** because the microphone isn't picking them up, raise it. If you are getting phantom **extras** — from a ringing drum, a resonant room, or background noise — lower it so only your firmer hits register. Click **Reset** to return to 1.0×.
* **Difficulty:** choose **Easy**, **Normal** or **Hard**. This controls how strict the timing judgement is — Easy is the most forgiving. Beginners should start on Easy.

## Understanding your score

Two things determine your score:
1. **Accuracy** — playing the strokes the tune expects: not missing them, and not adding extra ones.
2. **Timing** — how close to the beat your strokes land.

The **Difficulty** setting decides how forgiving "close to the beat" is. The counters under **Session totals** add up over the whole session, from Start to Stop, so they only ever grow — they are a running tally of how the session has gone, not a per-loop figure.

**A note on latency vs. drift.** If *every* hit looks consistently late or early, that is almost always the delay in your audio setup rather than your playing — run the [latency calibration](#settings) so it is not counted against you. But resist the temptation to cancel out a genuine tendency to rush or drag by nudging the latency: that only hides the very thing you are practising to improve.

## After a session

Press the <btn variant="danger"><fa icon="stop"></fa> Stop</btn> button to end the session. A results card then summarises your final score and the same counters, so you can see how the whole session went.

## Notes

* **On iOS (iPhone/iPad),** [silent mode](https://support.apple.com/en-us/HT208353) has to be turned off for RoR Player to play any sound, including the count-in and the band.
* **Use headphones, not speakers.** Sound from speakers leaks into the microphone and is counted as your playing, which distorts the score.
* **Pressed Start but nothing happened?** Another app may be using your microphone, or the browser may be blocking it. Close other apps that might use the mic, check that microphone access is allowed for the site, or pick a different input device in your system's sound settings.
