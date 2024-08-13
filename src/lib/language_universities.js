const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "Bölüm", uid: "program", sortable: true },
  { name: "Üniversite Adı", uid: "uni", sortable: true },
  { name: "Lisans Türü", uid: "type", sortable: true },
  { name: "Fiyat/Sömestr", uid: "price" },
];

const programs = [
  {
    id: 27,
    program: "İngilizce Hazırlık",
    type: "lisans",
    uni: "SWPS Üniversitesi",
    price: "1600 Euro",
  },
  {
    id: 28,
    program: "İngilizce Hazırlık",
    type: "lisans",
    uni: "Lazarski Üniversitesi",
    price: "1775 Euro",
  },
  {
    id: 30,
    program: "İngilizce hazırlık",
    type: "lisans",
    uni: "Varşova Yaşam Bilimleri Üniversitesi swps",
    price: "1600 Euro",
  },
  {
    id: 31,
    program: "İngilizce hazırlık",
    type: "lisans",
    uni: "Varşova Yaşam Bilimleri Üniversitesi",
    price: "1625 Euro",
  },
  {
    id: 32,
    program: "İngilizce Hazırlık",
    type: "lisans",
    uni: "Varşova Teknoloji Üniversitesi",
    price: "1950 Euro",
  },
];

export { columns, programs };
