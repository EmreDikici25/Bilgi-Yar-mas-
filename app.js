const quizData =[
    {
        question: 'İstanbulun fethi?',
        a: '1453',
        b: '1634',
        c: '1502',
        d: '1963',
        e: '1718',
        correct: 'a'
    },
    {
        question: 'Ormanın kralı kimdir?',
        a: 'Maymun',
        b: 'Aslan',
        c: 'Tavşan',
        d: 'Kaplumba',
        e: 'Leopar',
        correct: 'b'
    },
    {
        question: 'İslamın şartları kaçtır?',
        a: '3',
        b: '7',
        c: '5',
        d: '2',
        e: '4',
        correct: 'c'
    },
    {
        question: 'Aşşağıdaki kelimelerden hangisi Türkçedir?',
        a: 'Scale',
        b: 'Warning',
        c: 'Sweet',
        d: 'Bayrak',
        e: 'Zoo',
        correct: 'd'
    },
    {
        question: 'En Yakışıklı aktör?',
        a: 'Kerem Bursin',
        b: 'Kenan İmirzalıoğlu',
        c: 'Kıvanç Tatlıtuğ',
        d: 'Murat Boz',
        e: 'Aras Bulut İynemli',
        correct: 'c'
    },
    {
        question: 'Tavşan ne sever?',
        a: 'Karpuz',
        b: 'Elma',
        c: 'Ayva',
        d: 'Ceviz',
        e: 'Havuç',
        correct: 'e'
    },
    {
        question: 'Maymun ne sever?',
        a: 'Kavuz',
        b: 'Armut',
        c: 'Vişne',
        d: 'Muz',
        e: 'Kivi',
        correct: 'd'
    },
    {
        question: 'Hangi sayı tektir?',
        a: '4',
        b: '7',
        c: '2',
        d: '8',
        e: '6',
        correct: 'b'
    },
    {
        question: 'Hangi sayı çifttir?',
        a: '9',
        b: '7',
        c: '5',
        d: '3',
        e: '6',
        correct: 'e'
    },
    {
        question: 'Türkiyenin başkenti neresidir?',
        a: 'Ankara',
        b: 'Erzurum',
        c: 'İstanbul',
        d: 'İzmir',
        e: 'Şırnak',
        correct: 'a'
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e  
}

function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected(){
    let answer

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    //console.log(answer)

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
              <h2> Test Tamamlandı, ${score * 10} puan aldınız  😉  </h2>

              <button class='submit' onClick='location.reload()'> Tekrar Deneyin 🤔 </button>
            `
        }
    }
})