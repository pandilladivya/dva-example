export class Constants {
  static getShapeStyling (shapeType, color) {
    var shapeStyling = {}
    switch (shapeType) {
      case 'square':
        shapeStyling = {width: 40, height: 40, margin: 20, backgroundColor: color, color: '#fff', justifyContent: 'center', alignItems: 'center', display: 'flex'}
        break
      case 'rectangle':
        shapeStyling = {width: 80, height: 40, margin: 20, backgroundColor: color, color: '#fff', justifyContent: 'center', alignItems: 'center', display: 'flex'}
        break
      case 'circle':
        shapeStyling = {width: 40, height: 40, borderRadius: 20, margin: 20, backgroundColor: color, color: '#fff', justifyContent: 'center', alignItems: 'center', display: 'flex'}
        break
      case 'triangle': shapeStyling = {
        width: 0,
        height: 0,
        borderTopWidth: 0,
        borderBottomWidth: 40,
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderStyle: 'solid',
        color: '#fff',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: color,
        margin: 20
      }
        break
    }
    return shapeStyling
  }
}
