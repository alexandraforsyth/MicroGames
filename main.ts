/**
 * Sten=1
 * 
 * Sax=2
 * 
 * Påse=3
 */
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("SpelVal", 1)
})
function StenSaxPåse (konsol: number, val: number) {
	
}
radio.onReceivedValue(function (name, value) {
    if (name.includes("SpelVal")) {
        spelval = value
    } else if (name.includes("1")) {
        värdekonsol1 = value
    } else {
        värdekonsol2 = value
    }
    räknapoäng(värdekonsol1, värdekonsol2)
})
function räknapoäng (num: number, num2: number) {
    if (spelval == 0) {
        if (num == num2) {
            basic.showString("=")
        } else if ((num == 1 || num == 3) && (num2 == 1 || num2 == 3)) {
            if (num == 3) {
                poängkonsol1 += 1
            } else {
                poängkonsol2 += 1
            }
        } else {
            if (num < num2) {
                poängkonsol1 += 1
            } else {
                poängkonsol2 += 1
            }
        }
    } else {
        if (num > num2) {
            poängkonsol1 += 1
        } else if (num < num2) {
            poängkonsol2 += 1
        } else {
            basic.showString("=")
        }
    }
}
/**
 * Spelval
 * 
 * 0: sten, sax, påse
 * 
 * 1: tärning
 */
let värdekonsol2 = 0
let värdekonsol1 = 0
let spelval = 0
radio.setGroup(1)
let poängkonsol1 = 0
let poängkonsol2 = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
