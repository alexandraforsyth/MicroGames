"""

Spelval

0: sten, sax, påse

1: tärning

"""

def on_button_pressed_ab():
    radio.send_string("SpelVal" + "1")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    global spelval
    if receivedString.includes("SpelVal"):
        spelval = parse_float(receivedString.char_at(7))
radio.on_received_string(on_received_string)

def StenSaxPåse(konsol: number, val: number):
    pass

def on_received_value(name, value):
    global värdekonsol1, värdekonsol2
    if name.includes("1"):
        värdekonsol1 = value
    else:
        värdekonsol2 = value
radio.on_received_value(on_received_value)

värdekonsol2 = 0
värdekonsol1 = 0
spelval = 0
radio.set_group(1)

def on_forever():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
basic.forever(on_forever)
