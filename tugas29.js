/* Tugas 29 Javascript */
// Muhammad Rizwan

function regex() {
    let data = "Belajar menimba ilmu programming bersama Niomic";
    let str = new RegExp("bersama");

    console.log(str.exec(data));
}

regex();