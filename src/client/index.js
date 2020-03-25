import {
  handleSubmit
} from './js/formHandler';

import './../client/styles/main.scss';

const form = document.querySelector("#main-form");
const urlInput = document.querySelector("#url");
const submitBtn = document.querySelector("#main-form input[type=submit]");
const errorContainer = document.querySelector("#main-form .error");

export {
  handleSubmit
}
