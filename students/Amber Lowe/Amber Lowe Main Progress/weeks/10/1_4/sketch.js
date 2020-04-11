let i = 0
let capW = 640 // width capture 
let capH = 480 // height capture
let cellW = 20 // width cell 
let cellH = 20 // height cell 50
let cellD = 20
let cells = []

let vid

function setup() {


    createCanvas(640, 480, WEBGL)
    vid = createCapture(640, 480)
    vid.hide()
    id = 0
    for (let x = 0; x < width; x += cellW) {

        for (let y = 0; y < height; y += cellH) {

            for (z = -1; z < 0; z += cellD) {


                col = [0]
                tx = x
                ty = y
                tz = z

                let newCell = new Cell(x, y, 0, tx, ty, tz, cellW, cellH, cellD, col, id)

                cells.push(newCell)
                id++

            }
        }
    }



}

function draw() {

    background(0)

    ambientLight(300)
    directionalLight(255, 255, 255, 0.25, 0.25, 0)
    pointLight(255, 0, 255, width, height, 250)

    let offset = sin(frameCount / 100) * 200
    let scl = (sin(frameCount / 100) + 2) * 0.5
    stroke(255)
    push()
        // move all of the geometry using transformations here
    scale(0.5)
    rotateX(frameCount * 0.005)
    rotateY(frameCount * 0.002)

    translate(-width / 2, -height / 2)

    for (i = 0; i < cells.length; i++) {

        let cell = cells[i]
        cell.update()
        cell.display()

    }
    pop()

    if (random() > 0.5) {
        
        swapPosition(cells[second()], cells[int(random(cells.length))])
    }

}


function swapPosition(cell1, cell2) {

    let tempX = cell1.tx //* minute()
    let tempY = cell1.ty //* minute()
    let tempZ = cell1.tz //* minute()

    cell1.tx = cell2.tx 
    cell1.ty = cell2.ty
    cell1.tz = cell2.tz
    cell1.r = TWO_PI * minute()

    cell2.tx = tempX
    cell2.ty = tempY
    cell2.tz = tempZ
    cell2.r = TWO_PI * minute()



}

function Cell(x, y, z, tx, ty, tz, w, h, col, id) {

    this.id = id
    this.x = x
    this.y = y
    this.z = z
    this.px = x
    this.py = y
    this.tx = tx
    this.ty = ty
    this.tz = 0
    this.tr = 0
    this.r = 0
    this.w = w
    this.h = h
    this.col = col

    this.update = function() {

        this.col = vid.get(this.px, this.py)
        this.r = (this.tr - this.r) * 0.01 + this.r
        this.x = (this.tx - this.x) * 0.01 + this.x
        this.y = (this.ty - this.y) * 0.01 + this.y
        this.z = (this.tz - this.z) * 0.01 + this.z


    }


    this.display = function() {

        stroke(0)

        // move specific object here 
        // look at playing with Z transformation!
        this.z = sin(this.r * 0.1) * 100
        push()
        translate(this.x, this.y, this.z)
            // translate(this.x, this.y, random(-100,100))
        rotateZ(this.r)
            // col = this.col.push(10)
        fill(this.col)
            //for (j = 0; j < 50; j+10){
        box(this.w, this.h, this.w)
        pop()

    }

}