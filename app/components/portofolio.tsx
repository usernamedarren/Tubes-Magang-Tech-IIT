'use client';
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {body, header} from "@/app/styles/fonts"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

type SliderProps = {

    slides: string[];
};

const Slider = ({ slides }: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="overflow-hidden w-full h-64">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    width: `${slides.length * 100}%`,
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Portofolio = () => {
    const slides = [
        "/ipad.png",
        "/iphone.png",
        "/macbook.png",
        "/image4.png",
        "/image5.png",
        "/image6.png",
        "/image7.png",
        "/image8.png",
    ];

    return (
        <main className="overflow-y-scroll bg-gradient-to-br from-amber-200 to-slate-200">
            <h1 className={`${body.className} text-center font-extrabold text-4xl md:text-6xl mt-[20px] drop-shadow-xl`}>
                Portofolio
            </h1>
            <h3 className={`${body.className} text-center font-bold text-xl`}>
                Inkubator IT
            </h3>
            <Card className="mx-10 md:mx-[300px] mt-10 bg-gradient-to-r from-slate-300 to-slate-500">
                <CardHeader>
                    <CardTitle className="text-center text-xl">PROJECTS WE HAVE BUILT</CardTitle>
                </CardHeader>
                <CardContent>
                    <Slider slides={slides} />
                </CardContent>
            </Card>
            <h1 className={`${body.className} justify-center mt-3 flex font-extrabold text-2xl md:text-4xl`}>
                WEBSITE
            </h1>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                    Website Showcase INDDES ITB
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Showcase INDDES ITB</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website showcase karya mahasiswa Desain Produk yang dikelola oleh INDDES ITB. Memiliki fitur portal media (Spotify, Medium, dan Instagram), serta fitur About Us. Website menggunakan backend Netlify dan Gridsome (static site) dengan CMS Netlify. Desain mockup Figma sudah final.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat Produk dari scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2021
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website versi Desktop dan Mobile
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>Netlify, Gridsome
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                    Website Acara Minefest
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Acara Minefest</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website yang dibangun untuk keperluan acara Minefest 2021. Pengguna mampu melakukan virtual tour lahan pertambangan di dalam website, livestream tayangan Zoom, dan media informasi acara Minefest                                </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat Produk dari scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2021
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                    Website Perpustakaan
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Perpustakaan</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                        Website Perpusatakaan
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                Website Silver Parade ITS 2021
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Silver Parade ITS 2021</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website untuk mendaftar ke beberapa event (perlombaan dan webinar/talkshow) dari Silver Parade ITS 2021 (Silver Great Games, Silver Paper Competition, Silver Talks), menyediakan fitur pengerjaan soal/try out untuk pendaftar Silver Great Games, dan menghubungkan website ke Virtual Exhibition (Silver Exhibition)                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat Produk dari scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2021
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>Laravel
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                    Pengembangan Website Clapeyron UGM
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent  className="bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Pengembangan Website Clapeyron UGM</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website untuk media informasi kegiatan dan pemberitaan Clapeyron UGM. Melakukan beberapa pengembangan pada tampilan website, menambahkan halaman baru untuk majalah online dan agenda, serta memperbaiki fitur rekomendasi artikel dan performansi website.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Memperbaiki dan mengubah tampilan website, menambahkan halaman baru untuk majalah dan agenda
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2021
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website versi Desktop dan Mobile
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>Wordpress
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                Website Cryptoiz
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Cryptoiz</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website ini merupakan website perusahaan Cryptoiz Indonesia yang menyediakan informasi mengenai profil perusahaan dan berita serta edukasi tentang cryptocurrency.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>IIT berperan dalam mengembangkan website dari awal. Manajer Proyek kami telah melayani kebutuhan client dari tahap konsultasi hingga proyek selesai dikerjakan. Programmer kami menangani bagian front-end dan back-end dari website Cryptoiz.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2021
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Deskripsi Produk: </p>Produk berupa website untuk perusahaan Cryptoiz sebagai kebutuhan usaha. Website ini menampilkan profil perusahaan, berita dan artikel edukasi terkait cryptocurrency, kegiatan perusahaan, NFT list, info iklan, info merchandise, dan link menuju pendaftaran anggota VVIP. Untuk mengelola berita, artikel edukasi, kegiatan perusahaan, dan NFT list, digunakan Content Management System. Produk ini digunakan oleh perusahaan untuk menyediakan informasi dan visitor website tersebut untuk mendapatkan informasi.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>PHP
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                Website Try Out Diseminasi Khusus Aku Masuk ITB
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Showcase INDDES ITB</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Produk berupa website Try-Out SBMPTN seperti Olympia, di mana peserta dapat mengerjakan soal saat dibuka oleh admin. Akan ada timer untuk pengerjaan soal yang waktunya tergantung dari kategori yang sedang dikerjakan. Pada pengerjaan soal, akan ada 2 sesi, yaitu yang pertama ada sesi pengerjaan TKPA dan yang kedua adalah sesi pengerjaan TKD.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat Produk dari scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2021
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>Backend Language: php
                                        <p>Backend Framework: Lumen</p>
                                        <p>Frontend Language: javascript</p>
                                        <p>Frontend Framework: vue</p>
                                        <p>Database: MySQL</p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                Website Pemesanan Tiket PSM ITB
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Pemesanan Tiket PSM ITB</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Produk dibuat untuk menjadi sistem pendukung event yang diselenggarakan PSM ITB. Pengguna produk adalah masyarakat umum. Produk digunakan untuk pemesanan tiket atas event yang diselenggarakan PSM ITB.                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat produk from scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2018
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>
                                        <p>WordPress</p>
                                        <p>Event Manager for WordPress</p>
                                        <p>Bootstrap Framework</p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                Website ICEE ITB
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website ICEE ITB</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website ICEE ITB merupakan platform yang dirancang untuk mahasiswa yang ingin melakukan pendaftaran berbagai acara dan lomba ICEE ITB secara online.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Peran IIT: </p>IIT berperan dalam memodifikasi dan mengembangkan fitur-fitur baru pada website ICEE ITB. Manajer Proyek kami telah melayani kebutuhan client dari tahap konsultasi hingga produk selesai dikerjakan. Programmer kami telah mengembangkan website ICEE ITB dari bagian front-end, back-end hingga deployment.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Deskripsi Produk: </p>Produk berupa website untuk pendaftaran acara ICEE ITB yang dilengkapi dengan fitur login, register lomba, halaman admin, timer countdown, serta bersifat dinamis pada laman seminar, sponsor, dan expo.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT </p>Memodifikasi dan menambah fitur website yang sudah ada sebelumnya.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2021
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>Backend Language: php
                                        <p>Bahasa: PHP, Javascript</p>
                                        <p>Framework: Laravel</p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                Website Tes Deteksi Kewaspadaan
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Tes Deteksi Kewaspadaan</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website untuk mengimplementasikan program tes deteksi kewaspadaan/kelelahan                                    
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat produk from scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2022
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website versi Desktop
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                Website Ganesha Business Festival 2022
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Ganesha Business Festival 2022</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website untuk membantu penyelenggaraan acara Ganesha Business Festival 2022 yang terdiri atas halaman utama, dashboard peserta lomba, serta dilengkapi dengan fitur-fitur untuk mendukung keperluan acara seperti fitur registrasi lomba, voting, pembayaran, dan dokumentasi.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT </p>Mengimplementasikan desain yang sudah ada
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2022
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>Backend Language: php
                                        <p>Front End: Next js, React js</p>
                                        <p>Back End: Next js</p>
                                        <p>Database: SQL</p>
                                        <p>Hosting: Vercel(hosting), Azure (database)</p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                Website IklanLive                
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Tes Deteksi Kewaspadaan</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website untuk menyatukan pihak livestreamer dengan pihak advertiser
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Melanjutkan proyek sebelumnya dan menambahkan fitur obs plugin
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2022
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website + OBS Plugin
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>
                                        <p>Frontend: NEXTJS, Javascript, MUI</p>
                                        <p>Backend: Express, Amazon S3, MariaDb/MySQL, Javascript</p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                Website Miniplant Monitoring System
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Miniplant Monitoring System</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website untuk memonitor kondisi tanaman yang sedang ditanam dengan menampilkan data-data terkait kondisi tanaman tersebut 
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT </p>Membuat produk from scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2023
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                Website Monitoring In&Out Car               
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Website Monitoring In&Out Car</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Website untuk memonitor kendaraan dengan tujuan dapat memprediksi kejadian yang akan terjadi di jalan
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat produk from scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2023
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Website
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="text-xl font-extrabold flex justify-center mt-5">
                DESKTOP
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/macbook.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                Aplikasi Desktop Pumping Rod
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Aplikasi Desktop Desain Pumping Unit Sumur Minyak Pertamina</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Aplikasi desktop mengenai pumping unit sumur minyak yang dapat menerima input dari pengguna dan menghasilkan output berupa data hasil pengolahan program yang ditampilkan. Program dapat melakukan export data yang sudah ditampilkan ke dalam bentuk excel. 
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT </p>Melakukan pengembangan produk
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2020
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Aplikasi Desktop
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>Python, CSS.
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                Game Cindua Mato
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/macbook.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Game Cindua Mato
                                </SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Pembuatan Game Action Platformer 2D bernama Cindua Mato
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat produk from scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2019
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Desktop
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>Unity
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="text-xl font-extrabold flex justify-center mt-5">
                MOBILE
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/iphone.png"
                        width={200}
                        height={200}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                Aplikasi Android Arcade Game
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-opacity-70 bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Aplikasi Android Arcade Game</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Aplikasi android yang bertujuan untuk membentuk suatu game arcade perusahaan
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT </p>
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2020
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Mobile(Android)
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                Rental Mobil Karyawan
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/iphone.png"
                        width={200}
                        height={200}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Pengembangan Aplikasi Tomas
                                </SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Pengembangan aplikasi Tomas pada fitur rental mobil karyawan untuk mobility platform, yaitu penambahan fitur registrasi mobil, management mobil, reschedule booking.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat ulang produk dan menambahkan fitur
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2020
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Mobile (Android)
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>Kotlin
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/iphone.png"
                        width={200}
                        height={200}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                Divusi Car Travel
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="overflow-y-scroll bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Divusi Car Travel</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Divusi Car Travel merupakan aplikasi mobile yang dibuat untuk mempermudah pemesanan tiket pool-to-pool car travel bagi usaha travel.       
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Peran IIT: </p>IIT berperan dalam membuat aplikasi ini secara keseluruhan. Manajer Proyek kami telah melayani kebutuhan client dari tahap konsultasi hingga aplikasi selesai dikerjakan. Programmer kami telah mengimplementasikan fitur-fitur dalam aplikasi seperti fitur registrasi, login, pemesanan tiket, hingga pembayaran. 
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Deskripsi Produk: </p>Produk berupa aplikasi untuk pemesanan tiket car travel yang dilengkapi dengan fitur registrasi, login, daftar e-ticket, profil, promosi, pemesanan, dan pembayaran.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat produk dari awal.
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2017
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Apikasi Mobile (Android & IOS)
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>React Native
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="font-extrabold text-xl md:text-4xl flex justify-center">
                ETC
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <h3 className="font-bold text-xl text-center md:text-left">
                    Bot E-Vote
                </h3>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Proyek e-Vote HMT ITB</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    LINE Bot untuk melakukan proses pemilu himpunan yang beroperasi dalam waktu tertentu. Bot dapat menampilkan visi dan misi kandidat dan menjadi media untuk voting dan sistem dapat melakukan kalkulasi voting untuk menampilkan pemenang dari hasil voting
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Melakukan improvement produk
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2021
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Bot
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <h3 className="font-bold text-xl text-center md:text-center">
                    Simulasi Vehicle Dynamics dengan MATLAB
                </h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="/ipad.png"
                        width={400}
                        height={400}
                        alt="gambar portofolio 1"
                        className="mx-auto rounded-xl"
                    />
                </div>
                <p> </p>
                <div className="justify-center flex">
                    <Sheet>
                        <SheetTrigger className="bg-[#1B1A80] hover:bg-fuchsia-400 px-2 py-1 rounded-xl text-white">Pelajari Lebih Lanjut</SheetTrigger>
                        <SheetContent className="bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                            <SheetHeader>
                                <SheetTitle className="text-extrabold text-xl">Simulasi Vehicle Dynamics dengan MATLAB</SheetTitle>
                                    <SheetDescription className="text-normal text-md">
                                    Algoritma yang dibuat untuk menghasilkan data simulasi vehicle dynamics menggunakan MatLab
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Layanan IIT: </p>Membuat Produk dari scratch
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tahun Pembuatan: </p>2023
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Tipe: </p>Algoritma
                                    </SheetDescription>
                                    <SheetDescription className="text-normal text-md">
                                        <p className="font-bold">Teknologi: </p>MatLab
                                    </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </main>
    );
};

export default Portofolio;
