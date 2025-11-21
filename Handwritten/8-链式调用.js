// class Calculator {
//     constructor() {
//         this.value = 0
//     }
//     add(value) {
//         this.value += value
//         return this
//     }
//     subtract(value) {
//         this.value -= value
//         return this
//     }
//     multiply(value) {
//         this.value *= value
//         return this
//     }
//     divide(num) {
//         if (num !== 0) {
//             this.value /= num;
//         }
//         return this;
//     }
//     getResult() {
//         return this.value;
//     }
// }

function chain() {
    let value = 0
    const options = {
        add(num) {
            value += num;
            return this;
        },

        subtract(num) {
            value -= num;
            return this;
        },

        multiply(num) {
            value *= num;
            return this;
        },

        divide(num) {
            if (num !== 0) {
                value /= num;
            }
            return this;
        },

        value() {
            return value;
        }
    }
    return options
}

const result = new chain()

console.log(result.add(5)
    .multiply(2)
    .subtract(3)
    .divide(2)
    .value())