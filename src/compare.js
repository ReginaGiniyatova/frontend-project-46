import _ from 'lodash';

const getDiff = (obj1, obj2) => {
    const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
    const data = keys.map((key) => {
        if(!_.has(obj1, key) && _.has(obj2, key)) {
            return `  + ${key}: ${JSON.stringify(obj2[key])}`
        }
        if(!_.has(obj2, key) && _.has(obj1, key)) {
            return `  - ${key}: ${JSON.stringify(obj1[key])}`
        }
        if(!_.isEqual(obj1[key], obj2[key])) {
            return [`  - ${key}: ${JSON.stringify(obj1[key])}`, `  + ${key} : ${JSON.stringify(obj2[key])}`]
        }
        return `    ${key}: ${JSON.stringify(obj1[key])}`
    })

    const result = data.flat().join('\n')

    return `{\n ${result} \n}`
}


export default getDiff;