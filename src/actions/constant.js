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
    { name: "TSHARNICHOVSKI", id: 28 },
    { name: "PINSKER", id: 27 },
    { name: "GORDON", id: 34 },
    { name: "ARLOZOROV", id: 38 },
    { name: "HAKEREM", id: 33 },
]

export const LESSONS = [
    {
        name: "FCT", link: "https://www.lockeroom.co.il/%D7%A4%D7%95%D7%A0%D7%A7%D7%A6%D7%99%D7%95%D7%A0%D7%90%D7%9C%D7%99"
    }, { name: "ZONE", link: "https://www.lockeroom.co.il/%D7%A4%D7%95%D7%A0%D7%A7%D7%A6%D7%99%D7%95%D7%A0%D7%90%D7%9C%D7%99" },
    { name: "ATHLETICS", link: "https://www.lockeroom.co.il/%D7%A4%D7%95%D7%A0%D7%A7%D7%A6%D7%99%D7%95%D7%A0%D7%90%D7%9C%D7%99" },
    { name: "BODY SCULPT", link: " https://www.lockeroom.co.il/%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95" },
    { name: "BURN", link: "https://www.lockeroom.co.il/%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95" },
    {
        name: "BARRE", link: "https://www.lockeroom.co.il/%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95"
    },
    {
        name: "PILATES L1", link: "https://www.lockeroom.co.il/%D7%A4%D7%99%D7%9C%D7%90%D7%98%D7%99%D7%A1"
    },
    { name: "PILATES L2", link: "https://www.lockeroom.co.il/%D7%A4%D7%99%D7%9C%D7%90%D7%98%D7%99%D7%A1" },
    { name: "YOGA VINYASA", link: " https://www.lockeroom.co.il/%D7%99%D7%95%D7%92%D7%94" },
    { name: "YOGA ASHTANGA", link: "https://www.lockeroom.co.il/%D7%99%D7%95%D7%92%D7%94" },
    { name: "POWER YOGA", link: "https://www.lockeroom.co.il/%D7%99%D7%95%D7%92%D7%94" },
    { name: "CYCLING", link: "https://www.lockeroom.co.il/copy-of-%D7%A4%D7%99%D7%9C%D7%90%D7%98%D7%99%D7%A1-1" },
    { name: "PILATES MACHSHIRIM L1", link: "https://www.lockeroom.co.il/%D7%A4%D7%99%D7%9C%D7%90%D7%98%D7%99%D7%A1%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99%D7%9D" },
    { name: "PILATES MACHSHIRIM L2", link: "https://www.lockeroom.co.il/%D7%A4%D7%99%D7%9C%D7%90%D7%98%D7%99%D7%A1%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99%D7%9D" }
]

export function fDateTime4(date) {
    return format(new Date(date), 'MM/dd/yyyy');
}

export function fDateTime3(date) {
    return format(new Date(date), 'yyyy/M/d');
}
