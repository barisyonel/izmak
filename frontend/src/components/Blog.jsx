import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import kalip1 from '../kalip1.jpg';
import kalip2 from '../kalip2.jpg';
import kalip3 from '../kalip3.jpg';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Örnek blog yazıları - gerçek uygulamada API'den gelecek
  const samplePosts = [
    {
      id: 1,
      title: "CNC İşleme Merkezlerinde Kalite Kontrol Süreçleri",
      excerpt: "Modern CNC işleme merkezlerinde kalite kontrolünün önemi ve uygulanan süreçler hakkında detaylı bilgiler.",
      content: "CNC işleme merkezlerinde kalite kontrol, üretim sürecinin en kritik aşamalarından biridir. Bu yazımızda, kalite kontrol süreçlerinin nasıl uygulandığını ve hangi teknolojilerin kullanıldığını inceleyeceğiz.",
      author: "IZMAK Teknik Ekibi",
      date: "2024-09-14",
      category: "CNC İşleme",
      image: kalip1,
      tags: ["CNC", "Kalite Kontrol", "İmalat", "Teknoloji"]
    },
    {
      id: 2,
      title: "Plastik Enjeksiyon Kalıplarında Tasarım Prensipleri",
      excerpt: "Plastik enjeksiyon kalıplarının tasarımında dikkat edilmesi gereken temel prensipler ve best practice'ler.",
      content: "Plastik enjeksiyon kalıplarının tasarımı, ürün kalitesini doğrudan etkileyen kritik bir süreçtir. Doğru tasarım prensipleri ile hem kalite hem de verimlilik artırılabilir.",
      author: "IZMAK Tasarım Ekibi",
      date: "2024-09-10",
      category: "Kalıp Tasarımı",
      image: kalip2,
      tags: ["Plastik Enjeksiyon", "Kalıp Tasarımı", "Tasarım", "Mühendislik"]
    },
    {
      id: 3,
      title: "Makine Yedek Parça İmalatında Malzeme Seçimi",
      excerpt: "Farklı endüstriyel uygulamalar için uygun malzeme seçiminin önemi ve dikkat edilmesi gereken faktörler.",
      content: "Makine yedek parça imalatında malzeme seçimi, parçanın performansı ve dayanıklılığı açısından kritik önem taşır. Bu yazımızda malzeme seçim kriterlerini detaylandırıyoruz.",
      author: "IZMAK Malzeme Uzmanı",
      date: "2024-09-05",
      category: "Malzeme Bilimi",
      image: kalip2,
      tags: ["Malzeme", "Yedek Parça", "İmalat", "Kalite"]
    },
    {
      id: 4,
      title: "CAD/CAM Teknolojilerinin İmalat Sektöründeki Rolü",
      excerpt: "CAD/CAM teknolojilerinin modern imalat süreçlerindeki yeri ve gelecekteki potansiyeli hakkında analiz.",
      content: "CAD/CAM teknolojileri, imalat sektöründe devrim yaratan araçlardır. Bu teknolojilerin doğru kullanımı ile üretim verimliliği ve kalitesi önemli ölçüde artırılabilir.",
      author: "IZMAK CAD/CAM Uzmanı",
      date: "2024-08-28",
      category: "Teknoloji",
      image: kalip3,
      tags: ["CAD/CAM", "Teknoloji", "Dijitalleşme", "İnovasyon"]
    },
    {
      id: 5,
      title: "Torna İşlerinde Hassasiyet ve Tolerans Kontrolü",
      excerpt: "Torna işlerinde hassasiyet sağlama teknikleri ve tolerans kontrolünde dikkat edilmesi gereken noktalar.",
      content: "Torna işlerinde hassasiyet, ürün kalitesinin temel belirleyicisidir. Bu yazımızda, hassasiyet sağlama tekniklerini ve tolerans kontrolü süreçlerini inceliyoruz.",
      author: "IZMAK Torna Ustası",
      date: "2024-08-20",
      category: "Torna İşleri",
      image: kalip1,
      tags: ["Torna", "Hassasiyet", "Tolerans", "Kalite Kontrol"]
    },
    {
      id: 6,
      title: "Endüstri 4.0 ve Akıllı İmalat Sistemleri",
      excerpt: "Endüstri 4.0 kavramının imalat sektörüne etkileri ve akıllı imalat sistemlerinin avantajları.",
      content: "Endüstri 4.0, imalat sektöründe yeni bir dönemin başlangıcıdır. Akıllı imalat sistemleri ile üretim süreçleri daha verimli ve esnek hale gelmektedir.",
      author: "IZMAK İnovasyon Ekibi",
      date: "2024-08-15",
      category: "Endüstri 4.0",
      image: kalip2,
      tags: ["Endüstri 4.0", "Akıllı İmalat", "Dijital Dönüşüm", "İnovasyon"]
    }
  ];

  useEffect(() => {
    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      setPosts(samplePosts);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div style={{ 
      fontFamily: 'Inter, sans-serif', 
      background: 'var(--steel-light)', 
      minHeight: '100vh',
      padding: 'clamp(20px, 4vw, 40px) clamp(16px, 4vw, 32px)',
      color: 'var(--chrome-primary)'
    }}>
      <Helmet>
        <title>Blog - IZMAK Makine Yedek Parça & Kalıp İmalatı | Teknik Makaleler</title>
        <meta name="description" content="IZMAK'ın teknik blog sayfası. CNC işleme, kalıp tasarımı, makine yedek parça imalatı ve endüstriyel teknolojiler hakkında uzman makaleler." />
        <meta name="keywords" content="blog, teknik makale, CNC işleme, kalıp tasarımı, makine yedek parça, endüstriyel teknoloji, imalat, mühendislik" />
        <meta property="og:title" content="Blog - IZMAK Makine Yedek Parça & Kalıp İmalatı" />
        <meta property="og:description" content="Teknik makaleler ve endüstriyel teknolojiler hakkında uzman içerikler" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://izmirmakinakalip.com/blog" />
        <meta property="og:image" content="https://izmirmakinakalip.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - IZMAK Makine Yedek Parça & Kalıp İmalatı" />
        <meta name="twitter:description" content="Teknik makaleler ve endüstriyel teknolojiler hakkında uzman içerikler" />
        <meta name="twitter:image" content="https://izmirmakinakalip.com/logo.png" />
        <link rel="canonical" href="https://izmirmakinakalip.com/blog" />
      </Helmet>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 'clamp(40px, 8vw, 60px)',
          background: 'var(--steel-gradient)',
          borderRadius: '16px',
          padding: 'clamp(30px, 6vw, 50px)',
          boxShadow: 'var(--shadow-steel)'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(28px, 6vw, 42px)', 
            fontWeight: 800, 
            marginBottom: '20px', 
            background: 'var(--gold-gradient)',
            display: 'inline-block',
            borderRadius: '8px',
            padding: '8px 24px',
            color: 'var(--chrome-primary)',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Teknik Blog
          </h1>
          <p style={{ 
            fontSize: 'clamp(16px, 3vw, 20px)', 
            color: 'var(--steel-dark)', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Makine yedek parça imalatı, kalıp tasarımı ve endüstriyel teknolojiler hakkında 
            uzman ekibimizin hazırladığı teknik makaleler ve güncel bilgiler.
          </p>
        </div>

        {/* Blog Posts */}
        {loading ? (
          <div style={{ 
            textAlign: 'center', 
            color: 'var(--steel-dark)', 
            fontSize: 'clamp(18px, 4vw, 24px)', 
            marginTop: '60px' 
          }}>
            Makaleler yükleniyor...
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 'clamp(24px, 5vw, 32px)',
            marginBottom: '60px'
          }}>
            {posts.map(post => (
              <article key={post.id} style={{ 
                background: 'var(--steel-gradient)', 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: 'var(--shadow-steel)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-steel)';
              }}
              >
                {/* Post Image */}
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  background: `url(${post.image}) center/cover`,
                  position: 'relative'
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    top: '12px', 
                    left: '12px',
                    background: 'var(--gold-gradient)',
                    color: 'var(--chrome-primary)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {post.category}
                  </div>
                </div>

                {/* Post Content */}
                <div style={{ padding: '24px' }}>
                  <h2 style={{ 
                    fontSize: 'clamp(18px, 4vw, 22px)', 
                    fontWeight: '700', 
                    marginBottom: '12px', 
                    color: 'var(--chrome-primary)',
                    lineHeight: 1.3
                  }}>
                    {post.title}
                  </h2>
                  
                  <p style={{ 
                    fontSize: 'clamp(14px, 3vw, 16px)', 
                    color: 'var(--steel-dark)', 
                    marginBottom: '16px', 
                    lineHeight: 1.6
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px', 
                    marginBottom: '16px' 
                  }}>
                    {post.tags.map((tag, index) => (
                      <span key={index} style={{ 
                        background: 'rgba(74, 144, 226, 0.1)', 
                        color: '#4a90e2', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '12px', 
                        fontWeight: '500' 
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    fontSize: '14px',
                    color: 'var(--steel-dark)',
                    borderTop: '1px solid rgba(203, 213, 224, 0.2)',
                    paddingTop: '16px'
                  }}>
                    <span style={{ fontWeight: '500' }}>{post.author}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div style={{ 
          background: 'var(--metallic-gradient)', 
          color: '#fff', 
          borderRadius: '18px', 
          padding: 'clamp(30px, 6vw, 50px)', 
          textAlign: 'center',
          boxShadow: 'var(--shadow-metallic)',
          marginTop: '60px'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 5vw, 32px)', 
            marginBottom: '16px', 
            color: 'var(--gold-bright)', 
            fontWeight: '700' 
          }}>
            Teknik Destek ve Danışmanlık
          </h2>
          <p style={{ 
            fontSize: 'clamp(16px, 3vw, 20px)', 
            color: '#f3f3f3', 
            marginBottom: '24px',
            maxWidth: '600px',
            margin: '0 auto 24px auto'
          }}>
            Blog yazılarımızda ele aldığımız konular hakkında daha detaylı bilgi almak 
            veya teknik danışmanlık hizmeti almak için bizimle iletişime geçin.
          </p>
          <a href="/contact" style={{ 
            background: 'linear-gradient(90deg, #f1c40f 0%, #f39c12 100%)', 
            color: 'var(--chrome-primary)', 
            padding: 'clamp(14px, 3vw, 18px) clamp(32px, 6vw, 54px)', 
            borderRadius: '16px', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            fontSize: 'clamp(16px, 3vw, 20px)', 
            boxShadow: '0 4px 24px #f1c40f55', 
            letterSpacing: '1px', 
            transition: 'all 0.3s',
            display: 'inline-block'
          }}>
            İletişime Geçin
          </a>
        </div>
      </div>
    </div>
  );
}
