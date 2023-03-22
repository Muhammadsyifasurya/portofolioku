/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import AboutImg from '../public/assets/about.jpg';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-2-[1240px m-auto md:grid grid-cols-3 gap-8 mx-[138px]'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5] mt-[40px]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'></p>
            <p className='py-2 text-gray-600'>
              Saya adalah lulusan baru Universitas Teknologi Yogyakarta dari jurusan Teknik Komputer. Saya memiliki pengalaman magang selama 4 bulan sebagai Android Developer di PT Neura Integrasi Solusi dan telah bekerja dengan bisnis kecil untuk mengerjakan beberapa project pembuatan aplikasi android. Keahlian saya meliputi Java, XML, Internet of Things, Arduino, HTML, CSS, Javascript, Next.JS, dan Firebase. 
              Dalam pekerjaan saya sebelumnya, saya membantu dalam proses pengembangan tampilan pada aplikasi NeurabotSSI dan melakukan cleanup untuk melakukan penyesuaian pada penulisan syntax agar dapat dijangkau oleh developer dari berbagai negara. Adapun project yang pernah saya buat yaitu aplikasi dashboard yang digunakan untuk melakukan pemantauan pada project Internet of Things (IoT).
              Saya memiliki keinginan yang kuat untuk berkontribusi di bidang Android Developer, dan Front-End Web Developer. </p>
            <p className='py-2 text-gray-600'>
              Terpesona dengan betapa rumitnya pemrograman, saya dengan cepat tertarik untuk mempelajari lebih lanjut.
              Semangat saya untuk menjadi seorang programmer berasal dari cerita teman, keluarga, pelanggan, dan kolega saya. Tujuan saya adalah mengubah kisah-kisah ini menjadi inspiratif pemrograman yang berdampak positif bagi lingkungan di sekitar saya.
            </p> 
            <Link href='/#projects'>
              <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out some of my latest projects.
              </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:sclae-105 ease-in duration-300'>
          <Image 
            className='rounded-xl'
            src={AboutImg}
            alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default About
