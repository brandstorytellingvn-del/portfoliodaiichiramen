/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Utensils, Waves, Flame, Clock, Heart, Award } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Components ---

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="text-center mb-16">
    <FadeIn>
      <span className="text-brand-accent text-xs uppercase tracking-[4px] mb-4 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl text-brand-light relative pb-5 inline-block">
        {title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-brand-primary" />
      </h2>
    </FadeIn>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Triết Lý', href: '#philosophy' },
    { name: 'Cấu Trúc Ramen', href: '#anatomy' },
    { name: 'Câu Chuyện', href: '#story' },
    { name: 'Định Vị', href: '#positioning' },
    { name: 'Thực Đơn', href: '#gallery' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full px-[5%] z-50 transition-all duration-400 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4 border-b border-white/5' : 'py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-serif text-2xl tracking-wider text-brand-light">
          Daiichi<span className="text-brand-primary">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[0.85rem] uppercase tracking-widest font-medium transition-colors hover:text-brand-accent"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-light"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/5 py-8 px-[5%] flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest font-medium transition-colors hover:text-brand-accent"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=2000&auto=format&fit=crop" 
          alt="Daiichi Ramen Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-brand-dark" />
      </motion.div>

      <div className="relative z-10 text-center px-5 max-w-4xl">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 tracking-tight">
            Bản Giao Hưởng<br />Của Vị Giác
          </h1>
          <p className="font-serif text-xl md:text-2xl text-brand-accent italic mb-10">
            Không Chỉ Là Món Ăn. Đó Là Một Nghệ Thuật.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section id="philosophy" className="section-padding bg-brand-dark relative overflow-hidden">
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] text-white/[0.03] font-serif pointer-events-none select-none z-0">
      拉麺
    </div>
    <div className="container mx-auto px-[5%] relative z-10 max-w-3xl text-center">
      <FadeIn>
        <span className="text-brand-accent text-xs uppercase tracking-[4px] mb-4 block">Văn Hóa Ramen</span>
        <h2 className="text-3xl md:text-4xl text-brand-light relative pb-5 mb-8 inline-block">
          Hệ Sinh Thái Trong Một Chiếc Bát
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-brand-primary" />
        </h2>
        <p className="text-xl text-gray-400 font-light mb-8">
          Ramen không phải là thức ăn nhanh, mà là sự đúc kết của tính kỷ luật và óc sáng tạo Nhật Bản.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Một bát ramen hoàn chỉnh là sự cân bằng tuyệt đối của 5 yếu tố: Tare (gia vị nền), Supu (nước dùng), Men (sợi mì), Gu (topping) và Koyu (dầu hương vị). Tại Daiichi, chúng tôi coi mỗi bát mì là một tiểu vũ trụ, nơi mọi thành phần đều có tiếng nói riêng nhưng cùng hòa quyện để tạo nên một tổng thể bùng nổ và khó quên.
        </p>
      </FadeIn>
    </div>
  </section>
);

