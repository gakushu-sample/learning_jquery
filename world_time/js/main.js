// DOMの解析が終わった時にイベントが発火する
document.addEventListener('DOMContentLoaded', () => {
    // まず実行する
    clock();
    // その後、1秒おきに実行する
    let iter = setInterval(clock, 1000);
    // 都市を変えた時のイベントを登録する
    document.getElementById('city').addEventListener('change', function () {
        clearInterval(iter);
        clock();
        iter = setInterval(clock, 1000);
    });
});

/**
 * 現在時刻を表示する
 */
function clock() {
    // Dateオブジェクトで現在時刻の取得
    let now = new Date();
    // Tokyoの時間（ミリ秒）
    const timeTokyo = now.getTime();
    // UTC(協定世界時)の時間（ミリ秒）
    const timeUTC = timeTokyo - 9 * 60 * 60 * 1000;
    // 選択された都市のタイムゾーン
    const cityElement = document.getElementById('city');
    const index = cityElement.selectedIndex;
    const timeZone = cityElement.options[index].value;
    // タイムゾーンを表示
    document.getElementById('timezone').innerText = `Timezone: ${timeZone}`;
    // 選択された都市の時間（ミリ秒）
    const timeCity = timeUTC + timeZone * 60 * 60 * 1000;
    // 選択された都市の日時
    now = new Date(timeCity);
    // Dateオブジェクトから時間を取得
    const hour = now.getHours();
    // Dateオブジェクトから分を取得
    const min = ('0' + now.getMinutes()).slice(-2);
    // Dateオブジェクトから秒を取得
    const sec = ('0' + now.getSeconds()).slice(-2);
    // 記載するDOMを取得
    const timeElem = document.getElementById('time');
    // 取得したDOMにテキストとして書き込む（テンプレートリテラルを利用）
    timeElem.innerText = `${hour}:${min}:${sec}`;

    // Dateオブジェクトから年を取得
    const year = now.getFullYear();
    // Dateオブジェクトから月を取得（0始まりなので1を足す）（テンプレートリテラルを利用）
    const month = `0${now.getMonth() + 1}`.slice(-2);
    // Dateオブジェクトから日を取得（テンプレートリテラルを利用）
    const day = `0${now.getDate()}`.slice(-2);
    // 曜日の配列を準備
    const weekArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // Dateオブジェクトから曜日を取得
    const weekday = weekArray[now.getDay()];
    // 日付表示用のDOMを取得
    const dateElem = document.getElementById('date');
    // 取得したDOMにテキストとして書き込む（テンプレートリテラルを利用）
    dateElem.innerText = `${year}/${month}/${day} (${weekday})`;
}

// jQuery ではDOMの解析が終わった時のイベント発火を以下のように書く
$(function () {
    clock_j();
    setInterval(clock_j, 1000);
    // 都市を変えた時のイベントを登録する
    $('#city').on('change', function () {
        // ここに処理を書く
    });
});

/**
 * 現在時刻を表示する
 */
function clock_j() {
    // ここは変わらない
    const now = new Date();
    // この下を記載する
}
