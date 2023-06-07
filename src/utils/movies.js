const moviesData = [
  {
    movieId: 1,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/2c4251fe86ac08965404a772831a3b2568016d1424b60a13cc557a4337fdf776/647fa55f/gWBLKcnxzw-nx9a8HbpMBqKOkoKnxe-0wzkRjHiYpHywRUp9t8q22ZN_8zf2Xr4JcCwpuVXPYtqEqMMPo1Ov5g%3D%3D?uid=0&filename=poster-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=601x452&crop=1',
  },
  {
    movieId: 2,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/d2018935b2af5f6820ba520ecc4f9257ec3520cf0063df7d95d0b61eec33642e/647fa55f/9VCbZXO4EUGnzLsBOeHqrrl72dhmIxCrBJW3iBZczLURQ98S9eFT0Xa5UHIK7wNr7wr1pbFol9C6jqW7VAr9BQ%3D%3D?uid=0&filename=poster-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=298x224&crop=1',
  },
  {
    movieId: 3,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/f544c455b1e20866d5573e3f51a367cbe845406f554a09faf44552b90d8d59c4/647fa55f/LicIEelY4q9pVHyLxO5DUrl72dhmIxCrBJW3iBZczLUbVFRjjTT-ht5q1LNueLK-YKLGSdRxEROqVQxs3qtQsg%3D%3D?uid=0&filename=poster-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=601x452&crop=1',
    save: true,
  },
  {
    movieId: 4,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/18c810d9a9523669d435c0d29d3ebe400164c6a330dead00ea282a13a2bb894e/647fa55f/teZahgrIgFiaRYbrUjD9i6HxDx2NCMTJpGnpxGfMb6jH9IUUkyUXiw5yXxt-ife6327CTpL-yduE3eoEpKgY3Q%3D%3D?uid=0&filename=poster-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=601x452&crop=1',
  },
  {
    movieId: 5,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/68fd84d3b3060e13fd30fb1d8277e874aa9ea0cf2ccaa5b18ba80dc66f71781e/647fa55f/2Uadn92J6fNbg0tonlYQRKHxDx2NCMTJpGnpxGfMb6hPA-7I5_ATBcp0MumpiADquq_ZrfUnG2t39DHG-bpHIg%3D%3D?uid=0&filename=poster-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=601x452&crop=1',
    save: true,
  },
  {
    movieId: 6,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/5257d2459d6d989de7d4a823b9d261b7ddb3820862e54bcad071bfa0ffccb3b6/647fa55f/Bmm3Gb-64Z0WSP54i2daWLl72dhmIxCrBJW3iBZczLVQSVq2iqipy8KpAHKfXT86cvzqkZD38F84GgBiR_SQUw%3D%3D?uid=0&filename=poster-6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=601x452&crop=1',
  },
  {
    movieId: 7,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/bf5c5f8b5a837b4b1d76271fbcd97cc4afff6240f293b19878d581618cef9436/647fa55f/lYHiqtujHcDPTkU6Xk4lRbl72dhmIxCrBJW3iBZczLVXfZy3uAMBzQ8wHPnLMkYoubPzTdQuXf_YYXJpeKEGDQ%3D%3D?uid=0&filename=poster-7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=601x452&crop=1',
  },
  {
    movieId: 8,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/91723440dd4e4bf31d2e9eb8a4c92bc7cfe5a9d622c5b44d305f1d6ce3c2c971/64808ceb/dDxs9eYkrG4LWocTjP683Ll72dhmIxCrBJW3iBZczLUqXfYwKNNLrCmasex4rDWBRbdB-zGtSaX3TaFFGPoY8w%3D%3D?uid=0&filename=poster-8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1640',
  },
  {
    movieId: 9,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/c3073734841049c0f3d6d0b2f206e8219af1136011c225a541997d0aa2de0810/64808cc1/8Y0bzMoqSA4zHfNktpIlQaHxDx2NCMTJpGnpxGfMb6ic71cCeJNjs5CCKnLx7r3gaGBb3OsfoCkoS8YU74c-yQ%3D%3D?uid=0&filename=poster-9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1640',
  },
  {
    movieId: 10,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/8f515c327ec43c5af5ee1a794b8c3cb6de421d52a18794c3692414d3ddf929c2/647fa55f/Vy9EGELMau9C6lj2Qis8z6KOkoKnxe-0wzkRjHiYpHx9Nlx7hHlx-HF04yVxUkmLMsNfqaRETyer8YoouTJC_w%3D%3D?uid=0&filename=poster-10.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=601x452&crop=1',
    save: true,
  },
  {
    movieId: 11,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/0b0cc2a5057ec6d60fde8aa68b6626d11b9e1f4acbfdcc3c666433c8ac507611/647fa55f/MEhmSNxaa4uhtFBJO5DaALl72dhmIxCrBJW3iBZczLU4YxZB9Qh6wvD7CZR4hcCYMqWxueT-N-NBn6k71UzjnQ%3D%3D?uid=0&filename=poster-11.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=601x452&crop=1',
  },
  {
    movieId: 12,
    nameRU: '33 слова о дизайне',
    duration: 107,
    thumbnail:
      'https://downloader.disk.yandex.ru/preview/671383b5129de879f7e902a74b6ec70395b4d432796412576f5494cddac5c0e0/64808c56/GaNu6eoJcq_bKxeWCBAYHLl72dhmIxCrBJW3iBZczLXqTg1wC-11n45xVX-7nSEo30upzXimdqtNTJcsaexCqw%3D%3D?uid=0&filename=poster-12.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1640',
  },
];

export default moviesData;
