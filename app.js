
function reverseString(strReceived) {
    var reversedText = strReceived.split("").reverse().join("");
    return reversedText;
}

function isPalindrome(strReceived) {
    var reversedText = reverseString(strReceived);
    return (strReceived === reversedText);
}

function convertDateToString(dateEnteredByUser) {
    //strDate object
    var strDate = {
        day: "",
        month: "",
        year: ""
    };
    //for day
    if (dateEnteredByUser.day < 10) {
        strDate.day = "0" + dateEnteredByUser.day;
    }
    else {
        strDate.day = dateEnteredByUser.day.toString();
    }
    //for month
    if (dateEnteredByUser.month < 10) {
        strDate.month = "0" + dateEnteredByUser.month;
    }
    else {
        strDate.month = dateEnteredByUser.month.toString();
    }
    //for year
    strDate.year = dateEnteredByUser.year.toString();

    return strDate;

}

function dateFormates(dateEnteredByUser) {
    var dateReceived = convertDateToString(dateEnteredByUser);

    // dateFormates
    const DDMMYYYY = dateReceived.day + dateReceived.month + dateReceived.year;
    const MMDDYYYY = dateReceived.month + dateReceived.day + dateReceived.year;
    const YYYYMMDD = dateReceived.year + dateReceived.month + dateReceived.day;
    const DDMMYY = dateReceived.day + dateReceived.month + dateReceived.year.slice(-2);
    const MMDDYY = dateReceived.month + dateReceived.day + dateReceived.year.slice(-2);
    const YYMMDD = dateReceived.year.slice(-2) + dateReceived.month + dateReceived.day;
    const formatsOfDate = [DDMMYYYY, MMDDYYYY, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD];
    return formatsOfDate;
}

function checkPalindromeForAllDateFormates(dateEnteredByUser) {
    var dateFormateReceived = dateFormates(dateEnteredByUser);

    let resultPalindrome = false;
    for (let i = 0; i < dateFormateReceived.length; i++) {
        if (isPalindrome(i)) {
            return resultPalindrome = true;
            break;
        }
        else {
            return resultPalindrome;
        }
    }
}

function isLeapYear(year) {
    if (year % 400 === 0 || year % 4 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    return false;
}

function getNextDate(dateEnteredByUser) {
    var day = dateEnteredByUser.day + 1;
    var month = dateEnteredByUser.month;
    var year = dateEnteredByUser.year;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // for day
    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        }
        else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    }
    else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    // for month
    if(month>12){
        day=1;
        month=1;
        year++;
    }

    return {
        day:day,
        month:month,
        year:year
    };

}

function getPreviosDate(dateEnteredByUser){
    var day = dateEnteredByUser.day - 1;
    var month = dateEnteredByUser.month;
    var year = dateEnteredByUser.year;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // for day
    if (month === 3) {
        if (isLeapYear(year)) {
            if (day < 1) {
                day = daysInMonth[month-1];
                month--;
            }
        }
        else {
            if (day < 1) {
                day = daysInMonth[month-1];
                month--;
            }
        }
    }
    else {
        if (day < 1) {
            day = daysInMonth[month-1];
            month--;
        }
    }

    // for month
    if(month<1){
        day=31;
        month=12;
        year--;
    }

    return {
        day:day,
        month:month,
        year:year
    };
}