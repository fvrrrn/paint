import Paint from './paint.class'
import Tool from './tool.class'
import '../sass/main.sass'
import '../index.html'

const paint = new Paint(document.querySelector('canvas') as HTMLCanvasElement)

// Set defaults
paint.activeTool = Tool.TOOL_LINE
paint.lineWidth = '1'
paint.brushSize = '4'
paint.selectedColor = '#000000'

// initialize paint
paint.init()

document.querySelectorAll('[data-command]').forEach((el) => {
  el.addEventListener('click', (e) => {
    const command = el.getAttribute('data-command')

    if (command === 'undo') {
      paint.undoPaint()
    } else if (command === 'download') {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement
      const image = canvas
        .toDataURL('image/png', 1.0)
        .replace('image/png', 'image/octet-stream')
      const link = document.createElement('a')
      link.download = 'my-image.png'
      link.href = image
      link.click()
    }
  })
})

document.querySelectorAll('[data-tool]').forEach((el) => {
  el.addEventListener('click', (e) => {
    document.querySelector('[data-tool].active').classList.toggle('active')
    el.classList.toggle('active')
    const selectedTool = el.getAttribute('data-tool')
    paint.activeTool = selectedTool

    switch (selectedTool) {
      case Tool.TOOL_LINE:
      case Tool.TOOL_RECTANGLE:
      case Tool.TOOL_CIRCLE:
      case Tool.TOOL_TRIANGLE:
      case Tool.TOOL_PENCIL:
        ;(document.querySelector(
          '.group.pencil',
        ) as HTMLElement).style.display = 'block'
        ;(document.querySelector('.group.brush') as HTMLElement).style.display =
          'none'
        break
      case Tool.TOOL_BRUSH:
        ;(document.querySelector(
          '.group.pencil',
        ) as HTMLElement).style.display = 'none'
        ;(document.querySelector('.group.brush') as HTMLElement).style.display =
          'block'
        break
      default:
        ;(document.querySelector(
          '.group.pencil',
        ) as HTMLElement).style.display = 'none'
        ;(document.querySelector('.group.brush') as HTMLElement).style.display =
          'none'
    }
  })
})

document.querySelectorAll('[data-line-width]').forEach((el) => {
  el.addEventListener('click', (e) => {
    document
      .querySelector('[data-line-width].active')
      .classList.toggle('active')
    el.classList.toggle('active')

    paint.lineWidth = el.getAttribute('data-line-width')
  })
})

document.querySelectorAll('[data-brush-size]').forEach((el) => {
  el.addEventListener('click', (e) => {
    document
      .querySelector('[data-brush-size].active')
      .classList.toggle('active')
    el.classList.toggle('active')

    paint.brushSize = el.getAttribute('data-brush-size')
  })
})

document.querySelectorAll('[data-color]').forEach((el) => {
  el.addEventListener('click', (e) => {
    document.querySelector('[data-color].active').classList.toggle('active')
    el.classList.toggle('active')

    paint.selectedColor = el.getAttribute('data-color')
  })
})
