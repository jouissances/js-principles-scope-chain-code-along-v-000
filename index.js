var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "joe";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overWriteBestCustomer(arg) {
    bestCustomer = arg;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "moe";
}

function attemptTwoFavoriteCustomers() {
    let favoriteCustomer = "ray";
    const favoriteCustomer = "leo";    
}