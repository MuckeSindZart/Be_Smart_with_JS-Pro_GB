// try {
//     undefined = 1;
// } catch {
//     console.log('SomeWrong')
// } finally {
//     console.log('NotBad')
// }

// function divideNumbers(a, b) {
//     try {
//         const result = a / b;
//         if (isNaN(result)) {
//             throw new Error("NaN")
//         }
//         console.log('=',result)
//     } catch (error) {
//         console.error("Divide by 0", error)
//     } finally {
//         console.log('ok')
//     }
// }
//
// divideNumbers(10, 2);
// divideNumbers(10, 0);
// divideNumbers('asd','ac');

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.message = 'CustomError';
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError('Not a Number!')
    }
    console.log('"Successful" ' + value)
}

try {
    validateNumber('42');
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Error', error.message);
        console.log('Type of error', error.name);
    } else {
        console.error('Error happened', error)
    }
}

try {
    validateNumber(42);
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Error', error.message);
        console.log('Type of error', error.name);
    } else {
        console.error('Error happened', error)
    }
}