'use strict';

// React-JS-14
// homework-1
// task-2

console.log('----task-2------------------');
// task-2
/* Написать функцию calculateArea, которая будет принимать параметры,
  для вычисления площади(можете выбрать какую то конкретную фигуру,
  а можете, основываясь на переданных параметрах, выполнять требуемый алгоритм
  вычисления площади для переданной в параметрах фигуры)
  и возвращать объект вида: { area, figure, input }, где
    area - вычисленная площадь,
    figure - название фигуры, для которой вычислялась площадь,
    input - входные параметры, по которым было произведено вычисление.
*/

// triangle
// S = (a * h) / 2

// rectangle
// S = a * b

// trapezium
// S = ((a+b) * h) / 2

// circle
// S = Pi * r^2

// diamond
// S = a * h

const calculateArea = (figure = 'triangle', input = [1, 2]) => {
  let area = 0;

  switch (figure) {
    case 'triangle':
      const [triangleA, triangleH] = input;
      area = (triangleA * triangleH) / 2;
      break;

    case 'rectangle':
      const [rectangleA, rectangleB] = input;
      area = (rectangleA * rectangleB);
      break;

    case 'trapezium':
      const [trapeziumA, trapeziumB, trapeziumH] = input;
      area = ((trapeziumA + trapeziumB) * trapeziumH) / 2;
      break;

    case 'circle':
      const [circleR] = input;
      area = 3.14 * Math.pow(circleR, 2);
      break;

    case 'diamond':
      const [diamondA, diamondH] = input;
      area = diamondA * diamondH;
      break;

    default:
      const [defaultA, defaultH] = input;
      area = (defaultA * defaultH) / 2;
      break;
  }

  const result = {
    area,
    figure,
    input,
  };

  return result;
}

const calculateAllAreas = figures => {
  if (!figures) return;

  figures.forEach(figure => {
    const result = calculateArea(figure.figureType, figure.input);
    console.log(`${figure.figureType} result:`, result);
  });
};

const figuresItems = [
  {
    figureType: 'triangle',
    input: [2, 4],
  },
  {
    figureType: 'rectangle',
    input: [2, 4],
  },
  {
    figureType: 'trapezium',
    input: [2, 4, 5],
  },
  {
    figureType: 'circle',
    input: [4],
  },
  {
    figureType: 'diamond',
    input: [2, 4],
  },
];

calculateAllAreas(figuresItems);
