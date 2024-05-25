import retirementProducts from './data/Retirement.json' assert { type: 'json' };
import insuranceProducts from './data/insurance.json' assert { type: 'json' };
import investmentProducts from './data/Investment.json' assert { type: 'json' };
import healthPrograms from './data/HealthProg.json' assert { type: 'json' };

/** Retirement Products **/

export function getRetirementProducts() {
    return retirementProducts['products']
}

export function getRetirementProductById(id) {
    var result = getRetirementProducts().find(elem => elem['ID'] == id);
    return result == undefined ? null : result;
}

export function getRetirementProductsByBrand(brand) {
    var result = getRetirementProducts().filter(elem => elem['Brand'] == brand);
    return result == undefined ? null : result;
}

/** Insurance Products **/

export function getInsuranceProducts() {
    return insuranceProducts['products']
}

export function getInsuranceProductById(id) {
    var result = getInsuranceProducts().find(elem => elem['ID'] == id);
    return result == undefined ? null : result;
}

export function getInsuranceProductsByBrand(brand) {
    var result = getInsuranceProducts().filter(elem => elem['Brand'] == brand);
    return result == undefined ? null : result;
}

export function getInsuranceProductsByType(filter) {
    var result = getInsuranceProducts().filter(elem => elem['Filter'] == brand);
    return result == undefined ? null : result;
}

export function getInsuranceTypes() {
    const uniq_arr = getInsuranceProducts().filter((obj, pos, arr) => {
        return arr.map(data => data['Filter']).indexOf(obj['Filter']) === pos;
    })
    return uniq_arr.map(x => x['Filter'])
}

/** Investment Products **/

export function getInvestmentProducts() {
    return investmentProducts['products']
}

export function getInvestmentProductById(id) {
    var result = getInvestmentProducts().find(elem => elem['ID'] == id);
    return result == undefined ? null : result;
}

export function getInvestmentProductsByBrand(brand) {
    var result = getInvestmentProducts().filter(elem => elem['Brand'] == brand);
    return result == undefined ? null : result;
}

export function getInvestmentProductsByType(filter) {
    var result = getInvestmentProducts().filter(elem => elem['Filter'] == brand);
    return result == undefined ? null : result;
}

export function getInvestmentTypes() {
    const uniq_arr = getInvestmentProducts().filter((obj, pos, arr) => {
        return arr.map(data => data['Filter']).indexOf(obj['Filter']) === pos;
    })
    return uniq_arr.map(x => x['Filter'])
}

/** Health Programs **/

export function getHealthPrograms() {
    return healthPrograms['products']
}

export function getHealthProgramById(id) {
    var result = getHealthPrograms().find(elem => elem['ID'] == id);
    return result == undefined ? null : result;
}

export function getHealthProgramsByBrand(brand) {
    var result = getHealthPrograms().filter(elem => elem['Brand'] == brand);
    return result == undefined ? null : result;
}

export function getHealthProgramsByType(filter) {
    var result = getHealthPrograms().filter(elem => elem['Filter'] == brand);
    return result == undefined ? null : result;
}

export function getHealthProgramsTypes() {
    const uniq_arr = getHealthPrograms().filter((obj, pos, arr) => {
        return arr.map(data => data['Filter']).indexOf(obj['Filter']) === pos;
    })
    return uniq_arr.map(x => x['Filter'])
}


/** Sample Code **/
// console.log(getRetirementProductById(1))
// console.log(getRetirementProductById('1')) // ID can be provided as a int or string
// console.log(getRetirementProductsByBrand('DBS')[0])
// console.log(getInsuranceTypes())
// console.log(getInvestmentTypes())
// console.log(getHealthProgramsTypes())

console.log('trigger2')