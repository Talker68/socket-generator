import faker from 'faker';

const matrixSize = 60;
const rowSize = 60;

export function generateData() {
    let randomMatrix = [];
    for (let i = 0; i < matrixSize; i++) {
        let tempRow = [];
        for (let ii = 0; ii < rowSize; ii++) {
            tempRow.push(faker.random.number());
        }
        randomMatrix.push(tempRow);
    }
    return randomMatrix;
}