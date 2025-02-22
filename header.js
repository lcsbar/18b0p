(function () {
	const fh = document.getElementById('header');
	const isUp = (function () {
		const scrollElement = document.scrollingElement;
		let flag, prePoint, scrollPoint;
		return function () {
			scrollPoint = scrollElement.scrollTop;
			flag = prePoint > scrollPoint ? true : false;
			prePoint = scrollPoint;
			return flag;
		}
	}());

	window.addEventListener('scroll', () => {
		if (window.scrollY > 200) {
			if (isUp()) {
				fh.classList.remove('is-show');
			} else {
				fh.classList.add('is-show')
			}
		} else {
			fh.classList.remove('is-show');
		}
	})
}());









// $(window).scroll(function () {           /* スクロールされた時 */
// 	// var pos = $('1000px').offset();          /* mvを過ぎたmainタグの高さを取得して変数[pos]に格納 */
// 	if ($(this).scrollTop() > 1000) {   /* 変数[pos]より、スクロールされていたら */
// 		$('header').fadeIn();                /* ヘッダーをふわっと表示 */
// 	} else {                               /* それ以外の場合 */
// 		$('header').fadeOut();               /* ヘッダーをふわっと非表示 */
// 	}
// });
