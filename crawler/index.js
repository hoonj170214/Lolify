/*
  - axios : http 호출을 더  편리하게 해는 HTTP 클라이언트 라이브러리에요.
  웹 브라우저가 특정 URL로부터 웹 페이지 HTML을 로드하듯이 크롤러에서도 특정 URL의 HTML을 로드할 수있어요.
  - cheerio : 로드된 HTML을 파싱해서 DOM을 생성하는 라이브러리에요. CSS 셀럭터 문법을 사용해서 검색이 가능해요.
  - lodash : 자바스크립트가 기본 제공하지 않는 유틸리티 함수들을 모아놓은 라이브러리에요.
  - date-fns : 자바스크립트의 DATE 객체는 날짜/시간을 원하는 날짜 형식으로 변환이 어려워요. 이를 해결하기 위해서 사용해요.
 */
const axios = require('axios');
const cheerio = require('cheerio');

// 빈 객체를 선언해요. 여기 안에 크롤링한 데이터가 들어갈거에요.
const crawlingResult = {
  championThumbnail: '',
  championName: '',
  position: '',
  winRate: '',
  pickRate: '',
  banRate: '',
  count: '',
  tear: '',
};

async function main() {
  // axios 객체를 활용해서 해당 URL의 GET 메서드를 사용해서 로드하고 res 상수에 할당 해요.
  const res = await axios.get('https://fow.kr/stats');
  // res 상수(객체)의 data필드에서 cheerio 객체로 파싱 후 $ 상수에 할당 해요.
  const $ = cheerio.load(res.data);
  /* 
  https://fow.kr/stats 사이트의 데이터를 크롤링해요.
  해당 페이지는 테이블로 되어있었어요. map을 통해서 반복하고 championInfoList에 할당해요.

  */
  const championInfoList = $('#sort_stats').map((idx, el) => {
    crawlingResult['championThumbnail'] = String(
      $(el).find('td:nth-of-type(1) img').attr('src')
    );
    crawlingResult['championName'] = String(
      $(el).find('td:nth-of-type(1)').text()
    );
    crawlingResult['position'] = String($(el).find('td:nth-of-type(2)').text());
    crawlingResult['winRate'] = String($(el).find('td:nth-of-type(3)').text());
    crawlingResult['pickRate'] = String($(el).find('td:nth-of-type(4)').text());
    crawlingResult['banRate'] = String($(el).find('td:nth-of-type(5)').text());
    crawlingResult['count'] = String($(el).find('td:nth-of-type(6)').text());
    crawlingResult['tear'] = String($(el).find('td:nth-of-type(7)').text());
    console.log(crawlingResult);
  });

  console.log(championInfoList);
}

main();
