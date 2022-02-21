const sw = process.stdout.columns

// const all_types = ['blocks', 'crosses', 'lines', 'corners', 'hollow_corners', 'shades', 'semicircles']
// const types = ['blocks', 'crosses', 'shades']

const blocks = [ '█', '▊', '▋', '▌', '▍', '▎', '▏']
const crosses = ['╳', '╱', '╲']
const lines = ['┃', '│', '┇', '┆', '┋', '┊']
const corners = ['┓', '┑', '┕', '┗', '┿', '├', '┝', '┥', '┫']
const hollow_corners = ['═', '║', '╬', '╞', '╟', '╢', '╡']
const shades = ['▓', '▒', '░']
const semicircles = ['◠', '◡']
const triangles = ['◢','◣','◤','◥','◼']
// ['', '', '', '', '', '', '', '', '', '']

const types = [
    // [ '█', '▊', '▋', '▌', '▍', '▎', '▏'],
    ['╳', '╱', '╲'],
    ['┃', '│', '┇', '┆', '┋', '┊'],
    ['◢','◣','◤','◥','◼'],
    ['┓', '┑', '┕', '┗', '┿', '├', '┝', '┥', '┫'],
]

// const d_fcolors = ['\x1b[30m', '\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m', '\x1b[36m', '\x1b[37m', '\x1b[38m']
// const b_fcolors = ['\x1b[90m', '\x1b[91m', '\x1b[92m', '\x1b[93m', '\x1b[94m', '\x1b[95m', '\x1b[96m', '\x1b[97m', '\x1b[98m']
const b_fcolors = ['\x1b[91m', '\x1b[92m', '\x1b[93m', '\x1b[94m', '\x1b[95m', '\x1b[96m', '\x1b[97m']
const b_bcolors = ['\x1b[40m', '\x1b[41m', '\x1b[42m', '\x1b[43m', '\x1b[44m', '\x1b[45m', '\x1b[46m', '\x1b[47m', '\x1b[48m']
//  BLACK   RED    GREEN   YELLOW   BLUE    MAGENTA     CYAN    WHITE


let w1 = 0
let flag = 4

function draw () {
    setTimeout(draw, 1000/10)
    // let size = Math.floor(Math.random()*5)
    // flag = Math.floor(Math.random()*5)
    if (w1 > sw/2 -1 || w1 < 0){
        flag *= -1
    }
    w1 += flag
    // let bcolor = Math.floor(Math.random() * b_bcolors.length)
    let choose_type = Math.floor(Math.random() * types.length)
    // let type = types[choose_type]

    let output = ''
    for (let i = 0; i < w1-1; i++) {
        let item = Math.floor(Math.random() * types[choose_type].length)
        let fcolor = Math.floor(Math.random() * b_fcolors.length)
        // let bcolor = Math.floor(Math.random() * b_bcolors.length)
        // let bcolor2 = 
        output += b_fcolors[fcolor] + types[choose_type][item]
        //b_bcolors[bcolor] +
    }

    let output2 = ''
    for (let i = sw-1; i > sw/2; i--){
        let item = Math.floor(Math.random() * types[choose_type].length)
        let fcolor = Math.floor(Math.random() * b_fcolors.length)
        // padding = ''
        // for (let j = 0; j<i; i++){
        //     padding+=' ' 
        // }
        output2 += b_fcolors[fcolor] + types[choose_type][item]
        output2.padStart(sw, '0')
    }
    // console.log('\x1b[40m'+output)
    console.log(output+output2)
    // console.log('\x1b[40m'+output + output2.padStart(sw/2, ' '))

}

draw()