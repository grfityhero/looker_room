import { API_CONFIG, getError } from "./commonUtils";

const axios = require("axios");

export function getDataAction(firstday, lastday, moduleId, callback) {
    axios.get(`https://m.fizikal.co.il/wsv2/JActivityService.svc/Calendar?branchId=1&companyId=205&moduleId=${moduleId}&preferred=false&start=${firstday}&end=${lastday}`, API_CONFIG)
        .then(function (response) {
            callback({ data: response.data })
        })
        .catch(function (error) {
            callback({ error: getError(error) })
        })
}
