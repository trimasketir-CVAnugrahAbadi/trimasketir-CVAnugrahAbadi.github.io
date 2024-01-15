const productData = [
  {"name": "Baud Reng 10 x 16", "image": "Baut reng.png", "price": 130},
  {"name": "Baud BajaRingan 12 x 20", "image": "Baut baja ringan.png", "price": 180},
  // {"name": "Roping 12 x 55", "image": "placeholder.jpg", "price": 400},
  // {"name": "Roping 12 x 65", "image": "placeholder.jpg", "price": 460},
  {"name": "Baja Ringan C,095 mm", "image": "Baja Ringan.png", "price": 130000},
  {"name": "BajaRingan C 0,75 mm", "image": "Baja Ringan.png", "price": 87500},
  {"name": "BajaRingan C 0,70 mm", "image": "Baja Ringan.png", "price": 84000},
  {"name": "BajaRingan C0,65 mm", "image": "Baja Ringan.png", "price": 82000},
  {"name": "Besi 6 mm TOL", "image": "Besi 6 mm.png", "price": 22500},
  {"name": "Besi 6 mm FULL", "image": "Besi 6 mm.png", "price": 30000},
  {"name": "Besi 8 mm KING", "image": "Besi 8 mm.png", "price": 44000},
  {"name": "Besi 8 mm FULL IBD/WBL", "image": "Besi 8 mm.png", "price": 48000},
  {"name": "Besi 8 mm FULL CBSI", "image": "Besi 8 mm.png", "price": 45000},
  {"name": "Besi 10 mm", "image": "Besi 10 mm.png", "price": 68000},
  {"name": "Besi 10 mm FULL CBSI", "image": "Besi 10 mm.png", "price": 72500},
  {"name": "Besi 12 mm FULL CBSI", "image": "Besi 10 mm.png", "price": 102000},
  {"name": "Besi 13 mm KING", "image": "Besi 10 mm.png", "price": 112500},
  {"name": "Besi 13 mm MSI", "image": "Besi 10 mm.png", "price": 92500},
  {"name": "Besi 13 mm FULL CBSI", "image": "Besi 10 mm.png", "price": 125000},
  {"name": "Besi 16 mm KING", "image": "Besi 10 mm.png", "price": 148200},
  {"name": "Besi 16 mm FULL IBD", "image": "Besi 10 mm.png", "price": 176700},
  {"name": "Besi 16 mm FULL CBSI POLOS", "image": "Besi 10 mm.png", "price": 169100},
  {"name": "Besi 19 mm FULL CBSI", "image": "Besi 10 mm.png", "price": 241200},
  {"name": "Besi 19 mm FULL STD", "image": "Besi 10 mm.png", "price": 251920},
  {"name": "Siku 3 x 3 ", "image": "siku.png", "price": 95000},
  {"name": "Siku 4 x 4", "image": "siku.png", "price": 117500},
  {"name": "Siku 4 x 4 TEBAL", "image": "siku.png", "price": 150000},
  {"name": "Siku 5 x 5", "image": "siku.png", "price": 250000},
  {"name": "Siku 6 x 6", "image": "siku.png", "price": 420000},
  {"name": "UNP 5 cm", "image": "Besi UNP.png", "price": 275000},
  // {"name": "UNP 7 cm", "image": "Besi UNP.png", "price": 0},
  {"name": "UNP 10 cm", "image": "Besi UNP.png", "price": 550000},
  {"name": "UNP 15 cm", "image": "Besi UNP.png", "price": 1350000},
  {"name": "WireMesh M 5C", "image": "Wiremash.png", "price": 325000},
  {"name": "WireMesh M 6C", "image": "Wiremash.png", "price": 375000},
  {"name": "WireMesh M 7 RM", "image": "Wiremash.png", "price": 575000},
  {"name": "WireMesh M 7 B", "image": "Wiremash.png", "price": 600000},
  {"name": "WireMesh M 7 C", "image": "Wiremash.png", "price": 565000},
  {"name": "WireMesh M 8 C", "image": "Wiremash.png", "price": 750000},
  {"name": "WireMesh M 8 B", "image": "Wiremash.png", "price": 795000},
  {"name": "WireMesh M9", "image": "Wiremash.png", "price": 1080000},
  {"name": "WireMesh M 10 B", "image": "Wiremash.png", "price": 1255000},
  {"name": "Hollow Plafon 2 x 4 x 0,30", "image": "Besi Hollow.png", "price": 18000},
  {"name": "Hollow Plafon 2 x 4 x 0,55 MEROBI", "image": "Besi Hollow.png", "price": 45000},
  {"name": "Hollow Plafon 4 x 4 x 0,30", "image": "Besi Hollow.png", "price": 23000},
  {"name": "Hollow Plafon 4 x 4 x 0,40", "image": "Besi Hollow.png", "price": 47500},
  {"name": "Hollow Plafon 4 x 4 x 0,55 MEROBI", "image": "Besi Hollow.png", "price": 60000},
  {"name": "Hollow Galv 1,5 x 3,5 x 0,50 mm", "image": "Besi Hollow.png", "price": 45600},
  {"name": "Hollow Galv 2 x 4 x 0,7 mm", "image": "Besi Hollow.png", "price": 72500},
  {"name": "Hollow Galv 3,5 x 3,5 x 1 mm", "image": "Besi Hollow.png", "price": 120550},
  {"name": "Hollow Galv 3,5 x 3,5 x 1,2 mm", "image": "Besi Hollow.png", "price": 144550},
  {"name": "Hollow Galv 3,6 x 3,6 x 0,50 mm", "image": "Besi Hollow.png", "price": 66500},
  {"name": "Hollow Galv 4 x 4 x 0,7 mm", "image": "Besi Hollow.png", "price": 100000},
  {"name": "Hollow Galv 4 x 4 x 0,8 mm", "image": "Besi Hollow.png", "price": 117500},
  {"name": "Hollow Galv 4 x 4 x 0,9 mm", "image": "Besi Hollow.png", "price": 112500},
  {"name": "Hollow Galv 3 x 6 x 0,90 mm", "image": "Besi Hollow.png", "price": 140000},
  {"name": "Hollow Galv 3 x 6 x 1,00 mm", "image": "Besi Hollow.png", "price": 172500},
  {"name": "Hollow Galv 4 x 6 x 0,70", "image": "Besi Hollow.png", "price": 130500},
  {"name": "Hollow Galv 4 x 6 x 1,10 mm", "image": "Besi Hollow.png", "price": 163100},
  {"name": "Hollow Galv 4 x 6 x 1,2 mm", "image": "Besi Hollow.png", "price": 192500},
  {"name": "Hollow Galv 4 x 6 x 1,3 mm", "image": "Besi Hollow.png", "price": 195000},
  {"name": "Hollow Galv 4 x 8 x 1,4 mm", "image": "Besi Hollow.png", "price": 245000},
  {"name": "Hollow Galv 5 x 10 x 1,2 mm", "image": "Besi Hollow.png", "price": 316600},
  {"name": "Hollow Galv 4 x 6 x 1,1 mm", "image": "Besi Hollow.png", "price": 163100},
  {"name": "Hollow Galv 4 x 6 x 1,2 mm", "image": "Besi Hollow.png", "price": 192500},
  {"name": "Hollow Besi 4 x 4 x 2 mm", "image": "Besi Hollow.png", "price": 240000},
  {"name": "Hollow Besi 4 x 6 x 2 mm", "image": "Besi Hollow.png", "price": 295000},
  {"name": "Hollow Besi 4 x 6 x 2,8 mm", "image": "Besi Hollow.png", "price": 455000},
  {"name": "Bondek CBM 0,55 mm", "image": "Bondek.png", "price": 110000},
  {"name": "Bondek CBM 0,65 mnm", "image": "Bondek.png", "price": 117500},
  {"name": "Bondek CBM 0,70 mm", "image": "Bondek.png", "price": 127000},
  {"name": "Bondek CBM 0,75 mm", "image": "Bondek.png", "price": 132500},
  {"name": "Bondek MAJA 0,75 mm", "image": "Bondek.png", "price": 147500},
  // {"name": "CNP 100 x 50 x 2 mm", "image": "placeholder.jpg", "price": 345000},
  // {"name": "CNP 125 x 50 x 1,2 mm", "image": "placeholder.jpg", "price": 248500},
  // {"name": "CNP 125 x 50 x 1,4 mm", "image": "placeholder.jpg", "price": 270000},
  // {"name": "CNP 125 x 50 x 1,8 mm", "image": "placeholder.jpg", "price": 305600},
  // {"name": "CNP 125 x 50 x 2,0 mm", "image": "placeholder.jpg", "price": 331800},
  // {"name": "CNP 125 x 50 x 2,1 mm", "image": "placeholder.jpg", "price": 350000},
  // {"name": "CNP 125 x 50 x 3 mm", "image": "placeholder.jpg", "price": 485000},
  {"name": "Atap FiberGlass LT7 890 x 2 mm", "image": "atap Fiper Glass.png", "price": 170000},
  // {"name": "Atap CB 1000 x 0,25", "image": "placeholder.jpg", "price": 45000},
  {"name": "Atap TR 1000 x 0,30", "image": "Atap TR.png", "price": 55000},
  // {"name": "Atap CB 1000 x 0,30", "image": "placeholder.jpg", "price": 58500},
  // {"name": "Atap CB 1000 x 0,40", "image": "placeholder.jpg", "price": 82000},
  // {"name": "Atap CB 1000 x 0,45", "image": "placeholder.jpg", "price": 97500},
  {"name": "Atap FiberGlass 1000 x 2 mm", "image": "atap Fiper Glass.png", "price": 170000},
  {"name": "FiberClear TrimDeck 76 cm Dr.ZONE", "image": "FiberClear TrimDeck.png", "price": 90000},
  {"name": "Atap KS 1060 x 0,35", "image": "Atap KS.png", "price": 72500},
  {"name": "Atap KS 1060 x 0,40", "image": "Atap KS.png", "price": 79500},
  {"name": "Atap 920 x 0,50 KULIT JERUK", "image": "Atap Kulit Jeruk.png", "price": 115000},
  {"name": "Atap 925 x 0,35", "image": "Atap Kulit Jeruk.png", "price": 80000},
  {"name": "Atap 935 x 0,40", "image": "Atap Kulit Jeruk.png", "price": 97500},
  {"name": "Atap 920 x 0,30", "image": "Atap Kulit Jeruk.png", "price": 62500},
  {"name": "PlatSheet 60 x 0,30", "image": "Platsheet.png", "price": 36000},
  {"name": "PlatSheet 60 x 0,35", "image": "Platsheet.png", "price": 45000},
  {"name": "PlatSheet 60 x 0,40", "image": "Platsheet.png", "price": 50000},
  {"name": "PlatSheet 60 x 0,50 KULIT JERUK", "image": "Platsheet.png", "price": 60000},
  {"name": "PlatSheet 90 x 0,30", "image": "Platsheet.png", "price": 58000},
  {"name": "PlatSheet 90 x 0,35", "image": "Platsheet.png", "price": 70000},
  {"name": "PlatSheet 90 x 0,40", "image": "Platsheet.png", "price": 77500},
  {"name": "PlatSheet 120 x 0,30", "image": "Platsheet.png", "price": 63000},
  {"name": "PlatSheet 120 x 0,35", "image": "Platsheet.png", "price": 75000},
  {"name": "PlatSheet 120 x 0,40", "image": "Platsheet.png", "price": 88000},
  {"name": "GlassWool 1625", "image": "Glasswool.png", "price": 425000},
  {"name": "Bubble Foil", "image": "Buble Foil.png", "price": 275000},
  {"name": "Bubble Foil 8 mm SHINE ", "image": "Buble Foil.png", "price": 905000},
  {"name": "Semen Perekat Hebel", "image": "semen hebel-After Edit-01.png", "price": 62500},
  {"name": "Hebel", "image": "Hebel.png", "price": 615000},
  // {"name": "SolarTuf", "image": "placeholder.jpg", "price": 135000},
  {"name": "WoodPlank Elephant 20 cm", "image": "woodplank-After Edit-01.png", "price": 55000},
  {"name": "WoodPlank Warna SHERA", "image": "woodplank-After Edit-01.png", "price": 92000},
  {"name": "GRC 4 mm Merk GRC", "image": "GRC.png", "price": 68000},
  {"name": "GRC 3,5 mm APLUS", "image": "GRC.png", "price": 50000},
  {"name": "GRC 3,5 mm NUSABOARD", "image": "GRC.png", "price": 48000},
  {"name": "ASBES 3 m", "image": "Asbes.png", "price": 102000},
  {"name": "Reng", "image": "Reng.png", "price": 37500},
  // {"name": "CORNICE ", "image": "placeholder.jpg", "price": 62000},
  {"name": "ALDERON RS ROMA 78,4x1,2", "image": "Alderon RS.png", "price": 62000},
  {"name": "ALDERON RS GRECA 69x1,2", "image": "Alderon RS.png", "price": 58000},
  {"name": "ALDERON RS 100x1,2 GRECA", "image": "Alderon RS.png", "price": 74500},
  {"name": "ALDERON RS 100x1,2 TRIMDECK", "image": "Alderon RS.png", "price": 74500},
  {"name": "UNIROOF 790x10 WHITE DOF", "image": "Alderon RS.png", "price": 155000},
  {"name": "ALDERON 830x10 WHITE DOF", "image": "Alderon RS.png", "price": 175000},
  {"name": "ALDERON 830x10 TRANSLUCENT", "image": "Alderon RS.png", "price": 220000},
  {"name": "Dr Shield 1065x10 WHITE DOF", "image": "Dr Shield.png", "price": 215000},
  {"name": "Dr Shield 1065x10 TRANSLUCENT", "image": "Dr Shield.png", "price": 270000},
  {"name": "Dr Shield 90x1,2mm GRECA WHITE", "image": "Dr Shield.png", "price": 92500},
  {"name": "Dr Shield 75,6 x 1,15mm TrimDeck White", "image": "Dr Shield.png", "price": 62000},
  {"name": "NOK Dr.Shield", "image": "NOK.png", "price": 190000},
  {"name": "Gypsum JAYA BOARD", "image": "Gypsum.png", "price": 64000},
  {"name": "Gypsum Knauf", "image": "Gypsum.png", "price": 49500},
  {"name": "Gypsum YOSHINO", "image": "Gypsum.png", "price": 51000},
  {"name": "Al.foil Karung SS", "image": "Al.foil Karung.png", "price": 285000},
  {"name": "Al.Foil Kertas SS", "image": "Al.foil Karung.png", "price": 450000},
  {"name": "RoofMesh", "image": "roofmesh.png", "price": 440000},
  {"name": "BRC 175 cm x 240 cm x 7 mm", "image": "BRC.png", "price": 510000},
  // {"name": "Karet Talang L 55 cm", "image": "placeholder.jpg", "price": 7500},
  {"name": "Plat Esser 1,8 mm", "image": "Plat Esser.png", "price": 730800},
  {"name": "Plat Esser 3,0 mm", "image": "Plat Esser.png", "price": 1083250},
  {"name": "Plat Esser 4,0 mm", "image": "Plat Esser.png", "price": 2720000},
  {"name": "Plat Esser 4,5 mm", "image": "Plat Esser.png", "price": 1745000},
  {"name": "Plat Esser 8,0 mm", "image": "Plat Esser.png", "price": 4060000},
  {"name": "Plat BORDES 2,3 mm", "image": "Plat Bordes.png", "price": 1013000},
  {"name": "NOK C pasir", "image": "NOK C Pasir.ong.png", "price": 22000},
  {"name": "NOK C Pasir PRIMAROOF", "image": "NOK C Pasir Primaroof.png", "price": 35000},
  // {"name": "GEMET Pasir(Low-Quality)", "image": "placeholder.jpg", "price": 35000},
];
