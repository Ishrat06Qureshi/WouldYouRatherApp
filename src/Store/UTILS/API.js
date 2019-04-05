

let users = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL:"https://cdn-images-1.medium.com/max/1600/1*KRs_VJnPub-4eR6uNsj6KA.png"
      , 
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: { 
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: "data:image/jpeg;base64,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",
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL:"https://previews.123rf.com/images/magurok/magurok1403/magurok140300326/26482353-vector-programmer-icon.jpg" ,
      answers: {
        "xj352vofupe1dqz9emx13r": 'optionOne',
        "vthrdm985a262al8qx3do": 'optionTwo',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo'
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
  }
  
  let questions = {
            "8xf0y6ziyjabvozdd253nd": {
              id: '8xf0y6ziyjabvozdd253nd',
              author: 'sarahedo',
              timestamp: 1467166872634,
              optionOne: {
                votes: ['sarahedo'],
                text: 'have horrible short term memory',
              },
              optionTwo: {
                votes: [],
                text: 'have horrible long term memory'
              }
            },
            "6ni6ok3ym7mf1p33lnez": {
              id: '6ni6ok3ym7mf1p33lnez',
              author: 'johndoe',
              timestamp: 1468479767190,
              optionOne: {
                votes: [],
                text: 'become a superhero',
              },
              optionTwo: {
                votes: ['johndoe', 'sarahedo'],
                text: 'become a supervillain'
              }
            },
            "am8ehyc8byjqgar0jgpub9": {
              id: 'am8ehyc8byjqgar0jgpub9',
              author: 'sarahedo',
              timestamp: 1488579767190,
              optionOne: {
                votes: [],
                text: 'be telekinetic',
              },
              optionTwo: {
                votes: ['sarahedo'],
                text: 'be telepathic'
              }
            },
            "loxhs1bqm25b708cmbf3g": {
              id: 'loxhs1bqm25b708cmbf3g',
              author: 'tylermcginnis',
              timestamp: 1482579767190,
              optionOne: {
                votes: [],
                text: 'be a front-end developer',
              },
              optionTwo: {
                votes: ['sarahedo'],
                text: 'be a back-end developer'
              }
            },
            "vthrdm985a262al8qx3do": {
              id: 'vthrdm985a262al8qx3do',
              author: 'tylermcginnis',
              timestamp: 1489579767190,
              optionOne: { 
                votes: ['tylermcginnis'],
                text: 'find $50 yourself',
              },
              optionTwo: {
                votes: ['johndoe'],
                text: 'have your best friend find $500'
              }
            },
            "xj352vofupe1dqz9emx13r": {
              id: 'xj352vofupe1dqz9emx13r',
              author: 'johndoe',
              timestamp: 1493579767190,
              optionOne: {
                votes: ['johndoe'],
                text: 'write JavaScript',
              },
              optionTwo: {
                votes: ['tylermcginnis'],
                text: 'write Swift'
              }
            },
  }
  
  function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  
  export function _getUsers () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
    })
  }
  
  export function _getQuestions () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...questions}), 1000)
    })
  }
  
   function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    }
  }
  
  export function _saveQuestion (question) {
    return new Promise((res, rej) => {
      const authedUser = question.author;
      const formattedQuestion = formatQuestion(question);
  
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        }
        
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            questions: users[authedUser].questions.concat([formattedQuestion.id])
          }
        }
  
        res(formattedQuestion)
      }, 1000)
    })
  }
  
  export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
    // console.log(" in API",authedUser,qid, answer)
    return new Promise((res, rej) => {
      setTimeout(() => {
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            answers: {
              ...users[authedUser].answers,
              [qid]: answer
            }
          }
        }
   
        questions = {
          ...questions,
          [qid]: {
            ...questions[qid],
            [answer]: {
              ...questions[qid][answer],
              votes: questions[qid][answer].votes.concat([authedUser])
            }
          }
        }
  
        res()
      }, 500)
    })
  }
  