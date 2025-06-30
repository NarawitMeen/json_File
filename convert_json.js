'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'scpg_excel.xlsx'
});
 
// result will be an Object containing keys with the same name as the sheets found on the excel file. Each of the keys will have an array of objects where each of them represents a row of the container sheet. e.g. for a excel file that has two sheets ('sheet1', 'sheet2')
{
    sheet1: [{
        A: 'from',
        B: 'subject',
        C: 'deegree',
        D: 'amount',
        F: 'requirement'
    },
    sheet2: {
        A: 'room',
        B: 'fundid',
        C: 'title'
    },
    sheet3: {
        A: 'applicantid',
        B: 'sex',
        C: 'title',
        D: 'firstname',
        E: 'lastname',
        F: 'cardid',
        G: 'birthdate',
        H: 'ageyear',
        I: 'agemonth',
        J: 'ageday',
        K: 'fundid',
        L: 'room',
        M: 'range',
        N: 'current_degree',
        O: 'current_subject',
        P: 'current_unviversity',
        Q: 'current_gpa',
        R: 'degree1',
        S: 'degreename1',
        T: 'subject1',
        U: 'university1',
        V: 'gpa1',
        W: 'graduation1',
        X: 'degree2',
        Y: 'degreename2',
        Z: 'subject2',
        AA: 'university2',
        AB: 'gpa2',
        AC: 'graduation2',
        AD: 'job',
        AE: 'job_location',
        AF: 'phone',
        AG: 'email'
    }]
}

console.log(result)