/*
 * 두 클래스와 두 개의 상수를 내 보냅니다. 
 * Address 및 Hero클래스는 애플리케이션 정의 데이터 모델. 
 * heroes및 states상수는 테스트 데이터를 공급
 */
export class Hero {
    id = 0;
    name = '';
    addresses: Address[];
}

export class Address {
    street = '';
    city   = '';
    state  = '';
    zip    = '';
}

export const heroes: Hero[] = [
{
    id: 1,
    name: 'Whirlwind',
    addresses: [
        {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
        {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
},
{
    id: 2,
    name: 'Bombastic',
    addresses: [
        {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
},
{
    id: 3,
    name: 'Magneta',
    addresses: [ ]
},
];

export const states = ['CA', 'MD', 'OH', 'VA'];