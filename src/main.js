import { createApp } from 'vue';
import '@shared/style.css';
import '@shared/theme-editorial.css';
import '@shared/web-themes.css';
import './intl.css';
import App from './App.vue';
import UiArrow from '@shared/blocks/UiArrow.vue';

createApp(App).component('UiArrow', UiArrow).mount('#app');
