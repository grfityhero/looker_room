import { format } from "date-fns"

export const GETDATA = 'https://m.fizikal.co.il/wsv2/JActivityService.svc/Calendar?branchId=1&companyId=205&moduleId=27&preferred=false&start=8/14/2022&end=8/20/2022'
// export const HEADER = [
//     { title: "שבת", date: "ז" },
//     { title: "שישי", date: "ו" },
//     { title: "חמישי", date: "ה" },
//     { title: "רביעי", date: "ד" },
//     { title: "שלישי", date: "ג" },
//     { title: "שני", date: "ב" },
//     { title: "ראשון", date: "א" },
// ]

export const HEADER = [
    { title: "א", date: 1 },
    { title: "ב", date: 2 },
    { title: "ג", date: 3 },
    { title: "ד", date: 4 },
    { title: "ה", date: 5 },
    { title: "ו", date: 6 },
    { title: "ז", date: 7 },
]

export const MODULES = [
    { name: "טשרניחובסקי", id: 28 },
    { name: "הכרם", id: 33 },
    { name: "פינסקר", id: 27 },
    { name: "ארלוזורוב", id: 38 },
    { name: "גורדון", id: 34 },
    // { name: "כל השיעורים", id: 36 },
]


export function fDateTime4(date) {
    return format(new Date(date), 'MM/dd/yyyy');
}

export function fDateTime3(date) {
    return format(new Date(date), 'yyyy/M/d');
}
