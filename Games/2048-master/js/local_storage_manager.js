window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
  this.bestScoreKey     = "bestScore";
  this.gameStateKey     = "gameState";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";

  try {
    var storage = window.localStorage;
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function () {
  return this.storage.getItem(this.bestScoreKey) || 0;
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.storage.setItem(this.bestScoreKey, score);
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function () {
  var stateJSON = this.storage.getItem(this.gameStateKey);
  return stateJSON ? JSON.parse(stateJSON) : null;
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
};

LocalStorageManager.prototype.clearGameState = function () {
  this.storage.removeItem(this.gameStateKey);
};
// function gameOver() {
//   clearInterval(timerInterval);
  
//   // Update high score
//   const highScore = localStorage.getItem('memoryHighScore') || 0;
//   if (score > highScore) {
//       localStorage.setItem('memoryHighScore', score);
      
//       // Update overall game scores
//       const gameScores = JSON.parse(localStorage.getItem('gameScores')) || {};
//       gameScores['2048'] = score;
//       localStorage.setItem('gameScores', JSON.stringify(gameScores));
//   }

//   // Show game over screen
//   document.getElementById('finalTime').textContent = document.getElementById('timer').textContent;
//   document.getElementById('finalMoves').textContent = moves;
//   document.getElementById('finalScore').textContent = score;
//   document.getElementById('gameOver').style.display = 'block';
// }


