"use strict";
const excelToJson = require("convert-excel-to-json");

const result = excelToJson({
  sourceFile: "scpg_excel.xlsx",
    header:{
         rows: 1 // 2, 3, 4, etc.
    },
  sheets: [
    {
      name: "Sheet1",
      columnToKey: {
        A: 'fundid',
        B: 'from',
        C: 'subject',
        D: 'degree',
        E: 'amount',
        F: 'requirement'
      },
    },
    {
      name: "Sheet2",
      columnToKey: {
        A: 'room',
        B: 'fundid',
        C: 'title'
      },
    },
    {
      name: "Sheet3",
      columnToKey: {
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
        AG: 'email',
        AH: 'studyhistory',
        AI: 'exam'
      },
    },
  ],
});

console.log(result);
