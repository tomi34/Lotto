input.onButtonPressed(Button.A, function () {
    basic.showNumber(_1)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(_2)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(_3)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(_4)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(_5)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    generator()
})
function generator () {
    _1 = randint(1, 90)
    _2 = randint(1, 90)
    while (_1 == _2) {
        _2 = randint(1, 90)
    }
    _3 = randint(1, 90)
    while (_1 == _3 || _2 == _3) {
        _3 = randint(1, 90)
    }
    _4 = randint(1, 90)
    while (_1 == _4 || _2 == _4 || _3 == _4) {
        _4 = randint(1, 90)
    }
    _5 = randint(1, 90)
    while (_1 == _5 || _2 == _5 || _3 == _5 || _4 == _5) {
        _5 = randint(1, 90)
    }
}
let _5 = 0
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
generator()
