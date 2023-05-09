const buttonContact = document.getElementsByClassName('header_href_txt_a')     //[0] [1]
const telephone = document.getElementById('telephone')
const email = document.getElementById('email')
const adress = document.getElementById('adress')

const services = document.getElementById('first_sub')
//привязка для замены текста при смене языка
const enRuUa = document.getElementById('ru_en_ua')
const language = document.getElementById('language')
const ua = document.getElementById('UA')
const ru = document.getElementById('RU')
const en = document.getElementById('EN')

const fs1 = document.getElementById('fs_1')
const fs2 = document.getElementById('fs_2')
const fs3 = document.getElementById('fs_3')
const fs4 = document.getElementById('fs_4')

const text1 = document.getElementById('text_1')
const text2 = document.getElementById('text_2')

const powerSerwices = document.getElementsByClassName('power_serwices') //[0]
const liPowerSerwices = document.getElementsByClassName('li_power_serwices') //[0,1,2,3,4,5,6,7,8]

const detectiveServices = document.getElementsByClassName('detective_services') //[0]
const liDetectiveServices = document.getElementsByClassName('li_detective_services') //[0,1,2,3,4]

//       //       //         //          //
//
function backToBisqit () {       
    telephone.style.color = 'bisque'
    email.style.color = 'bisque'
    adress.style.color = 'bisque'
}
                                                       //при нажати на "контакты" изменяет цвет букв не на долго

buttonContact[1].onclick = function() {
    telephone.style.color = 'rgb(211, 116, 0)'
    email.style.color = 'rgb(211, 116, 0)'
    adress.style.color = 'rgb(211, 116, 0)'
    setTimeout(backToBisqit,1000)
}
//
function backToBisqitServ () {       
    services.style.color = 'bisque'
}
buttonContact[0].onclick = function() {
    services.style.color = 'rgb(211, 116, 0)'
    setTimeout(backToBisqitServ,1000)
}
//
                //код для замены текста при смене языка
