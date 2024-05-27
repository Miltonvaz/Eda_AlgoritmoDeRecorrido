
class Empleado {
    firstName
    lastName
    phoneNumber
    jobTitle
    email
    address
    city
    state
    zip
    constructor(firstName, lastName, phoneNumber, jobTitle,email,address,city,state,zip) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.jobTitle = jobTitle;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

export default Empleado;
