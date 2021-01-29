import React, { Component } from 'react';

class home extends Component { 

  constructor(){
    super();
    this.state = {
      listKata : ['percobaan','ketika','dapat','teks','tiruan','dari','industri','cetak','dan','susunan','huruf','telah','menjadi','teks','tiruan','standar','industri','sejak','tahun', 'ketika','printer','yang','tidak','dikenal','gunakan','galley','jenis','dan','acak','untuk','membuat','buku','jenis','spesimen','ini','telah','bertahan','tidak','hanya','lima','abad','tetapi','juga','lompatan','ke','dalam','penyusunan','huruf','elektronik', 'tetap','pada','dasarnya','tidak','berubah', 'Ini','populer','pada', 'dengan','rilis','lembaran' ,'Letraset','yang','berisi','bagian','bagian', 'dan','baru','baru','ini','dengan','perangkat','lunak','penerbitan','desktop','seperti','aldus','pageMaker','termasuk','versi','percobaan','ketika','dapat','teks','tiruan','dari','industri','cetak','dan','susunan','huruf','telah','menjadi','teks','tiruan','standar','industri','sejak','tahun', 'ketika','printer','yang','tidak','dikenal','gunakan','galley','jenis','dan','acak','untuk','membuat','buku','jenis','spesimen','ini','telah','bertahan','tidak','hanya','lima','abad','tetapi','juga','lompatan','ke','dalam','penyusunan','huruf','elektronik', 'tetap','pada','dasarnya','tidak','berubah', 'Ini','populer','pada', 'dengan','rilis','lembaran' ,'Letraset','yang','berisi','bagian','bagian', 'dan','baru','baru','ini','dengan','perangkat','lunak','penerbitan','desktop','seperti','aldus','pageMaker','termasuk','versi','percobaan','ketika','dapat','teks','tiruan','dari','industri','cetak','dan','susunan','huruf','telah','menjadi','teks','tiruan','standar','industri','sejak','tahun', 'ketika','printer','yang','tidak','dikenal','gunakan','galley','jenis','dan','acak','untuk','membuat','buku','jenis','spesimen','ini','telah','bertahan','tidak','hanya','lima','abad','tetapi','juga','lompatan','ke','dalam','penyusunan','huruf','elektronik', 'tetap','pada','dasarnya','tidak','berubah', 'Ini','populer','pada', 'dengan','rilis','lembaran' ,'Letraset','yang','berisi','bagian','bagian', 'dan','baru','baru','ini','dengan','perangkat','lunak','penerbitan','desktop','seperti','aldus','pageMaker','termasuk','versi','percobaan','ketika','dapat','teks','tiruan','dari','industri','cetak','dan','susunan','huruf','telah','menjadi','teks','tiruan','standar','industri','sejak','tahun', 'ketika','printer','yang','tidak','dikenal','gunakan','galley','jenis','dan','acak','untuk','membuat','buku','jenis','spesimen','ini','telah','bertahan','tidak','hanya','lima','abad','tetapi','juga','lompatan','ke','dalam','penyusunan','huruf','elektronik', 'tetap','pada','dasarnya','tidak','berubah', 'Ini','populer','pada', 'dengan','rilis','lembaran' ,'Letraset','yang','berisi','bagian','bagian', 'dan','baru','baru','ini','dengan','perangkat','lunak','penerbitan','desktop','seperti','aldus','pageMaker','termasuk','versi'],
      quest : '',
      posKata : 0 ,
      skor:null,
      time:30,
    };
  };

    // start app load css and any 
    componentDidMount() {
      document.getElementById("css").setAttribute("href","/css/index.css");
    }

  // mengihitung posisi index list yang akan di lanjutkan ; contoh poss saat ini { percobaan } maka akan dipindah ke { ketika }
  hitung = () => {
    var hitung = this.state.time - 1 ;
    this.setState({time:hitung});
    if ( hitung < 0 ) {
      document.getElementById("input").setAttribute("disabled","");
      var skor = "selamat !! skor kamu : " + this.state.skor;
      this.setState({skor:skor});
      clearInterval(this.update);
    }else {
      document.getElementById("showTimer").innerHTML = "time :" + (this.state.time).toString() + " detik";
    }
  } 

  // function untuk memulai game dari user input
  start = (event) => {
    this.setState({quest:this.state.listKata[this.state.posKata]});
    document.getElementById('input').setAttribute("placeholder"," ");
    document.getElementById('timediv').setAttribute('class','');
    document.getElementById("timediv").innerHTML = "";
    document.getElementById("showTimer").innerHTML = "time :" + (this.state.time).toString() + " detik";
    this.update = setInterval(this.hitung, 1000);
  }

  //function untuk mendapatkan value dari user lalu dikalkulasikan jika request == hasil maka skor akan bertambah
  getresult = (event) => {
    var quest = event.target.value;
    var result = this.state.listKata[this.state.posKata];
    if (quest ===  result ) {
      var katanext = this.state.listKata[this.state.posKata + 1];
      var katakenext = this.state.posKata + 1 ;
      var skorupdate = "skor : " + (this.state.posKata + 1).toString() ;
      // update state jika form true
      this.setState({
        quest:katanext,
        posKata:katakenext,
        skor:skorupdate,
      });

      document.getElementById("input").value = ""; 
      
      };
    }

    // function untuk meminta berapa waktu yang dibutuhkan untuk mengatuk timer waktu
    select = (event) => {
      this.setState({time:event.target.value});
    }

  render() { 
    return ( 
        <div class="window shadow">
          <h3>speed typing game</h3>
          <p id="quest">{this.state.quest}</p>
          <div id="showTimer"></div>
          <p id="point">{this.state.skor}</p>
          <div class="m-5 row" id="timediv">
            <label class="col-sm-2 col-form-label">waktu</label>
            <div class="col-sm" >
              <select onChange={this.select} class="form-select" aria-label="Default" placeholder="select time">
                <option  value="30">30 detik</option>
                <option  value="60">1 menit</option>
                <option  value="90">1.30 menit</option>
                <option  value="120">2 menit</option>
              </select>
            </div> 
          </div> 
          
          <div class="get mt-5" onClick={this.start}>
            <input name="kata" id="input" placeholder="klik ini untuk mulai game" onChange={this.getresult}/>
          </div>
        </div>
   ); 
  } 
} 

export default home ;