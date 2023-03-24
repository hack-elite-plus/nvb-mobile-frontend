export function getDate() {
    const [dayName, month, dayNum] = new Date().toDateString().split(' ')
    return `${dayName} ${dayNum} ${month}`
}