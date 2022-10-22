(() => {
 
    const quiz = [
        {
            question:'「神のせいだー！」、この名言を放った人は？',
            answers:['関谷さん','中川さん','志和地さん','石川さん'],
            correct:'関谷さん'
        }, {
            question:'亜辻狼の性は',
            answers:['山下','山本','山川','山田'],
            correct:'山本'
        }
    ];

    const $window = window;
    const $doc = document;
    const $items = $doc.getElementById('js-items');
    const $question = $doc.getElementById('js-question');
    const $buttons = $doc.getElementsByTagName('button');
    const quizLen = quiz.length;
    
    const $startBtn = $doc.getElementById('js-btn-5');
    const $redirectBtn = $doc.getElementById('js-btn-6');

    let quizCount = 0;
    let ansLen = quiz[quizCount].answers.length;

    let score = 0;

    const init = () => {
        // 問題文セット
        $question.textContent = '【第' + (quizCount + 1) + '問】  ' + quiz[quizCount].question;
        
        let btncnt = 0;

        // 回答、クリックイベントセット
        while(btncnt < ansLen){
            $buttons[btncnt].textContent = quiz[quizCount].answers[btncnt];
            btncnt++;
        };
    }

    const addButtonEvent = () => {
        let btncnt = 0;

        // クリックイベントセット
        while(btncnt < ansLen){
            $buttons[btncnt].addEventListener('click', (e) => {
                answerJudge(e.target);
            })

            console.log($buttons[btncnt]);
            btncnt++;
        };
    }

    const answerJudge = (elm) => {
        if(elm.textContent === quiz[quizCount].correct){
            $window.alert('正解!');
            score++;
        } else {
            $window.alert('不正解!');
        }

        goToNext();
    }

    const goToNext = () => {
        quizCount++;

        if(quizCount < quizLen){
            init(quizCount);
        } else {
            showEnd();
        }
    };

    const showEnd = () => {
        $question.textContent = '終了！あなたのスコアは ' + score + ' / ' + quizLen + ' です';
        
        $items.style.height = '0px';
        $items.style.visibility = 'hidden';

        $startBtn.style.display = 'none';
        $redirectBtn.style.display = 'block';
    };
    
    $items.style.visibility = 'hidden';
    $redirectBtn.style.display = 'none';
    
    $startBtn.addEventListener('click', (e) => {
        $startBtn.style.display = 'none';
        $items.style.visibility = 'visible';
        init();
        addButtonEvent();
    })

})();

