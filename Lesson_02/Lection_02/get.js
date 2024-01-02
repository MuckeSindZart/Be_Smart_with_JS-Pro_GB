// class AutoMobile {
//     _horsePower = 0;
//
//     set horsePower(val) {
//         if (val < 0) throw new Error("Negative horse power");
//         this._horsePower = val;
//     }
//
//     get horsePower() {
//         return this._horsePower;
//     }
//
//     constructor(power) {
//         this._horsePower = power;
//     }
// }
//
// let auto = new AutoMobile(100);
//
// // auto.horsePower=-100;
// auto._horsePower = 10
// console.log(auto.horsePower)

//----------------------------------------------------------------------------//

class AutoMobile {
    #horsePower = 0;

    set horsePower(val) {
        if (val < 0) throw new Error("Negative horse power");
        this.#horsePower = val;
    }

    get horsePower() {
        return this.#horsePower;
    }

    constructor(power) {
        this.#horsePower = power;
    }
}

let auto = new AutoMobile(100);

// auto.horsePower=-100;
auto.horsePower = 10
// auto.#horsePower = 10
console.log(auto.horsePower)