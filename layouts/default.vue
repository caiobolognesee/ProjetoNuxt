<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span> Caio Bolognese &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: "Menu",
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-home",
          title: "login",
          to: "/login",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Empresa",
          to: "/empresa",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Produtos",
          to: "/produtos",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Serviços",
          to: "/servicos",
        },
      ],
    };
  },
};
</script>
