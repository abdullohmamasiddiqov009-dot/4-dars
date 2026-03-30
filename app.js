// 41
// function bolinsin(x, y) {
//   if (x % y === 0) { return true;
//   }else
//     return false;

// }

// console.log(bolinsin(98, 7));
// console.log(bolinsin(88, 7));
// ======================================
//42
// function raqam(str) {
//   return Number(str)
// }
// console.log(raqam('537677'));
// =========================================
//43
// function tortYuzi(a, b) {
//   if (a > 0 && b > 0) {
//     return a * b;
//   } else {
//     return -1;
//   }
// }
// console.log(tortYuzi(12,17));
// console.log(tortYuzi(-12,17));

// ===========================================================
//44
// function ismfam(ism, familya) {
//   return ism + " " + familya;
// }
// console.log(ismfam('hzxbs', 'shxvsh'));
// ================================================
//46
// function elements(massiv, soni) {
//   return massiv.slice(soni);
// }

// console.log(elements([1, 2, 3, 4, 5],3));
// =====================================================
//47
// function ovozlar(berganlar, bermaganlar) {
//   return berganlar - bermaganlar;
// }

// console.log(ovozlar(18, 12));
// console.log(ovozlar(16, 18));
// console.log(ovozlar(18, 18));
// ================================================
// 48
// function negativ(son) {
//   if (son > 0) {
//     return -son;
//   } else {
//     return 0;
//   }
// }
// console.log(negativ(14));
// console.log(negativ(0));
// console.log(negativ(10));
// ========================================
// 50
// function kinogaKirish(yosh, otaOna) {
//   if (yosh >= 15 && otaOna == true) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(kinogaKirish(16, true));
// console.log(kinogaKirish(13));
// console.log(kinogaKirish(false));
// ======================================
// 51
// function oshir1ga(arr) {
//   return arr.map(x => x + 1);
// }
//  =========================================
//  52
// var ism = "Donyor";
// var familiya = "Olimov";
// var natija = `${ism} ${familiya}`;
// // =====================================
//  53
// var holatiYaxshimi = true;
// var holati = holatiYaxshimi ? "yaxshi" : "yaxshi emas";
// // ====================================================
//  54
// function sozUzunligi(str) {
//   return str.length % 2 === 0;
// }
// // ====================================================
// // 55
// function daraja(x, y) {
//   return x ** y;
// }
// // ============================================
// // 56
// function songiElement(arr) {
//   return arr[arr.length - 1];
// }
// // ===============================================
// // 57
// function kabisa(yil) {
//   return (yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0);
// }
// // =======================================
// // 58
// function soz(word) {
//   return word.slice(1);
// }
// // ==============================================
// // 59
// function teskariBool(bool) {
//   return !bool;
// }
// // ======================================================
// // 60
// function juftMiToqmi(son) {
//   return son % 2 === 0 ? "juft" : "toq";
// }
// 61
// function qutilar(n) {
//   return n * n;
// }
// // =============================================
// // 62
// function arrayToString(arr) {
//   return arr.join("");
// }
// ===================================================
// / 63
// function birlash(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// =========================================================
// // 64
// function topIndex(arr, str) {
//   return arr.indexOf(str);
// }
// ======================================================
// // 65
// function arrElement(arr, index) {
//   return arr[Math.floor(index)];
// }
// =======================================================
// // 66
// function namuna(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }
