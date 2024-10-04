function findMaxMin(numbers) {
    // Tìm số lớn nhất và nhỏ nhất
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    document.write("Số lớn nhất là: " + max + "<br>");
    document.write("Số nhỏ nhất là: " + min + "<br>");
}

// Ví dụ nhập vào dãy số
const arr = [5, 8, 2, 9, 1, 7];
findMaxMin(arr);