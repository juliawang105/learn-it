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
Tag.destroy_all

#tags 
tag1 = Tag.create!(
    name: 'Literature'
)

tag2 = Tag.create!(
    name: 'Math'
)

tag3 = Tag.create!(
    name: 'History'
)

tag4 = Tag.create!(
    name: 'Science'
)

tag5 = Tag.create!(
    name: 'Sports'
)

tag6 = Tag.create!(
    name: 'Geography'
)

tag7 = Tag.create!(
    name: 'Foreign Language'
)

#users
user1 = User.create!(
    email: 'demo@gmail.com',
    password: 'password',
    first_name: 'Demo User',
    last_name: 'demo'
)

user2 = User.create!(
    email: 'mimi@gmail.com',
    password: 'password',
    first_name: 'Mimi',
    last_name: 'Dean'
)

user3 = User.create!(
    email: 'jess@gmail.com',
    password: 'password',
    first_name: 'Jess',
    last_name: 'W'
)

user4 = User.create!(
    email: 'fp@gmail.com',
    password: 'password',
    first_name: 'Fion',
    last_name: 'P'
)

user5 = User.create!(
    email: 'dx@gmail.com',
    password: 'password',
    first_name: 'Danna',
    last_name: 'X'
)

user6 = User.create!(
    email: 'ct@gmail.com',
    password: 'password',
    first_name: 'Chris',
    last_name: 't'
)

user7 = User.create!(
    email: 'lw@gmail.com',
    password: 'password',
    first_name: 'Lisa',
    last_name: 'W'
)

#decks 
deck1 = Deck.create!(
    name: 'The Giver',
    creator_id: user1.id
)

deck2 = Deck.create!(
    name: 'Mandarin 101',
    creator_id: user7.id
)

deck3 = Deck.create!(
    name: 'Giver Vocab Practice',
    creator_id: user7.id
)

deck4 = Deck.create!(
    name: '6th Grade: Ancient Greece',
    creator_id: user1.id
)

deck5 = Deck.create!(
    name: 'Parts of Speech: Nouns, Pronouns, Verbs',
    creator_id: user4.id
)

deck6 = Deck.create!(
    name: 'Sudan: Intro Facts',
    creator_id: user5.id
)

#cards-The Giver 
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
    question: 'What is the significance of the numbers for each person? ',
    answer: 'There is not sense of individuality in the Community',
    deck_id: deck1.id 
)

card5 = Card.create!(
    question: 'Do the people in the Community truly ever feel emotions?',
    answer: 'No, there are ordered to take a pill that suppresses all true emotions.',
    deck_id: deck1.id 
)

#cards-Mandarin 101
card6 = Card.create!(
    question: 'Numbers one through ten',
    answer: '一二三四五六七八九十 ',
    deck_id: deck2.id 
)

card7 = Card.create!(
    question: 'Hello?',
    answer: '你好',
    deck_id: deck2.id 
)

card8 = Card.create!(
    question: 'Good morning',
    answer: '早上好',
    deck_id: deck2.id 
)

card9 = Card.create!(
    question: 'Apple',
    answer: '苹果',
    deck_id: deck2.id 
)

card10 = Card.create!(
    question: 'Banana',
    answer: '香蕉',
    deck_id: deck2.id 
)


#cards-Giver-vocab
card11 = Card.create!(
    question: 'What is a synonym for tentatively?',
    answer: 'trial',
    deck_id: deck3.id 
)

card12 = Card.create!(
    question: 'What does ominous mean?',
    answer: 'a threat',
    deck_id: deck3.id 
)

card13 = Card.create!(
    question: 'What is the definition for unwieldy?',
    answer: 'Not easily handled',
    deck_id: deck3.id 
)

card14 = Card.create!(
    question: 'Which word means trying to use flattery to get someone to do something?',
    answer: 'wheedle',
    deck_id: deck3.id 
)

card15 = Card.create!(
    question: 'What is an antonym for being peaceful and relaxed?',
    answer: 'apprehensive',
    deck_id: deck3.id 
)

#cards-6th Grade: Ancient Greece
card16 = Card.create!(
    question: 'Which type of government is ruled by a few powerful people?',
    answer: 'Oligarchy',
    deck_id: deck4.id 
)

card17 = Card.create!(
    question: 'Which sea is to the south of Greece?',
    answer: 'Mediterranean Sea',
    deck_id: deck4.id 
)

card18 = Card.create!(
    question: 'The Parthenon was built to worship_________.',
    answer: 'Athena',
    deck_id: deck4.id 
)

card19 = Card.create!(
    question: 'Hermes is the _______________/',
    answer: 'Hermes is the messenger god',
    deck_id: deck4.id 
)

card20 = Card.create!(
    question: 'What is the Delian League?',
    answer: 'The Delian League is the alliance between Athens and other city-states.',
    deck_id: deck4.id 
)

#cards-Parts of Speech: Nouns, Pronouns, Verbs
card21 = Card.create!(
    question: 'Cinderella was eating the ham sandwiches. WAS is what type of verb?',
    answer: 'Helping',
    deck_id: deck5.id 
)

card22 = Card.create!(
    question: 'Pick out the antecedents: The student did not do his homework and lied about it.',
    answer: 'student and homework',
    deck_id: deck5.id 
)

card23 = Card.create!(
    question: 'Pick out the pronouns: We ourselves will not go to the party with the group of people.',
    answer: 'We, Ourselves',
    deck_id: deck5.id 
)

card24 = Card.create!(
    question: 'Pick out the verb or verb phrase: She was irritated by the buzzing mosquito.',
    answer: 'was',
    deck_id: deck5.id 
)

card25 = Card.create!(
    question: 'Pick ou the noun: She gives a lot of honest opinions.',
    answer: 'opinions',
    deck_id: deck5.id 
)


#cards-Sudan: Intro Facts
card26 = Card.create!(
    question: 'Which two countries controlled Sudan up until 1956?',
    answer: 'Britain and Egypt',
    deck_id: deck6.id 
)

card27 = Card.create!(
    question: 'Sudan is infamously known for what?',
    answer: 'Having the longest civil war in Africa',
    deck_id: deck6.id 
)

card28 = Card.create!(
    question: 'What year did the civil war between the North and South officially end with a peace agreement?',
    answer: '2005',
    deck_id: deck6.id 
)

card29 = Card.create!(
    question: 'What is the name of the militia that was responsible for killing non-Arab Darfuris?',
    answer: 'Janjaweed',
    deck_id: deck6.id 
)

card30 = Card.create!(
    question: 'Which year did South Sudan officially become an independent country?',
    answer: '2011',
    deck_id: deck6.id 
)

