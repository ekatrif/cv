import { renderLeftSide } from "./components/left-side/index.js";
import { renderRightSide } from "./components/right-side/index.js";

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import * as flsScroll from "./js/files/scroll/scroll.js";

const renderHtml = () => {
  const language = 'ru';
  localStorage.setItem('language', language);
  renderLeftSide();
  renderRightSide();

  const lightbox = new PhotoSwipeLightbox({
    gallery: '.block__images',
    children: 'a',
    pswpModule: () => import('photoswipe')
  });
  lightbox.init();

  // Плавная навигация по странице
  flsScroll.pageNavigation();
}

export default renderHtml;