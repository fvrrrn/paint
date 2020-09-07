export default class Singleton {
  private static instance: Singleton
  private constructor() {}

  public static getInstance() {
    if (!Singleton.instance) {
      return (Singleton.instance = new Singleton())
    }
    return Singleton.instance
  }
}
