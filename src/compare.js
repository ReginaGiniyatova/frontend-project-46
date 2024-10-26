import _ from 'lodash';

const getDiff = (obj1, obj2) => {
    const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();

    console.log(keys)
}


export default getDiff;