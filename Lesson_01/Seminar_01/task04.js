/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.

Необходимо:
1. Создать Map объект, который будет использоваться для хранения соответствия
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные
студентом.
*/

const lessonsTeacher = new Map();
const studentLessons = new Map();
const lessonsIvan = new Set();

const ivan = {
    name: "Иван",
};

lessonsIvan.add('math');
lessonsIvan.add('Physic');


lessonsTeacher.set('math','Ivan Petrovich');
lessonsTeacher.set('fremdsprache','Lola Bach');
lessonsTeacher.set('literature','Olga Bach');
lessonsTeacher.set('Physic','Egor Weise');

studentLessons.set(ivan, lessonsIvan)



// Преподаватель по Математике: Смирнов.
console.log(`Преподаватель по математике: ${lessonsTeacher.get('math')}`);
// Уроки Ивана: Математика, История.
console.log(`Уроки Ивана: ${[...lessonsIvan].join(', ')}`);