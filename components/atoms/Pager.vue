<template>
  <nav class="pager">
    <ul>
      <li><span>1</span></li>
      <li>
        <a href="" @click.prevent>2</a>
      </li>
      <li>
        <a href="" @click.prevent>3</a>
      </li>
      <li>
        <a href="" @click.prevent>4</a>
      </li>
      <li>
        <a href="" @click.prevent>5</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.pager {
  padding-top: 10px;
}
.pager ul {
  display: flex;
  justify-content: center;
}
.pager ul li {
  margin: 0 8px;
  font-size: 16px;
}
.pager ul li span {
  display: block;
  padding: 4px 6px;
  font-weight: bold;
}
.pager ul li a {
  display: block;
  padding: 4px;
  color: #222;

  &:hover {
    text-decoration: underline;
  }
}
</style>
