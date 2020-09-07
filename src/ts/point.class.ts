export default class Point {
  private _x: number
  public get x(): number {
    return this._x
  }
  public set x(v: number) {
    this._x = v
  }

  private _y: number
  public get y(): number {
    return this._y
  }
  public set y(v: number) {
    this._y = v
  }

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
