input.onButtonPressed(Button.A, function () {
    LineOne()
})
function LineOne () {
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
}
basic.forever(function () {
	
})
