import axios from 'axios';
import fetchAdapter from '@vespaiach/axios-fetch-adapter';


function abrirYoutube() {
  chrome.tabs.create({ url: 'https://youtube.com' });
}