const user = {
    name: "bob",
    age: 30,
    address: {
        city: 'Oz',
        street: 'OzStreet',
    },
    contacts: {
        email:'@email.puk',
        phone:'+7890',
    },
};

const email= user?.contacts?.email;
console.log(email);

const defaultVal = user?.otherValue ?? 'DefaultValueString';
console.log(defaultVal);

const street = user?.address?.street ?? "DefaultStreet";
console.log(street)

console.log(user)