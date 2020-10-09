function count_tax() {
    try {
        let get_string = document.getElementById("input_field").value;
        // console.log(get_string)
        let input_salary = parseFloat(get_string.replace(/[^\d.-]/g, ''), 10);
        let tax_web = {0.1: (0, 9875), 0.12: (9876, 40125), 0.22: (40126, 85525), 0.24: (85526, 163300), 0.32: (163301, 207350), 0.35: (207351, 518400), 0.37: (518401, 999999999)}
        let based_salary = 12400;
        if (input_salary <= based_salary) {
            console.log("There are not taxes");
            document.getElementById("total").innerHTML = "There is not taxes";
        }
        else if (input_salary > based_salary) {
            let salary_to_tax = input_salary - based_salary;
            let total_tax = 0;
            let prev_max_salary = 0
            for (let k in tax_web) {
                max_inerval_backet = Math.max(tax_web[k]);
                min_interval_backet = Math.min(tax_web[k]);
                to_paid = max_inerval_backet - prev_max_salary
                if (salary_to_tax - to_paid > 0) {
                    total_tax = total_tax + (k * to_paid);
                    salary_to_tax = salary_to_tax - to_paid;
                    prev_max_salary = max_inerval_backet;
                }
                else {
                    total_tax = total_tax + (salary_to_tax * k);
                    break
                }
            }
            document.getElementById("total").innerHTML = total_tax;
            console.log(total_tax);
        }
    }
    catch {
        alert("Something was wrong")
    }
}
function clear_total() {
    document.getElementById("total").innerHTML = "";
}