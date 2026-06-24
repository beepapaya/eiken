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
        errorMessage: document.getElementById('error-message'),
        partSelect: document.getElementById('part-select')
    };

    const buttons = {
        correct: document.getElementById('btn-correct'),
        incorrect: document.getElementById('btn-incorrect'),
        next: document.getElementById('btn-next'),
        resetAll: document.getElementById('btn-reset-all'),
        resetProgress: document.getElementById('btn-reset-progress'),
        retry: document.getElementById('retry-btn'),
        nextPart: document.getElementById('btn-next-part'),
        resetPart: document.getElementById('btn-reset-part')
    };

    // === State ===
    let allWords = [];
    let remainingWords = [];
    let currentWord = null;
    let currentPart = 1;
    const PART_SIZE = 100;
    const STORAGE_KEY = 'vocab_app_mastered_words';
    const PART_STORAGE_KEY = 'vocab_app_current_part';

    // === Initialization ===
    init();

    function init() {
        showView('loading');
        
        try {
            // data.jsから読み込まれたwordDataを使用
            if (typeof wordData !== 'undefined' && Array.isArray(wordData) && wordData.length > 0) {
                allWords = wordData;
                initPartSelector();
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

    function initPartSelector() {
        elements.partSelect.innerHTML = '';
        const totalParts = Math.ceil(allWords.length / PART_SIZE);
        for (let i = 1; i <= totalParts; i++) {
            const option = document.createElement('option');
            option.value = i;
            const start = (i - 1) * PART_SIZE + 1;
            const end = Math.min(i * PART_SIZE, allWords.length);
            option.textContent = `パート ${i} (${start} - ${end})`;
            elements.partSelect.appendChild(option);
        }
        
        // Restore last selected part
        const storedPart = localStorage.getItem(PART_STORAGE_KEY);
        if (storedPart) {
            const parsed = parseInt(storedPart, 10);
            if (parsed >= 1 && parsed <= totalParts) {
                currentPart = parsed;
            }
        }
        elements.partSelect.value = currentPart;
    }

    function getWordsInCurrentPart() {
        const start = (currentPart - 1) * PART_SIZE;
        const end = currentPart * PART_SIZE;
        return allWords.slice(start, end);
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
        const currentPartWords = getWordsInCurrentPart();
        
        // Filter out mastered words within the current part
        remainingWords = currentPartWords.filter(word => !mastered.includes(word.en));
        
        // Update progress UI
        const total = currentPartWords.length;
        const masteredCount = total - remainingWords.length;
        elements.totalCount.textContent = total;
        elements.masteredCount.textContent = masteredCount;
        
        if (total > 0) {
            elements.progressBar.style.width = `${(masteredCount / total) * 100}%`;
        } else {
            elements.progressBar.style.width = '0%';
        }

        if (remainingWords.length === 0 && total > 0) {
            // Part completed!
            showView('completed');
            
            // Check if there is a next part
            const totalParts = Math.ceil(allWords.length / PART_SIZE);
            if (currentPart < totalParts) {
                buttons.nextPart.style.display = 'block';
            } else {
                buttons.nextPart.style.display = 'none';
            }
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
            elements.flashcard.classList.add('flipped');
        }
    }

    function handleIncorrect() {
        // カードを裏返して答えを表示する
        elements.flashcard.classList.add('flipped');
    }

    function resetProgress() {
        if (confirm('すべてのパートの学習記録をリセットしますか？')) {
            clearMasteredWords();
            updateGameState();
        }
    }

    function resetPartProgress() {
        if (confirm(`パート ${currentPart} の学習記録をリセットしますか？`)) {
            const mastered = getMasteredWords();
            const currentPartWords = getWordsInCurrentPart();
            const currentPartEnWords = currentPartWords.map(w => w.en);
            
            // Remove current part's words from mastered list
            const newMastered = mastered.filter(en => !currentPartEnWords.includes(en));
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newMastered));
            
            updateGameState();
        }
    }

    function goToNextPart() {
        const totalParts = Math.ceil(allWords.length / PART_SIZE);
        if (currentPart < totalParts) {
            currentPart++;
            localStorage.setItem(PART_STORAGE_KEY, currentPart);
            elements.partSelect.value = currentPart;
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
        updateGameState();
    });

    buttons.resetAll.addEventListener('click', resetProgress);
    buttons.resetProgress.addEventListener('click', resetProgress);
    buttons.retry.addEventListener('click', init);

    elements.partSelect.addEventListener('change', (e) => {
        currentPart = parseInt(e.target.value, 10);
        localStorage.setItem(PART_STORAGE_KEY, currentPart);
        updateGameState();
    });

    buttons.nextPart.addEventListener('click', (e) => {
        e.stopPropagation();
        goToNextPart();
    });

    buttons.resetPart.addEventListener('click', (e) => {
        e.stopPropagation();
        resetPartProgress();
    });
});


