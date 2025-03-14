async function findSecondLargest(arr) {
    try {
        if (!Array.isArray(arr) || arr.length < 2) {
            throw new Error("Array should have at least two unique numbers!");
        }

        let first = -Infinity, second = -Infinity;

        for (let num of arr) {
            if (typeof num !== "number") {
                throw new Error("Array should contain only numbers!");
            }
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num < first) {
                second = num;
            }
        }

        if (second === -Infinity) {
            throw new Error("No second largest number found!");
        }

        console.log("Second Largest:", second);
        return second;

    } catch (error) {
        console.error("Error:", error.message);
    }
}
findSecondLargest([10, 20, 30, 20, 50, 60, 88, 99, 100]);
