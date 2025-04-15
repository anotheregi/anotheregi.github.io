export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Ali Candra',
            inisial: 'A',
            child: 'Putra',
            father: 'Bapak',
            mother: 'Ibu',
            image: './src/assets/images/ali.jpg'
        },
        P: {
            id: 2,
            name: 'Nisa Nurfadillah',
            inisial: 'N',
            child: 'Putri',
            father: 'Bapak',
            mother: 'Ibu',
            image: './src/assets/images/nisa.jpg'
        },

        couple: './src/assets/images/3.jpg'
    },

    time: {
        marriage: {
            year: '2030',
            month: 'April',
            date: '13',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2030',
            month: 'April',
            date: '13',
            day: 'Minggu Malam Senin',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Tanjung Kidul RT 020/ RW 007, Desa. Tanjung Rasa Kidul, Kec. Patokbeusi, Kab. Subang, Jawa Barat - 41263'
    },

    link: {
        calendar: 'https://calendar.app.google/2NXhgKbzjGknC9CS7',
        map: 'https://maps.app.goo.gl/JQ8oUD4Y3wPXTqVG7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/5.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/couple.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Ali Candra',
            icon: './src/assets/images/dana.png',
            rekening: '083815472788'
        },
    ],

    audio: './src/assets/audio/nyoman.mp3',

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
