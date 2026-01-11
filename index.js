const siteContent = {
  nav: {
    'nav-item-1': 'Eğitimler',
    'nav-item-2': 'Eğitmenler',
    'nav-item-3': 'Sorular',
    'nav-item-4': 'Blog',
    'nav-item-5': 'Hakkımızda',
    'nav-item-6': 'İletişim',
  },
  cta: {
    h1: 'Full Stack Web Developer',
    button: 'Kayıt Olun',
  },
  'top-content': {
    'left-h4': 'Kabul Şartları',
    'left-content':
      'Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.',
    'right-h4': 'Haftalık Program',
    'right-content':
      'Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.',
  },
  'bottom-content': {
    'left-h4': 'EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.',
    'left-content':
      "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.",
    'middle-h4': "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR",
    'middle-content':
      'Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.',
    'right-h4':
      'ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ',
    'right-content':
      "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.",
  },
  contact: {
    'contact-h4': 'İLETİŞİM',
    address: 'Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye',
    phone: '+90 (216) 550-5905',
    email: 'bilgi@birsirketsitesi.com.tr',
  },
  footer: {
    copyright: 'Copyright Bir Şirket Sitesi 2023',
  },
  images: {
    'logo-img': 'https://i.ibb.co/42PDMF2/logo.png',
    'cta-img': 'https://i.ibb.co/XssVKxk/cta.png',
    'accent-img': 'https://i.ibb.co/5FZmL26/accent.png',
  },
};

const elements = document.querySelectorAll('nav a');
elements[0].textContent = 'Eğitimler';
elements[1].textContent = 'Eğitmenler';
elements[2].textContent = 'Sorular';
elements[3].textContent = 'Blog';
elements[4].textContent = 'Hakkımızda';
elements[5].textContent = 'İletişim';

const element = document.querySelector('.cta-text h1');
element.textContent = 'Full Stack Web Developer';

const elemen = document.querySelector('.cta-text button');
elemen.textContent = 'Kayıt Olun';

const eleme = document.querySelectorAll('.top-content h4');
eleme[0].textContent = 'Kabul Şartları';
eleme[1].textContent = 'Haftalık Program';

const elem = document.querySelectorAll('.top-content p');
elem[0].textContent = 'Öğrencilerimizde en başta şu iki özelliği arıyoruz:';
elem[1].textContent = 'Program haftada 40 saatinizi talep ediyor';

const ele = document.querySelectorAll('.bottom-content h4');
ele[0].textContent = 'EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.';
ele[1].textContent = "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR";
ele[2].textContent =
  'ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ';

const el = document.querySelectorAll('.bottom-content p');
el[0].textContent = 'Workintech olarak binlerce başvurudan potansiyeli';
el[1].textContent = 'Workintech eğitim programı sıfırdan yazılımcı yetiştiren,';
el[2].textContent =
  'Workintech´in size özel atanmış ise alım uzmanı yıl boyunca';

const e = document.querySelector('.contact').children;
e[0].textContent = 'İLETİŞİM';
e[1].textContent = 'Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye';
e[2].textContent = '550-5905';
e[3].textContent = 'bilgi@birsirketsitesi.com.tr';

const newer = document.querySelector('footer a');
newer.classList.add('bold');
newer.textContent = 'Copyright Bir Şirket Sitesi 2023';

const logo = document.getElementById('logo-img');
logo.setAttribute('src', 'https://i.ibb.co/42PDMF2/logo.png');

const b = document.getElementById('cta-img');
b.setAttribute('src', 'https://i.ibb.co/XssVKxk/cta.png');

const c = document.getElementById('middle-img');
c.setAttribute('src', 'https://i.ibb.co/5FZmL26/accent.png');

const links = document.querySelectorAll('nav a');

for (let link of links) {
  link.setAttribute('class', 'italic');
}
