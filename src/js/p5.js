
// Variabel untuk menyimpan posisi dan ukuran bunga
let flowerLeftX, flowerLeftY, flowerLeftSize;
let flowerRightX, flowerRightY, flowerRightSize;

// Variabel untuk menyimpan posisi dan ukuran burung
let birdX, birdY, birdSize;

// Variabel untuk menyimpan warna bunga dan burung
let flowerColor, birdColor;

function setup() {
  createCanvas(800, 600);
  background(255, 255, 255); // Warna putih

  // Inisialisasi posisi dan ukuran bunga kiri
  flowerLeftX = 200;
  flowerLeftY = height / 2;
  flowerLeftSize = 150;

  // Inisialisasi posisi dan ukuran bunga kanan
  flowerRightX = width - 200;
  flowerRightY = height / 2;
  flowerRightSize = 150;

  // Inisialisasi posisi dan ukuran burung
  birdX = width / 2;
  birdY = height / 2 - 150;
  birdSize = 50;

  // Inisialisasi warna bunga dan burung
  flowerColor = color(255, 192, 203); // Warna merah muda
  birdColor = color(255, 255, 0); // Warna kuning
}

function draw() {
  background(255, 255, 255); // Warna putih

  // Menggambar bunga kiri
  fill(flowerColor);
  ellipse(flowerLeftX, flowerLeftY, flowerLeftSize, flowerLeftSize);

  // Menggambar daun kiri
  fill(0, 128, 0); // Warna hijau
  ellipse(flowerLeftX - 50, flowerLeftY - 50, 50, 50);
  ellipse(flowerLeftX + 50, flowerLeftY - 50, 50, 50);

  // Menggambar tangkai bunga kiri
  fill(128, 0, 0); // Warna coklat
  rect(flowerLeftX - 5, flowerLeftY + 75, 10, 100);

  // Menggambar bunga kanan
  fill(flowerColor);
  ellipse(flowerRightX, flowerRightY, flowerRightSize, flowerRightSize);

  // Menggambar daun kanan
  fill(0, 128, 0); // Warna hijau
  ellipse(flowerRightX - 50, flowerRightY - 50, 50, 50);
  ellipse(flowerRightX + 50, flowerRightY - 50, 50, 50);

  // Menggambar tangkai bunga kanan
  fill(128, 0, 0); // Warna coklat
  rect(flowerRightX - 5, flowerRightY + 75, 10, 100);

  // Menggambar burung
  fill(birdColor);
  ellipse(birdX, birdY, birdSize, birdSize);

  // Animasi burung
  birdX += 2;
  birdY += 1;
  if (birdX > width) {
    birdX = -birdSize;
  }
  if (birdY > height) {
    birdY = -birdSize;
  }
}
