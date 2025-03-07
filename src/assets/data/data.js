export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Ali Candra',
            child: 'Putra',
            father: 'Bapak',
            mother: 'Ibu',
            image: './src/assets/images/ali.jpg'
        },
        P: {
            id: 2,
            name: 'Nisa Nurfadillah',
            child: 'Putri',
            father: 'Bapak',
            mother: 'Ibu',
            image: './src/assets/images/nisa.jpg'
        },

        couple: './src/assets/images/ccouple.jpg'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'April',
            date: '14',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'April',
            date: '13 - 14',
            day: 'Minggu Malam Senin',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Tanjung Belitan, RT 020/ RW 007, Desa. Tanjung Rasa Kidul, Kec. Patokbeusi, Kab. Subang, Jawa Barat (41263)'
    },

    link: {
        calendar: 'https://calendar.app.google/2NXhgKbzjGknC9CS7',
        map: 'https://maps.app.goo.gl/JQ8oUD4Y3wPXTqVG7',
    },

    galeri: [
        {
            id: 1,
            image: 'https://cdn.garenanow.com/gstaticid/Mainsite/200622.jpg'
        },
        {
            id: 2,
            image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/230/2024/09/22/RAJA-AJWA-677970050.jpg'
        },
        {
            id: 3,
            image: 'https://i.ytimg.com/vi/hd3fPBm5lSQ/hq720.jpg'
        },
        {
            id: 4,
            image: 'https://cdn.grid.id/crop/0x0:0x0/945x630/photo/grid/original/7197_w-stories.jpg'
        },
        {
            id: 5,
            image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/191/2024/09/23/Potret-Streamer-iShowSpeed-saat-berkunjung-ke-Bali-Xcom-SpeedUpdates1-3569408814.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'DANA',
            icon: './src/assets/images/dana.png',
            rekening: '0812345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxkYTK-3_kyfPBXrLuSt0LMdHatLf7uNPkkuL0zJWYPIpOd2WCKXOGWgAsRUGNhCGuY/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