const Anatomy = () => {
  const cards = [
    {
      icon: <Flame className="text-brand-accent mb-6" size={32} />,
      title: "Supu (Nước dùng)",
      desc: "Linh hồn của Daiichi nằm ở kỹ thuật hầm Tonkotsu (xương heo) chuẩn xác trong suốt 48 giờ liên tục. Nhiệt độ được kiểm soát nghiêm ngặt để nhũ hóa tủy xương, tạo ra thứ nước dùng trắng đục, kết cấu sánh mịn, đậm đà nhưng không hề gây ngấy. Sự kiên nhẫn tạo nên chiều sâu hương vị."
    },
    {
      icon: <Waves className="text-brand-accent mb-6" size={32} />,
      title: "Men (Sợi mì)",
      desc: "Sử dụng bột mì nội địa Nhật Bản với hàm lượng protein đặc thù, sợi mì Daiichi được cắt bằng máy chuyên dụng và trải qua quá trình ủ lạnh (aging) để đạt độ đàn hồi (Koshi) tối đa. Tùy thuộc vào loại nước dùng, độ dày và tỷ lệ hydrat hóa của sợi mì được tinh chỉnh tương ứng."
    },
    {
      icon: <Utensils className="text-brand-accent mb-6" size={32} />,
      title: "Gu & Tare (Thành phần)",
      desc: "Thịt Chashu cuộn tròn được hầm chậm (slow-cook) trong hỗn hợp sốt đậu nành bí truyền, tan chảy ngay khi chạm vào đầu lưỡi. Trứng lòng đào Ajitama ngâm chuẩn 24 giờ. Cùng với Tare (gia vị nền) - chìa khóa định hình sắc thái riêng biệt của Shio, Shoyu hay Miso."
    }
  ];

  return (
    <section id="anatomy" className="section-padding bg-brand-dark-lighter">
      <div className="container mx-auto px-[5%]">
        <SectionHeader subtitle="Phân tích yếu tố" title="Giải Phẫu Sự Hoàn Hảo" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="bg-brand-dark p-10 border-t-4 border-transparent hover:border-brand-primary transition-all duration-500 hover:-translate-y-2 group h-full">
                {card.icon}
                <h3 className="text-xl mb-4 group-hover:text-brand-light transition-colors">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandStory = () => (
  <section id="story" className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
    <div className="relative h-[400px] lg:h-auto">
      <img 
        src="https://images.unsplash.com/photo-1583032410842-8869c9b32cb4?q=80&w=1000&auto=format&fit=crop" 
        alt="Brand Story"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="bg-brand-dark flex items-center px-[10%] py-20 lg:py-0">
      <FadeIn>
        <span className="text-brand-accent text-xs uppercase tracking-[4px] mb-4 block">Câu chuyện thương hiệu</span>
        <h2 className="text-4xl mb-8">Khởi Nguồn Từ Sự Nguyên Bản</h2>
        <p className="text-xl text-gray-400 font-light mb-6">
          "Daiichi" (第一) trong tiếng Nhật mang ý nghĩa là "Số Một", "Đầu Tiên" hoặc "Tối Thượng".
        </p>
        <p className="text-gray-500 leading-relaxed mb-6">
          Được sáng lập bởi những đầu bếp mang trong mình lòng trắc ẩn với ẩm thực truyền thống, Daiichi Ramen ra đời với một sứ mệnh duy nhất: Mang trải nghiệm Ramen nguyên bản của các ngõ hẻm Tokyo đặt vào trong một không gian tinh tế, hiện đại.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Chúng tôi loại bỏ những yếu tố rườm rà, tập trung tối đa vào chất lượng nguyên liệu cốt lõi. Sự tinh gọn trong không gian thiết kế của Daiichi nhằm mục đích hướng toàn bộ sự tập trung của khách hàng vào một điểm duy nhất: Bát mì đang bốc khói trước mặt.
        </p>
      </FadeIn>
    </div>
  </section>
);

const Positioning = () => {
  const values = [
    { id: "01", title: "Nguyên Bản", desc: "Không thỏa hiệp với hương vị công nghiệp. Kỹ thuật thủ công là nền tảng.", icon: <Award size={20} /> },
    { id: "02", title: "Chuẩn Xác", desc: "Từ nhiệt độ nước dùng đến thời gian luộc mì, mọi thứ được đo lường bằng giây.", icon: <Clock size={20} /> },
    { id: "03", title: "Omotenashi", desc: "Nghệ thuật hiếu khách bằng cả trái tim, đón đầu mong muốn của thực khách.", icon: <Heart size={20} /> }
  ];

  return (
    <section id="positioning" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#151515_0%,_#050505_100%)]" />
      <div className="container mx-auto px-[5%] relative z-10">
        <SectionHeader subtitle="Chiến lược thương hiệu" title="Định Vị & Trải Nghiệm" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-5 h-[1px] bg-brand-primary" />
              <h3 className="text-brand-accent text-sm uppercase tracking-widest">Khách Hàng Mục Tiêu</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Daiichi Ramen định vị phục vụ phân khúc trung - cao cấp (Masstige). Khách hàng của chúng tôi là giới trẻ sành điệu, nhân viên văn phòng có thu nhập tốt, và những thực khách tìm kiếm trải nghiệm văn hóa ẩm thực có chiều sâu. Họ không chỉ chi trả cho món ăn, họ chi trả cho câu chuyện và sự tinh tế.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-5 h-[1px] bg-brand-primary" />
              <h3 className="text-brand-accent text-sm uppercase tracking-widest">Điểm Khác Biệt (USP)</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              <strong>"Modern Authenticity"</strong> - Sự chân thực trong bối cảnh hiện đại. Không gian nhà hàng được thiết kế theo phong cách Zen Minimalist, âm thanh được tinh chỉnh tần số thấp, ánh sáng spotlight hắt trực tiếp xuống mặt bàn. Daiichi biến việc thưởng thức ramen từ một bữa ăn vội vàng thành một nghi thức trị liệu vị giác.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 border-t border-white/5">
          {values.map((v, idx) => (
            <FadeIn key={v.id} delay={idx * 0.1}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-brand-accent font-serif text-lg">{v.id}.</span>
                  <h4 className="text-xl text-brand-light">{v.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=800&auto=format&fit=crop",
      title: "Daiichi Tonkotsu",
      desc: "Nước dùng xương heo 48h / Thịt Chashu xém lửa"
    },
    {
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
      title: "Tokyo Classic Shoyu",
      desc: "Nước dùng thanh trong / Nước tương ủ thủ công"
    },
    {
      img: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=800&auto=format&fit=crop",
      title: "Hokkaido Spicy Miso",
      desc: "Tương Miso đỏ / Dầu ớt cay nồng / Bắp ngọt"
    },
    {
      img: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?q=80&w=800&auto=format&fit=crop",
      title: "Kuro Black Garlic",
      desc: "Dầu tỏi đen lên men / Trứng Ajitama"
    }
  ];

  return (
    <section id="gallery" className="bg-brand-dark p-1">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        {items.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="relative aspect-square group overflow-hidden cursor-pointer">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h4 className="text-xl mb-1">{item.title}</h4>
                <span className="text-brand-accent text-xs uppercase tracking-wider">{item.desc}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black py-20 px-[5%] text-center">
    <div className="font-serif text-4xl mb-6 text-brand-light">
      Daiichi<span className="text-brand-primary">.</span>
    </div>
    <p className="max-w-md mx-auto text-gray-500 text-sm leading-relaxed mb-12">
      Định hình lại trải nghiệm Ramen nguyên bản thông qua sự giao thoa giữa kỹ thuật truyền thống và tư duy thẩm mỹ hiện đại.
    </p>
    <div className="pt-10 border-t border-white/5 text-gray-600 text-[0.7rem] uppercase tracking-widest">
      © 2026 Daiichi Ramen Brand Portfolio. Designed for excellence.
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <Anatomy />
      <BrandStory />
      <Positioning />
      <Gallery />
      <Footer />
    </div>
  );
}

