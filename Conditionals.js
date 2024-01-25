// 1.1
// let num = 10;
//
// if (num == 10) {
//     alert('Число: ' + num + ' равно 10')
// } else {
//     alert('Число: ' + num + ' не равно 10')
// }

// 1.2
// let min = 10;
// if (min >= 0 && min <= 14) {
//     alert('1');
// }
// if (min >= 15 && min <= 30) {
//     alert('2');
// }
// if (min >= 31 && min <= 45) {
//     alert('3');
// }
// if (min >= 46 && min <= 59) {
//     alert('4');
// }

// 1.3 v1
// let lang = 'ru';
// let arr;
// if (lang === 'ru') {
//     arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// } else if (lang === 'en') {
//     arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// }

// 1.3 v2
// let lang = 'ru';
// let arr;
// switch (lang) {
//     case 'ru':
//         arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//         break;
//     case 'en':
//         arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//         break;
// }

// 1.3 v3
// let lang = 'ru';
//
// let daysOfWeek = {
//   ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//   en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };
//
// let arr = daysOfWeek[lang];

// 2.1
// let a = -1;
// if (a == 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }

// 2.2
// let a = -1;
// if (a > 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }

// 2.3
// let a = -1;
// if (a < 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }

// 2.4
// let a = 1;
// if (a >= 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }

// 2.5
// let a = -1;
// if (a <= 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }

// 2.6
// let a = 423;
// if (a !== 0) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }

// 2.7
// let a = 'тест';
// if (a == 'test') {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }

// 2.8
// let a = 3;
// if (a === '1'){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }

// 3.1
// let a = 2;
// if (a > 0 && a < 5) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }

// 3.2
// let a = 4;
// if (a == 0 || a == 2) {
//     alert(a += 7);
// } else {
//     alert(a /= 10);
// }

// 3.3
// let a = -1;
// let b = 53;
// if (a <= 1 && b >= 3){
//     alert(a + b);
// } else{
//     alert(a - b);
// }

// 3.4
// let a = 2;
// let b = 13;
// if (a > 2 && a < 11 || b >= 6 && b < 14){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }

// 4.1
// let num = 5;
// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'лето';
//         break;
//     case 4:
//         result = 'осень';
//         break;
//     default:
//         result = 'сезонов только 4';
//         break;
// }
// alert(result);

// 4.2
// let day = 11;
// if (day >= 1 && day <= 10) {
//     alert('1');
// } else if (day > 10 && day <= 20) {
//     alert('2');
// } else if (day > 20 && day <= 31) {
//     alert('3');
// } else {
//     alert('декады в месяце только 3');
// }

// 4.3
// let month = 9;
// if (month >= 3 && month <= 5) {
//     alert('весна');
// } else if (month >= 6 && month <= 8) {
//     alert('лето');
// } else if (month >= 9 && month <= 11) {
//     alert('осень');
// } else if (month == 12 || month == 1 || month == 2) {
//     alert('зима');
// } else {
//     alert('в году только 12 месяцев');
// }

// 4.4
// let str = 'crweqwer';
// if (str.charAt(0) === 'a') {
//     alert('да');
// } else {
//     alert('нет');
// }

// 4.5
// let num = '42234';
// if (num.charAt(0) === '1') {
//     alert('да');
// } else {
//     alert('нет');
// }

// 4.6
// let nums = '442';
// let sum = parseInt(nums.charAt(0)) + parseInt(nums.charAt(1)) + parseInt(nums.charAt(2));
// alert(sum);

// 4.7
// let nums1 = '442910';
// let sum1 = parseInt(nums1.charAt(0)) + parseInt(nums1.charAt(1)) + parseInt(nums1.charAt(2));
// let sum2 = parseInt(nums1.charAt(3)) + parseInt(nums1.charAt(4)) + parseInt(nums1.charAt(5));
//
// if (sum1 == sum2) {
//     alert('да')
// } else {
//     alert('нет')
// }