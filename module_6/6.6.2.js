const not_unique_array = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const unique_array= Array.from(new Set(not_unique_array));
console.log (unique_array)
