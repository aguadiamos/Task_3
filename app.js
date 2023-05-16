let runApp = function () {
    let d = new Date();

    let displayTime = document.getElementById("time")
    let displayDate = document.getElementById("date")

    const hour = prefixZero(standardTime(d.getHours()))
    const minute = prefixZero(d.getMinutes())
    const second = prefixZero(d.getSeconds())

    displayTime.textContent =
        (`${hour}:${minute}:${second}`)

    const day = daysOfTheWeek(d.getDay())
    const month = monthsOfTheYear(d.getMonth())
    const numDate = daySuffix(d.getDate())
    const year = d.getFullYear()

    displayDate.textContent =
        (`${day}, ${month} ${numDate} ${year}`)
}

function daySuffix(date) {
    if (date === 1 || date === 21 || date === 31) {
        return `${date}st`
    }
    else if (date === 2 || date === 22) {
        return `${date}nd`
    }
    else if (date === 3 || date === 23) {
        return `${date}rd`
    }
    else {
        return `${date}th`
    }

}

function monthsOfTheYear(day) {
    if (day === 0) {
        return "January"
    }
    else if (day === 1) {
        return "February"
    }
    else if (day === 2) {
        return "March"
    }
    else if (day === 3) {
        return "April"
    }
    else if (day === 4) {
        return "May"
    }
    else if (day === 5) {
        return "June"
    }
    else if (day === 6) {
        return "July"
    }
    else if (month === 7) {
        return "August"
    }
    else if (month === 8) {
        return "September"
    }
    else if (month === 9) {
        return "October"
    }
    else if (month === 10) {
        return "November"
    }
    else if (month === 11) {
        return "December"
    }
}

function daysOfTheWeek(day) {
    if (day === 0) {
        return "Sunday"
    }
    if (day === 1) {
        return "Monday"
    }
    if (day === 2) {
        return "Tuesday"
    }
    if (day === 3) {
        return "Wednesday"
    }
    if (day === 4) {
        return "Thursday"
    }
    if (day === 5) {
        return "Friday"
    }
    if (day === 6) {
        return "Saturday"
    }
}

function prefixZero(time) {
    if (time < 10) {
        return `0${time}`
    }
    else {
        return time
    }
}

function standardTime(hour) {
    if (hour > 12) {
        return hour - 12
    }
    else {
        return hour
    }
}

runApp()
setInterval(runApp, 1000)