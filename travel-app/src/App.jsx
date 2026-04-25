import React from "react";
import "./index.css";

const ATTRACTIONS = [
  {
    id: 1,
    title: "Wat Phra That Doi Suthep",
    category: "Temple & History",
    image: "/images/chiangmai_temple_1777084912261.png",
    link: "https://maps.app.goo.gl/undE78vDXdZhBA1D8",
    description:
      "A majestic golden temple overlooking the city from the mountains.",
  },
  {
    id: 2,
    title: "Baan Kang Wat",
    category: "Art & Culture",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKShZVN0hyGkcNfeEoBMD_77iycCuyQVFMQ&s",
    link: "https://maps.app.goo.gl/Vk6hBMECm3Av2iLn8",
    ytLink: "https://www.youtube.com/watch?v=fvHnsmGAuJw",
    description:
      "A charming artist village with cafes, crafts, and a slow-life vibe.",
  },
  {
    id: 3,
    title: "Wat Phra Singh",
    category: "Temple & History",
    image:
      "https://i0.wp.com/journey.tw/wp-content/uploads/2025/08/20250801230618_0_36187c.jpg?resize=1100%2C732&quality=99&ssl=1",
    link: "https://maps.app.goo.gl/Qq7t4du9Q8zX7t9T7",
    description: "One of Chiang Mai’s most revered temples in the Old City.",
  },
  {
    id: 4,
    title: "Tha Phae Gate",
    category: "Landmark",
    image:
      "https://baofamily.tw/wp-content/uploads/2023/10/%E6%B8%85%E9%82%81%E5%A1%94%E4%BD%A9%E9%96%80%E6%B3%B0%E6%9C%8D%E9%AB%94%E9%A9%97-23.jpg",
    link: "https://maps.app.goo.gl/H6Qxm9t3BHvsGz7K9",
    description: "The iconic ancient brick wall and gate of the Old City.",
  },
  {
    id: 5,
    title: "Jing Jai Market",
    category: "Shopping & Market",
    image:
      "https://www.travelerluxe.com/public/article/2017/atl_20230621150356_633.jpg",
    link: "https://maps.app.goo.gl/3XPoSfJF4gCZ5VE6A",
    ytLink: "https://www.youtube.com/watch?v=vQ7t6tsyfJg",
    description:
      "A popular weekend market known for organic food and handmade crafts.",
  },
  {
    id: 6,
    title: "Wua Lai Walking Street",
    category: "Shopping & Market",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/fb/d2/70/saturday-night-market.jpg?w=900&h=500&s=1",
    link: "https://maps.app.goo.gl/ug6oePvHfE94nsd36",
    description:
      "The famous Saturday Night Market with local food and silverwares.",
  },
  {
    id: 7,
    title: "Chiang Mai Night Market",
    category: "Shopping & Market",
    image:
      "https://img.bigfang.tw/2023/02/1676817644-4efdd2f969559e8b1c92e99f32ded48e.jpg",
    link: "https://maps.app.goo.gl/KZXThEkc5wiT42XW7",
    description:
      "A bustling night bazaar open every evening with endless stalls.",
  },
  {
    id: 8,
    title: "MAYA Lifestyle Shopping Center",
    category: "Modern Shopping",
    image:
      "https://ajtravel.tw/wp-content/uploads/pixnet/ef33a63e882b4f5d1f1dca34a2ea2cd6.jpg",
    link: "https://maps.app.goo.gl/Qmk2AMurUuw3cErKA",
    description: "A modern mall in the trendy Nimman area.",
  },
  {
    id: 9,
    title: "Waroros Market",
    category: "Local Market",
    image:
      "https://img.bigfang.tw/2023/11/1699439799-9414a8f5b810972c3c9a0e2860c07532.jpg",
    link: "https://maps.app.goo.gl/jdJpj6PvDP4qx5US7",
    description: "The oldest and most authentic local market in Chiang Mai.",
  },
  {
    id: 10,
    title: "Elephant Discovery Chiang Mai",
    category: "Nature & Wildlife",
    image: "/images/chiangmai_elephant_1777084941518.png",
    link: "https://maps.app.goo.gl/SbATPMA1oWpaA6oC8",
    description:
      "An ethical elephant sanctuary for a memorable wildlife experience.",
  },
];

