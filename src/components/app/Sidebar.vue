<template>
  <ul class="sidenav app-sidenav" :class="{ open: modelValue }">
    <li
      v-for="link in links"
      :key="link.url"
      @click="$router.push(link.url)"
      :class="{
        active: $route.path === link.url,
      }"
      :exact="link.exact"
    >
      <a class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  data: () => {
    return {
      links: [
        { title: 'Счет', url: '/', exact: true },
        { title: 'История', url: '/history' },
        { title: 'Планирование', url: '/planning' },
        { title: 'Новая запись', url: '/record' },
        { title: 'Категории', url: '/categories' },
      ],
    };
  },
};
</script>

<style></style>
