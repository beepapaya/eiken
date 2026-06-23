document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const views = {
        loading: document.getElementById('loading-state'),
        error: document.getElementById('error-state'),
        quiz: document.getElementById('quiz-state'),
        completed: document.getElementById('completed-state')
    };

    const elements = {
        flashcard: document.getElementById('flashcard'),
        englishWord: document.getElementById('english-word'),
        japaneseMeaning: document.getElementById('japanese-meaning'),
        masteredCount: document.getElementById('mastered-count'),
        totalCount: document.getElementById('total-count'),
        progressBar: document.getElementById('progress-bar'),
        errorMessage: document.getElementById('error-message')
    };

    const buttons = {
        correct: document.getElementById('btn-correct'),
        incorrect: document.getElementById('btn-incorrect'),
        next: document.getElementById('btn-next'),
        resetAll: document.getElementById('btn-reset-all'),
        resetProgress: document.getElementById('btn-reset-progress'),
        retry: document.getElementById('retry-btn')
    };

    // === State ===
    let allWords = [];
    let remainingWords = [];
    let currentWord = null;
    const STORAGE_KEY = 'vocab_app_mastered_words';

    // === Initialization ===
    init();

    function init() {
        showView('loading');
        
        try {
            // data.jsから読み込まれたwordDataを使用
            if (typeof wordData !== 'undefined' && Array.isArray(wordData) && wordData.length > 0) {
                allWords = wordData;
                updateGameState();
            } else {
                throw new Error("単語データ (data.js) が正しく読み込めませんでした。");
            }
        } catch (error) {
            console.error(error);
            elements.errorMessage.textContent = `エラー: データの初期化に失敗しました。\n詳細: ${error.message}`;
            showView('error');
        }
    }

    // === Game Logic ===
    function getMasteredWords() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    function saveMasteredWord(wordEn) {
        const mastered = getMasteredWords();
        if (!mastered.includes(wordEn)) {
            mastered.push(wordEn);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(mastered));
        }
    }

    function clearMasteredWords() {
        localStorage.removeItem(STORAGE_KEY);
    }

    function updateGameState() {
        const mastered = getMasteredWords();
        
        // Filter out mastered words
        remainingWords = allWords.filter(word => !mastered.includes(word.en));
        
        // Update progress UI
        const total = allWords.length;
        const masteredCount = total - remainingWords.length;
        elements.totalCount.textContent = total;
        elements.masteredCount.textContent = masteredCount;
        elements.progressBar.style.width = `${(masteredCount / total) * 100}%`;

        if (remainingWords.length === 0 && total > 0) {
            // All words mastered!
            showView('completed');
        } else {
            // Show next word
            nextWord();
            showView('quiz');
        }
    }

    function nextWord() {
        const wasFlipped = elements.flashcard.classList.contains('flipped');
        if (wasFlipped) {
            const front = elements.flashcard.querySelector('.card-front');
            const back = elements.flashcard.querySelector('.card-back');
            front.style.transition = 'none';
            back.style.transition = 'none';
            
            elements.flashcard.classList.remove('flipped');
            
            // force reflow
            void front.offsetWidth;
            void back.offsetWidth;
            
            front.style.transition = '';
            back.style.transition = '';
        }

        // Pick a random word from remaining words
        const randomIndex = Math.floor(Math.random() * remainingWords.length);
        currentWord = remainingWords[randomIndex];

        // Update display
        elements.englishWord.textContent = currentWord.en;
        elements.japaneseMeaning.textContent = currentWord.ja;
    }

    function handleCorrect() {
        if (currentWord) {
            saveMasteredWord(currentWord.en);
            updateGameState();
        }
    }

    function handleIncorrect() {
        // カードを裏返して答えを表示する
        elements.flashcard.classList.add('flipped');
    }

    function resetProgress() {
        if (confirm('本当に学習記録をリセットしますか？')) {
            clearMasteredWords();
            updateGameState();
        }
    }

    // === UI Utilities ===
    function showView(viewName) {
        Object.values(views).forEach(v => v.classList.remove('active'));
        Object.values(views).forEach(v => v.classList.add('hidden'));
        
        views[viewName].classList.remove('hidden');
        views[viewName].classList.add('active');
    }

    // === Event Listeners ===
    buttons.correct.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCorrect();
    });

    buttons.incorrect.addEventListener('click', (e) => {
        e.stopPropagation();
        handleIncorrect();
    });

    buttons.next.addEventListener('click', (e) => {
        e.stopPropagation();
        nextWord();
    });

    buttons.resetAll.addEventListener('click', resetProgress);
    buttons.resetProgress.addEventListener('click', resetProgress);
    buttons.retry.addEventListener('click', init);
});