ua.onclick = function() {
    buttonContact[0].textContent = 'Наші послуги'
    buttonContact[1].textContent = 'Контакти'
    enRuUa.textContent = 'Укр'

     fs1.textContent = 'Детективні послуги.'
     fs2.textContent = 'Безпека бізнезу.'
     fs3.textContent = 'Приватна охорона.'
     fs4.textContent = 'Допомога у вирішенні конфліктних ситуацій.'

     text1.textContent = "Пропонуемо комплексні та нестандартні рішення щодо охорони об'єктів, приватних осіб, бізнесу, різних заходів тощо."
     text2.textContent = 'Готові розглянути будь-яку ситуацію, що склалася. Співпрацюємо із зарубіжними країнами Європи.'

     powerSerwices[0].textContent = 'Сфери послуг силової підтримки:'

     liPowerSerwices[0].textContent = 'Силова підтримка у вирішенні конфліктних ситуацій;'
     liPowerSerwices[1].textContent = 'Супровід та зустріч приватних осіб, групи людей;'
     liPowerSerwices[2].textContent = 'Охорона різних заходів: днів народжень, весіль, концертів тощо;'
     liPowerSerwices[3].textContent = 'Підтримка у боротьбі з незаконною забудовою;'
     liPowerSerwices[4].textContent = 'Група швидкого реагування;'
     liPowerSerwices[5].textContent = 'Особова охорона фізичних осіб, у тому числі дітей, жінок;'
     liPowerSerwices[6].textContent = 'Охорона бізнесу - слова та юридична допомога;'
     liPowerSerwices[7].textContent = 'Виселення проблемних орендарів;'
     liPowerSerwices[8].textContent = 'Ми завжди на стороні кліента.'

     detectiveServices[0].textContent = 'Детективні послуги:'

     liDetectiveServices[0].textContent = 'Зовнішнє спостереження;'
     liDetectiveServices[1].textContent = 'Виявлення подружньої невірності;'
     liDetectiveServices[2].textContent = 'Розшук людей;'
     liDetectiveServices[3].textContent = 'Збір інформації;'
     liDetectiveServices[4].textContent = 'Проведення розслідувань;'

     telephone.textContent = 'Телефон: +38 097 744 42 96;'
     email.textContent = 'Пошта: atom.kiev.safety@gmail.com;'
     adress.textContent = 'Адреса: м.Київ, проспект Соборності 2/1;'
};
// закончилась функция перевода на укр
ru.onclick = function() {
    buttonContact[0].textContent = 'Наши услуги'
    buttonContact[1].textContent = 'Контакты'
    enRuUa.textContent = 'Рус'

     fs1.textContent = 'Детективные услуги.'
     fs2.textContent = 'Безопастность бизнеса.'
     fs3.textContent = 'Личная охрана.'
     fs4.textContent = 'Помощь в решении конфликтных ситуаций.'

     text1.textContent = 'Предлагаем комплексные и нестандартные решения относительно охраны объектов, частных лиц, бизнеса, различных мероприятий.'
     text2.textContent = 'Готовы рассмотреть любую сложившеюся ситуацию. Сотрудничаем со странами Европы.'

     powerSerwices[0].textContent = 'Сферы услуг силовой поддержки:'

     liPowerSerwices[0].textContent = 'Силовая поддержка в решении конфликтных ситуаций;'
     liPowerSerwices[1].textContent = 'Сопровождение и встреча частных лиц, групп людей;'
     liPowerSerwices[2].textContent = 'Охрана различных мероприятий: дни рождения, свадьбы, концерты и т.д.;'
     liPowerSerwices[3].textContent = 'Поддержка в борьбе с незаконной застройкой;'
     liPowerSerwices[4].textContent = 'Группа быстрого реагирования;'
     liPowerSerwices[5].textContent = 'Личная охрана физ. лиц, в том числе женщин и детей;'
     liPowerSerwices[6].textContent = 'Охрана бизнеса - силовая и юридическая помощь;'
     liPowerSerwices[7].textContent = 'Выселение проблемных арендаторов;'
     liPowerSerwices[8].textContent = 'Мы всегда на стороне клиента.'

     detectiveServices[0].textContent = 'Детективные услуги:'

     liDetectiveServices[0].textContent = 'Наружное наблюдение;'
     liDetectiveServices[1].textContent = 'Выявление супружеской неверности;'
     liDetectiveServices[2].textContent = 'Поиск людей;'
     liDetectiveServices[3].textContent = 'Сбор информации;'
     liDetectiveServices[4].textContent = 'Проведение расследований;'

     telephone.textContent = 'Телефон: +38 097 744 42 96;'
     email.textContent = 'Почта: atom.kiev.safety@gmail.com;'
     adress.textContent = 'Адрес: г.Киев, проспект Соборности 2/1;'
};
// закончилась функция перевода на RU
en.onclick = function() {
    buttonContact[0].textContent = 'Our services'
    buttonContact[1].textContent = 'Contacts'
    enRuUa.textContent = 'Eng'

     fs1.textContent = 'Detective services.'
     fs2.textContent = 'Business security.'
     fs3.textContent = 'Bodyguard.'
     fs4.textContent = 'Assistance in resolving conflict situations.'

     text1.textContent = 'We offer comprehensive and non-standard solutions for the protection of objects, individuals, businesses, and various events.'
     text2.textContent = 'Ready to deal with any situation. We cooperate with European security services.'

     powerSerwices[0].textContent = 'Strength Support Services:'

     liPowerSerwices[0].textContent = 'Power support in resolving conflict situations;'
     liPowerSerwices[1].textContent = 'Accompanying and meeting individuals, groups of people;'
     liPowerSerwices[2].textContent = 'Security for various events: birthdays, weddings, concerts, etc.;'
     liPowerSerwices[3].textContent = 'Support in the fight against illegal building;'
     liPowerSerwices[4].textContent = 'Rapid Response Team;'
     liPowerSerwices[5].textContent = 'Physical protection individuals, including women and children;'
     liPowerSerwices[6].textContent = 'Business security - physical assistance and legal assistance;'
     liPowerSerwices[7].textContent = 'Eviction of troubled tenants;'
     liPowerSerwices[8].textContent = "We are always on the client's side."

     detectiveServices[0].textContent = 'Detective services:'

     liDetectiveServices[0].textContent = 'Outdoor surveillance;'
     liDetectiveServices[1].textContent = 'Identification of adultery;'
     liDetectiveServices[2].textContent = 'Search for people;'
     liDetectiveServices[3].textContent = 'Collection of information;'
     liDetectiveServices[4].textContent = 'Conducting investigations;'

     telephone.textContent = 'Telephone: +38 097 744 42 96;'
     email.textContent = 'Mail: atom.kiev.safety@gmail.com;'
     adress.textContent = 'Address: Kiev, Prospekt Sobornosti 2/1;'
};