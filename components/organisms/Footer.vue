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
        <a href="/" @click.prevent>アクセス</a>
      </li>
      <li>
        <a href="/" @click.prevent>お問い合わせ</a>
      </li>
      <li>
        <a href="/" @click.prevent>プライバシーポリシー</a>
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

<style scoped lang="scss">
footer {
  margin-top: 70px;
  padding: 40px 20px;
  background-color: #222;
  color: #fff;
  text-align: center;
  @media (max-width: 767px) {
    & {
      margin-top: 50px;
      font-size: 10px;
    }
  }
  a {
    color: #fff;
  }
  .demo-icon {
    font-family: 'fontello';
  }
  .sns {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    li {
      margin: 0 10px;
      font-size: 18px;
      @media (max-width: 1024px) {
        & {
          font-size: 16px;
        }
      }
      a:hover {
        color: #999;
      }
    }
  }
  .links {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      & {
        display: block;
        margin-top: 15px;
      }
    }
    li {
      margin: 0 5px;
      font-size: 12px;
      @media (max-width: 767px) {
        & {
          margin-bottom: 15px;
        }
      }
      a {
        margin-right: 4px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
