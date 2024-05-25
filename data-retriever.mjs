import retirementProducts from './Retirement.json' assert { type: 'json' };
import insuranceProducts from './insurance.json' assert { type: 'json' };
import investmentProducts from './Investment.json' assert { type: 'json' };
import healthPrograms from './HealthProg.json' assert { type: 'json' };

/** Retirement Products **/

function getRetirementProducts() {
    return retirementProducts['products']
}

function getRetirementProductById(id) {
    var result = getRetirementProducts().find(elem => elem['ID'] == id);
    return result == undefined ? null : result;
}

function getRetirementProductsByBrand(brand) {
    var result = getRetirementProducts().filter(elem => elem['Brand'] == brand);
    return result == undefined ? null : result;
}

/** Insurance Products **/

function getInsuranceProducts() {
    return insuranceProducts['products']
}

function getInsuranceProductById(id) {
    var result = getInsuranceProducts().find(elem => elem['ID'] == id);
    return result == undefined ? null : result;
}

function getInsuranceProductsByBrand(brand) {
    var result = getInsuranceProducts().filter(elem => elem['Brand'] == brand);
    return result == undefined ? null : result;
}

function getInsuranceProductsByType(filter) {
    var result = getInsuranceProducts().filter(elem => elem['Filter'] == brand);
    return result == undefined ? null : result;
}

function getInsuranceTypes() {
    const uniq_arr = getInsuranceProducts().filter((obj, pos, arr) => {
        return arr.map(data => data['Filter']).indexOf(obj['Filter']) === pos;
    })
    return uniq_arr.map(x => x['Filter'])
}

/** Investment Products **/

function getInvestmentProducts() {
    return investmentProducts['products']
}

function getInvestmentProductById(id) {
    var result = getInvestmentProducts().find(elem => elem['ID'] == id);
    return result == undefined ? null : result;
}

function getInvestmentProductsByBrand(brand) {
    var result = getInvestmentProducts().filter(elem => elem['Brand'] == brand);
    return result == undefined ? null : result;
}

function getInvestmentProductsByType(filter) {
    var result = getInvestmentProducts().filter(elem => elem['Filter'] == brand);
    return result == undefined ? null : result;
}

function getInvestmentTypes() {
    const uniq_arr = getInvestmentProducts().filter((obj, pos, arr) => {
        return arr.map(data => data['Filter']).indexOf(obj['Filter']) === pos;
    })
    return uniq_arr.map(x => x['Filter'])
}

/** Health Programs **/

function getHealthPrograms() {
    return healthPrograms['products']
}

function getHealthProgramById(id) {
    var result = getHealthPrograms().find(elem => elem['ID'] == id);
    return result == undefined ? null : result;
}

function getHealthProgramsByBrand(brand) {
    var result = getHealthPrograms().filter(elem => elem['Brand'] == brand);
    return result == undefined ? null : result;
}

function getHealthProgramsByType(filter) {
    var result = getHealthPrograms().filter(elem => elem['Filter'] == brand);
    return result == undefined ? null : result;
}

function getHealthProgramsTypes() {
    const uniq_arr = getHealthPrograms().filter((obj, pos, arr) => {
        return arr.map(data => data['Filter']).indexOf(obj['Filter']) === pos;
    })
    return uniq_arr.map(x => x['Filter'])
}


/** Sample Code **/

console.log(getRetirementProductById(1))
console.log(getRetirementProductById('1')) // ID can be provided as a int or string
console.log(getRetirementProductsByBrand('DBS')[0])
console.log(getInsuranceTypes())
console.log(getInvestmentTypes())
console.log(getHealthProgramsTypes())