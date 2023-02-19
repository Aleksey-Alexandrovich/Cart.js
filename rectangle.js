'use strict';


const rectangle = {
  _width: 5,
  _height: 5,

  set width(value) {
    if (typeof value === 'number') {
      this._width = value;
    } else if (typeof value !== 'number') {
      console.log('Введите число');
    }
  },
  set height(value) {
    if (typeof value === 'number') {
      this._height = value;
    } else if (typeof value !== 'number') {
      console.log('Введите число');
    }
  },


  get perimeter() {
    return (2 * (this._width + this._height) + 'см');
  },

  get square() {
    return this._width * this._height + 'см';
  },


};
