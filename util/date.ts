export const dateFormatter = (timestamp) => {

    const date = new Date(timestamp)

    const days = ['Sunday', 'Monday', 'Tuesday', 
        'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const months = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December']

    const format = 
        days[date.getDay()] + ', ' +
        date.getDate() + ' ' +
        months[date.getMonth()] + ' ' + 
        date.getFullYear()

    return format

}