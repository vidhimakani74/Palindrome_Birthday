var inputDate = document.querySelector(".input-date");
var checkBtn = document.querySelector(".check-btn");
var outputText = document.querySelector(".result");

function reverseStr(str) {
    var listOfChars = str.split("");
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join("");
    return reversedString;
}

function isPalindrome(str) {
    var reversedText = reverseStr(str);
    return (str === reversedText);
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
        if (isPalindrome(dateFormateReceived[i])) {
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
    if (month > 12) {
        day = 1;
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    };

}

function getPreviousDate(dateEnteredByUser) {
    var day = dateEnteredByUser.day - 1;
    var month = dateEnteredByUser.month;
    var year = dateEnteredByUser.year;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // for day
    if (month === 3) {
        if (isLeapYear(year)) {
            if (day < 1) {
                day = daysInMonth[month - 1];
                month--;
            }
        }
        else {
            if (day < 1) {
                day = daysInMonth[month - 1];
                month--;
            }
        }
    }
    else {
        if (day < 1) {
            day = daysInMonth[month - 1];
            month--;
        }
    }

    // for month
    if (month < 1) {
        day = 31;
        month = 12;
        year--;
    }

    return {
        day: day,
        month: month,
        year: year
    };
}

function getNextPalindromeDate(dateEnteredByUser) {
    var nextDate = getNextDate(dateEnteredByUser);
    var counterNext = 0;
    while (true) {
        counterNext++;
        if (checkPalindromeForAllDateFormates(nextDate)) {
            break;
        }
        nextDate = getNextDate(nextDate)
    }
    return [counterNext, nextDate];
}

function getPreviousPalindromeDate(dateEnteredByUser) {

    var previousDate = getPreviousDate(dateEnteredByUser);
    var counterPrevious = 0;

    while (true) {
        counterPrevious++;
        if (checkPalindromeForAllDateFormates(previousDate)) {
            break;
        }
        previousDate = getPreviousDate(previousDate);
    }
    return [counterPrevious, previousDate];
}

function nearestPalindromeDate(next, previous) {
    var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    if (next[0] < previous[0]) {
        if (next[0] === 1) {
            outputText.innerText = "The nearest palindrome date is: " + next[1].day + " " + months[next[1].month - 1] + ", " + next[1].year + ". " + "You missed it by " + next[0] + " day.";
        } else {
            outputText.innerText = "The nearest palindrome date is: " + next[1].day + " " + months[next[1].month - 1] + ", " + next[1].year + ". " + "You missed it by " + next[0] + " days.";
        }
    } else {
        if (previous[0] === 1) {
            outputText.innerText = "The nearest palindrome date is: " + previous[1].day + " " + months[previous[1].month - 1] + ", " + previous[1].year + ". " + "You missed it by " + previous[0] + " day.";
        } else {
            outputText.innerText = "The nearest palindrome date is: " + previous[1].day + " " + months[previous[1].month - 1] + ", " + previous[1].year + ". " + "You missed it by " + previous[0] + " days.";
        }
    }
}

function outputValue() {
    var inputBdate = inputDate.value;

    if (inputBdate !== "") {
        var dateArray = inputBdate.split("-");
        var enteredDate = {
            day: Number(dateArray[2]),
            month: Number(dateArray[1]),
            year: Number(dateArray[0]),
        };
        var enteredDatestr=convertDateToString(enteredDate);
        if (checkPalindromeForAllDateFormates(enteredDate)) {
            outputText.innerText = "your Birthday is Palindrome🎉";
        }
        else {
            var dateNext = getNextPalindromeDate(enteredDate);
            var datePrevios = getPreviousPalindromeDate(enteredDate);
            nearestPalindromeDate(dateNext, datePrevios);
        }
    }
    else {
        outputText.innerText = "Please Select your date of birth";
    }
}

checkBtn.addEventListener("click", outputValue);