// initialize empty array to store blog
let blogs = []
function addBlog(event){
    // make web page does't reload
    event.preventDefault()

    // get value from input form
    // get image from input file
    // array begin from zero, zero = index , all -> value
    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')
    image = URL.createObjectURL(image.files[0])
    //var dt = new Date ()
    
    // Make all data post blog become one inde/place
    // using object
    let blog = {
        author: "Sony Rakhmat",
        title: title,
        content: content,
        image: image,
        PostedAt : new Date()
        
        

    }
    var dt = new Date();
    document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleTimeString();
    blogs.push(blog)
    
    // make input to empty again after submit
    document.getElementById('input-blog-title').value = ''
    document.getElementById('input-blog-content').value = ''
    
    //document.getElementById('date-time').innerHTML = dt.toLocaleString ()
    renderBlog()
}

function renderBlog() {
    // Get blog content using DOM
    let blogContainer = document.getElementById('contents')
    // set blog content to default
    blogContainer.innerHTML = firstBlogContent()
    //
    // inner HTML memasukkan element code HTML ke dalam file html
    // Excute same code more than one
    // Using looping
    //console.table(blogs)
    for(let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt=""/>
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank">
              ${blogs[i].title}
              </a>
            </h1>
            <div class="detail-blog-content">
            ${blogs[i].PostedAt} | Sony Rakhmat
            </div>
            <p>
              ${blogs[i].content}
            </p>
          </div>
        </div>
       ` 
    }
}

function firstBlogContent() {
    return `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt=""/>
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank">
              Pasar Coding di Indonesia Dinilai Masih Menjanjikan
              </a>
            </h1>
            <div class="detail-blog-content">
            25 Nov 2021 14:30 WIB | Sony Rakhmat
            </div>
            <p>
            INFO BISNIS-Ketimpangan SDM terutama di sektor digital masih menjadi isu yang belum 
                terpecahkan. Dalam sebuah survei ditemukan, lebih dari separuh perusahaan di Indonesia 
                kesulitan mempekerjakan kandidat yang tepat untuk membantu mereka mengembangkan bisnisnya. 
                Meski faktanya, Indonesia memiliki jumlah angkatan kerja produktif sekitar 2 juta orang setiap 
                tahun yang memasuki pasar kerja. Khusus di sektor teknologi yang berkembang pesat, data 
                Kemendikbudristek menyatakan, Indonesia kekurangan<span id="dots"> . . . </span><span id="more"> 
                9 juta pekerja teknologi hingga 2030 mendatang. Artinya Indonesia memerlukan sekitar 600 ribu 
                SDM digital yang memasuki pasar setiap tahunnya. Jika dibedah lagi, Indonesia  masih kekurangan 
                SDM dengan keterampilan coding baik itu programmer, desain grafis, ahli bahasa dan profesi lain 
                terkait keterampilan coding. Di Indonesia meski coding belum menjadi mata pelajaran wajib untuk 
                siswa di sekolah, pemerintah  mulai mengadakan sekolah coding gratis. Sebut saja program 
                Coding Mum dari Kemenparekraf, ataupun program – program pengkodingan lainnya yang diselenggarakan 
                Kemnedikbudristek dengan pihak swasta dalam kampus merdeka belajar. “Saya dan teman – teman pegiat
                atau founder startup juga memiliki masalah yang sama, yaitu susah mencari programmer yang kompeten. 
                Dari sini tentunya kita dapat membentuk programmer keren dan mempunyai skill yang dibutuhkan industry 
                saat ini,” ujar Ega Wachid Radiegtya, founder DumbWays, salah satu penyedia coding bootcamp gratis di Indonesia.
                DumbWays yang berdiri sejak April 2018 telah membuka kelas full stack development dan DevOps untuk 
                lulusan SMK atau S1 jurusan IT agar mereka bias bekerja dengan layak sesuai jurusannya dengan gaji di 
                atas UMR Jakarta. Saat ini DumbWays memiliki lebih dari 300 lulusan yang bekerja di lebih dari 150 
                perusahaan rekanan. Bekerja di bidang IT dan mampu membuat kode menggunakan JavaScript, Python, atau 
                bahasa pemrograman computer apa pun adalah langkah besar menuju karier yang aman dan stabil.</span>
            </p>
            <button onclick="myFunction()" id="myBtn">Read more</button>
            </p>
          </div>
        </div>
    `
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

   