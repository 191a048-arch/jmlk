let TYJTYJTYJ = 0
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.stopAnimation()
    }
})
basic.forever(function () {
    TYJTYJTYJ += 1
    basic.showNumber(TYJTYJTYJ)
})
