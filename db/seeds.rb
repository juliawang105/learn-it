# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Deck.destroy_all
Card.destroy_all
Save.destroy_all

#users
user1 = User.create!(
    email: 'demo@gmail.com',
    password: 'password',
    first_name: 'demo',
    last_name: 'demo'
)

user2 = User.create!(
    email: 'mimi@gmail.com',
    password: 'password',
    first_name: 'mimi',
    last_name: 'mimi'
)

user3 = User.create!(
    email: 'coffee@gmail.com',
    password: 'password',
    first_name: 'coffee',
    last_name: 'coffee'
)

user4 = User.create!(
    email: 'boba@gmail.com',
    password: 'password',
    first_name: 'boba',
    last_name: 'boba'
)

#decks 
deck1 = Deck.create!(
    name: 'The Giver',
    creator_id: user1.id
)

deck2 = Deck.create!(
    name: 'Red Pyramid',
    creator_id: user2.id
)

deck3 = Deck.create!(
    name: 'A Long Walk to Water',
    creator_id: user1.id
)

deck4 = Deck.create!(
    name: 'Jane Eyre',
    creator_id: user3.id
)

deck5 = Deck.create!(
    name: 'King Lear',
    creator_id: user3.id
)

deck6 = Deck.create!(
    name: 'Everything I Never Told You',
    creator_id: user2.id
)

card1 = Card.create!(
    question: 'Where is Elsewhere?',
    answer: 'Elsewhere is not a place. It is what the Community says in place of death.',
    deck_id: deck1.id 
)

card2 = Card.create!(
    question: 'What color did Jonas see first?',
    answer: 'Red',
    deck_id: deck1.id 
)

card3 = Card.create!(
    question: 'Who is Asher?',
    answer: 'He is a friend of Jonas.',
    deck_id: deck1.id 
)

card4 = Card.create!(
    question: 'What is the Rosetta Stone?',
    answer: 'It translated hieroglyphs and exploded when Carter and Sadie approached it. ',
    deck_id: deck2.id 
)

card5 = Card.create!(
    question: 'Who is the antagonist?',
    answer: 'Set, the Egyptian god of evil',
    deck_id: deck2.id 
)