// JS itu bahasa pemrograman backend dan frontend (symnatic text itu html)
// dalam sebuah variabel ada parameter (salah satunya string)
// Var message = "pesan dari variable"; menampung
// nampung cuman 1 , nampung array (banyak)
// penulisan variabel myNUmber - camelcase / my_number
// perintah "const" itu tidak bisa diubah
// function harus pake ()
// semua function yang ada dalam onclick itu pasti tereksekusi
// selector = id & class
// console.log - debug
// alert(numberOne + numberTwo) >> Concat
// " " >> spasi
// 1. generate a tag using Javascript
// 2. fill a tag href attribute with
//mailto:jokowi@gmail.com?subject=aku mau jadi presiden&body=kamu pensiun dulu
//and get the user input
// 3. make a tag clicked

//const emailReceived = "TyaraKamen.dev@gmail.com";
    
let nameSender = document.getElementById("input-name");
let email = document.getElementById("input-email");
let phone = document.getElementById("input-phone");
let subject = document.getElementById("input-subject");
let message = document.getElementById("input-message");

// function nama-function(){}
function submitForm(){
    // Lempar Data / Ambil Data
    // Value adalah sebuah data yg berada dalam form bisa gunakan $
    let nameData = nameSender.value;
    let emailData = email.value;
    let phoneData = phone.value;
    let subjectData = subject.value;
    let messageData = message.value;

    // menampilkan data menggunakan alert dengan menggunakan konsep backtip tombol kiri angka 1
    // alert(`
        // Name : ${nameData}
        // Email : ${emailData}
        // Phone : ${phoneData}
        // Subject : ${subjectData}
        // Your Message : ${messageData}
    // `)

// Validasi Data if, if else, switch case
// == operator aritmatika, pembanding dsb
// if (kondisi yang diinginkan){hasil yang ingin di sampaikan}
// else if (kondisi yang diinginkan){hasil yang ingin di sampaikan}
// else{}
if (nameData == ""){
    return alert("Please input field must be not empty!");
} else if (emailData == ""){
    return alert("Please input email field must be not empty!");
} else if (phoneData == ""){
    return alert("Please input phone field must be not empty!");
} else if (subjectData == ""){
    return alert("Please choose field must be not empty!");
} else if (messageData == ""){
    return alert("Please message field must be not empty!")
}

// Generate mail to
const a = document.createElement("a");
a.href = `mailto:${emailData}?subject=${subjectData}&body=Hello my name 
${nameData}, My Phone Number ${phoneData}, ${messageData}`;
a.target = "_blank";
a.click();
}
// object