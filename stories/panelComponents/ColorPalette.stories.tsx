import {
  ColorPaletteProps,
  default as Component,
} from 'components/panelComponents/ColorPalette'

export default {
  title: 'Panel Components',
  component: Component,
}

export const ColorPalette = (args: ColorPaletteProps) => <Component {...args} />

ColorPalette.args = {
  colorPaletteSize: 5,
  returnedValue: (data: any) => {
    console.log(data)
  },
}
