"use strict";
exports.__esModule = true;
var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["approvedByFinanceOfficer"] = 1] = "approvedByFinanceOfficer";
    Status[Status["approvedByLandVerificationOfficer"] = 2] = "approvedByLandVerificationOfficer";
    Status[Status["approvedByManager"] = 3] = "approvedByManager";
    Status[Status["rejected"] = 4] = "rejected";
})(Status || (Status = {}));
var loanApplication1;
loanApplication1 = {
    id: 10001,
    applicantName: 'Mikesh',
    doa: new Date(),
    status: Status.approvedByFinanceOfficer,
    loanAmount: 4500000
};
console.log(loanApplication1);
function checkStatus(loanApplication) {
    switch (loanApplication1.status) {
        case Status.approvedByManager:
            console.log('Disbursement of loan will be in few days');
            break;
        case Status.approvedByFinanceOfficer:
            console.log('Approved by Finance office , will move to seek approval from Manager');
            break;
        case Status.approvedByLandVerificationOfficer:
            console.log('Approved by Land Verification officer , will require approval from FO next');
            break;
        default:
            console.log('still time');
    }
}
checkStatus(loanApplication1);
