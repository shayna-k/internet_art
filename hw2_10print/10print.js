const sw = process.stdout.columns

/** 
 * Pick your own symbols! 
 * 
 * Select any array to add to 'types' array
 * 
 * const blocks = [ '█', '▊', '▋', '▌', '▍', '▎', '▏']
 * const crosses = ['╳', '╱', '╲']
 * const lines = ['┃', '│', '┇', '┆', '┋', '┊']
 * const corners = ['┓', '┑', '┕', '┗', '┿', '├', '┝', '┥', '┫']
 * const hollow_corners = ['═', '║', '╬', '╞', '╟', '╢', '╡']
 * const shades = ['▓', '▒', '░']
 * const semicircles = ['◠', '◡']
 * const triangles = ['◢','◣','◤','◥','◼']
 * 
 * extra: ['', '', '', '', '', '', '', '', '', '']
 * */

const types = [
    ['╳', '╱', '╲'],
    ['┃', '│', '┇', '┆', '┋', '┊'],
    ['◢','◣','◤','◥','◼'],
    ['┓', '┑', '┕', '┗', '┿', '├', '┝', '┥', '┫'],
    ['▓', '▒', '░'],
]

const b_fcols = ['\x1b[90m', '\x1b[91m', '\x1b[94m', '\x1b[95m', '\x1b[96m', '\x1b[97m']
const b_bcols = ['\x1b[40m', '\x1b[41m', '\x1b[42m', '\x1b[43m', '\x1b[44m', '\x1b[45m', '\x1b[46m', '\x1b[47m']
//Order:         BLACK       RED         GREEN       YELLOW      BLUE        MAGENTA     CYAN        WHITE

let w = 0
let flag = 4

function get_random (x){ return Math.floor(Math.random() * x) }

function draw () {
    setTimeout(draw, 1000/8)

    if (w > sw/2 -1 || w < 0){ flag *= -1 }
    w += flag
    
    let type = get_random(types.length)
    let item = get_random(types[type].length)
    let fcolor = get_random(b_fcols.length)

    let output = '', output2 = ''
    for (let i = 0; i < w-1; i++) {
        output += b_fcols[fcolor] + types[type][item]
    }

    for (let i = sw-1; i > sw/2; i--){
        output2 += b_fcols[fcolor] + types[type][item]
    }
    console.log('\x1b[0m'+output+output2)
}

draw()