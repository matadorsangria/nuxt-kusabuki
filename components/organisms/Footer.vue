<template>
  <footer>
    <ul class="sns">
      <li>
        <a href="https://twitter.com/kusabukishi" @click.prevent>
          <i class="demo-icon">&#xf099;</i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/kusabukishi/" @click.prevent>
          <i class="demo-icon">&#xf09a;</i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/kusabukishi/" @click.prevent>
          <i class="demo-icon">&#xf16d;</i>
        </a>
      </li>
    </ul>
    <ul class="links">
      <li><a href="/news">お知らせ</a></li>
      <li>
        <a href="/access" @click.prevent>アクセス</a>
      </li>
      <li>
        <a href="/contact" @click.prevent>お問い合わせ</a>
      </li>
      <li>
        <a href="/privacypolicy" @click.prevent>プライバシーポリシー</a>
      </li>
      <li>
        <a href="https://kusabikifc.org" @click.prevent>
          草吹町フィルムコミッション
        </a>
        <i class="demo-icon">&#xf08e;</i>
      </li>
    </ul>
    <p class="copyright">
      Copyright&copy; Matador Sangria Company All Rights Reserved.
    </p>
  </footer>
</template>

<style>
footer {
  margin-top: 70px;
  position: relative;
  padding: 40px 20px;
  text-align: center;
}
@media (max-width: 767px) {
  footer {
    margin-top: 50px;
    font-size: 10px;
  }
}
footer:before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  max-width: 1000px;
  height: 1px;
  transform: translateX(-50%);
  background-color: #999;
}
footer a {
  color: #222;
}
footer .demo-icon {
  font-family: 'fontello';
}
footer .sns {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
footer .sns li {
  margin: 0 10px;
  font-size: 18px;
}
@media (max-width: 1024px) {
  footer .sns li {
    font-size: 16px;
  }
}
footer .sns li a:hover {
  color: #666;
}
footer .links {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
footer .links li {
  margin: 0 5px;
  font-size: 12px;
}
@media (max-width: 767px) {
  footer .links {
    display: block;
    margin-top: 15px;
  }
  footer .links li {
    margin-bottom: 15px;
  }
}
footer .links li a {
  margin-right: 4px;
}
footer .links li a:hover {
  text-decoration: underline;
}
</style>
