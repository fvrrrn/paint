import Utility from './utility.class'
import Tool from './tool.class'
import Fill from './fill.class'

export default class Paint {
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private undoStack: any[]
  private undoLimit: number
  private tool: Tool
  private color: any
  private _lineWidth: any
  private _brushSize: any
  private savedImage: any
  private startPos: any
  private currentPos: any

  constructor(c: HTMLCanvasElement) {
    this.canvas = c
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.undoStack = []
    this.undoLimit = 3
  }

  // Setter functions
  // To current active tool
  set activeTool(tool: Tool) {
    this.tool = tool
  }

  // To set current selected color
  set selectedColor(color: string) {
    this.color = color
    this.context.fillStyle = this.color
    this.context.strokeStyle = this.color
  }

  // To set shapes and pencel stroke size
  set lineWidth(lineWidth) {
    this._lineWidth = lineWidth
  }

  // To set brush stroke size
  set brushSize(brushSize) {
    this._brushSize = brushSize
  }

  init() {
    this.canvas.onmousedown = (e) => this.onMouseDown(e)
  }

  onMouseDown(event) {
    this.savedImage = this.context.getImageData(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height,
    )

    if (this.undoStack.length >= this.undoLimit) this.undoStack.shift()
    this.undoStack.push(this.savedImage)

    this.canvas.onmousemove = (e) => this.onMouseMove(e)
    document.onmouseup = (e) => this.onMouseUp(e)
    this.startPos = Utility.getMouseCoordsOnCanvas(this.canvas, event)

    if (this.tool === Tool.TOOL_PENCIL || this.tool === Tool.TOOL_BRUSH) {
      this.context.beginPath()
      this.context.moveTo(this.startPos.x, this.startPos.y)
    } else if (this.tool === Tool.TOOL_PAINT_BUCKET) {
      // TODO: че это за хуйня?
      // new Fill(
      //   this.canvas,
      //   Math.round(this.startPos.x),
      //   Math.round(this.startPos.y),
      //   this.color,
      // )
    }
  }

  onMouseMove(e) {
    this.currentPos = Utility.getMouseCoordsOnCanvas(this.canvas, e)

    switch (this.tool) {
      case Tool.TOOL_LINE:
      case Tool.TOOL_RECTANGLE:
      case Tool.TOOL_CIRCLE:
      case Tool.TOOL_TRIANGLE:
        this.drawShape()
        break
      case Tool.TOOL_PENCIL:
        this.drawFreeLine(this._lineWidth)
        break
      case Tool.TOOL_BRUSH:
        this.drawFreeLine(this._brushSize)
        break
    }
  }

  onMouseUp(e) {
    this.canvas.onmousemove = null
    document.onmouseup = null
  }

  drawShape() {
    this.context.putImageData(this.savedImage, 0, 0)
    this.context.beginPath()
    this.context.lineWidth = this._lineWidth

    if (Tool.TOOL_LINE === this.tool) {
      this.context.moveTo(this.startPos.x, this.startPos.y)
      this.context.lineTo(this.currentPos.x, this.currentPos.y)
    } else if (Tool.TOOL_RECTANGLE === this.tool) {
      this.context.rect(
        this.startPos.x,
        this.startPos.y,
        this.currentPos.x - this.startPos.x,
        this.currentPos.y - this.startPos.y,
      )
    } else if (Tool.TOOL_CIRCLE === this.tool) {
      const distance = Utility.calcHypotenuse(this.startPos, this.currentPos)
      this.context.arc(
        this.startPos.x,
        this.startPos.y,
        distance,
        0,
        2 * Math.PI,
        false,
      )
    } else if (Tool.TOOL_TRIANGLE === this.tool) {
      this.context.moveTo(
        this.startPos.x + (this.currentPos.x - this.startPos.x) / 2,
        this.startPos.y,
      )
      this.context.lineTo(this.startPos.x, this.currentPos.y)
      this.context.lineTo(this.currentPos.x, this.currentPos.y)
      this.context.closePath()
    }
    this.context.stroke()
  }

  drawFreeLine(lineWidth) {
    this.context.lineWidth = lineWidth
    this.context.lineTo(this.currentPos.x, this.currentPos.y)
    this.context.lineCap = 'round'
    this.context.lineJoin = 'round'
    this.context.stroke()
  }

  undoPaint() {
    if (this.undoStack.length > 0) {
      this.context.putImageData(this.undoStack[this.undoStack.length - 1], 0, 0)
      this.undoStack.pop()
    } else {
      alert('No undo available')
    }
  }
}