const FOOD_DRINKS = [
  {
    id: 11,
    title: "The North Gate Jazz Co-Op",
    category: "Bar & Music",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzC0Nugc82CTAH3GJL7AgYL4HiUxdYn6InpQ&s",
    link: "https://maps.app.goo.gl/Bh8s3PGSui8hbcmq5",
    description: "A legendary spot for live jazz and great drinks.",
  },
  {
    id: 12,
    title: "CHUM Northern Kitchen",
    category: "Restaurant",
    image:
      "https://img.vocus.cc/Sl4Xp6wt8wbJ7fAnEc6_O4BdDnv_BdJNnZtfAGIdsKw/w:740/f:webp/plain/https://images.vocus.cc/22c41ddc-c388-475a-a202-ccce904e8544.jpeg",
    link: "https://maps.app.goo.gl/4nvsCG9w74dvEo6r9",
    description: "Authentic Northern Thai cuisine in the Old City.",
  },
  {
    id: 13,
    title: "Khun Kae's Juice Bar",
    category: "Drinks & Healthy",
    image:
      "https://mamahuhu.blog/wp-content/uploads/2024/10/IMG_7412-1024x768.jpeg",
    link: "https://maps.app.goo.gl/AKug6WxQrLRj5D3R7",
    description: "Refreshing fruit juices and healthy smoothies.",
  },
  {
    id: 14,
    title: "Kao Soy Nimman",
    category: "Restaurant",
    image:
      "https://img.bigfang.tw/2023/02/1676616392-4efdd2f969559e8b1c92e99f32ded48e.jpg",
    link: "https://maps.app.goo.gl/DmnDb7xpJK2xKTHj9",
    description: "Famous for its rich and creamy Khao Soi.",
  },
];

const RELAXATION = [
  {
    id: 15,
    title: "Hannah Organic (大麻店)",
    category: "Weed Shop",
    image: "https://images.unsplash.com/photo-1603503362143-6c70135d97f8?q=80&w=800&auto=format&fit=crop",
    link: "https://maps.app.goo.gl/HDs82ruJuCUzNqLc6",
    description: "Premium organic weed shop.",
  },
  {
    id: 16,
    title: "Sum Bamboo Massage (按摩)",
    category: "Massage & Spa",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    link: "https://maps.app.goo.gl/AvfdRKAoxWMuCguQ9",
    description: "Relaxing massage to soothe your body after a long day.",
  }
];

const MUST_EATS = [
  { name: "Pho (河粉)", icon: "🍜" },
  { name: "Pad Krapow (打拋豬)", icon: "🍛" },
  { name: "Thai Milk Tea (泰奶)", icon: "🧋" },
  { name: "Khao Soi (咖哩麵)", icon: "🍲" },
  { name: "Boat Noodles (船麵)", icon: "🥘" },
];

const Card = ({ item }) => (
  <div className="card">
    <div className="card-image-wrapper">
      <img src={item.image} alt={item.title} className="card-image" />
      <span className="card-category">{item.category}</span>
    </div>
    <div className="card-content">
      <h3 className="card-title">{item.title}</h3>
      <p className="card-description">{item.description}</p>
      <div className="card-footer" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        {item.ytLink && (
          <a href={item.ytLink} target="_blank" rel="noopener noreferrer" className="view-yt" style={{ textDecoration: 'none' }}>
            看影片 🎥
          </a>
        )}
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="view-map" style={{ textDecoration: 'none' }}>
          看地圖 📍
        </a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="app-container">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Chiang Mai Journey</h1>
          <p className="hero-subtitle">
            Discover the magic of Northern Thailand
          </p>
          <a href="https://maps.app.goo.gl/kk9t5EpRDQUJKtn97" target="_blank" rel="noopener noreferrer" className="hero-btn">
            🌍 開啟完整 Google Maps 清單
          </a>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <h2 className="section-title">Must Eat in Chiang Mai</h2>
          <div className="must-eats-grid">
            {MUST_EATS.map((eat, index) => (
              <div key={index} className="must-eat-pill">
                <span className="eat-icon">{eat.icon}</span>
                <span className="eat-name">{eat.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Top Attractions</h2>
          <div className="card-grid">
            {ATTRACTIONS.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Food & Drinks</h2>
          <div className="card-grid">
            {FOOD_DRINKS.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Relaxation & Wellness</h2>
          <div className="card-grid">
            {RELAXATION.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Curated for your unforgettable trip.</p>
      </footer>
    </div>
  );
}

export default App;
